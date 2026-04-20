"""Generate course thumbnail PNGs using Gemini 3 Pro Image (Nano Banana Pro).

Uses the google-genai SDK with gemini-3-pro-image-preview model
to create clean architecture diagram thumbnails for course categories.
"""

import os
from google import genai
from google.genai import types

API_KEY = os.environ.get("GEMINI_API_KEY")
if not API_KEY:
    raise RuntimeError("GEMINI_API_KEY not set. Add it to .env at the repo root.")
OUTPUT_DIR = os.path.join(
    os.path.dirname(__file__), "..", "sites", "courses", "public", "thumbnails"
)

client = genai.Client(api_key=API_KEY)

thumbnails = [
    {
        "name": "genai",
        "prompt": (
            "Create a clean, professional architecture diagram of a GPT Transformer decoder-only model. "
            "White background. Vertical layout flowing bottom to top: "
            "Input Tokens at the bottom, then Token Embeddings + Positional Encoding combined via addition, "
            "then a stack of N decoder blocks (show 3 blocks with 'Nx' annotation). "
            "Each block contains: Masked Multi-Head Self-Attention (light blue box), "
            "Add & Norm (thin gray bar), Feed-Forward Network (light green box), Add & Norm (thin gray bar). "
            "Show residual skip connections as arrows bypassing each sub-layer. "
            "Top: Linear projection then Softmax producing output probabilities. "
            "Use clean flat colored boxes: light blue for attention, light green for FFN, light purple for embeddings, "
            "light gray for normalization. Black arrows for data flow. "
            "Crisp labels on every component. Academic textbook illustration style. Landscape 16:9 aspect ratio."
        ),
    },
    {
        "name": "rag-finetuning",
        "prompt": (
            "Create a clean, professional architecture diagram of a RAG (Retrieval-Augmented Generation) pipeline. "
            "White background. Horizontal left-to-right flow with 4 distinct stages: "
            "Stage 1 (blue): Documents icon -> Text Splitter -> Chunks. "
            "Stage 2 (green): Chunks -> Embedding Model -> Vector Database (cylinder shape). "
            "Stage 3 (orange): User Query -> Embedding Model -> Similarity Search against Vector DB -> Top-K Retrieved Chunks. "
            "Stage 4 (purple): Retrieved Chunks + Original Query -> Prompt Template -> LLM -> Generated Answer with Citations. "
            "Each stage in a lightly colored background region. "
            "Clean black arrows between components. Crisp labels on every box. "
            "Academic textbook illustration style. Landscape 16:9 aspect ratio."
        ),
    },
    {
        "name": "agents",
        "prompt": (
            "Create a clean, professional architecture diagram of an LLM-powered AI Agent system. "
            "White background. Hub-and-spoke layout. "
            "Center: large rounded box labeled 'LLM Agent Core' containing 'Planning' and 'Reasoning' sub-boxes (warm orange fill). "
            "Top: 'Memory' box split into 'Short-Term' and 'Long-Term' sections (green fill). "
            "Right: 'Tool Library' with 4 small boxes: 'Code Interpreter', 'Web Search', 'File I/O', 'API Calls' (blue fill). "
            "Left: 'User Input' and 'Observations' (light gray fill). "
            "Bottom: 'Actions' box with 'Text Response', 'Tool Calls', 'Sub-Agent Delegation' (light gray fill). "
            "Show a circular arrow loop around the agent: Observe -> Think -> Act -> Observe (the ReAct loop). "
            "Clean black arrows connecting all components. Crisp labels. "
            "Academic textbook illustration style. Landscape 16:9 aspect ratio."
        ),
    },
    {
        "name": "reinforcement-learning",
        "prompt": (
            "Create a clean, professional architecture diagram of the Reinforcement Learning training loop. "
            "White background. "
            "Left side: 'Agent' box (green fill) containing 'Policy Network' and 'Value Network' sub-boxes. "
            "Right side: 'Environment' box (blue fill) showing a grid world or simulation icon inside. "
            "Between them, two large curved arrows forming a cycle: "
            "Top arrow (green, left to right): labeled 'Action a_t'. "
            "Bottom arrow (orange, right to left): labeled 'State s_t+1, Reward r_t'. "
            "Below the cycle: 'Experience Replay Buffer' (orange fill) as a horizontal rectangle "
            "with 'Mini-batch Sampling' arrow going up to the Agent. "
            "Clean flat colored boxes. Black arrows with labels. Crisp text on every component. "
            "Academic textbook illustration style. Landscape 16:9 aspect ratio."
        ),
    },
    {
        "name": "nlp-cv",
        "prompt": (
            "Create a clean, professional architecture diagram of a Computer Vision and NLP pipeline. "
            "White background. Left-to-right flow. "
            "Left: 'Input Image' icon. Two parallel paths diverge from it: "
            "Path A (blue boxes): 'CNN Backbone' with stacked Conv blocks shown as progressively smaller rectangles "
            "(labeled 64, 128, 256, 512 channels), ending in 'Feature Maps'. "
            "Path B (purple boxes): 'Vision Transformer' with 'Patch Embedding' -> 'Positional Encoding' -> "
            "'Transformer Encoder x L' -> '[CLS] Token'. "
            "Both paths merge on the right into three task heads (green boxes): "
            "'Classification' (with Softmax), 'Object Detection' (with bounding boxes icon), "
            "'Segmentation' (with pixel mask icon). "
            "Clean flat colored boxes. Black arrows. Crisp labels on every component. "
            "Academic textbook illustration style. Landscape 16:9 aspect ratio."
        ),
    },
]


def generate_thumbnail(name: str, prompt: str) -> bool:
    """Generate a single thumbnail using Gemini 3 Pro Image."""
    print(f"\nGenerating: {name}")
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
                image_data = part.inline_data.data
                dest = os.path.join(OUTPUT_DIR, f"{name}.png")
                with open(dest, "wb") as f:
                    f.write(image_data)
                print(f"  Saved: {dest}")
                return True

        print(f"  Warning: No image in response for {name}")
        return False

    except Exception as e:
        print(f"  Error: {e}")
        return False


def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    success = 0
    for thumb in thumbnails:
        if generate_thumbnail(thumb["name"], thumb["prompt"]):
            success += 1

    print(f"\nDone: {success}/{len(thumbnails)} thumbnails generated")


if __name__ == "__main__":
    main()
