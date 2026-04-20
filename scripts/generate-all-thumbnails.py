"""Generate unique thumbnail PNGs for every course and bundle using Gemini 3 Pro Image.

Each course/bundle gets a unique architecture diagram thumbnail.
Uses gemini-3-pro-image-preview for clean, labeled diagrams.
"""

import os
import time
from google import genai
from google.genai import types

API_KEY = os.environ.get("GEMINI_API_KEY")
if not API_KEY:
    raise RuntimeError("GEMINI_API_KEY not set. Add it to .env at the repo root.")
COURSE_DIR = os.path.join(
    os.path.dirname(__file__), "..", "sites", "courses", "public", "thumbnails", "courses"
)
BUNDLE_DIR = os.path.join(
    os.path.dirname(__file__), "..", "sites", "courses", "public", "thumbnails", "bundles"
)

client = genai.Client(api_key=API_KEY)

STYLE_SUFFIX = (
    "White background. Clean flat colored boxes with soft pastel fills. "
    "Black arrows for data flow. Crisp labels on every component. "
    "Academic textbook illustration style. Landscape 16:9 aspect ratio."
)

# ============================================================
# COURSE THUMBNAILS - 70 unique architecture diagrams
# ============================================================
course_thumbnails = {
    # === GenAI courses ===
    "genai-industry-professional": (
        "Architecture diagram of a complete GenAI industry pipeline. "
        "Left to right flow: Raw Data -> Data Cleaning -> Tokenizer -> Pre-training (large GPU cluster icon) -> "
        "Base Model -> Supervised Fine-tuning (SFT) -> RLHF alignment -> Deployed Model with API endpoint. "
        "Show feedback loop from user interactions back to fine-tuning. "
        "Blue boxes for data stages, green for training, orange for deployment. "
    ),
    "context-engineering-industry": (
        "Architecture diagram of an AI Context Engineering system. "
        "Center: LLM with context window shown as a large rectangle divided into sections: "
        "System Prompt (top, purple), Few-shot Examples (blue), Retrieved Context (green), User Query (orange). "
        "Left side: Context sources feeding in: Vector DB, Tool Results, Conversation History, Knowledge Graph. "
        "Right side: Output with context-aware response. Show context window size limit indicator. "
    ),
    "context-engineering-engineer": (
        "Architecture diagram of prompt engineering and context optimization. "
        "Top: various prompt strategies shown as cards: Zero-shot, Few-shot, Chain-of-thought, ReAct. "
        "Center: Prompt Template Engine combining System Instructions + Dynamic Context + User Input. "
        "Bottom: Output Quality Evaluator with metrics: Relevance, Accuracy, Coherence feeding back to template refinement. "
        "Purple for prompts, green for engine, orange for evaluation. "
    ),
    "llm-capstone": (
        "Architecture diagram of an end-to-end LLM capstone project. "
        "Flow: Problem Definition -> Dataset Collection -> Data Preprocessing -> Model Selection (comparing GPT/LLaMA/Mistral) -> "
        "Fine-tuning Pipeline -> Evaluation (BLEU, ROUGE, Perplexity metrics) -> API Wrapping -> Frontend Demo App. "
        "Show iterative improvement loop. Blue for data, green for model, purple for evaluation, orange for deployment. "
    ),
    "build-llm-july-2025": (
        "Architecture diagram of building an LLM from scratch. "
        "Bottom to top: Text Corpus -> BPE Tokenizer -> Vocabulary (50K tokens) -> Token Embeddings + Positional Encoding -> "
        "Stacked Transformer Decoder Blocks (show 6 layers with attention + FFN) -> Language Model Head -> Next Token Prediction. "
        "Side panel showing: Learning Rate Schedule, AdamW Optimizer, Gradient Accumulation. "
        "Blue for data processing, green for model architecture, orange for training. "
    ),
    "genai-fundamentals": (
        "Architecture diagram of the Transformer attention mechanism in detail. "
        "Show the Multi-Head Attention block internals: Input -> Split into h heads -> "
        "For each head: Linear projections to Q, K, V -> Scaled Dot-Product Attention (QK^T/sqrt(d_k) -> Softmax -> multiply by V) -> "
        "Concatenate all heads -> Final Linear projection -> Output. "
        "Show the attention score matrix as a small heatmap grid. "
        "Blue for linear layers, green for attention computation, purple for concatenation. "
    ),
    "genai-fundamentals-july-2025": (
        "Architecture diagram comparing Encoder-only, Decoder-only, and Encoder-Decoder Transformer models. "
        "Three columns side by side: "
        "Left: BERT (Encoder-only) with bidirectional arrows, used for Classification/NER. "
        "Center: GPT (Decoder-only) with causal mask, used for Text Generation. "
        "Right: T5 (Encoder-Decoder) with cross-attention, used for Translation/Summarization. "
        "Blue for encoders, green for decoders, orange for task-specific heads. "
    ),
    "llm-theory-deployment-capstone": (
        "Architecture diagram of LLM theory and deployment lifecycle. "
        "Three major sections: Theory (left): Transformer blocks, attention, embeddings. "
        "Training (center): Data pipeline, distributed training across GPUs, loss curves. "
        "Deployment (right): Model quantization (FP32->INT8), ONNX export, TensorRT optimization, REST API serving. "
        "Blue for theory, green for training, orange for deployment. "
    ),
    "llm-production-deployment": (
        "Architecture diagram of LLM production serving infrastructure. "
        "Flow: Trained Model -> Quantization (GPTQ/AWQ) -> Model Registry -> "
        "Serving Layer (vLLM/TGI with KV-cache, continuous batching) -> Load Balancer -> API Gateway -> "
        "Client Apps. Side: Monitoring (latency, throughput, cost), Auto-scaling, A/B Testing. "
        "Green for optimization, blue for serving, orange for infrastructure. "
    ),
    "genai-fundamentals-jan-2026": (
        "Architecture diagram of the text generation process in LLMs. "
        "Left: Input prompt tokens. Center: LLM processing with autoregressive generation loop shown as a cycle: "
        "Encode context -> Predict next token probabilities -> Sampling strategy (Temperature, Top-k, Top-p shown as parallel paths) -> "
        "Append token -> Repeat until stop token. Right: Complete generated text output. "
        "Blue for input, green for model, purple for sampling, orange for output. "
    ),
    "build-llm-jan-2026": (
        "Architecture diagram of the LLM pretraining data pipeline. "
        "Flow: Web Crawl (Common Crawl icon) -> Deduplication (MinHash) -> Quality Filtering (perplexity scores) -> "
        "Toxicity Filtering -> Language Detection -> Data Mixing (proportions: Web 60%, Books 20%, Code 15%, Academic 5%) -> "
        "Tokenization (BPE) -> Packed Sequences -> DataLoader with shuffling. "
        "Blue for raw data, green for filtering, orange for processing, purple for final dataset. "
    ),
    "llm-deployment-production-jan-2026": (
        "Architecture diagram of production LLM deployment with guardrails. "
        "Flow: User Request -> Input Guardrails (PII detection, prompt injection filter) -> "
        "LLM Inference (with KV cache) -> Output Guardrails (toxicity filter, hallucination check, citation verification) -> "
        "Response to User. Side: Logging, Cost Tracking, Rate Limiting, Model Fallback Chain. "
        "Red for guardrails, blue for inference, green for monitoring. "
    ),
    "llm-capstone-jan-2026": (
        "Architecture diagram of a full ML project lifecycle for LLM applications. "
        "Circular flow: Requirements Analysis -> Data Strategy -> Model Development -> "
        "Evaluation and Testing -> Deployment -> Monitoring and Feedback -> iterate. "
        "Inner ring shows artifacts: Dataset, Model Checkpoint, Eval Reports, API Docs, Dashboards. "
        "Blue for planning, green for development, orange for operations. "
    ),
    "genai-jan-2025-archive": (
        "Architecture diagram of word embeddings and language representation. "
        "Show: One-hot vectors (sparse, tall) -> Word2Vec/GloVe (dense, short) -> Contextual Embeddings (BERT/GPT). "
        "Illustrate the embedding space with clustered word vectors (king-queen, man-woman analogy). "
        "Show how same word gets different embeddings in different contexts. "
        "Blue for sparse representations, green for static embeddings, purple for contextual. "
    ),

    # === Inference Engineering courses ===
    "inference-phase1-phase2": (
        "Architecture diagram of a complete inference engineering pipeline in two phases. "
        "Phase 1 (left): Model Optimization: Quantization (FP16/INT8/INT4), Pruning, Knowledge Distillation, Graph Optimization. "
        "Phase 2 (right): Production Deployment: Batching Strategies, KV-Cache Management, Speculative Decoding, "
        "Edge Deployment (ONNX Runtime, TensorRT, CoreML). "
        "Arrow connecting phases. Blue for Phase 1, orange for Phase 2. "
    ),
    "5d-parallelism-industry": (
        "Architecture diagram showing 5D parallelism for distributed LLM training. "
        "Show a 3D grid of GPU nodes with 5 parallelism dimensions labeled: "
        "Data Parallelism (horizontal replicas), Tensor Parallelism (split attention heads across GPUs), "
        "Pipeline Parallelism (split layers across stages), Sequence Parallelism (split along sequence length), "
        "Expert Parallelism (MoE routing to different GPUs). "
        "Each dimension shown in a different color with arrows showing communication patterns. "
    ),
    "inference-mentorship": (
        "Architecture diagram of inference optimization research workflow. "
        "Flow: Literature Review (paper icons) -> Identify Bottleneck (profiling: compute vs memory bound) -> "
        "Hypothesis -> Implement Optimization -> Benchmark (latency, throughput, memory charts) -> "
        "Write Paper / Technical Report. Show 1:1 mentorship feedback loops. "
        "Blue for research, green for implementation, orange for evaluation. "
    ),
    "inference-phase2": (
        "Architecture diagram of production and edge deployment for inference. "
        "Show: Trained Model -> Conversion Pipeline (ONNX, TensorRT, CoreML, TFLite) -> "
        "Target Devices (Cloud GPU, Edge GPU, Mobile CPU, Browser/WASM). "
        "For each target: Optimization strategy (dynamic batching for cloud, quantization for edge, pruning for mobile). "
        "Performance monitoring dashboard at bottom. Blue for model, green for conversion, orange for targets. "
    ),
    "inference-guest-speaker": (
        "Architecture diagram of industry inference systems from leading AI companies. "
        "Show 4 systems side by side: "
        "vLLM (PagedAttention, continuous batching), TensorRT-LLM (FP8, in-flight batching), "
        "DeepSpeed-Inference (model parallelism, ZeRO), Triton Inference Server (model ensemble, dynamic batching). "
        "Each as a column with key components stacked. Compare throughput/latency at bottom. "
        "Different color for each system: blue, green, orange, purple. "
    ),
    "inference-phase1": (
        "Architecture diagram of inference foundations and optimization techniques. "
        "Show a neural network model at top, then 4 optimization branches below: "
        "1. Quantization (FP32 -> FP16 -> INT8 -> INT4 with accuracy-speed tradeoff curve) "
        "2. Pruning (structured vs unstructured, shown as network with removed connections) "
        "3. Knowledge Distillation (large teacher -> small student model) "
        "4. Operator Fusion (multiple ops merged into single kernel). "
        "Blue for original model, green for optimized versions. "
    ),
    "5d-parallelism-engineer": (
        "Architecture diagram of implementing tensor and pipeline parallelism. "
        "Show a Transformer layer split across 4 GPUs: "
        "Tensor parallel: Attention heads split across GPU 0-1, FFN split across GPU 2-3. "
        "Pipeline parallel: Layer 1-6 on Node A, Layer 7-12 on Node B with micro-batch scheduling. "
        "Show All-Reduce and Point-to-Point communication patterns between GPUs. "
        "Blue for compute, orange for communication, green for memory. "
    ),
    "inference-roadmap-starter": (
        "Architecture diagram of an inference engineering learning roadmap. "
        "Show a progression path: "
        "Level 1: PyTorch basics, model profiling, CUDA fundamentals (blue). "
        "Level 2: Quantization, operator fusion, memory optimization (green). "
        "Level 3: Distributed inference, KV-cache, speculative decoding (orange). "
        "Level 4: Custom CUDA kernels, Triton language, hardware-aware optimization (purple). "
        "Each level as a horizontal band with icons for key topics. "
    ),

    # === Reinforcement Learning ===
    "rl-research-bootcamp": (
        "Architecture diagram of modern deep RL algorithms. "
        "Center: Agent-Environment loop (State -> Action -> Reward -> Next State). "
        "Branching into 3 algorithm families: "
        "Value-based (DQN with Q-network, experience replay, target network), "
        "Policy-based (PPO with actor-critic, advantage estimation, clipped objective), "
        "Model-based (World model predicting next state and reward, planning with learned model). "
        "Green for value methods, blue for policy methods, orange for model-based. "
    ),
    "hands-on-rl-pro": (
        "Architecture diagram of a Proximal Policy Optimization (PPO) implementation. "
        "Show: Environment (Gym/MuJoCo) -> Observation -> Actor Network (policy) and Critic Network (value) sharing a backbone. "
        "Training loop: Collect trajectories -> Compute GAE advantages -> "
        "Multiple epochs of mini-batch updates with clipped surrogate objective. "
        "Rollout buffer storing (s, a, r, log_prob, value). "
        "Green for actor, blue for critic, orange for buffer, purple for environment. "
    ),

    # === Computer Vision / NLP ===
    "cv-research-bootcamp": (
        "Architecture diagram of a modern computer vision research pipeline. "
        "Flow: Image Dataset -> Augmentation (flip, crop, color jitter, mixup) -> "
        "Backbone (ResNet/EfficientNet/ViT) -> Feature Pyramid Network -> "
        "Task Heads: Detection (anchor boxes + NMS), Segmentation (per-pixel prediction), "
        "Tracking (appearance + motion model). Training: Contrastive Learning + Supervised Loss. "
        "Blue for backbone, green for FPN, orange for task heads. "
    ),
    "transformers-vision-multimodal-pro": (
        "Architecture diagram of a Vision-Language Multimodal Transformer. "
        "Left: Image Encoder (ViT) producing visual tokens. Right: Text Encoder producing text tokens. "
        "Center: Cross-attention fusion module where visual and text tokens attend to each other. "
        "Output heads: Image Captioning, Visual QA, Image-Text Matching. "
        "Show the projection layers mapping vision and text to shared embedding space. "
        "Purple for vision, blue for text, green for fusion, orange for outputs. "
    ),
    "nlp-cv-mastery-july-2025": (
        "Architecture diagram of NLP pipeline from text preprocessing to model output. "
        "Flow: Raw Text -> Tokenization (WordPiece/BPE) -> Embedding Layer -> "
        "Transformer Encoder Stack -> [CLS] token / Sequence output -> "
        "Task heads: Sentiment Classification, Named Entity Recognition (sequence labeling), "
        "Question Answering (span extraction). "
        "Blue for preprocessing, green for transformer, orange for task heads. "
    ),
    "nlp-cv-mastery-jan-2026": (
        "Architecture diagram of object detection with YOLO architecture. "
        "Flow: Input Image -> CSPDarknet Backbone (feature extraction at 3 scales) -> "
        "Neck (FPN + PAN for multi-scale feature fusion) -> "
        "Detection Head (3 scales: large/medium/small objects) -> "
        "Post-processing (confidence thresholding + Non-Maximum Suppression) -> Final Detections with bounding boxes. "
        "Blue for backbone, green for neck, orange for heads, purple for post-processing. "
    ),
    "hands-on-cv-pro": (
        "Architecture diagram of image classification with CNN. "
        "Show detailed CNN layers: Input Image (224x224x3) -> "
        "Conv1 (64 filters, 7x7) -> BatchNorm -> ReLU -> MaxPool -> "
        "Residual Block 1 (64ch) -> Residual Block 2 (128ch) -> Residual Block 3 (256ch) -> Residual Block 4 (512ch) -> "
        "Global Average Pooling -> Fully Connected -> Softmax (1000 classes). "
        "Show residual skip connections. Blue gradient for increasing depth. "
    ),

    # === Scientific ML ===
    "sciml-industry-professional": (
        "Architecture diagram of Scientific ML for industry applications. "
        "Show: Physical System (PDE equations) + Experimental Data -> "
        "Physics-Informed Neural Network (PINN) with physics loss + data loss branches. "
        "Applications: Fluid Dynamics simulation, Structural Analysis, Heat Transfer prediction. "
        "Side: Uncertainty Quantification module, Digital Twin feedback loop. "
        "Blue for physics, green for ML, orange for applications. "
    ),
    "sciml-researcher": (
        "Architecture diagram of a Physics-Informed Neural Network (PINN). "
        "Show: Neural Network with inputs (x, y, z, t) -> Hidden Layers -> Output u(x,t). "
        "Two loss terms: Data Loss (MSE with observed data points) + Physics Loss (PDE residual via automatic differentiation). "
        "Show automatic differentiation arrows computing du/dt, du/dx, d2u/dx2 from network output. "
        "Total Loss = Data Loss + lambda * Physics Loss. "
        "Blue for network, green for data loss, red for physics loss. "
    ),
    "sciml-community": (
        "Architecture diagram of neural operator architectures for SciML. "
        "Compare two approaches side by side: "
        "Left: Fourier Neural Operator (FNO) with Fourier transform layers, spectral convolutions. "
        "Right: DeepONet with branch network (input function) and trunk network (query location) merged via dot product. "
        "Both solving PDE: u(x,0) -> u(x,T). "
        "Blue for FNO path, green for DeepONet path. "
    ),
    "sciml-student": (
        "Architecture diagram of solving differential equations with neural networks. "
        "Show: ODE/PDE specification -> Neural network as universal function approximator -> "
        "Loss = PDE residual (automatic differentiation) + boundary conditions + initial conditions. "
        "Training loop: Forward pass -> Compute residuals -> Backpropagation -> Update weights. "
        "Right: Solution visualization as a surface plot. "
        "Blue for math, green for neural network, orange for training. "
    ),
    "sciml-july-2025": (
        "Architecture diagram of Scientific ML applications in physical sciences. "
        "Show 4 application domains with their architectures: "
        "Fluid Dynamics (Navier-Stokes + Neural Operator), Climate Modeling (Graph Neural Networks on mesh), "
        "Materials Science (Molecular dynamics + equivariant NNs), Structural Engineering (FEM + surrogate model). "
        "Each as a box with input/output and the ML model in between. "
        "Blue for physics, green for ML models, orange for outputs. "
    ),
    "sciml-jan-2025-archive": (
        "Architecture diagram of surrogate modeling with neural networks. "
        "Flow: High-fidelity simulation (expensive, slow) -> Generate training data -> "
        "Train neural network surrogate (fast, cheap) -> Validate against simulation -> "
        "Deploy surrogate for real-time predictions and optimization. "
        "Show speedup comparison: Simulation (hours) vs Surrogate (milliseconds). "
        "Blue for simulation, green for surrogate, orange for deployment. "
    ),

    # === Robotics ===
    "vla-researcher": (
        "Architecture diagram of Vision-Language-Action (VLA) model for robotics. "
        "Inputs: Camera Image (vision encoder) + Language Instruction (text encoder) -> "
        "Multimodal Fusion Transformer -> Action Token Decoder -> Robot Action (joint angles, gripper). "
        "Show: Pretraining on web data, fine-tuning on robot demonstrations. "
        "World Model predicting next observation for planning. "
        "Purple for vision, blue for language, green for action, orange for world model. "
    ),
    "vla-autonomous-driving-research": (
        "Architecture diagram of VLA for autonomous driving. "
        "Inputs: Multi-camera views (6 cameras around car) + LiDAR point cloud + Navigation command (text). "
        "Processing: BEV (Bird's Eye View) feature fusion -> Temporal aggregation -> "
        "Planning module: trajectory prediction + safety scoring -> Control outputs (steering, acceleration, braking). "
        "HD Map and traffic rules as additional context. "
        "Blue for perception, green for fusion, orange for planning, red for control. "
    ),
    "vla-engineer": (
        "Architecture diagram of robot manipulation with VLA models. "
        "Show: RGB-D camera -> Vision encoder (ViT) -> Language instruction encoder -> "
        "Policy network -> 6-DOF action (x, y, z, roll, pitch, yaw + gripper). "
        "Training pipeline: Human demonstration -> Action chunking -> Diffusion policy. "
        "Sim-to-real transfer with domain randomization. "
        "Blue for vision, green for policy, orange for robot hardware. "
    ),
    "vla-autonomous-driving-pro": (
        "Architecture diagram of end-to-end autonomous driving perception stack. "
        "Flow: Sensor Suite (cameras, LiDAR, radar) -> Feature Extraction -> "
        "3D Object Detection (bounding boxes in BEV) -> Tracking (multi-object tracker) -> "
        "Motion Prediction (future trajectories) -> Route Planning -> Motion Control. "
        "Show safety monitor and fallback system alongside main pipeline. "
        "Blue for perception, green for prediction, orange for planning. "
    ),
    "minor-in-robotics": (
        "Architecture diagram of a complete robotics software stack. "
        "Layers from bottom to top: Hardware (motors, sensors, actuators) -> "
        "Low-level Control (PID, torque control) -> Middleware (ROS2 nodes, topics, services) -> "
        "Perception (SLAM, object detection) -> Planning (motion planning, task planning) -> "
        "High-level AI (learning, decision making). "
        "Each layer as a horizontal bar with key components. Different color per layer. "
    ),
    "modern-robot-learning": (
        "Architecture diagram of modern robot learning approaches. "
        "Three parallel tracks: "
        "Imitation Learning (human demo -> behavior cloning / DAgger), "
        "RL for Robotics (sim environment -> policy -> sim-to-real transfer), "
        "Foundation Models (pretrained VLM -> zero-shot robot control). "
        "All converging to: Real Robot Deployment with safety constraints. "
        "Blue for imitation, green for RL, purple for foundation models, orange for deployment. "
    ),

    # === Build from Scratch ===
    "build-gpt-from-scratch": (
        "Architecture diagram of building GPT from scratch in Python. "
        "Step by step: Character-level tokenizer -> Embedding table -> "
        "Self-attention head (Q, K, V matrices with causal mask) -> Multi-head attention -> "
        "Transformer block (attention + FFN + LayerNorm + residual) -> Stack N blocks -> "
        "Language model head -> Cross-entropy loss -> Training loop with AdamW. "
        "Show code-like annotations. Blue for data, green for model components. "
    ),
    "build-diffusion-lm": (
        "Architecture diagram of a Diffusion Language Model. "
        "Show the forward diffusion process: Clean text embeddings -> gradually add Gaussian noise over T steps -> Pure noise. "
        "Reverse process: Pure noise -> U-Net denoiser predicts noise at each step -> gradually denoise -> Clean text. "
        "Show the U-Net architecture with skip connections. "
        "Training: minimize noise prediction MSE loss. "
        "Blue for forward process, green for reverse, orange for U-Net. "
    ),
    "build-slm-pro": (
        "Architecture diagram of building a Small Language Model (SLM) from scratch. "
        "Show the efficiency techniques: Grouped Query Attention (GQA), "
        "RoPE positional encoding, SwiGLU activation, RMSNorm instead of LayerNorm. "
        "Model spec: ~1B params, 2048 context, 32 layers, 16 heads. "
        "Training: Mixed precision (BF16), gradient checkpointing, flash attention. "
        "Blue for architecture, green for efficiency tricks, orange for training. "
    ),
    "build-vit-from-scratch": (
        "Architecture diagram of Vision Transformer (ViT) built from scratch. "
        "Flow: Input image (224x224) -> Split into 16x16 patches (14x14 = 196 patches) -> "
        "Linear projection of each patch -> Add [CLS] token -> Add positional embeddings -> "
        "Transformer encoder (12 layers of Multi-Head Self-Attention + MLP) -> "
        "[CLS] output -> Classification head -> Class prediction. "
        "Blue for patch processing, green for transformer, orange for classification. "
    ),
    "build-nanovlm": (
        "Architecture diagram of building a NanoVLM (Vision-Language Model). "
        "Two input streams: Image -> Vision Encoder (small ViT) -> Visual tokens. "
        "Text -> Tokenizer -> Text embeddings. "
        "Projection layer aligning visual tokens to text embedding space. "
        "Combined sequence -> Small Language Model decoder -> Generated text description. "
        "Training: Image-text pairs, contrastive + generative loss. "
        "Purple for vision, blue for text, green for fusion, orange for output. "
    ),
    "build-vit-from-scratch-2": (
        "Architecture diagram showing the self-attention mechanism in Vision Transformer. "
        "Detailed view: Patch tokens arranged in sequence -> "
        "Compute Q, K, V for each token -> Attention matrix (196x196 heatmap visualization) -> "
        "Weighted sum of values -> Output tokens. "
        "Show how different attention heads capture different visual patterns: edges, textures, shapes. "
        "Multi-head attention with h=12 heads shown as parallel computation lanes. "
        "Blue for queries/keys, green for values, orange for attention weights. "
    ),
    "build-deit": (
        "Architecture diagram of Data-Efficient Image Transformer (DeiT) with distillation. "
        "Show: Student ViT learning from two sources simultaneously: "
        "1. Ground truth labels (hard label loss - cross entropy). "
        "2. Teacher CNN (RegNet/EfficientNet) predictions (distillation loss - KL divergence). "
        "DeiT adds a distillation token alongside [CLS] token. "
        "Show: Teacher (large CNN, frozen) -> soft predictions -> Student (small ViT) -> distillation + class tokens. "
        "Blue for student, orange for teacher, green for training signals. "
    ),
    "transformers-theory-building": (
        "Architecture diagram of the original Transformer (Attention Is All You Need). "
        "Full encoder-decoder architecture: "
        "Left: Encoder stack (6 layers, each with multi-head self-attention + FFN). "
        "Right: Decoder stack (6 layers, each with masked self-attention + cross-attention + FFN). "
        "Show: Input embedding + positional encoding on both sides. "
        "Cross-attention arrows connecting encoder output to decoder. "
        "Add & Norm after each sub-layer. Blue for encoder, green for decoder. "
    ),
    "build-ml-fundamentals": (
        "Architecture diagram of fundamental ML algorithms and their building blocks. "
        "Show 4 core models: "
        "Linear Regression (input features -> weighted sum -> prediction, with loss surface), "
        "Decision Tree (tree structure with split nodes), "
        "Neural Network (input -> hidden -> output layers with activation functions), "
        "SVM (data points with hyperplane and margin). "
        "Each in its own quadrant. Blue for linear, green for tree, orange for neural, purple for SVM. "
    ),
    "build-gpt-jan-2025-archive": (
        "Architecture diagram of GPT training pipeline. "
        "Show: Text corpus -> Sliding window chunking -> "
        "Mini-batches -> Forward pass through Transformer -> "
        "Cross-entropy loss (predicted vs actual next token) -> "
        "Backward pass (gradient computation) -> Adam optimizer step -> "
        "Learning rate scheduler (warmup + cosine decay curve). "
        "Blue for data, green for model, orange for optimization. "
    ),

    # === Foundations ===
    "foundations-ai-ml-july-2025": (
        "Architecture diagram of mathematical foundations for AI/ML. "
        "Four pillars: Linear Algebra (matrices, eigenvalues, SVD), "
        "Calculus (gradients, chain rule, Jacobians), "
        "Probability (Bayes theorem, distributions, maximum likelihood), "
        "Optimization (gradient descent, convexity, loss landscapes). "
        "Each pillar as a column, all supporting a 'Machine Learning' roof. "
        "Blue for linear algebra, green for calculus, orange for probability, purple for optimization. "
    ),
    "foundations-ai-ml": (
        "Architecture diagram of the complete AI/ML learning stack. "
        "Bottom to top pyramid: "
        "Math Foundations (matrices, calculus, probability) -> "
        "Classical ML (regression, classification, clustering, dimensionality reduction) -> "
        "Deep Learning (neural networks, CNNs, RNNs, Transformers) -> "
        "Applications (NLP, CV, RL, GenAI). "
        "Each layer as a horizontal band getting narrower toward top. Different color per layer. "
    ),
    "math-foundations-jan-2026": (
        "Architecture diagram showing how math concepts flow into ML algorithms. "
        "Left side (Math): Matrix operations, Eigendecomposition, Gradient vectors, Probability distributions. "
        "Arrows connecting to right side (ML): PCA uses eigendecomposition, "
        "Neural networks use chain rule gradients, Naive Bayes uses probability, "
        "Linear regression uses matrix inverse. "
        "Blue for math concepts, green for ML algorithms, orange arrows for connections. "
    ),
    "foundations-jan-2025-archive": (
        "Architecture diagram of gradient descent optimization. "
        "Show: 3D loss surface with a ball rolling downhill. "
        "Steps: Initialize weights randomly -> Compute gradient (direction of steepest ascent) -> "
        "Step in opposite direction (learning rate * gradient) -> Repeat. "
        "Compare: Batch GD (smooth path), SGD (noisy path), Mini-batch (balanced path). "
        "Show convergence to local minimum. "
        "Blue for loss surface, green for gradient arrows, orange for trajectories. "
    ),

    # === ML/DL ===
    "ml-dl-research": (
        "Architecture diagram of a deep learning research workflow. "
        "Flow: Research question -> Literature review (paper icons) -> Hypothesis -> "
        "Experiment design (model architecture, dataset, baselines) -> "
        "Training on GPU cluster -> Ablation studies (table of results) -> "
        "Analysis and visualization -> Paper writing with LaTeX. "
        "Blue for research, green for experiments, orange for analysis. "
    ),
    "ml-dl-mastery": (
        "Architecture diagram comparing major neural network architectures. "
        "Four architectures side by side: "
        "MLP (fully connected layers), CNN (conv + pool layers for images), "
        "RNN/LSTM (recurrent connections for sequences), Transformer (attention for any sequence). "
        "Each showing input -> processing layers -> output. "
        "Arrow showing evolution from left to right. "
        "Blue for MLP, green for CNN, orange for RNN, purple for Transformer. "
    ),
    "ml-dl-mastery-july-2025": (
        "Architecture diagram of CNN feature learning hierarchy. "
        "Show: Input image -> Layer 1 (edge detectors, visualized filters) -> "
        "Layer 2 (texture patterns) -> Layer 3 (object parts: eyes, wheels) -> "
        "Layer 4 (full objects). "
        "Each layer shows the learned feature maps getting more abstract. "
        "Progressive zoom-out from pixel-level to semantic understanding. "
        "Blue gradient getting deeper through layers. "
    ),
    "ml-dl-mastery-jan-2026": (
        "Architecture diagram of the deep learning training pipeline. "
        "Flow: Dataset -> Train/Val/Test split -> Data augmentation -> "
        "Model architecture (layers stacked) -> Forward pass -> Loss computation -> "
        "Backward pass (gradient flow shown as red arrows) -> Optimizer step -> "
        "Validation metrics check -> Early stopping or continue training. "
        "Blue for data, green for model, orange for training, red for gradients. "
    ),
    "ml-dl-capstone-jan-2026": (
        "Architecture diagram of an ML experiment tracking system. "
        "Center: Model Training Run. Connected to: "
        "Hyperparameter search (grid/random/Bayesian), Dataset versioning (DVC), "
        "Experiment tracking (MLflow/W&B with metrics/artifacts), "
        "Model registry (versioned checkpoints), Deployment pipeline (CI/CD for ML). "
        "Show comparison dashboard with multiple runs. "
        "Blue for training, green for tracking, orange for deployment. "
    ),
    "ml-dl-jan-2025-archive": (
        "Architecture diagram of regularization techniques in deep learning. "
        "Center: Neural network. Around it, regularization methods: "
        "Dropout (crossed out neurons), Batch Normalization (mean/var normalization), "
        "Weight Decay (L2 penalty on loss), Data Augmentation (rotated/flipped images), "
        "Early Stopping (training curve with stop point marked). "
        "Each technique shown with before/after effect on overfitting curves. "
        "Blue for model, green for regularization, orange for training curves. "
    ),

    # === AI Agents ===
    "ai-agents-pro": (
        "Architecture diagram of a multi-agent AI system. "
        "Show: Orchestrator Agent at top coordinating specialized sub-agents below: "
        "Research Agent (web search + summarization), Code Agent (code generation + execution), "
        "Data Agent (SQL queries + analysis), Communication Agent (email/slack drafting). "
        "Shared memory/context layer connecting all agents. "
        "Message passing protocol between agents. Human-in-the-loop approval for critical actions. "
        "Orange for orchestrator, blue for sub-agents, green for memory, gray for human. "
    ),
    "ai-agents-bootcamp": (
        "Architecture diagram of building an AI agent with tool use. "
        "Flow: User message -> System prompt + tools schema -> LLM reasoning -> "
        "Decision: respond directly OR call tool -> Tool execution (API call, code run, search) -> "
        "Tool result -> LLM incorporates result -> Final response. "
        "Show the function calling JSON format. "
        "Orange for LLM, blue for tools, green for responses, gray for user. "
    ),

    # === RAG and Finetuning ===
    "industry-rag-workshop": (
        "Architecture diagram of an industrial-grade RAG system. "
        "Advanced pipeline: Document Processing (OCR, table extraction, image captioning) -> "
        "Hierarchical Chunking (parent-child chunks) -> Hybrid Search (dense vectors + BM25 sparse) -> "
        "Re-ranking (cross-encoder) -> Context Compression -> LLM with citations. "
        "Side: Evaluation pipeline (RAGAS metrics: faithfulness, relevance, recall). "
        "Blue for ingestion, green for retrieval, orange for generation, purple for eval. "
    ),
    "production-rag-workshop": (
        "Architecture diagram of production RAG with evaluation and monitoring. "
        "Flow: Query -> Query rewriting/expansion -> Hybrid retrieval (vector + keyword) -> "
        "Chunk re-ranking -> Context window packing -> LLM generation with citations -> "
        "Response quality check. "
        "Monitoring: Query analytics, retrieval quality, answer quality, user feedback loop. "
        "Blue for retrieval, green for generation, orange for monitoring. "
    ),

    # === Software Dev ===
    "modern-software-developer": (
        "Architecture diagram of a modern full-stack software development workflow. "
        "Show: Frontend (React/Next.js) -> API Gateway -> Backend Services (microservices) -> "
        "Database layer (PostgreSQL + Redis cache). "
        "DevOps pipeline: Git -> CI/CD (GitHub Actions) -> Docker -> Kubernetes -> Cloud (AWS/GCP). "
        "Testing: Unit -> Integration -> E2E. Monitoring: Logs, Metrics, Traces. "
        "Blue for frontend, green for backend, orange for DevOps, purple for data. "
    ),

    # === Workshops ===
    "llm-finetuning-workshop": (
        "Architecture diagram of LLM fine-tuning techniques. "
        "Show base model with 3 fine-tuning approaches branching out: "
        "1. Full fine-tuning (all parameters updated, high compute). "
        "2. LoRA (low-rank adaptation matrices A and B injected into attention layers, frozen base). "
        "3. QLoRA (quantized base model + LoRA adapters, minimal memory). "
        "Compare: Parameters trained, GPU memory, training time for each. "
        "Blue for base model, green for LoRA, orange for QLoRA, purple for full FT. "
    ),
    "rlhf-from-scratch": (
        "Architecture diagram of RLHF (Reinforcement Learning from Human Feedback) pipeline. "
        "Three stages: "
        "Stage 1: Supervised Fine-Tuning (SFT) on curated data. "
        "Stage 2: Reward Model training (human preference pairs -> reward predictor). "
        "Stage 3: PPO optimization (policy model generates -> reward model scores -> PPO updates policy). "
        "Show human annotator providing preference rankings in Stage 2. "
        "Blue for SFT, green for reward model, orange for PPO, gray for human. "
    ),
    "memory-workshop": (
        "Architecture diagram of memory systems for AI applications. "
        "Show: Sensory Buffer (raw input, short duration) -> "
        "Short-term Memory (conversation context window, limited size) -> "
        "Long-term Memory (vector database, persistent storage). "
        "Memory operations: Store, Retrieve (similarity search), Update, Forget (TTL/relevance decay). "
        "Application: Chatbot maintaining user preferences and conversation history across sessions. "
        "Blue for short-term, green for long-term, orange for operations. "
    ),

    # === Research Mentorship ===
    "student-research-review-paper": (
        "Architecture diagram of the academic review paper writing process. "
        "Flow: Define research question -> Systematic literature search (databases: arXiv, Google Scholar, Semantic Scholar) -> "
        "Paper screening (title -> abstract -> full text filtering funnel) -> "
        "Taxonomy creation (organizing papers by methodology) -> "
        "Critical analysis (compare methods, identify gaps) -> "
        "Writing structure (Introduction -> Methodology Review -> Comparison Table -> Future Directions). "
        "Blue for search, green for analysis, orange for writing. "
    ),
}

