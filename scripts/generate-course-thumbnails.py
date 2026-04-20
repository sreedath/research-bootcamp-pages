import asyncio
import os
import shutil

if not os.environ.get("GOOGLE_API_KEY"):
    raise RuntimeError("GOOGLE_API_KEY not set. Add it to .env at the repo root.")

from paperbanana import PaperBananaPipeline, GenerationInput
from paperbanana.core.config import Settings

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "..", "shared-assets", "paperbanana-gen", "courses")
PUBLIC_DIR = os.path.join(os.path.dirname(__file__), "..", "sites", "courses", "public", "thumbnails")

figures = [
    {
        "name": "gpt-architecture",
        "source_context": (
            "The figure illustrates the GPT (Generative Pre-trained Transformer) decoder-only architecture used for autoregressive language modeling. "
            "On the left side, input tokens are converted to token embeddings and combined with sinusoidal positional encodings via element-wise addition. "
            "The combined representation flows into a vertical stack of N identical decoder blocks (shown as a repeated module with 'Nx' annotation). "
            "Each decoder block contains two sub-layers arranged vertically: "
            "(1) Masked Multi-Head Self-Attention, where Query (Q), Key (K), and Value (V) matrices are computed from the input, attention scores are masked to prevent attending to future tokens, and multiple heads operate in parallel before concatenation and linear projection. "
            "(2) A position-wise Feed-Forward Network consisting of two linear transformations with a GELU activation in between (FFN(x) = GELU(xW1 + b1)W2 + b2). "
            "Each sub-layer has a residual (skip) connection shown as an arrow bypassing the sub-layer, followed by Layer Normalization (Add & Norm). "
            "After the final decoder block, the output passes through a final Layer Normalization, then a Linear projection layer that maps to vocabulary size, "
            "and finally a Softmax layer that produces next-token probability distribution. "
            "The spatial layout is vertical: input at the bottom flowing upward through the decoder stack to the output prediction at the top. "
            "Use a clean academic style with light blue boxes for attention components, light green for FFN, and light gray for normalization layers. "
            "All connections shown as directed arrows with clear labels."
        ),
        "communicative_intent": (
            "Schematic of the GPT decoder-only Transformer architecture, showing the complete data flow from token embedding and positional encoding "
            "through a stack of N masked self-attention and feed-forward blocks with residual connections, culminating in next-token prediction via softmax output."
        ),
    },
    {
        "name": "rag-pipeline",
        "source_context": (
            "The figure illustrates an end-to-end Retrieval-Augmented Generation (RAG) pipeline for production applications. "
            "The architecture flows from left to right across four major stages: "
            "(1) Document Ingestion: Raw documents (PDFs, web pages, databases) enter a document loader, then pass through a text splitter that chunks them into overlapping segments of configurable size. "
            "(2) Embedding and Indexing: Each chunk is processed by an embedding model (e.g., OpenAI text-embedding-3 or sentence-transformers) to produce dense vector representations. "
            "These vectors are stored in a vector database (shown as a cylinder, e.g., Pinecone, Weaviate, or ChromaDB) along with metadata. "
            "(3) Retrieval: When a user query arrives, it is embedded using the same model, then a similarity search (cosine similarity or ANN) retrieves the top-k most relevant chunks from the vector store. "
            "An optional re-ranker (cross-encoder) refines the ranking of retrieved chunks. "
            "(4) Generation: The retrieved context chunks are combined with the original query into a structured prompt template, which is sent to a Large Language Model (GPT-4, Claude, etc.) for answer generation. "
            "The generated response may include citations linking back to source documents. "
            "Use a clean horizontal flow with distinct colored sections for each stage: blue for ingestion, green for embedding/indexing, orange for retrieval, and purple for generation. "
            "Show the vector database prominently in the center. Include labeled arrows for data flow."
        ),
        "communicative_intent": (
            "Overview of a production RAG pipeline architecture, illustrating the complete flow from document ingestion and chunking, "
            "through vector embedding and indexing, to similarity-based retrieval and LLM-powered answer generation with source citations."
        ),
    },
    {
        "name": "agent-architecture",
        "source_context": (
            "The figure illustrates the architecture of an LLM-powered AI Agent system with tool use and memory. "
            "At the center is the Agent Core, containing a Large Language Model (the reasoning engine) surrounded by a planning module and a reflection/self-critique module. "
            "The Agent Core connects to four peripheral systems arranged around it: "
            "(1) Tool Library (right side): A collection of external tools the agent can invoke, including Code Interpreter (Python execution), Web Search (Bing/Google API), "
            "File I/O (read/write operations), Database Query (SQL execution), and API Calls (REST endpoints). Each tool is shown as a small labeled box. "
            "(2) Memory System (top): Divided into Short-Term Memory (conversation context window, recent interactions) and Long-Term Memory (vector store of past experiences, retrieved via embedding similarity). "
            "(3) Observation/Perception (left side): Input processing including user messages, system prompts, and environment feedback. "
            "(4) Action Output (bottom): The agent's outputs including text responses, tool invocations (formatted as function calls), and task delegation to sub-agents. "
            "The execution loop is shown as a cycle: Observe -> Think (reasoning with chain-of-thought) -> Act (tool call or response) -> Observe (tool result). "
            "Use a hub-and-spoke layout with the LLM agent at the center. Use warm orange for the agent core, blue for tools, green for memory, and gray for I/O. "
            "Show the ReAct loop as a circular arrow pattern around the core."
        ),
        "communicative_intent": (
            "Illustration of an LLM-powered AI Agent architecture showing the central reasoning engine connected to tool libraries, "
            "memory systems (short-term and long-term), and the observe-think-act execution loop for autonomous task completion."
        ),
    },
    {
        "name": "cv-pipeline",
        "source_context": (
            "The figure illustrates a modern Computer Vision pipeline combining Convolutional Neural Networks (CNNs) and Vision Transformers (ViT). "
            "The architecture flows from left to right: "
            "(1) Input: A raw image (e.g., 224x224x3 RGB) enters the pipeline. "
            "(2) Feature Extraction (two parallel paths shown): "
            "Path A (CNN backbone): The image passes through a series of convolutional blocks (Conv2D + BatchNorm + ReLU + MaxPool), "
            "with feature maps progressively reducing spatial dimensions (224->112->56->28->14->7) while increasing channel depth (3->64->128->256->512). "
            "Each convolutional block is shown as a 3D rectangular prism that gets narrower but deeper. "
            "Path B (ViT backbone): The image is divided into 16x16 patches, each patch is linearly embedded, positional embeddings are added, "
            "and the sequence passes through L transformer encoder blocks with multi-head self-attention and MLP layers. A [CLS] token aggregates global information. "
            "(3) Task Heads (right side, branching from the backbone output): "
            "Classification head (Global Average Pooling -> FC -> Softmax), Object Detection head (Feature Pyramid Network -> Region Proposal -> Bounding Box Regression + Class Prediction), "
            "Segmentation head (Decoder with upsampling -> Per-pixel classification). "
            "Use blue tones for CNN path, purple tones for ViT path, and green for task-specific heads. "
            "Show tensor dimensions at key points. Use 3D block representations for feature maps."
        ),
        "communicative_intent": (
            "Schematic of a modern Computer Vision pipeline showing dual CNN and Vision Transformer feature extraction paths, "
            "with downstream task heads for image classification, object detection, and semantic segmentation."
        ),
    },
    {
        "name": "rl-training-loop",
        "source_context": (
            "The figure illustrates the Reinforcement Learning training loop and core components of a deep RL system. "
            "The architecture shows a cyclical interaction between an Agent and an Environment: "
            "(1) Environment (right side): Shown as a bounded simulation space (e.g., game, robot simulator, or real-world system). "
            "At each timestep t, the environment provides: State s_t (observation of current situation), Reward r_t (scalar feedback signal), "
            "and Done flag (episode termination indicator). "
            "(2) Agent (left side): Contains the Policy Network pi(a|s) which maps states to action probabilities, "
            "and the Value Network V(s) or Q-Network Q(s,a) which estimates expected future rewards. "
            "The agent selects Action a_t based on its policy (exploration via epsilon-greedy or entropy regularization). "
            "(3) Experience Replay Buffer (bottom): A circular buffer storing (s_t, a_t, r_t, s_{t+1}, done) tuples. "
            "Random mini-batches are sampled from the buffer for training (breaking temporal correlations). "
            "(4) Training Loop (shown as arrows forming a cycle): "
            "Agent observes state -> Agent selects action -> Environment transitions to new state and returns reward -> "
            "Experience stored in replay buffer -> Mini-batch sampled -> Policy and value networks updated via gradient descent "
            "(with loss functions: policy gradient loss, TD error for value function, and entropy bonus). "
            "Show the cycle with thick directional arrows. Use green for the agent, blue for the environment, orange for the replay buffer. "
            "Include the key equations: Bellman equation and policy gradient formula. Layout is circular/cyclical with the replay buffer at the bottom."
        ),
        "communicative_intent": (
            "Overview of the deep Reinforcement Learning training loop, showing the agent-environment interaction cycle with policy and value networks, "
            "experience replay buffer, and gradient-based optimization of the policy via the Bellman equation and policy gradient methods."
        ),
    },
]

settings = Settings(
    vlm_provider="gemini",
    vlm_model="gemini-2.5-flash",
    image_provider="google_imagen",
    image_model="gemini-2.0-flash-exp-image-generation",
    optimize_inputs=True,
    output_dir=OUTPUT_DIR,
)


async def generate_all():
    pipeline = PaperBananaPipeline(settings=settings)

    for fig in figures:
        print(f"\n{'='*60}")
        print(f"Generating: {fig['name']}")
        print(f"{'='*60}")
        try:
            result = await pipeline.generate(
                GenerationInput(
                    source_context=fig["source_context"],
                    communicative_intent=fig["communicative_intent"],
                )
            )
            # Copy final output to public thumbnails
            if result.output_path and os.path.exists(result.output_path):
                dest = os.path.join(PUBLIC_DIR, f"{fig['name']}.png")
                shutil.copy2(result.output_path, dest)
                print(f"Saved to: {dest}")
            else:
                print(f"Warning: No output generated for {fig['name']}")
        except Exception as e:
            print(f"Error generating {fig['name']}: {e}")


if __name__ == "__main__":
    asyncio.run(generate_all())
