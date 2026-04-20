"""Generate ML-DL bootcamp diagrams using Gemini 3 Pro Image directly."""

import os
from google import genai
from google.genai import types

API_KEY = os.environ.get("GEMINI_API_KEY")
if not API_KEY:
    raise RuntimeError("GEMINI_API_KEY not set. Add it to .env at the repo root.")
OUTPUT_DIR = os.path.join(
    os.path.dirname(__file__), "..", "sites", "ml-dl-bootcamp", "public", "diagrams"
)

client = genai.Client(api_key=API_KEY)

diagrams = [
    {
        "name": "ml-dl-landscape",
        "prompt": (
            "Create a clean, professional architecture diagram showing the ML and Deep Learning curriculum landscape. "
            "White background. Horizontal left-to-right flow across three stages: "
            "Stage 1 (light indigo): 'Python Foundations' containing small icons for NumPy, Pandas, Matplotlib, with 'OOP' and 'Data Viz' sub-boxes. "
            "Stage 2 (light sky blue): 'Classical ML' showing a branching layout with three paths: "
            "'Linear Models' (Perceptron, Logistic Regression, Ridge) in blue boxes, "
            "'Decision Trees' (Gini Impurity, Pruning, Regression Trees) in green boxes, "
            "'Evaluation' (L1/L2 Regularization, Cross-Validation) in orange boxes. "
            "Stage 3 (light violet): 'Deep Learning' showing a vertical neural network with 4 layers (Input, Hidden 1, Hidden 2, Output), "
            "backpropagation arrows flowing backward in red dashes, "
            "and optimizer labels (SGD, Adam) next to the weight update step. "
            "Two project boxes at the bottom right: 'Fashion MNIST' and 'California Housing'. "
            "Each stage in a lightly colored background region with rounded corners. "
            "Clean black arrows between stages. Crisp labels on every component. "
            "Academic textbook illustration style. Landscape 16:9 aspect ratio."
        ),
    },
    {
        "name": "neural-network-training",
        "prompt": (
            "Create a clean, professional architecture diagram of a neural network training pipeline. "
            "White background. Vertical layout with a training loop: "
            "Top: 'Input Data' box with sample vectors [x1, x2, x3, x4]. "
            "Middle: Neural network with 4 layers shown as columns of circles: "
            "Input (4 nodes), Hidden 1 (6 nodes, ReLU), Hidden 2 (5 nodes, ReLU), Output (3 nodes, Softmax). "
            "Lines connecting all nodes between adjacent layers (weighted connections). "
            "Below network: 'Loss Function' box showing 'Cross-Entropy: L = -sum(y log y_hat)'. "
            "Left side: 'Forward Pass' label with blue downward arrow along the network. "
            "Right side: 'Backward Pass' label with red dashed upward arrow showing gradient flow. "
            "Bottom panel: Three optimizer boxes side by side: 'SGD', 'RMSProp', 'Adam' with their update formulas. "
            "A curved arrow from optimizers back to the network weights showing the training loop. "
            "Use indigo for forward pass elements, red/orange for backward pass, green for optimizer boxes. "
            "Clean flat colored boxes. Academic textbook illustration style. Landscape 16:9 aspect ratio."
        ),
    },
    {
        "name": "decision-tree-construction",
        "prompt": (
            "Create a clean, professional diagram showing decision tree construction and evaluation. "
            "White background. Two panels side by side: "
            "Left panel 'Tree Construction': A decision tree with 3 levels. "
            "Root node at top (rounded rectangle, light blue) with split condition 'Feature X <= 0.5'. "
            "Two child nodes branching left and right, each with their own split conditions. "
            "Leaf nodes at bottom showing class predictions (green for Class A, orange for Class B). "
            "Small inset formula box: 'Gini = 1 - sum(p_i^2)' with a simple bar chart showing class proportions. "
            "Right panel 'Decision Boundaries': A 2D scatter plot with two classes of colored dots (blue and orange). "
            "Rectangular decision boundaries drawn as dashed lines, creating regions that match the tree splits. "
            "Axis labels 'Feature 1' and 'Feature 2'. "
            "Below both panels: A comparison row showing 'Classification Trees (Gini/Entropy)' vs 'Regression Trees (MSE)'. "
            "Clean flat colors, crisp labels, academic textbook illustration style. Landscape 16:9 aspect ratio."
        ),
    },
]


def generate_diagram(name: str, prompt: str) -> bool:
    """Generate a single diagram using Gemini 3 Pro Image."""
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
    for diag in diagrams:
        if generate_diagram(diag["name"], diag["prompt"]):
            success += 1

    print(f"\nDone: {success}/{len(diagrams)} diagrams generated")


if __name__ == "__main__":
    main()