# ============================================================
# BUNDLE THUMBNAILS - 45 unique architecture diagrams
# ============================================================
bundle_thumbnails = {
    # === Inference Engineering Bundles ===
    "inference-entire-bundle": (
        "Architecture diagram of a complete inference engineering ecosystem. "
        "Large overview: Model Optimization (quantization, pruning, distillation) -> "
        "Serving Infrastructure (vLLM, TensorRT-LLM) -> Production Stack (load balancing, autoscaling) -> "
        "Edge Deployment (mobile, browser) -> Monitoring (latency, cost, quality). "
        "Research track: Papers, mentorship, custom kernels. All interconnected. "
        "Blue for optimization, green for serving, orange for production, purple for research. "
    ),
    "inference-p1-p2-roadmap-mentorship": (
        "Architecture diagram of inference optimization with research mentorship pathway. "
        "Two main tracks merging: Technical (quantization -> serving -> deployment) and "
        "Research (literature review -> experimentation -> benchmarking -> paper). "
        "1:1 mentorship touchpoints marked along both tracks. "
        "Code starter kit icons: Jupyter notebooks, benchmark scripts, model configs. "
        "Blue for technical, green for research, orange for mentorship. "
    ),
    "inference-p1-p2-mentorship": (
        "Architecture diagram of two-phase inference with mentorship. "
        "Phase 1: Model compression (quantization levels, pruning ratios, distillation setup). "
        "Phase 2: Production deployment (serving framework, batching, caching). "
        "Mentorship layer: 1:1 sessions, code reviews, research guidance connecting both phases. "
        "Blue for Phase 1, orange for Phase 2, green for mentorship. "
    ),
    "inference-p1-p2-speaker-roadmap": (
        "Architecture diagram of comprehensive inference engineering program. "
        "Core: Phase 1 (foundations) + Phase 2 (production). "
        "Enrichment: Guest speakers from industry (company logos placeholder boxes) sharing real-world systems. "
        "Research: Roadmap from optimization to novel research + starter code templates. "
        "Blue for core phases, purple for speakers, green for research path. "
    ),
    "inference-p1-p2-speaker": (
        "Architecture diagram of inference workshop with industry insights. "
        "Main pipeline: Model -> Optimize -> Serve -> Deploy (horizontal flow). "
        "Above: Guest speaker sessions as star-shaped nodes contributing industry case studies. "
        "Below: Hands-on labs with code exercises for each stage. "
        "Blue for pipeline, orange for speakers, green for labs. "
    ),
    "inference-p2-roadmap-mentorship": (
        "Architecture diagram of advanced inference: production + research + mentorship. "
        "Focus on Phase 2: Serving (KV-cache, continuous batching, speculative decoding) -> "
        "Edge deployment (ONNX, TFLite, CoreML) -> Performance benchmarking. "
        "Research roadmap branching to: Custom CUDA kernels, novel attention mechanisms. "
        "Mentorship: personalized research direction guidance. "
        "Orange for serving, green for edge, purple for research. "
    ),
    "inference-p1-roadmap-mentorship": (
        "Architecture diagram of inference foundations with research path. "
        "Phase 1 deep dive: Model profiling (compute vs memory bound analysis) -> "
        "Quantization (PTQ vs QAT comparison) -> Pruning (structured vs unstructured) -> "
        "Knowledge distillation (teacher-student setup). "
        "Research roadmap: Identify open problems, design experiments. "
        "Mentorship: Weekly 1:1 guidance arrows throughout. "
        "Blue for techniques, green for research, orange for mentorship. "
    ),
    "inference-p2-mentorship": (
        "Architecture diagram of production inference with guided mentorship. "
        "Phase 2 details: Model serving architecture (request queue -> scheduler -> GPU workers -> response). "
        "Optimization: Batching strategies (static, dynamic, continuous). "
        "Mentorship: Personalized code reviews, system design guidance, research paper feedback. "
        "Orange for serving, blue for optimization, green for mentorship. "
    ),
    "inference-p1-p2-roadmap": (
        "Architecture diagram of full inference pipeline with research roadmap. "
        "Phase 1: Foundations (profiling, quantization, pruning). "
        "Phase 2: Production (serving, deployment, monitoring). "
        "Research roadmap: State-of-the-art survey -> Identify gaps -> "
        "Experiment design -> Code starter implementing baseline + improvements. "
        "Blue for Phase 1, orange for Phase 2, green for research. "
    ),
    "inference-p1-mentorship": (
        "Architecture diagram of inference foundations with personalized mentorship. "
        "Phase 1 curriculum: CUDA basics -> Memory hierarchy -> Quantization math -> "
        "Pruning algorithms -> Distillation loss functions. "
        "Mentorship overlay: Personalized learning path, code review sessions, "
        "research paper discussions, career guidance. "
        "Blue for curriculum, green for mentorship. "
    ),
    "inference-p2-speaker": (
        "Architecture diagram of production inference with guest speakers. "
        "Phase 2 core: Model deployment pipeline (optimize -> package -> serve -> monitor). "
        "Guest speaker modules: Real-world case studies from production ML teams. "
        "Topics: Scaling to millions of requests, cost optimization, reliability engineering. "
        "Orange for pipeline, purple for speakers, blue for case studies. "
    ),
    "inference-p1-speaker": (
        "Architecture diagram of inference foundations enhanced by industry talks. "
        "Phase 1 modules: Quantization, Pruning, Distillation, Operator Fusion. "
        "Industry speaker sessions interspersed: Practical tips from engineers at scale. "
        "Hands-on component: Apply techniques to real models after each speaker session. "
        "Blue for modules, purple for speakers, green for hands-on. "
    ),
    "inference-p2-roadmap": (
        "Architecture diagram of advanced inference with research planning. "
        "Phase 2 topics: KV-cache optimization, Speculative decoding, FlashAttention. "
        "Edge deployment track: Model conversion -> Runtime optimization -> Device-specific tuning. "
        "Research roadmap: Literature survey template -> Experiment framework -> Benchmarking suite. "
        "Orange for Phase 2, green for edge, blue for research. "
    ),
    "inference-p1-roadmap": (
        "Architecture diagram of inference foundations with starter kit. "
        "Phase 1 core: Model profiling tools (PyTorch profiler, nsight) -> "
        "Quantization (post-training vs quantization-aware training comparison) -> "
        "Pruning (magnitude, movement, lottery ticket). "
        "Research kit: Paper reading list, baseline code, benchmark datasets. "
        "Blue for core, green for research kit. "
    ),

    # === Minor / Degree Bundles ===
    "minor-ai-genai-robotics": (
        "Architecture diagram of a Minor in AI-GenAI-Robotics curriculum. "
        "Three pillars: AI Foundations (ML, DL, math) -> GenAI (LLMs, transformers, fine-tuning) -> "
        "Robotics (perception, control, VLA models). "
        "Capstone project connecting all three: Robot that understands language and acts in the real world. "
        "Blue for AI, green for GenAI, orange for Robotics, purple for capstone. "
    ),
    "minor-genai-rl-research": (
        "Architecture diagram of GenAI + RL research program. "
        "GenAI track: Transformers, LLMs, fine-tuning, deployment. "
        "RL track: Policy optimization, multi-agent systems, RLHF. "
        "Intersection: RLHF for LLM alignment, RL-guided code generation, agentic systems. "
        "Research output: Conference paper combining both areas. "
        "Green for GenAI, blue for RL, purple for intersection. "
    ),
    "ai-genai-minors": (
        "Architecture diagram of combined AI + GenAI minor program. "
        "Foundation layer: Math, Statistics, Programming. "
        "AI layer: Classical ML, Deep Learning, Computer Vision, NLP. "
        "GenAI layer: Transformers, LLM training, Prompt Engineering, RAG, Agents. "
        "Progression: each layer builds on the previous. "
        "Blue for foundations, green for AI, orange for GenAI. "
    ),

    # === Comprehensive Bundles ===
    "math-ml-dl-genai-gpt-rag-finetuning-agents-vision": (
        "Architecture diagram of a comprehensive AI curriculum pipeline. "
        "Left to right flow through 8 modules: "
        "Math -> ML/DL -> GenAI Fundamentals -> Build GPT -> RAG Systems -> "
        "Fine-tuning -> AI Agents -> Vision + Reasoning. "
        "Each as a connected box. Show progressive skill building. "
        "Rainbow gradient coloring from blue to purple across modules. "
    ),
    "genai-gpt-rag-finetuning-agents-vision": (
        "Architecture diagram of GenAI mastery pathway. "
        "Six interconnected modules: GenAI Fundamentals (transformer theory) -> "
        "Build GPT (hands-on coding) -> RAG (retrieval systems) -> "
        "Fine-tuning (LoRA, RLHF) -> AI Agents (tool use, planning) -> "
        "Vision + Reasoning (multimodal, chain-of-thought). "
        "Arrows showing dependencies. Green to orange gradient coloring. "
    ),
    "language-reasoning-vision-rag-finetuning-agents": (
        "Architecture diagram of advanced AI capabilities bundle. "
        "Three capability tracks: "
        "Language (NLP, text understanding, generation) + Reasoning (chain-of-thought, logic) + Vision (image understanding). "
        "Applied modules: RAG (retrieval-augmented), Fine-tuning (domain adaptation), Agents (autonomous action). "
        "Show how tracks feed into applications. "
        "Blue for language, purple for reasoning, green for vision, orange for applications. "
    ),

    # === Minor Programs ===
    "minor-genai-july-2025": (
        "Architecture diagram of a Minor in Generative AI curriculum. "
        "Course sequence: GenAI Fundamentals -> Build GPT from Scratch -> "
        "LLM Deployment -> Capstone Project. "
        "Skills acquired at each stage: Theory -> Implementation -> Production -> Integration. "
        "Show project artifacts: trained model, deployed API, demo application. "
        "Green gradient through the curriculum stages. "
    ),
    "minor-ai-july-2025": (
        "Architecture diagram of Minor in Artificial Intelligence. "
        "Course sequence: Foundations (math + programming) -> ML/DL Mastery -> "
        "NLP + CV Mastery -> Capstone. "
        "For each stage: key algorithms, tools, and project milestones. "
        "Show certification path and portfolio building. "
        "Blue gradient through curriculum stages. "
    ),
    "ai-bootcamp-bundle": (
        "Architecture diagram of an AI bootcamp learning path. "
        "Intensive program flow: Week 1-2 (Math + Python) -> Week 3-4 (ML algorithms) -> "
        "Week 5-6 (Deep Learning + CNNs) -> Week 7-8 (NLP + Transformers) -> "
        "Week 9-10 (Projects + Portfolio). "
        "Each period with hands-on exercises and mini-projects. "
        "Blue to green gradient showing progression. "
    ),
    "programmed-electives-genai": (
        "Architecture diagram of GenAI and LLM electives program. "
        "Core modules: Transformer Architecture -> Pre-training Methods -> "
        "Instruction Tuning -> RLHF Alignment -> Deployment. "
        "Elective tracks branching: Multimodal LLMs, Code Generation, Scientific AI, Creative AI. "
        "Each track with specialized project. "
        "Green for core, blue/orange/purple for elective tracks. "
    ),
    "minor-ai": (
        "Architecture diagram of AI minor with specialization tracks. "
        "Foundation: Linear Algebra, Probability, Python Programming. "
        "Core: Supervised Learning, Unsupervised Learning, Neural Networks, Optimization. "
        "Advanced: Deep Learning architectures (CNN, RNN, Transformer). "
        "Capstone: End-to-end ML project with deployment. "
        "Layered pyramid structure. Blue for foundation, green for core, orange for advanced. "
    ),
    "minor-ai-jan-2026": (
        "Architecture diagram of AI minor program with modern curriculum. "
        "Semester 1: Mathematical Foundations + Introduction to ML (classical algorithms). "
        "Semester 2: Deep Learning + Specialized Topics (NLP or CV or GenAI choice). "
        "Both semesters lead to: Capstone Project integrating all skills. "
        "Show project presentations and portfolio creation at the end. "
        "Blue for semester 1, green for semester 2, orange for capstone. "
    ),
    "minor-genai-jan-2026": (
        "Architecture diagram of Generative AI minor with latest curriculum. "
        "Module flow: Attention and Transformers -> Large Language Models -> "
        "Prompt Engineering and RAG -> Model Fine-tuning (LoRA/QLoRA) -> "
        "AI Agents and Tool Use -> Production Deployment -> Capstone Demo. "
        "Hands-on coding emphasis shown as code file icons alongside each module. "
        "Green gradient through modules. "
    ),

    # === VLA / Robotics Bundles ===
    "vla-robotlearning-softwaredev": (
        "Architecture diagram of VLA + Robot Learning + Software Dev bundle. "
        "Three integrated tracks: "
        "VLA Models (vision-language-action architecture for robot control), "
        "Robot Learning (imitation learning, sim-to-real, policy optimization), "
        "Software Dev (ROS2, Docker, CI/CD for robotics). "
        "Integration project: Deploy VLA-controlled robot with production-grade software. "
        "Purple for VLA, green for robot learning, blue for software. "
    ),
    "vla-worldmodels-softwaredev": (
        "Architecture diagram of VLA + World Models + Software Dev bundle. "
        "VLA (perception + language + action), World Models (environment simulation, future state prediction), "
        "Software Dev (system architecture, deployment, testing). "
        "Combined output: Robot that reasons about future states and acts via language commands "
        "deployed with production-quality software. "
        "Purple for VLA, orange for world models, blue for software. "
    ),

    # === Specialized Bundles ===
    "hands-on-rl-cv-transformers": (
        "Architecture diagram of RL + CV + Vision Transformers bundle. "
        "Three hands-on tracks: "
        "RL (policy gradient, PPO, environment interaction), "
        "CV (CNNs, object detection, segmentation), "
        "Vision Transformers (ViT, DeiT, attention visualization). "
        "Intersection: RL with visual observations, transformer-based RL policies. "
        "Green for RL, blue for CV, purple for transformers. "
    ),
    "language-reasoning-vision-agents": (
        "Architecture diagram of multimodal AI agent system. "
        "Four capability modules: Language Understanding (NLP pipeline), "
        "Reasoning (chain-of-thought, tree-of-thought), Vision (image/video understanding), "
        "Agent Framework (planning, tool use, memory). "
        "Converging into: Autonomous multimodal agent that sees, reads, reasons, and acts. "
        "Blue for language, purple for reasoning, green for vision, orange for agents. "
    ),
    "transition-ml-july-2025": (
        "Architecture diagram of career transition to ML pathway. "
        "Starting point: Software Engineer / Data Analyst / Domain Expert. "
        "Bridge modules: Python for ML -> Math refresher -> ML fundamentals. "
        "ML mastery: Supervised/Unsupervised/Deep Learning. "
        "Career outcomes: ML Engineer, Data Scientist, AI Researcher. "
        "Gray for starting, blue for bridge, green for mastery, orange for outcomes. "
    ),
    "transition-ml": (
        "Architecture diagram of transitioning into ML from other fields. "
        "Input tracks: Programming background, Math background, Domain expertise. "
        "Common foundation: Python, NumPy, Pandas, Matplotlib. "
        "ML pipeline: Data preprocessing -> Feature engineering -> Model training -> "
        "Evaluation -> Deployment. Portfolio projects throughout. "
        "Gray for prerequisites, blue for foundation, green for ML pipeline. "
    ),
    "context-engineering-rag": (
        "Architecture diagram of Context Engineering + Industrial RAG integration. "
        "Left: Context Engineering (prompt design, context window management, few-shot optimization). "
        "Right: Industrial RAG (enterprise data connectors, hybrid search, guardrails, citations). "
        "Center: Combined system where engineered context incorporates RAG-retrieved documents "
        "for optimal LLM responses with source attribution. "
        "Green for context engineering, blue for RAG, orange for combined output. "
    ),
    "llm-gpt-slm-rl": (
        "Architecture diagram of LLM-GPT-SLM-RL combined curriculum. "
        "Four connected modules: LLM theory (architecture, training) -> "
        "Build GPT (hands-on implementation) -> SLM (efficient small models) -> "
        "RL (RLHF alignment, reward modeling). "
        "Show progression: Understanding -> Building -> Optimizing -> Aligning. "
        "Blue for LLM, green for GPT, orange for SLM, purple for RL. "
    ),
    "slm-hands-on-rl": (
        "Architecture diagram of SLM + RL bundle. "
        "Track 1: Build Small Language Model (efficient architecture, GQA, RoPE, training on limited compute). "
        "Track 2: Hands-on RL (environments, policy gradients, PPO implementation). "
        "Intersection: RLHF alignment of the SLM using the RL techniques learned. "
        "Orange for SLM, green for RL, purple for RLHF intersection. "
    ),
    "slm-rag-finetuning-agents": (
        "Architecture diagram of SLM + RAG + Finetuning + Agents bundle. "
        "Flow: Build SLM -> Fine-tune on domain data (LoRA) -> Add RAG retrieval layer -> "
        "Wrap as AI Agent with tool access -> Deploy complete system. "
        "End result: Efficient, domain-adapted AI agent with retrieval capabilities. "
        "Orange for SLM, blue for RAG, green for finetuning, purple for agents. "
    ),
    "language-reasoning-vision": (
        "Architecture diagram of Language + Reasoning + Vision bootcamp. "
        "Three core modules: "
        "Language (tokenization, embeddings, sequence models, attention). "
        "Reasoning (logic, chain-of-thought, mathematical reasoning, code reasoning). "
        "Vision (image features, CNNs, ViTs, spatial understanding). "
        "Integration: Multimodal models combining all three capabilities. "
        "Blue for language, purple for reasoning, green for vision. "
    ),
    "ml-dl-nlp-cv-july-2025": (
        "Architecture diagram of ML-DL-NLP-CV comprehensive bundle. "
        "Four progressive modules: "
        "ML (classical algorithms: SVM, trees, ensembles) -> "
        "DL (neural networks, backprop, architectures) -> "
        "NLP (text processing, BERT, GPT, sentiment, NER) -> "
        "CV (image classification, detection, segmentation). "
        "Blue for ML, green for DL, orange for NLP, purple for CV. "
    ),
    "ml-dl-nlp-cv": (
        "Architecture diagram of integrated ML/DL/NLP/CV program. "
        "Foundation: Shared mathematical and programming base. "
        "ML core: Regression, classification, clustering, dimensionality reduction. "
        "DL core: Feedforward nets, CNNs, RNNs, Transformers. "
        "NLP applications: Text classification, machine translation, question answering. "
        "CV applications: Image recognition, object detection, image generation. "
        "Layered architecture with shared foundation. "
    ),

    # === Foundation Bundles ===
    "archive-ai-genai-jan-2025": (
        "Architecture diagram of AI + GenAI archived curriculum bundle. "
        "AI track: Foundations -> Classical ML -> Deep Learning -> NLP/CV. "
        "GenAI track: Transformer theory -> GPT architecture -> Fine-tuning -> Deployment. "
        "Both tracks share: Mathematical foundations, Python programming, experiment design. "
        "Archive badge indicates completed cohort material available for self-study. "
        "Blue for AI track, green for GenAI track, gray for shared base. "
    ),
    "foundations-ml-dl-sciml": (
        "Architecture diagram of Foundations + ML + DL + Scientific ML path. "
        "Linear progression: Math Foundations (calculus, linear algebra, PDEs) -> "
        "ML (regression, classification, optimization) -> "
        "DL (neural networks, CNNs, RNNs) -> "
        "Scientific ML (PINNs, neural operators, physics-constrained learning). "
        "Show how physics knowledge integrates with ML at the final stage. "
        "Blue for math, green for ML, orange for DL, purple for SciML. "
    ),
    "agents-rag-finetuning": (
        "Architecture diagram of AI Agents + RAG + Finetuning toolkit. "
        "Three interconnected systems: "
        "Agents (planning, tool use, memory, multi-step reasoning). "
        "RAG (document ingestion, vector search, context assembly). "
        "Finetuning (LoRA adapters, domain-specific training, evaluation). "
        "Combined: Fine-tuned agent with RAG-enhanced knowledge retrieval. "
        "Orange for agents, blue for RAG, green for finetuning. "
    ),

    # === Archive Bundles ===
    "archive-genai-jan-2025": (
        "Architecture diagram of GenAI fundamentals archive curriculum. "
        "Core modules: Transformer architecture deep dive -> "
        "GPT family (GPT-2, GPT-3, GPT-4 comparison) -> "
        "Training techniques (pretraining, instruction tuning) -> "
        "Deployment (API serving, latency optimization). "
        "Archive format: Self-paced with recorded lectures and code notebooks. "
        "Green gradient through modules, gray border for archive status. "
    ),
    "archive-ai-jan-2025": (
        "Architecture diagram of AI fundamentals archive curriculum. "
        "Core modules: Python + NumPy -> Data preprocessing -> "
        "ML algorithms (linear models, trees, ensembles, SVMs) -> "
        "DL basics (perceptrons, backprop, CNNs) -> "
        "Evaluation and model selection (cross-validation, metrics). "
        "Archive format with self-paced progression. "
        "Blue gradient through modules, gray border for archive. "
    ),

    # === Vision Transformer Bundle ===
    "vit-nanovlm-deit": (
        "Architecture diagram comparing three vision transformer architectures. "
        "Column 1: ViT (patch embedding -> transformer encoder -> classification). "
        "Column 2: NanoVLM (image encoder + text encoder -> multimodal fusion -> text generation). "
        "Column 3: DeiT (ViT + distillation token + teacher CNN knowledge transfer). "
        "Show shared components highlighted and unique components for each. "
        "Blue for ViT, purple for NanoVLM, green for DeiT. "
    ),
}


