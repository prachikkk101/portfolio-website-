import React from "react";
import { User, GraduationCap, Cpu, Sparkles, BrainCircuit, Globe, Mail } from "lucide-react";

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
          <div className="glass-card p-6 md:p-8 rounded-3xl flex flex-col gap-4 border border-white/5">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <User size={18} className="text-violet-400" />
              The Journey
            </h2>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              I am a technology enthusiast based in Pune and a student at **VIT Chennai** (Vellore Institute of Technology, Chennai) specializing in Artificial Intelligence and Machine Learning. I believe that integrating data analytics and deep learning architectures into scalable web applications is the future of digital product experiences.
            </p>
            <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
              My engineering focuses heavily on data science workflows, design and deployment of neural networks, NLP text parsing, and training computer vision models. I combine this analytical grounding with strong foundations in Data Structures & Algorithms, allowing me to write highly optimized, resource-efficient scripts.
            </p>
            <p className="text-zinc-500 text-sm italic">
              "Currently building, optimizing, and deploying ML pipelines—all powered by good coffee and clean math."
            </p>
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
                <span className="text-zinc-500 uppercase tracking-wider text-[9px]">Core Interests</span>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  <span className="px-2 py-0.5 rounded bg-zinc-950 border border-white/5 text-[10px] text-zinc-400">Deep Learning</span>
                  <span className="px-2 py-0.5 rounded bg-zinc-950 border border-white/5 text-[10px] text-zinc-400">Computer Vision</span>
                  <span className="px-2 py-0.5 rounded bg-zinc-950 border border-white/5 text-[10px] text-zinc-400">NLP</span>
                  <span className="px-2 py-0.5 rounded bg-zinc-950 border border-white/5 text-[10px] text-zinc-400">Data Science</span>
                  <span className="px-2 py-0.5 rounded bg-zinc-950 border border-white/5 text-[10px] text-zinc-400">C++ / Python</span>
                  <span className="px-2 py-0.5 rounded bg-zinc-950 border border-white/5 text-[10px] text-zinc-400">DSA</span>
                </div>
              </div>

              {/* Location */}
              <div className="flex flex-col gap-1">
                <span className="text-zinc-500 uppercase tracking-wider text-[9px]">Location</span>
                <span className="text-white font-medium flex items-center gap-1"><Globe size={13} className="text-zinc-500" /> Pune & Chennai, India</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
