"""Thumbnail Review Dashboard.

A local web server that lets you review, approve, or reject generated thumbnails.
Rejected thumbnails are regenerated with Gemini 3 Pro Image.

Usage: python3 scripts/thumbnail-review-server.py
Then open http://localhost:8765
"""

import os
import json
import http.server
import urllib.parse
import time
from pathlib import Path
from google import genai
from google.genai import types

API_KEY = os.environ.get("GEMINI_API_KEY")
if not API_KEY:
    raise RuntimeError("GEMINI_API_KEY not set. Add it to .env at the repo root.")
BASE_DIR = Path(__file__).parent.parent / "sites" / "courses" / "public" / "thumbnails"
COURSE_DIR = BASE_DIR / "courses"
BUNDLE_DIR = BASE_DIR / "bundles"
STATE_FILE = BASE_DIR / "review-state.json"

client = genai.Client(api_key=API_KEY)

# Import prompts from the generation script
import importlib.util
spec = importlib.util.spec_from_file_location(
    "gen", Path(__file__).parent / "generate-all-thumbnails.py"
)
gen_module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(gen_module)

COURSE_PROMPTS = gen_module.course_thumbnails
BUNDLE_PROMPTS = gen_module.bundle_thumbnails
STYLE_SUFFIX = gen_module.STYLE_SUFFIX


def load_state():
    if STATE_FILE.exists():
        return json.loads(STATE_FILE.read_text())
    return {}


def save_state(state):
    STATE_FILE.write_text(json.dumps(state, indent=2))


def get_all_thumbnails():
    """Get list of all thumbnails with their status."""
    state = load_state()
    items = []

    for name in COURSE_PROMPTS:
        path = COURSE_DIR / f"{name}.png"
        items.append({
            "id": name,
            "type": "course",
            "exists": path.exists(),
            "status": state.get(f"course:{name}", "pending"),
            "path": f"/thumbnails/courses/{name}.png" if path.exists() else None,
        })

    for name in BUNDLE_PROMPTS:
        path = BUNDLE_DIR / f"{name}.png"
        items.append({
            "id": name,
            "type": "bundle",
            "exists": path.exists(),
            "status": state.get(f"bundle:{name}", "pending"),
            "path": f"/thumbnails/bundles/{name}.png" if path.exists() else None,
        })

    return items


def regenerate_thumbnail(item_type, item_id):
    """Regenerate a rejected thumbnail."""
    prompts = COURSE_PROMPTS if item_type == "course" else BUNDLE_PROMPTS
    output_dir = COURSE_DIR if item_type == "course" else BUNDLE_DIR

    if item_id not in prompts:
        return False, "Unknown item ID"

    prompt = prompts[item_id] + STYLE_SUFFIX
    dest = output_dir / f"{item_id}.png"

    # Delete old file
    if dest.exists():
        dest.unlink()

    try:
        response = client.models.generate_content(
            model="gemini-3-pro-image-preview",
            contents=prompt,
            config=types.GenerateContentConfig(
                response_modalities=["IMAGE", "TEXT"],
            ),
        )

        for part in response.candidates[0].content.parts:
            if part.inline_data is not None:
                dest.write_bytes(part.inline_data.data)
                return True, "Regenerated successfully"

        return False, "No image in response"
    except Exception as e:
        return False, str(e)