def generate_thumbnail(name: str, prompt: str, output_dir: str) -> bool:
    """Generate a single thumbnail using Gemini 3 Pro Image."""
    full_prompt = prompt + STYLE_SUFFIX
    dest = os.path.join(output_dir, f"{name}.png")

    # Skip if already exists
    if os.path.exists(dest):
        print(f"  Skipping {name} (already exists)")
        return True

    print(f"  Generating: {name}")
    try:
        response = client.models.generate_content(
            model="gemini-3-pro-image-preview",
            contents=full_prompt,
            config=types.GenerateContentConfig(
                response_modalities=["IMAGE", "TEXT"],
            ),
        )

        for part in response.candidates[0].content.parts:
            if part.inline_data is not None:
                with open(dest, "wb") as f:
                    f.write(part.inline_data.data)
                print(f"    Saved: {name}.png")
                return True

        print(f"    Warning: No image in response for {name}")
        return False

    except Exception as e:
        print(f"    Error: {e}")
        # Rate limit - wait and retry once
        if "429" in str(e) or "RESOURCE_EXHAUSTED" in str(e):
            print("    Rate limited, waiting 30s...")
            time.sleep(30)
            try:
                response = client.models.generate_content(
                    model="gemini-3-pro-image-preview",
                    contents=full_prompt,
                    config=types.GenerateContentConfig(
                        response_modalities=["IMAGE", "TEXT"],
                    ),
                )
                for part in response.candidates[0].content.parts:
                    if part.inline_data is not None:
                        with open(dest, "wb") as f:
                            f.write(part.inline_data.data)
                        print(f"    Saved (retry): {name}.png")
                        return True
            except Exception as e2:
                print(f"    Retry failed: {e2}")
        return False


def main():
    os.makedirs(COURSE_DIR, exist_ok=True)
    os.makedirs(BUNDLE_DIR, exist_ok=True)

    total = len(course_thumbnails) + len(bundle_thumbnails)
    success = 0
    idx = 0

    print(f"Generating {len(course_thumbnails)} course thumbnails...")
    for name, prompt in course_thumbnails.items():
        idx += 1
        print(f"\n[{idx}/{total}]", end="")
        if generate_thumbnail(name, prompt, COURSE_DIR):
            success += 1

    print(f"\n\nGenerating {len(bundle_thumbnails)} bundle thumbnails...")
    for name, prompt in bundle_thumbnails.items():
        idx += 1
        print(f"\n[{idx}/{total}]", end="")
        if generate_thumbnail(name, prompt, BUNDLE_DIR):
            success += 1

    print(f"\n\nDone: {success}/{total} thumbnails generated")


if __name__ == "__main__":
    main()
