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
          
          <p className="text-lg sm:text-xl font-medium text-zinc-400 max-w-lg">
            AI/ML Engineer, Data Scientist & Problem Solver. Building intelligent models & smart web integrations.
          </p>

          <p className="text-zinc-500 text-sm max-w-md">
            Based in Pune, India. Student at VIT Chennai. Passionate about training neural networks, fine-tuning LLMs, designing intelligent systems, and writing high-performance code. Powered by coffee ☕
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
              <span className="text-xs font-semibold text-white">Pune, IN</span>
            </div>
            
            <div className="absolute -top-4 -right-4 glass px-4 py-2 rounded-xl flex items-center gap-2 border border-white/10 shadow-lg">
              <Cpu size={14} className="text-violet-400" />
              <span className="text-xs font-semibold text-white">Python/PyTorch/AI</span>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Dashboard Grid */}
      <section className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">At A Glance</h2>
          <p className="text-sm text-zinc-500">Quick highlights of my engineering workflow and focus areas.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: AI Shop */}
          <div className="glass-card p-6 rounded-2xl flex flex-col justify-between gap-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-violet-600/10 to-transparent rounded-full -z-10" />
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                <Cpu size={20} />
              </div>
              <h3 className="font-bold text-white text-base">Featured Project</h3>
              <p className="text-xs text-zinc-400 line-clamp-3">
                AI Shop - An e-commerce platform with an LLM Chatbot support integration.
              </p>
            </div>
            <Link href="/projects" className="text-xs font-semibold text-violet-400 hover:text-white flex items-center gap-1 group-hover:translate-x-1 transition-all mt-2">
              View Details <ArrowRight size={12} />
            </Link>
          </div>

          {/* Card 2: AI/ML Engineering */}
          <div className="glass-card p-6 rounded-2xl flex flex-col justify-between gap-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-600/10 to-transparent rounded-full -z-10" />
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <Cpu size={20} />
              </div>
              <h3 className="font-bold text-white text-base">AI/ML Engineering</h3>
              <p className="text-xs text-zinc-400 line-clamp-3">
                Training predictive models, designing custom neural nets, and integrating intelligent LLM APIs.
              </p>
            </div>
            <Link href="/projects" className="text-xs font-semibold text-emerald-400 hover:text-white flex items-center gap-1 group-hover:translate-x-1 transition-all mt-2">
              See Projects <ArrowRight size={12} />
            </Link>
          </div>

          {/* Card 3: DSA Problem Solver */}
          <div className="glass-card p-6 rounded-2xl flex flex-col justify-between gap-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-600/10 to-transparent rounded-full -z-10" />
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Code2 size={20} />
              </div>
              <h3 className="font-bold text-white text-base">Problem Solving</h3>
              <p className="text-xs text-zinc-400 line-clamp-3">
                Keen problem solver, active on LeetCode/GeeksforGeeks, specialized in complex algorithms.
              </p>
            </div>
            <Link href="/intro" className="text-xs font-semibold text-indigo-400 hover:text-white flex items-center gap-1 group-hover:translate-x-1 transition-all mt-2">
              See Skills <ArrowRight size={12} />
            </Link>
          </div>

          {/* Card 4: Coffee Stats */}
          <div className="glass-card p-6 rounded-2xl flex flex-col justify-between gap-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-teal-600/10 to-transparent rounded-full -z-10" />
            <div className="flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-600/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                ☕
              </div>
              <h3 className="font-bold text-white text-base">Philosophy</h3>
              <p className="text-xs text-zinc-400 line-clamp-3">
                Combining high-caffeine efficiency with clean component-driven React architectures.
              </p>
            </div>
            <Link href="/contact" className="text-xs font-semibold text-teal-400 hover:text-white flex items-center gap-1 group-hover:translate-x-1 transition-all mt-2">
              Hire Me <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Highlight Banner */}
      <section className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-900/10 to-emerald-900/5 -z-10" />
        <div className="flex flex-col gap-4 max-w-xl text-center md:text-left items-center md:items-start">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">E-Commerce & Artificial Intelligence</span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">AI Shop Project Integration</h3>
          <p className="text-zinc-400 text-sm leading-relaxed">
            I built a fully functional store dashboard with shopping cart state and an LLM chatbot support agent that can guide users on product recommendations, answer FAQs, and complete actions inline.
          </p>
          <div className="flex gap-3 text-xs text-zinc-500 font-semibold mt-1">
            <span className="px-2 py-1 rounded bg-zinc-900 border border-white/5">Next.js</span>
            <span className="px-2 py-1 rounded bg-zinc-900 border border-white/5">Tailwind v4</span>
            <span className="px-2 py-1 rounded bg-zinc-900 border border-white/5">LLM Chatbot API</span>
          </div>
        </div>
        <div className="flex gap-4">
          <Link
            href="/projects"
            className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-zinc-200 transition-colors shadow-xl flex items-center gap-1.5 text-sm"
          >
            Case Study <ExternalLink size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
