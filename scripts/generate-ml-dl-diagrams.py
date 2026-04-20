import asyncio
import os
import shutil

if not os.environ.get("GEMINI_API_KEY"):
    raise RuntimeError("GEMINI_API_KEY not set. Add it to .env at the repo root.")
if "GOOGLE_API_KEY" in os.environ:
    del os.environ["GOOGLE_API_KEY"]

from paperbanana import PaperBananaPipeline, GenerationInput
from paperbanana.core.config import Settings

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "..", "shared-assets", "paperbanana-gen", "ml-dl-bootcamp")
PUBLIC_DIR = os.path.join(os.path.dirname(__file__), "..", "sites", "ml-dl-bootcamp", "public", "diagrams")

figures = [
    {
        "name": "ml-dl-landscape",
        "source_context": (
            "The figure illustrates the complete Machine Learning and Deep Learning landscape covered in this bootcamp. "
            "The architecture flows from left to right across three major stages: "
            "(1) Foundations (left): Python programming fundamentals shown as a code editor icon, with NumPy arrays and Pandas DataFrames below, "
            "feeding into data visualization tools (Matplotlib, Seaborn, Plotly) shown as small chart icons. "
            "(2) Classical ML (center): A branching tree showing three algorithm families: "
            "Linear Models (Perceptron, Logistic Regression, Ridge Regression) in blue boxes, "
            "Decision Trees (Gini Impurity, Pruning, Regression Trees) in green boxes, "
            "and Evaluation Methods (L1/L2 Regularization, Cross-Validation, Metrics) in orange boxes. "
            "(3) Deep Learning (right): A vertical neural network architecture diagram showing: "
            "Input Layer receiving data, Hidden Layers with labeled neurons and activation functions (ReLU, Sigmoid), "
            "Backpropagation arrows flowing backward through the network, "
            "Optimizer selection (SGD, RMSProp, Adam) connected to the weight update step, "
            "and Output Layer producing predictions. "
            "Below the neural network, show two project boxes: 'Fashion MNIST Classification' and 'California Housing Regression'. "
            "Use a clean academic style with a white background. Use indigo/blue for ML components, "
            "sky blue for DL components, and subtle gray for connecting arrows. "
            "All connections shown as directed arrows with clear labels."
        ),
        "communicative_intent": (
            "Overview of the ML-DL bootcamp curriculum landscape, showing the progression from Python foundations "
            "through classical ML algorithms (regression, decision trees) to building neural networks from scratch "
            "with backpropagation, optimizers, and hands-on projects."
        ),
    },
    {
        "name": "neural-network-training",
        "source_context": (
            "The figure illustrates the complete neural network training pipeline built from scratch in this bootcamp. "
            "The architecture is arranged as a vertical flow with a training loop: "
            "(1) Input Data (top): A batch of training samples [x1, x2, ..., xn] entering the network. "
            "(2) Forward Pass (downward flow): "
            "   - Input layer: 4 neurons receiving feature values. "
            "   - Hidden Layer 1: 6 neurons with ReLU activation, showing weights W1 and bias b1. "
            "   - Hidden Layer 2: 5 neurons with ReLU activation, showing weights W2 and bias b2. "
            "   - Output Layer: Neurons with Softmax (classification) or Linear (regression) activation. "
            "   Each layer shows the computation: z = Wx + b, a = activation(z). "
            "(3) Loss Computation (bottom): Comparing predictions y_hat with true labels y using Cross-Entropy Loss (classification) or MSE (regression). "
            "   Show the loss formula: L = -sum(y * log(y_hat)). "
            "(4) Backward Pass (upward flow, shown as dashed red arrows): "
            "   - Gradient computation dL/dW for each layer using the chain rule. "
            "   - Arrows flowing backward through each layer showing gradient propagation. "
            "(5) Weight Update (side panel): "
            "   - Three optimizer options: SGD (W = W - lr * dW), RMSProp (adaptive learning rate), Adam (momentum + adaptive). "
            "   - Learning rate schedule visualization. "
            "Use a clean academic style. Forward pass arrows in indigo, backward pass arrows in red/orange (dashed), "
            "neurons as circles with activation labels, and weight matrices as small grid icons."
        ),
        "communicative_intent": (
            "Detailed schematic of the neural network training pipeline, showing the complete forward pass through "
            "multiple layers with activations, loss computation, backward pass with gradient propagation via the chain rule, "
            "and weight update using optimizers (SGD, RMSProp, Adam)."
        ),
    },
    {
        "name": "decision-tree-construction",
        "source_context": (
            "The figure illustrates the decision tree construction and training process covered in this bootcamp. "
            "The layout has two main sections side by side: "
            "(1) Tree Construction (left side): "
            "   - Root Node at the top containing a dataset with mixed classes (shown as colored dots). "
            "   - Feature Selection: An inset box showing Gini Impurity calculation: Gini = 1 - sum(p_i^2). "
            "   - Binary splits creating child nodes, with the split condition (e.g., 'Feature X <= threshold') on each branch. "
            "   - The tree grows 3-4 levels deep, with leaf nodes showing class predictions. "
            "   - Color-coded nodes: blue for splits leading to Class A, green for Class B. "
            "(2) Pruning and Evaluation (right side): "
            "   - Pre-pruning: max_depth, min_samples_split parameters shown as constraints. "
            "   - Post-pruning: Cost-Complexity Pruning with alpha parameter, showing before/after tree comparison. "
            "   - Decision boundary visualization: A 2D scatter plot showing the rectangular decision regions created by the tree. "
            "   - Comparison between Classification Trees (Gini/Entropy criteria) and Regression Trees (MSE criteria). "
            "Use a clean academic style with tree nodes as rounded rectangles, "
            "split conditions as edge labels, and leaf predictions as colored terminal nodes. "
            "Use green for correct classifications and red for misclassifications in the boundary plot."
        ),
        "communicative_intent": (
            "Illustration of decision tree construction from data splitting using Gini impurity through recursive partitioning, "
            "pruning strategies (pre-pruning and cost-complexity pruning), and the resulting rectangular decision boundaries "
            "for both classification and regression tasks."
        ),
    },
]

async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    os.makedirs(PUBLIC_DIR, exist_ok=True)

    settings = Settings(
        vlm_model="gemini-2.0-flash",
        image_model="google_imagen",
        image_model_name="gemini-3-pro-image-preview",
        output_resolution="2k",
        refinement_iterations=2,
    )
    pipeline = PaperBananaPipeline(settings=settings)

    for fig in figures:
        print(f"\n{'='*60}")
        print(f"Generating: {fig['name']}")
        print(f"{'='*60}")

        fig_output_dir = os.path.join(OUTPUT_DIR, fig["name"])
        gen_input = GenerationInput(
            source_context=fig["source_context"],
            communicative_intent=fig["communicative_intent"],
            output_dir=fig_output_dir,
        )

        try:
            result = await pipeline.generate(gen_input)
            final_png = os.path.join(fig_output_dir, "final_output.png")
            if os.path.exists(final_png):
                dest = os.path.join(PUBLIC_DIR, f"{fig['name']}.png")
                shutil.copy2(final_png, dest)
                print(f"Copied to {dest}")
            else:
                print(f"Warning: final_output.png not found for {fig['name']}")
        except Exception as e:
            print(f"Error generating {fig['name']}: {e}")

    print(f"\nDone! Diagrams saved to {PUBLIC_DIR}")

if __name__ == "__main__":
    asyncio.run(main())
