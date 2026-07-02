import React from "react";
import Link from "next/link";
import { ArrowRight, Code2, Cpu, FileText, Sparkles, Smartphone, Mail, ExternalLink } from "lucide-react";

export default function Home() {
  return (
    <div className="w-full max-w-6xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-16 md:gap-24">
      
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="flex-1 flex flex-col gap-6 text-center md:text-left items-center md:items-start">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold tracking-wide">
            <Sparkles size={12} /> Available for Freelance & Full-time
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight text-white">
            Hi, I'm <span className="text-gradient-purple-teal">Prachi Khandelwal</span>
          </h1>
          
          <p className="text-lg sm:text-xl font-medium text-zinc-400 max-w-xl leading-relaxed">
            I'm Prachi, a Computer Science student at VIT Chennai who enjoys building projects, solving problems, and exploring new technologies through hands-on learning.
          </p>
          
          <div className="flex flex-wrap gap-4 mt-2 justify-center md:justify-start">
            <Link
              href="/projects"
              className="px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white rounded-full font-semibold shadow-lg hover:shadow-violet-500/10 flex items-center gap-2 group transition-all"
            >
              Explore Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a
              href="/cv.txt"
              target="_blank"
              className="px-6 py-3 bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white border border-white/10 hover:border-white/20 rounded-full font-semibold flex items-center gap-2 transition-all"
            >
              <FileText size={16} /> Resume
            </a>
            
            <Link
              href="/contact"
              className="px-6 py-3 bg-transparent hover:bg-white/5 text-zinc-400 hover:text-white rounded-full font-semibold border border-transparent hover:border-white/5 transition-all"
            >
              Contact Me
            </Link>
          </div>
        </div>

        {/* Hero Interactive Illustration */}
        <div className="flex-1 flex justify-center items-center relative max-w-md w-full">
          {/* Animated decorative circles */}
          <div className="absolute inset-0 bg-gradient-to-tr from-violet-600/20 to-emerald-500/20 rounded-full blur-3xl -z-10 animate-pulse-slow" />
          
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl glass-card flex items-center justify-center p-6 border border-white/10 group">
            {/* Custom SVG Avatar representation */}
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full text-violet-500 transition-transform duration-500 group-hover:scale-105"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Grid Background */}
              <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                  <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255, 255, 255, 0.05)" strokeWidth="1" />
                </pattern>
                <linearGradient id="grad-shield" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#10b981" />
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" rx="20" />
              
              {/* Inner details representing technology */}
              <circle cx="100" cy="100" r="60" stroke="url(#grad-shield)" strokeWidth="2" strokeDasharray="5 5" className="animate-spin" style={{ animationDuration: "30s" }} />
              <circle cx="100" cy="100" r="45" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
              
              {/* Floating tech nodes */}
              <circle cx="45" cy="55" r="8" fill="#7c3aed" className="animate-bounce" style={{ animationDelay: "0.2s" }} />
              <circle cx="155" cy="145" r="6" fill="#10b981" className="animate-bounce" style={{ animationDelay: "0.8s" }} />
              <circle cx="145" cy="65" r="10" fill="#6366f1" className="animate-bounce" style={{ animationDelay: "0.5s" }} />
              
              {/* Core Symbol */}
              <path
                d="M85 85L70 100L85 115M115 85L130 100L115 115M105 80L95 120"
                stroke="url(#grad-shield)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            
            {/* Absolute Badges */}
            <div className="absolute -bottom-4 -left-4 glass px-4 py-2 rounded-xl flex items-center gap-2 border border-white/10 shadow-lg">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-white">Chennai, IN</span>
            </div>
            
            <div className="absolute -top-4 -right-4 glass px-4 py-2 rounded-xl flex items-center gap-2 border border-white/10 shadow-lg">
              <Cpu size={14} className="text-violet-400" />
              <span className="text-xs font-semibold text-white">Python/PyTorch/AI</span>
            </div>
          </div>
        </div>
      </section>



      {/* Pinned Featured Project Banner — MediAssist AI Portal */}
      <section className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden border border-rose-500/20 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-rose-900/10 via-red-900/5 to-transparent -z-10" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600/5 rounded-full blur-3xl -z-10" />

        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-rose-400 bg-rose-500/10 border border-rose-500/20 px-3 py-1 rounded-full">📌 Pinned Project</span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 bg-zinc-800/50 border border-white/5 px-3 py-1 rounded-full">Multi-Agent AI · Healthcare</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">🏥 MediAssist AI Portal</h3>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-2xl">
              An end-to-end AI healthcare assistant that processes medical reports (PDF/images) through a 6-stage LangGraph multi-agent pipeline — OCR extraction, LLM parsing, RAG retrieval, patient-friendly explanation, auto-summarization, and personalized nutrition recommendations. Powered locally by Qwen 2.5 (7B) via Ollama with ChromaDB vector search.
            </p>
          </div>
          <div className="flex flex-col gap-3 flex-shrink-0">
            <a
              href="https://github.com/prachikkk101/MediAssist-AI"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors shadow-xl flex items-center gap-1.5 text-sm"
            >
              GitHub Repo <ExternalLink size={14} />
            </a>
            <Link
              href="/projects"
              className="px-6 py-3 bg-rose-600/10 hover:bg-rose-600/20 text-rose-300 font-semibold rounded-full border border-rose-500/20 transition-colors flex items-center gap-1.5 text-sm justify-center"
            >
              Full Details <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        {/* Pipeline Flow */}
        <div className="flex flex-col gap-4 mb-8">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-500">6-Stage Agent Pipeline</span>
          <div className="flex flex-wrap items-center gap-2">
            {["📄 OCR Agent", "🧠 Parser Agent", "📚 RAG Agent", "💬 Explain Agent", "📋 Summary Agent", "🥗 Nutrition Agent"].map((step, i, arr) => (
              <React.Fragment key={step}>
                <span className="px-3 py-1.5 rounded-lg bg-zinc-900 border border-white/5 text-xs text-zinc-300 font-semibold">{step}</span>
                {i < arr.length - 1 && <span className="text-zinc-600 text-xs">→</span>}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {["Python", "FastAPI", "LangGraph", "LangChain", "Ollama", "Qwen 2.5 (7B)", "ChromaDB", "HuggingFace Embeddings", "EasyOCR", "PyPDF", "React", "TypeScript", "Vite", "RAG"].map((t) => (
            <span key={t} className="px-2.5 py-1 rounded bg-zinc-900 border border-white/5 text-[11px] text-zinc-400 font-semibold">{t}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
