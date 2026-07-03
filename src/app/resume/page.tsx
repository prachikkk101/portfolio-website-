import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Resume() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12 md:py-16 flex flex-col gap-6">
      {/* Back button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-zinc-400 hover:text-white text-sm font-medium transition-colors w-fit"
      >
        <ArrowLeft size={16} /> Back to Portfolio
      </Link>

      {/* Resume Document */}
      <div className="bg-white text-black rounded-2xl shadow-2xl overflow-hidden print:shadow-none print:rounded-none">
        <div className="px-8 md:px-12 py-8 md:py-10 flex flex-col gap-0">

          {/* ===== HEADER ===== */}
          <div className="text-center border-b-2 border-orange-500 pb-5">
            <h1 className="text-3xl md:text-4xl font-bold text-black tracking-tight">Prachi Khandelwal</h1>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 mt-3 text-[11px] md:text-xs text-gray-700">
              <a href="mailto:khandelwalprachi42@gmail.com" className="hover:text-orange-600 transition-colors">
                ✉ khandelwalprachi42@gmail.com
              </a>
              <span className="text-gray-400">|</span>
              <a href="tel:+917878148960" className="hover:text-orange-600 transition-colors">
                📞 +91 7878148960
              </a>
              <span className="text-gray-400">|</span>
              <span>🌐 prachi-ai.dev</span>
              <span className="text-gray-400">|</span>
              <a href="https://linkedin.com/in/prachi-khandelwal" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors">
                🔗 linkedin.com/in/prachi-khandelwal
              </a>
              <span className="text-gray-400">|</span>
              <a href="https://github.com/prachikkk101" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors">
                💻 /prachikkk101
              </a>
              <span className="text-gray-400">|</span>
              <a href="https://leetcode.com/prachi1234" target="_blank" rel="noopener noreferrer" className="hover:text-orange-600 transition-colors">
                ⌨ leetcode.com/prachi1234
              </a>
            </div>
            <p className="text-[11px] md:text-xs text-gray-600 italic mt-3 leading-relaxed max-w-3xl mx-auto">
              Innovative AI/ML Developer specializing in Python, PyTorch, LangGraph, and RAG systems, with demonstrated expertise in multi-agent architectures, LLM integration, and deep learning engineered from first principles. Architected and developed MediAssist AI Portal, GPT-2 Transformer from Scratch, and Disease Predictor — a precision agriculture AI achieving 97.27% classification accuracy. Former Intern at Oxygen Protech Pvt. Ltd. Passionate about building and optimizing scalable, real-world AI systems that bridge deep technical fundamentals with practical impact.
            </p>
          </div>

          {/* ===== SKILLS + EDUCATION (Side by Side) ===== */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-5">
            {/* Skills */}
            <div>
              <h2 className="text-sm font-bold text-orange-600 uppercase tracking-wider border-b border-orange-200 pb-1 mb-3">Skills</h2>
              <ul className="text-[11px] md:text-xs text-gray-800 space-y-1.5 leading-relaxed">
                <li><span className="font-bold">AI/ML &amp; DL:</span> PyTorch, TensorFlow, Scikit-learn, CNNs, ANN, YOLO, EfficientNet-B0, OpenCV</li>
                <li><span className="font-bold">GenAI &amp; NLP:</span> RAG, LangChain, LangGraph, Transformers, LLM pipelines, FastAPI</li>
                <li><span className="font-bold">Languages:</span> Python, C/C++, Java, OOPs, Data Structures &amp; Algorithms (DSA)</li>
                <li><span className="font-bold">Web Dev:</span> HTML, CSS, JavaScript (ES6+), React.js, Tailwind CSS, PostgreSQL, MongoDB</li>
                <li><span className="font-bold">Tools:</span> Git, GitHub, Postman, NPM, Linux / CLI</li>
              </ul>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-sm font-bold text-orange-600 uppercase tracking-wider border-b border-orange-200 pb-1 mb-3">Education</h2>
              <div className="text-[11px] md:text-xs text-gray-800 space-y-2.5">
                <div>
                  <div className="flex justify-between items-start">
                    <span className="font-bold">Vellore Institute of Technology</span>
                    <span className="text-gray-500 shrink-0 ml-2">July 2024 - Present</span>
                  </div>
                  <p>B.Tech in CSE (Cyber Physical Systems) — <span className="font-semibold">CGPA: 8.2/10</span></p>
                </div>
                <div>
                  <div className="flex justify-between items-start">
                    <span className="font-bold">Central Academy Ambabari, Jaipur</span>
                    <span className="text-gray-500 shrink-0 ml-2">2022 - 2024</span>
                  </div>
                  <p>Class XII (CBSE) — <span className="font-semibold">Aggregate: 82%</span></p>
                </div>
                <div>
                  <div className="flex justify-between items-start">
                    <span className="font-bold">St. Angela Sophia Sr. Sec. School, Jaipur</span>
                    <span className="text-gray-500 shrink-0 ml-2">2020 - 2022</span>
                  </div>
                  <p>Class X (CBSE) — <span className="font-semibold">Aggregate: 92%</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* ===== WORK EXPERIENCE ===== */}
          <div className="mt-5">
            <h2 className="text-sm font-bold text-orange-600 uppercase tracking-wider border-b border-orange-200 pb-1 mb-3">Work Experience</h2>
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <h3 className="font-bold text-xs md:text-sm text-black">Web Development Intern (Remote) – Oxygen Protech Pvt. Ltd.</h3>
                <span className="text-[11px] text-gray-500 italic shrink-0 sm:ml-2">May 2026 - June 2026</span>
              </div>
              <ul className="list-disc list-outside ml-4 mt-1.5 text-[11px] md:text-xs text-gray-700 space-y-1 leading-relaxed">
                <li>Engineered responsive and high-performance frontend interfaces using React.js and Tailwind CSS, improving layout consistency and application responsiveness across device breakpoints.</li>
                <li>Conceptualized and structured robust client-server API integrations, utilizing modern JavaScript (ES6+) paradigms to streamline dynamic asynchronous data streams and optimize frontend states.</li>
                <li>Collaborated closely within technical workflows leveraging Git and GitHub for version control, while managing routine back-end routing configurations and continuous interface iterations.</li>
              </ul>
            </div>
          </div>

          {/* ===== PROJECTS ===== */}
          <div className="mt-5">
            <h2 className="text-sm font-bold text-orange-600 uppercase tracking-wider border-b border-orange-200 pb-1 mb-3">Projects</h2>
            <div className="space-y-4">
              {/* MediAssist AI */}
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <h3 className="font-bold text-xs md:text-sm text-black">MediAssist AI – Multi-Agent Healthcare Portal</h3>
                  <a href="https://github.com/prachikkk101/MediAssist-AI" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 text-[11px] italic font-medium shrink-0 sm:ml-2 transition-colors">
                    Source Code ↗
                  </a>
                </div>
                <ul className="list-disc list-outside ml-4 mt-1 text-[11px] md:text-xs text-gray-700 space-y-1 leading-relaxed">
                  <li>Engineered a multi-agent healthcare AI pipeline using LangGraph to translate complex medical reports into clear, patient-friendly explanations.</li>
                  <li>Implemented a RAG system with ChromaDB and a locally-hosted Qwen 2.5 (7B) LLM via Ollama for privacy-safe medical insights.</li>
                  <li>Built a full-stack solution with FastAPI and React + TypeScript, featuring EasyOCR extraction and contextual multi-turn conversation memory.</li>
                </ul>
              </div>

              {/* GPT-2 Transformer */}
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <h3 className="font-bold text-xs md:text-sm text-black">GPT-2 Transformer from Scratch</h3>
                  <a href="https://github.com/prachikkk101/gpt2-llm-model-" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 text-[11px] italic font-medium shrink-0 sm:ml-2 transition-colors">
                    Source Code ↗
                  </a>
                </div>
                <ul className="list-disc list-outside ml-4 mt-1 text-[11px] md:text-xs text-gray-700 space-y-1 leading-relaxed">
                  <li>Architected a GPT-2 decoder-only Transformer from scratch in pure PyTorch to deepen practical understanding of core LLM internals.</li>
                  <li>Implemented multi-head causal self-attention with Q/K/V matrices, scaled dot-product attention, and causal masking for stable training.</li>
                  <li>Developed a 10-phase training/inference pipeline with GPU-accelerated generation, supporting Greedy, Temperature, Top-k, and Top-p sampling.</li>
                </ul>
              </div>

              {/* Disease Predictor */}
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <h3 className="font-bold text-xs md:text-sm text-black">Disease Predictor – Precision Agriculture AI System</h3>
                  <a href="https://github.com/prachikkk101/disease-predictor.git" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 text-[11px] italic font-medium shrink-0 sm:ml-2 transition-colors">
                    Source Code ↗
                  </a>
                </div>
                <ul className="list-disc list-outside ml-4 mt-1 text-[11px] md:text-xs text-gray-700 space-y-1 leading-relaxed">
                  <li>Built an AI-driven precision agriculture solution to reduce pesticide overuse via targeted disease detection in rice plants.</li>
                  <li>Developed an EfficientNet-B0 classifier on a merged Kaggle + Mendeley dataset, achieving 97.27% test accuracy across 10 disease categories.</li>
                  <li>Designed a scalable roadmap for real-world deployment, integrating YOLO localization and Edge AI inference on Raspberry Pi/Jetson.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* ===== ACHIEVEMENTS ===== */}
          <div className="mt-5">
            <h2 className="text-sm font-bold text-orange-600 uppercase tracking-wider border-b border-orange-200 pb-1 mb-3">Achievements</h2>
            <div className="space-y-2.5 text-[11px] md:text-xs text-gray-700">
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <p>
                    <span className="mr-1">🏆</span>
                    <span className="font-bold text-black">Millennium Fellow</span> — <span className="italic">United Nations and Millennium Campus Network</span>
                  </p>
                  <span className="text-gray-500 font-semibold shrink-0 sm:ml-2">2026</span>
                </div>
                <p className="ml-5 leading-relaxed">Handpicked from a global pool of 60,000+ competitive applicants (top 4% acceptance rate) to lead a specialized fellowship project directly advancing the UN Sustainable Development Goals.</p>
              </div>
              <div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                  <p>
                    <span className="mr-1">🏆</span>
                    <span className="font-bold text-black">Round 2 Qualifier</span> — <span className="italic">Glytch Hackathon, VIT Chennai</span>
                  </p>
                  <span className="text-gray-500 font-semibold shrink-0 sm:ml-2">2026</span>
                </div>
                <p className="ml-5 leading-relaxed">Competed on a critical Smart India Hackathon (SIH) problem statement focusing on designing architectural software tools for solving rural healthcare access challenges.</p>
              </div>
            </div>
          </div>

          {/* ===== POSITIONS OF RESPONSIBILITY ===== */}
          <div className="mt-5 pb-2">
            <h2 className="text-sm font-bold text-orange-600 uppercase tracking-wider border-b border-orange-200 pb-1 mb-3">Positions of Responsibility</h2>
            <div className="text-[11px] md:text-xs text-gray-700">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start">
                <h3 className="font-bold text-black">Projects Lead @ HackClub, VIT Chennai</h3>
                <span className="text-gray-500 font-semibold shrink-0 sm:ml-2">2025 – Present</span>
              </div>
              <ul className="list-disc list-outside ml-4 mt-1 space-y-1 leading-relaxed">
                <li>Led the Web Development and App Development departments as Projects Lead at HackClub VIT Chennai, driving technical project execution and collaborating with cross-functional student teams to deliver impactful projects.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* Print / Download hint */}
      <p className="text-center text-zinc-500 text-xs">
        💡 Press <kbd className="px-1.5 py-0.5 bg-zinc-800 border border-white/10 rounded text-zinc-300 font-mono text-[10px]">Ctrl + P</kbd> to save as PDF
      </p>
    </div>
  );
}
