"use client";

import React, { useEffect, useRef } from "react";
import { User, GraduationCap, Cpu, Sparkles, BrainCircuit, Globe, Mail } from "lucide-react";

function InteractiveNodes() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
    }> = [];

    const particleCount = 20;
    const connectionDistance = 90;
    const mouse = { x: -1000, y: -1000 };

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("resize", handleResize);
    const container = containerRef.current;
    if (container) {
      container.addEventListener("mousemove", handleMouseMove);
      container.addEventListener("mouseleave", handleMouseLeave);
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw connection lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.12;
            ctx.strokeStyle = `rgba(139, 92, 246, ${alpha})`; // Violet connection
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Draw line to cursor if nearby
        if (mouse.x > 0) {
          const mDist = Math.hypot(p1.x - mouse.x, p1.y - mouse.y);
          if (mDist < connectionDistance * 1.4) {
            const alpha = (1 - mDist / (connectionDistance * 1.4)) * 0.22;
            ctx.strokeStyle = `rgba(16, 185, 129, ${alpha})`; // Emerald tracking line
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }

        // Render nodes
        ctx.fillStyle = "rgba(255, 255, 255, 0.35)";
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fill();

        // Update positions
        p1.x += p1.vx;
        p1.y += p1.vy;

        // Bounce
        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove);
        container.removeEventListener("mouseleave", handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-auto">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-50" />
    </div>
  );
}