DASHBOARD_HTML = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Thumbnail Review Dashboard</title>
<style>
* { margin: 0; padding: 0; box-sizing: border-box; }
body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #0a0a0a; color: #e5e5e5; padding: 20px; }
h1 { font-size: 24px; margin-bottom: 8px; color: #00d46a; }
.stats { font-size: 14px; color: #888; margin-bottom: 20px; }
.stats span { margin-right: 16px; }
.stats .approved { color: #00d46a; }
.stats .rejected { color: #ef4444; }
.stats .pending { color: #f59e0b; }
.filters { margin-bottom: 20px; display: flex; gap: 8px; flex-wrap: wrap; }
.filters button { padding: 6px 16px; border-radius: 6px; border: 1px solid #333; background: #1a1a1a; color: #e5e5e5; cursor: pointer; font-size: 13px; }
.filters button.active { background: #00a854; border-color: #00d46a; color: #fff; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 16px; }
.card { background: #1a1a1a; border: 1px solid #333; border-radius: 12px; overflow: hidden; transition: border-color 0.2s; }
.card.approved { border-color: #00d46a; }
.card.rejected { border-color: #ef4444; }
.card img { width: 100%; aspect-ratio: 16/9; object-fit: cover; background: #fff; }
.card .placeholder { width: 100%; aspect-ratio: 16/9; background: #222; display: flex; align-items: center; justify-content: center; color: #666; font-size: 14px; }
.card .info { padding: 12px; }
.card .name { font-size: 13px; font-weight: 600; margin-bottom: 4px; word-break: break-all; }
.card .type-badge { display: inline-block; font-size: 10px; padding: 2px 8px; border-radius: 4px; margin-bottom: 8px; }
.card .type-badge.course { background: #1e3a5f; color: #60a5fa; }
.card .type-badge.bundle { background: #3b1f5c; color: #c084fc; }
.card .actions { display: flex; gap: 8px; }
.card .actions button { flex: 1; padding: 8px; border: none; border-radius: 6px; cursor: pointer; font-size: 13px; font-weight: 600; transition: opacity 0.2s; }
.card .actions button:hover { opacity: 0.85; }
.btn-approve { background: #00a854; color: #fff; }
.btn-reject { background: #ef4444; color: #fff; }
.btn-regen { background: #f59e0b; color: #000; }
.card .status-bar { padding: 6px 12px; font-size: 11px; font-weight: 600; text-align: center; }
.status-bar.approved { background: #052e16; color: #00d46a; }
.status-bar.rejected { background: #450a0a; color: #ef4444; }
.loading { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.7); display: flex; align-items: center; justify-content: center; z-index: 100; }
.loading .spinner { font-size: 18px; color: #f59e0b; }
.hidden { display: none; }
.bulk-actions { margin-bottom: 16px; display: flex; gap: 8px; }
.bulk-actions button { padding: 8px 20px; border-radius: 6px; border: none; cursor: pointer; font-size: 13px; font-weight: 600; }
</style>
</head>
<body>
<h1>Thumbnail Review Dashboard</h1>
<div class="stats" id="stats"></div>

<div class="filters">
  <button class="active" onclick="setFilter('all')">All</button>
  <button onclick="setFilter('pending')">Pending</button>
  <button onclick="setFilter('approved')">Approved</button>
  <button onclick="setFilter('rejected')">Rejected</button>
  <button onclick="setFilter('missing')">Missing</button>
  <button onclick="setFilter('course')">Courses Only</button>
  <button onclick="setFilter('bundle')">Bundles Only</button>
</div>

<div class="bulk-actions">
  <button style="background:#00a854;color:#fff" onclick="bulkApproveAll()">Approve All Pending</button>
  <button style="background:#f59e0b;color:#000" onclick="regenerateAllRejected()">Regenerate All Rejected</button>
</div>

<div class="grid" id="grid"></div>

<div class="loading hidden" id="loading">
  <div class="spinner">Regenerating thumbnail...</div>
</div>

<script>
let items = [];
let currentFilter = 'all';

async function fetchItems() {
  const res = await fetch('/api/thumbnails');
  items = await res.json();
  render();
}

function setFilter(f) {
  currentFilter = f;
  document.querySelectorAll('.filters button').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');
  render();
}

function render() {
  const grid = document.getElementById('grid');
  let filtered = items;
  if (currentFilter === 'pending') filtered = items.filter(i => i.status === 'pending' && i.exists);
  else if (currentFilter === 'approved') filtered = items.filter(i => i.status === 'approved');
  else if (currentFilter === 'rejected') filtered = items.filter(i => i.status === 'rejected');
  else if (currentFilter === 'missing') filtered = items.filter(i => !i.exists);
  else if (currentFilter === 'course') filtered = items.filter(i => i.type === 'course');
  else if (currentFilter === 'bundle') filtered = items.filter(i => i.type === 'bundle');

  const approved = items.filter(i => i.status === 'approved').length;
  const rejected = items.filter(i => i.status === 'rejected').length;
  const pending = items.filter(i => i.status === 'pending' && i.exists).length;
  const missing = items.filter(i => !i.exists).length;
  document.getElementById('stats').innerHTML =
    `<span>Total: ${items.length}</span>` +
    `<span class="approved">Approved: ${approved}</span>` +
    `<span class="rejected">Rejected: ${rejected}</span>` +
    `<span class="pending">Pending: ${pending}</span>` +
    `<span>Missing: ${missing}</span>`;

  grid.innerHTML = filtered.map(item => {
    const imgHtml = item.exists && item.path
      ? `<img src="${item.path}?t=${Date.now()}" alt="${item.id}" />`
      : `<div class="placeholder">Not generated yet</div>`;

    let actionsHtml = '';
    if (item.exists && item.status === 'pending') {
      actionsHtml = `
        <button class="btn-approve" onclick="setStatus('${item.type}','${item.id}','approved')">Approve</button>
        <button class="btn-reject" onclick="setStatus('${item.type}','${item.id}','rejected')">Reject</button>`;
    } else if (item.status === 'rejected') {
      actionsHtml = `
        <button class="btn-regen" onclick="regenerate('${item.type}','${item.id}')">Regenerate</button>
        <button class="btn-approve" onclick="setStatus('${item.type}','${item.id}','approved')">Approve</button>`;
    } else if (item.status === 'approved') {
      actionsHtml = `
        <button class="btn-reject" onclick="setStatus('${item.type}','${item.id}','rejected')">Change to Reject</button>`;
    }

    let statusHtml = '';
    if (item.status === 'approved') statusHtml = `<div class="status-bar approved">APPROVED</div>`;
    else if (item.status === 'rejected') statusHtml = `<div class="status-bar rejected">REJECTED</div>`;

    return `
      <div class="card ${item.status}">
        ${imgHtml}
        <div class="info">
          <span class="type-badge ${item.type}">${item.type}</span>
          <div class="name">${item.id}</div>
          <div class="actions">${actionsHtml}</div>
        </div>
        ${statusHtml}
      </div>`;
  }).join('');
}

async function setStatus(type, id, status) {
  await fetch('/api/status', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({type, id, status})
  });
  const item = items.find(i => i.type === type && i.id === id);
  if (item) item.status = status;
  render();
}

async function regenerate(type, id) {
  document.getElementById('loading').classList.remove('hidden');
  const res = await fetch('/api/regenerate', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({type, id})
  });
  const result = await res.json();
  document.getElementById('loading').classList.add('hidden');
  if (result.success) {
    const item = items.find(i => i.type === type && i.id === id);
    if (item) { item.exists = true; item.status = 'pending'; item.path = `/thumbnails/${type}s/${id}.png`; }
    render();
  } else {
    alert('Regeneration failed: ' + result.error);
  }
}

async function bulkApproveAll() {
  const pending = items.filter(i => i.status === 'pending' && i.exists);
  for (const item of pending) {
    await fetch('/api/status', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({type: item.type, id: item.id, status: 'approved'})
    });
    item.status = 'approved';
  }
  render();
}

async function regenerateAllRejected() {
  const rejected = items.filter(i => i.status === 'rejected');
  if (!rejected.length) { alert('No rejected thumbnails'); return; }
  document.getElementById('loading').classList.remove('hidden');
  document.querySelector('.spinner').textContent = `Regenerating ${rejected.length} thumbnails...`;
  for (let i = 0; i < rejected.length; i++) {
    document.querySelector('.spinner').textContent = `Regenerating ${i+1}/${rejected.length}: ${rejected[i].id}...`;
    const res = await fetch('/api/regenerate', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({type: rejected[i].type, id: rejected[i].id})
    });
    const result = await res.json();
    if (result.success) {
      rejected[i].exists = true;
      rejected[i].status = 'pending';
      rejected[i].path = `/thumbnails/${rejected[i].type}s/${rejected[i].id}.png`;
    }
  }
  document.getElementById('loading').classList.add('hidden');
  render();
}

fetchItems();
</script>
</body>
</html>
"""


class ReviewHandler(http.server.BaseHTTPRequestHandler):
    def do_GET(self):
        parsed = urllib.parse.urlparse(self.path)

        if parsed.path == "/" or parsed.path == "":
            self.send_response(200)
            self.send_header("Content-Type", "text/html")
            self.end_headers()
            self.wfile.write(DASHBOARD_HTML.encode())

        elif parsed.path == "/api/thumbnails":
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps(get_all_thumbnails()).encode())

        elif parsed.path.startswith("/thumbnails/"):
            # Serve thumbnail images
            file_path = BASE_DIR / parsed.path.replace("/thumbnails/", "")
            if file_path.exists():
                self.send_response(200)
                self.send_header("Content-Type", "image/png")
                self.send_header("Cache-Control", "no-cache")
                self.end_headers()
                self.wfile.write(file_path.read_bytes())
            else:
                self.send_response(404)
                self.end_headers()
        else:
            self.send_response(404)
            self.end_headers()

    def do_POST(self):
        content_length = int(self.headers.get("Content-Length", 0))
        body = json.loads(self.rfile.read(content_length)) if content_length else {}

        parsed = urllib.parse.urlparse(self.path)

        if parsed.path == "/api/status":
            state = load_state()
            key = f"{body['type']}:{body['id']}"
            state[key] = body["status"]
            save_state(state)
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps({"ok": True}).encode())

        elif parsed.path == "/api/regenerate":
            success, msg = regenerate_thumbnail(body["type"], body["id"])
            # Reset status to pending after regeneration
            if success:
                state = load_state()
                key = f"{body['type']}:{body['id']}"
                state[key] = "pending"
                save_state(state)
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.end_headers()
            self.wfile.write(json.dumps({"success": success, "error": msg if not success else None}).encode())

        else:
            self.send_response(404)
            self.end_headers()

    def log_message(self, format, *args):
        # Quiet logging
        pass


def main():
    port = 8765
    server = http.server.HTTPServer(("", port), ReviewHandler)
    print(f"Thumbnail Review Dashboard running at http://localhost:{port}")
    print("Press Ctrl+C to stop")
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopped")
        server.server_close()


if __name__ == "__main__":
    main()
