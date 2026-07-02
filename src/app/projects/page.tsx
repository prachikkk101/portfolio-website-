"use client";

import React, { useState } from "react";
import { Code2, ExternalLink, Sparkles, Filter, X, ArrowUpRight } from "lucide-react";
import Github from "@/components/icons/Github";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const categories = ["All", "AI & Fullstack"];

  const projectList = [
    {
      id: 11,
      title: "MediAssist AI Portal",
      category: "AI & Fullstack",
      shortDescription: "Multi-agent AI healthcare assistant that understands complex medical reports through intelligent document analysis, OCR, RAG, and LLM-powered explanations.",
      fullDescription: "MediAssist AI Portal is a multi-agent AI-powered healthcare assistant that helps users understand complex medical reports through intelligent document analysis. It supports PDF and image-based reports, extracts medical information using EasyOCR, structures data with LLM-powered parsing (Qwen 2.5 via Ollama), retrieves trusted knowledge using Retrieval-Augmented Generation with ChromaDB, and provides patient-friendly explanations, automatic summarization, and personalized nutrition recommendations. The system is built on a modular multi-agent LangGraph architecture where specialized agents collaborate — PDF Reader / OCR Agent → Parser Agent → RAG Agent → Explanation Agent → Summary Agent → Nutrition Agent — with conversation memory via LangGraph MemorySaver and a modern React + TypeScript frontend dashboard.",
      techStack: ["Python", "FastAPI", "LangGraph", "LangChain", "Ollama", "Qwen 2.5 (7B)", "ChromaDB", "HuggingFace Embeddings", "EasyOCR", "PyPDF", "React", "TypeScript", "Vite", "RAG", "Vector Embeddings"],
      github: "https://github.com/prachikkk101/MediAssist-AI",
      live: "#",
      features: [
        "EasyOCR integration for scanned PDF/image report extraction (JPG, PNG, PDF support).",
        "6-stage LangGraph multi-agent pipeline: OCR → Parse → RAG → Explain → Summarize → Nutrition.",
        "ChromaDB vector store with HuggingFace embeddings for medical knowledge retrieval.",
        "Qwen 2.5 (7B) local LLM via Ollama for privacy-safe, patient-friendly medical explanations.",
        "Personalized nutrition & lifestyle recommendations generated per report findings.",
        "Conversation memory with LangGraph MemorySaver for contextual multi-turn interactions.",
        "Modern React + TypeScript responsive dashboard and chat interface via Vite.",
      ],
      color: "from-rose-500/20 to-red-500/10",
      border: "border-rose-500/20",
      accent: "bg-rose-500/10 text-rose-400",
    },
    {
      id: 8,
      title: "GPT-2 Transformer from Scratch",
      category: "AI & Fullstack",
      shortDescription: "Pure PyTorch from-scratch recreation of the GPT-2 decoder-only Transformer — covering multi-head self-attention, causal masking, autoregressive training, and probabilistic text generation.",
      fullDescription: "GPT-2 Transformer from Scratch is a deep learning project that manually recreates the complete decoder-only Transformer architecture introduced by OpenAI using pure PyTorch. Built entirely from first principles — covering token embeddings, learnable positional encoding, multi-head causal self-attention with Q/K/V matrices, scaled dot-product attention, causal masking, residual connections, layer normalization, feed-forward MLP blocks, cross-entropy training, backpropagation, and autoregressive text generation. The project was implemented across 10 sequential phases: Data Preparation → Tokenization → Embedding Layers → Multi-Head Attention → Causal Masking → Transformer Decoder Blocks → Model Training → Text Generation → Inference Pipeline → GPU Optimization. Text generation supports Greedy Decoding, Temperature Sampling, Top-k Sampling, and Top-p (Nucleus) Sampling. Fully GPU-accelerated via CUDA-compatible PyTorch tensor operations.",
      techStack: ["Python", "PyTorch", "GPT-2 Architecture", "Multi-Head Attention", "Causal Masking", "Transformer Architecture", "Autoregressive LM", "Top-k / Top-p Sampling", "GPU / CUDA", "NLP", "Tokenization", "Cross Entropy Loss"],
      github: "https://github.com/prachikkk101/gpt2-llm-model-",
      live: "#",
      features: [
        "Complete GPT-2 decoder-only Transformer built from scratch — no pretrained libraries used.",
        "Multi-head causal self-attention with Q, K, V matrices and scaled dot-product attention.",
        "Causal masking preventing future token leakage during autoregressive training.",
        "Residual connections + layer normalization + dropout for stable deep transformer training.",
        "Token embeddings + learnable positional embeddings for sequence position encoding.",
        "10-phase pipeline: Data Prep → Tokenization → Embeddings → Attention → Masking → Decoder Blocks → Training → Generation → Inference → GPU Optimization.",
        "Text generation with Greedy, Temperature, Top-k, and Top-p (Nucleus) Sampling strategies.",
        "GPU-accelerated training and inference via CUDA-compatible PyTorch tensor operations.",
      ],
      color: "from-purple-500/20 to-pink-500/10",
      border: "border-purple-500/20",
      accent: "bg-purple-500/10 text-purple-400",
    },
    {
      id: 6,
      title: "Disease Predictor – Precision Spraying AI",
      category: "AI & Fullstack",
      shortDescription: "Ongoing AI precision agriculture system — EfficientNet-B0 rice disease classifier (97.27% accuracy) being extended with YOLO localization, segmentation, and IoT-based automated pesticide spraying.",
      fullDescription: "Disease Predictor is an AI-driven precision agriculture project focused on reducing pesticide usage, farming costs, and environmental impact by identifying diseased rice plants and enabling targeted pesticide spraying. The current implementation uses transfer learning with EfficientNet-B0 to classify rice plant diseases from leaf images across 10 disease categories — achieving 97.27% test accuracy on a merged Kaggle + Mendeley dataset. Future phases will integrate YOLO for disease localization, semantic segmentation for infection severity estimation, and IoT-based hardware (cameras, microcontrollers, pumps) for automated precision spraying. Edge AI deployment on Raspberry Pi / NVIDIA Jetson is planned for real-world field use.",
      techStack: ["Python", "PyTorch", "EfficientNet-B0", "Transfer Learning", "CNNs", "OpenCV", "Albumentations", "AdamW", "CosineAnnealingLR", "YOLO (planned)", "FastAPI (planned)", "Edge AI (planned)"],
      github: "https://github.com/prachikkk101/disease-predictor.git",
      live: "#",
      features: [
        "EfficientNet-B0 transfer learning classifier across 10 rice disease categories — 97.27% test accuracy.",
        "Unified dataset built by merging Kaggle & Mendeley datasets with advanced augmentation (Albumentations).",
        "Confidence-based disease prediction pipeline with confusion matrix evaluation and domain shift analysis.",
        "AdamW optimizer + CosineAnnealingLR scheduler + label smoothing + early stopping for robust training.",
        "Planned: YOLO localization → semantic segmentation → AI treatment recommendation engine.",
        "Planned: IoT hardware integration (cameras, microcontrollers, pumps) for automated field spraying.",
        "Planned: Edge AI deployment on Raspberry Pi / NVIDIA Jetson for real-time field inference.",
      ],
      color: "from-emerald-500/20 to-green-500/10",
      border: "border-emerald-500/20",
      accent: "bg-emerald-500/10 text-emerald-400",
    },
    {
      id: 7,
      title: "YouTube Q&A RAG Model",
      category: "AI & Fullstack",
      shortDescription: "Conversational question-answering tool leveraging RAG to answer queries based on YouTube video transcripts.",
      fullDescription: "RAG Model is an intelligent conversational search assistant designed to answer queries by retrieving relevant transcript context from YouTube videos. The system uses the YouTube Transcript API to download textual content, partitions and indexes it using vector databases, and employs Retrieval-Augmented Generation (RAG) to generate responses via LLM APIs.",
      techStack: ["Python", "RAG", "LangChain", "Vector DB", "LLM APIs", "YouTube API"],
      github: "https://github.com/prachikkk101/Rag-model",
      live: "#",
      features: [
        "Automated transcript fetching and parsing from YouTube video links.",
        "Semantic chunking and text vectorization with high-efficiency embeddings.",
        "Precision question-answering with citation and reference context lookup.",
      ],
      color: "from-blue-500/20 to-cyan-500/10",
      border: "border-blue-500/20",
      accent: "bg-blue-500/10 text-blue-400",
    },
    {
      id: 1,
      title: "AI Shop – Full Stack AI E-Commerce",
      category: "AI & Fullstack",
      shortDescription: "Full-stack MERN e-commerce platform with a Google Gemini AI shopping assistant, persistent cart, dynamic catalog, and cloud deployment.",
      fullDescription: "AI Shop is a full-stack AI-powered e-commerce platform combining a modern shopping experience with an intelligent conversational assistant. It features a dynamic product catalog with category and tag filtering, persistent shopping cart with real-time updates, smart product search, and an AI chatbot powered by the Google Gemini API for personalized recommendations and instant customer support. Built on a complete MERN architecture with separate frontend (Vercel) and backend (Render) deployments, offering a scalable responsive experience across devices.",
      techStack: ["React", "JavaScript", "CSS", "React Router", "Node.js", "Express.js", "MongoDB", "Mongoose", "Google Gemini API"],
      github: "https://github.com/prachikkk101/AI_shop",
      live: "https://ai-shop-lac.vercel.app",
      features: [
        "AI shopping assistant powered by Google Gemini API for personalized recommendations and support.",
        "Persistent shopping cart with real-time updates and global state management.",
        "Dynamic product catalog with category, tag filtering, and smart search.",
        "Context-aware chatbot for customer support and product queries.",
        "RESTful backend APIs with Node.js, Express.js, and MongoDB/Mongoose.",
        "Fully responsive UI optimized for desktop and mobile via React Router.",
        "Independent frontend deployment on Vercel and backend on Render.",
      ],
      color: "from-violet-500/20 to-indigo-500/10",
      border: "border-violet-500/20",
      accent: "bg-violet-500/10 text-violet-400",
    },
    {
      id: 13,
      title: "Duplicate Question Detector",
      category: "AI & Fullstack",
      shortDescription: "NLP similarity classifier identifying semantically identical question pairs using the Quora dataset.",
      fullDescription: "Duplicate Question Pairs is a machine learning text classifier trained on the Quora Question Pairs dataset. It analyzes pairs of questions to detect if they convey duplicate semantic meaning. Features text tokenization, string metrics, semantic similarity scoring, and tree-based classifiers for duplicate detection.",
      techStack: ["Python", "NLP", "Semantic Similarity", "XGBoost", "Feature Engineering", "Scikit-Learn"],
      github: "https://github.com/prachikkk101/duplicate-question-pairs",
      live: "#",
      features: [
        "Advanced text preprocessing (tokenization, word counts, character counts).",
        "String matching metrics (FuzzyWuzzy, Cosine Similarity, Jaccard distance).",
        "Supervised classification modeling with XGBoost trees achieving high AUC-ROC scores.",
      ],
      color: "from-fuchsia-500/20 to-purple-500/10",
      border: "border-fuchsia-500/20",
      accent: "bg-fuchsia-500/10 text-fuchsia-400",
    },
    {
      id: 9,
      title: "Movie Genre Predictor",
      category: "AI & Fullstack",
      shortDescription: "NLP model classifying movie genres from textual plots and descriptions.",
      fullDescription: "Movie Genre Predictor is a natural language processing (NLP) application engineered to predict movie genres based on textual plot synopsis data. Implementing robust preprocessing (lemmatization, stopword removal), TF-IDF vectorizers, and supervised machine learning classifiers, it models multi-label classification to map narratives to respective film genres.",
      techStack: ["Python", "NLP", "Scikit-Learn", "TF-IDF", "Machine Learning", "Text Preprocessing"],
      github: "https://github.com/prachikkk101/movie_genre-predictor",
      live: "#",
      features: [
        "Advanced text preprocessing pipeline utilizing NLTK or SpaCy.",
        "TF-IDF vectorizer matrix transformation for feature representation.",
        "Multi-label classification evaluating logistic regression and tree ensembles.",
      ],
      color: "from-teal-500/20 to-emerald-500/10",
      border: "border-teal-500/20",
      accent: "bg-teal-500/10 text-teal-400",
    },
    {
      id: 12,
      title: "Cat vs Dog Classifier",
      category: "AI & Fullstack",
      shortDescription: "Binary image classification CNN model designed to differentiate cats and dogs in visual data.",
      fullDescription: "A binary image classifier trained using Convolutional Neural Networks (CNNs) in PyTorch to classify input images as either a cat or a dog. Features custom dataset loaders, real-time image augmentation pipelines to minimize overfitting, and deployment utilities for testing individual images.",
      techStack: ["Python", "PyTorch", "CNN", "Computer Vision", "Image Augmentation", "Matplotlib"],
      github: "https://github.com/prachikkk101/cat-vs-dog-classifier",
      live: "#",
      features: [
        "Custom convolutional blocks (convolution, pooling, dropout) optimized for feature extraction.",
        "Robust image preprocessing pipelines including resizing, cropping, and color jittering.",
        "Dynamic inference script supporting single image inputs.",
      ],
      color: "from-indigo-500/20 to-sky-500/10",
      border: "border-indigo-500/20",
      accent: "bg-indigo-500/10 text-indigo-400",
    },
    {
      id: 10,
      title: "MNIST Digit Recognizer",
      category: "AI & Fullstack",
      shortDescription: "Deep neural network classifier built to recognize handwritten digits from the MNIST dataset.",
      fullDescription: "This machine learning model addresses the classic MNIST digit recognition benchmark. Built to explore classification optimization, it trains multi-layer feedforward neural networks (or convolutional neural networks) with custom learning rate schedules, backpropagation optimizations, and metrics visualization for loss/accuracy progression.",
      techStack: ["Python", "NumPy", "TensorFlow/Keras", "Deep Learning", "Neural Networks", "Matplotlib"],
      github: "https://github.com/prachikkk101/ml-model",
      live: "#",
      features: [
        "Handwritten digit image classification (0-9) with high validation accuracy.",
        "Evaluation metrics with confusion matrices and misclassification visualization.",
        "Weight initialization and batch normalization layers implementation.",
      ],
      color: "from-orange-500/20 to-red-500/10",
      border: "border-orange-500/20",
      accent: "bg-orange-500/10 text-orange-400",
    },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projectList
      : projectList.filter((p) => p.category === selectedCategory);

  const activeProject = projectList.find((p) => p.id === activeModal);

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-16">
      {/* Intro */}
      <div className="flex flex-col gap-4 text-center max-w-xl mx-auto">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold tracking-wide w-fit mx-auto">
          <Sparkles size={12} /> My Creations
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Portfolio Projects
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
          Explore a curated selection of systems and responsive user interfaces I have designed and engineered.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2">
        <div className="glass px-2 py-1.5 rounded-full flex flex-wrap gap-1 border border-white/5 shadow-inner">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all ${
                selectedCategory === cat
                  ? "bg-violet-600 text-white shadow-md shadow-violet-600/10"
                  : "text-zinc-500 hover:text-zinc-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => setActiveModal(project.id)}
            className={`glass-card rounded-3xl p-6 flex flex-col justify-between gap-6 cursor-pointer border border-white/5 group relative overflow-hidden`}
          >
            {/* Visual Mesh Background */}
            <div className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl ${project.color} blur-2xl rounded-full -z-10 group-hover:scale-125 transition-transform duration-500`} />
            
            <div className="flex flex-col gap-4">
              <h3 className="font-extrabold text-white text-xl tracking-tight leading-snug group-hover:text-emerald-400 transition-colors flex items-center gap-1">
                {project.title} <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed line-clamp-3">
                {project.shortDescription}
              </p>
            </div>

            {/* Bottom info */}
            <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
              {project.techStack.slice(0, 4).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2 py-0.5 rounded bg-zinc-950 border border-white/5 text-[10px] font-semibold text-zinc-500"
                >
                  {tech}
                </span>
              ))}
              {project.techStack.length > 4 && (
                <span className="px-2 py-0.5 rounded bg-zinc-950 border border-white/5 text-[10px] font-semibold text-zinc-500">
                  +{project.techStack.length - 4} more
                </span>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Project Modal Overlay */}
      {activeModal !== null && activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div
            className="w-full max-w-2xl bg-zinc-950 border border-white/10 rounded-3xl p-6 md:p-8 flex flex-col gap-6 max-h-[85vh] overflow-y-auto relative animate-float shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveModal(null)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-white p-2 rounded-full hover:bg-white/5 transition-colors"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            {/* Modal Header */}
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl md:text-3xl font-extrabold text-white pr-8">
                {activeProject.title}
              </h2>
            </div>

            {/* Project Specs */}
            <div className="flex flex-col gap-4 text-sm leading-relaxed">
              <p className="text-zinc-300">
                {activeProject.fullDescription}
              </p>

              {/* Core Features */}
              <div className="flex flex-col gap-2 mt-2">
                <h4 className="font-bold text-white text-sm">Key Implementations:</h4>
                <ul className="list-disc list-inside text-zinc-400 flex flex-col gap-1.5 pl-2">
                  {activeProject.features.map((feat, fIdx) => (
                    <li key={fIdx}>{feat}</li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div className="flex flex-col gap-2 mt-2">
                <h4 className="font-bold text-white text-sm font-sans">Full Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {activeProject.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg bg-zinc-900 border border-white/5 text-xs text-zinc-400 font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap gap-4 pt-6 border-t border-white/5 mt-2">
              <a
                href={activeProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-zinc-900 hover:bg-zinc-800 border border-white/10 hover:border-white/20 text-white font-semibold rounded-full flex items-center gap-2 text-sm transition-all"
              >
                <Github size={16} /> Code Repository
              </a>
              {activeProject.live !== "#" && (
                <a
                  href={activeProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold rounded-full flex items-center gap-2 text-sm transition-all shadow-lg shadow-violet-500/10"
                >
                  <ExternalLink size={16} /> Live Preview
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