export default function Intro() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-12 md:py-20 flex flex-col gap-12">
      
      {/* Page Header */}
      <div className="flex flex-col gap-4 text-center md:text-left max-w-xl">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide w-fit">
          <Sparkles size={12} /> My Profile
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          About Me
        </h1>
      </div>

      {/* Main Biography Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        
        {/* Left Bio Section (2 columns wide on desktop) */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <div className="glass-card p-6 md:p-8 rounded-3xl flex flex-col gap-6 border border-white/5 relative overflow-hidden group min-h-[350px]">
            <InteractiveNodes />
            
            <div className="relative z-10 flex flex-col gap-2">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <BrainCircuit size={18} className="text-emerald-400" />
                Model Training Terminal
              </h2>
              <p className="text-xs text-zinc-400">Interactive workspace visualizing real-time pipeline telemetry & neural architectures.</p>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
              {/* Terminal Code Mock */}
              <div className="rounded-2xl bg-zinc-950/80 border border-white/5 p-4 font-mono text-[10px] text-zinc-400 flex flex-col gap-2 shadow-inner">
                <div className="flex items-center gap-1.5 pb-2 border-b border-white/5">
                  <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="text-[9px] text-zinc-600 ml-2">train_pipeline.py</span>
                </div>
                <div className="flex flex-col gap-1 mt-1 leading-relaxed text-zinc-300">
                  <p className="text-zinc-500"># Model: EfficientNet-B0 Classifier</p>
                  <p><span className="text-violet-400">import</span> torch, torchvision</p>
                  <p><span className="text-violet-400">import</span> albumentations <span className="text-violet-400">as</span> A</p>
                  <p className="text-zinc-500 mt-1"># Initialize optimization parameters</p>
                  <p>optimizer = torch.optim.AdamW(model.parameters())</p>
                  <p>scheduler = CosineAnnealingLR(optimizer)</p>
                  <p className="text-zinc-500 mt-1"># Telemetry outputs</p>
                  <p className="text-emerald-400 font-semibold">[Epoch 10/10] train_loss: 0.0124 | test_acc: 97.27%</p>
                  <p className="text-zinc-500">&gt;&gt;&gt; model.eval()</p>
                  <p className="text-zinc-500">&gt;&gt;&gt; export_to_onnx(model, fp16=True)</p>
                  <p className="text-violet-400 font-semibold">&gt;&gt;&gt; Pipeline compilation successful. ✓</p>
                </div>
              </div>

              {/* Neural Network SVG representation */}
              <div className="flex items-center justify-center relative rounded-2xl bg-zinc-950/30 border border-white/5 p-4 overflow-hidden">
                <svg viewBox="0 0 160 120" className="w-full h-full text-zinc-600" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#8b5cf6" />
                      <stop offset="100%" stopColor="#10b981" />
                    </linearGradient>
                  </defs>
                  
                  {/* Layer connections */}
                  <line x1="20" y1="30" x2="70" y2="20" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  <line x1="20" y1="30" x2="70" y2="60" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  <line x1="20" y1="30" x2="70" y2="100" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  
                  <line x1="20" y1="60" x2="70" y2="20" stroke="url(#glowGrad)" strokeWidth="1.2" strokeDasharray="3 3" className="animate-pulse" />
                  <line x1="20" y1="60" x2="70" y2="60" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  <line x1="20" y1="60" x2="70" y2="100" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  
                  <line x1="20" y1="90" x2="70" y2="20" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  <line x1="20" y1="90" x2="70" y2="60" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  <line x1="20" y1="90" x2="70" y2="100" stroke="url(#glowGrad)" strokeWidth="1.2" />

                  <line x1="70" y1="20" x2="130" y2="40" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  <line x1="70" y1="20" x2="130" y2="80" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  
                  <line x1="70" y1="60" x2="130" y2="40" stroke="url(#glowGrad)" strokeWidth="1" />
                  <line x1="70" y1="60" x2="130" y2="80" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  
                  <line x1="70" y1="100" x2="130" y2="40" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
                  <line x1="70" y1="100" x2="130" y2="80" stroke="url(#glowGrad)" strokeWidth="1.2" strokeDasharray="4 4" />

                  {/* Nodes circles */}
                  <circle cx="20" cy="30" r="5" fill="#18181b" stroke="#52525b" strokeWidth="1.5" />
                  <circle cx="20" cy="60" r="5" fill="#18181b" stroke="#a78bfa" strokeWidth="1.5" className="animate-ping" style={{ animationDuration: "3s" }} />
                  <circle cx="20" cy="60" r="5" fill="#8b5cf6" stroke="#a78bfa" strokeWidth="1.5" />
                  <circle cx="20" cy="90" r="5" fill="#18181b" stroke="#52525b" strokeWidth="1.5" />

                  <circle cx="70" cy="20" r="5" fill="#18181b" stroke="#52525b" strokeWidth="1.5" />
                  <circle cx="70" cy="60" r="5" fill="#18181b" stroke="#34d399" strokeWidth="1.5" className="animate-pulse" />
                  <circle cx="70" cy="60" r="5" fill="#10b981" stroke="#34d399" strokeWidth="1.5" />
                  <circle cx="70" cy="100" r="5" fill="#18181b" stroke="#52525b" strokeWidth="1.5" />

                  <circle cx="130" cy="40" r="6" fill="#18181b" stroke="#52525b" strokeWidth="1.5" />
                  <circle cx="130" cy="80" r="6" fill="#18181b" stroke="#6366f1" strokeWidth="1.5" />
                  <circle cx="130" cy="80" r="3" fill="#6366f1" />
                </svg>
              </div>
            </div>
          </div>

          {/* Technical Expertise Section */}
          <div className="glass-card p-6 md:p-8 rounded-3xl flex flex-col gap-6 border border-white/5">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Cpu size={18} className="text-emerald-400" />
              Technical Expertise
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Category: Languages */}
              <div className="flex flex-col gap-2.5">
                <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Languages & Frameworks</h3>
                <div className="flex flex-wrap gap-1.5">
                  {["Python", "C / C++", "Java", "OOP", "PyTorch", "TensorFlow", "Scikit-learn"].map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded bg-zinc-950 border border-white/5 text-[10px] text-zinc-300 font-semibold">{s}</span>
                  ))}
                </div>
              </div>

              {/* Category: AI & Machine Learning */}
              <div className="flex flex-col gap-2.5">
                <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">AI & Machine Learning</h3>
                <div className="flex flex-wrap gap-1.5">
                  {["Machine Learning", "Deep Learning", "EfficientNet-B0", "CNNs", "ANN", "YOLO", "RAG", "LangChain", "LangGraph", "Transformers", "LLM", "GenAI", "NLP", "FastAPI", "OpenCV"].map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded bg-zinc-950 border border-white/5 text-[10px] text-zinc-300 font-semibold">{s}</span>
                  ))}
                </div>
              </div>

              {/* Category: Frontend */}
              <div className="flex flex-col gap-2.5">
                <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Frontend Development</h3>
                <div className="flex flex-wrap gap-1.5">
                  {["HTML", "CSS", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Responsive Design"].map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded bg-zinc-950 border border-white/5 text-[10px] text-zinc-300 font-semibold">{s}</span>
                  ))}
                </div>
              </div>

              {/* Category: Backend & Databases */}
              <div className="flex flex-col gap-2.5">
                <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Backend & Databases</h3>
                <div className="flex flex-wrap gap-1.5">
                  {["API Integrations", "PostgreSQL", "MongoDB", "SQL"].map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded bg-zinc-950 border border-white/5 text-[10px] text-zinc-300 font-semibold">{s}</span>
                  ))}
                </div>
              </div>

              {/* Category: Tools & Workflows */}
              <div className="flex flex-col gap-2.5">
                <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-wider">Tools & Workflows</h3>
                <div className="flex flex-wrap gap-1.5">
                  {["Git & GitHub", "Postman", "NPM", "Linux / CLI"].map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded bg-zinc-950 border border-white/5 text-[10px] text-zinc-300 font-semibold">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Info Section (1 column wide on desktop) */}
        <div className="flex flex-col gap-6">
          <div className="glass-card p-6 rounded-3xl flex flex-col gap-6 border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-violet-600/10 to-transparent rounded-full -z-10" />
            
            <h2 className="text-lg font-bold text-white flex items-center gap-2 border-b border-white/5 pb-3">
              <GraduationCap size={18} className="text-emerald-400" />
              Education & Focus
            </h2>
            
            <div className="flex flex-col gap-5 text-xs font-semibold">
              {/* Institution */}
              <div className="flex flex-col gap-1">
                <span className="text-zinc-500 uppercase tracking-wider text-[9px]">Institution</span>
                <span className="text-white text-sm">VIT Chennai</span>
                <span className="text-zinc-400 font-medium">Vellore Institute of Technology</span>
              </div>

              {/* Major */}
              <div className="flex flex-col gap-1">
                <span className="text-zinc-500 uppercase tracking-wider text-[9px]">Specialization</span>
                <span className="text-emerald-400 text-sm flex items-center gap-1">
                  <BrainCircuit size={14} /> AI & Machine Learning
                </span>
              </div>

              {/* Core Interests */}
              <div className="flex flex-col gap-1">
                <span className="text-zinc-500 uppercase tracking-wider text-[9px]">Core Focus Areas</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  <span className="px-2 py-0.5 rounded bg-zinc-950 border border-white/5 text-[10px] text-zinc-400">Deep Learning</span>
                  <span className="px-2 py-0.5 rounded bg-zinc-950 border border-white/5 text-[10px] text-zinc-400">Computer Vision</span>
                  <span className="px-2 py-0.5 rounded bg-zinc-950 border border-white/5 text-[10px] text-zinc-400">NLP</span>
                  <span className="px-2 py-0.5 rounded bg-zinc-950 border border-white/5 text-[10px] text-zinc-400">Data Science</span>
                  <span className="px-2 py-0.5 rounded bg-zinc-950 border border-white/5 text-[10px] text-zinc-400">Agentic AI</span>
                </div>
              </div>

              {/* Location */}
              <div className="flex flex-col gap-1">
                <span className="text-zinc-500 uppercase tracking-wider text-[9px]">Location</span>
                <span className="text-white font-medium flex items-center gap-1"><Globe size={13} className="text-zinc-500" /> Chennai, India</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
