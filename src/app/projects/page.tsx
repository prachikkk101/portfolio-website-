"use client";

import React, { useState } from "react";
import { Code2, ExternalLink, Sparkles, Filter, X, ArrowUpRight } from "lucide-react";
import Github from "@/components/icons/Github";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModal, setActiveModal] = useState<number | null>(null);

  const categories = ["All", "AI & Fullstack", "Clones", "System Apps"];

  const projectList = [
    {
      id: 1,
      title: "AI Shop E-Commerce Platform",
      category: "AI & Fullstack",
      shortDescription: "A premium e-commerce marketplace featuring an integrated LLM Chatbot assistant for client support.",
      fullDescription: "AI Shop is a full-featured e-commerce system that combines traditional store elements (dynamic product catalog, tags, category sorting, persistent local storage cart) with an intelligent conversational support assistant. The chatbot uses natural language processing to answer specific product inquiries, guide users to check out, and recommend catalog matches inline.",
      techStack: ["Next.js", "React.js", "Tailwind CSS v4", "LLM APIs", "Local Storage", "Node.js"],
      github: "https://github.com/prachikkk101/ai-shop",
      live: "#",
      features: [
        "Interactive context-aware chat box representing store policies and products.",
        "Fully reactive global cart state across pages.",
        "Responsive grid filtering system using modern CSS grids.",
      ],
      color: "from-violet-500/20 to-indigo-500/10",
      border: "border-violet-500/20",
      accent: "bg-violet-500/10 text-violet-400",
    },
    {
      id: 2,
      title: "Apple Store Website Clone",
      category: "Clones",
      shortDescription: "High-fidelity frontend clone replicating the luxurious product carousels and smooth layouts of Apple.",
      fullDescription: "A visual masterclass replicating the official Apple Store page. Special emphasis was placed on implementing clean micro-animations, slide transitions, expandable specs tables, and a responsive floating bag utility dropdown.",
      techStack: ["React.js", "Tailwind CSS", "CSS Keyframes", "Vite", "HTML5/CSS3"],
      github: "https://github.com/prachikkk101/apple-store",
      live: "#",
      features: [
        "Polished, hardware-accelerated fluid scroll carousels.",
        "Detailed comparison panel for device models with responsive columns.",
        "High-performance media loaders for device previews.",
      ],
      color: "from-zinc-500/20 to-zinc-800/10",
      border: "border-zinc-500/20",
      accent: "bg-zinc-500/10 text-zinc-300",
    },
    {
      id: 3,
      title: "Netflix Clone UI",
      category: "Clones",
      shortDescription: "Video-streaming interface mockup complete with category horizontal lists and interactive preview banner.",
      fullDescription: "A responsive Netflix UI replica showing list categories (Trending, Top Rated, Action, Comedy) with trailer hover plays. Implemented fetching data dynamically using mock API layouts and structured TMDB datasets.",
      techStack: ["React.js", "CSS Modules", "TMDB API", "Dynamic Video Players"],
      github: "https://github.com/prachikkk101/netflix-clone",
      live: "#",
      features: [
        "Hover preview trailers integrated with dynamic video container.",
        "Infinite scrolling horizontal sliders.",
        "Fully responsive details sidebar for selected shows.",
      ],
      color: "from-red-500/20 to-rose-950/10",
      border: "border-red-500/20",
      accent: "bg-red-500/10 text-red-400",
    },
    {
      id: 4,
      title: "Telemedicine Nabha Portal",
      category: "System Apps",
      shortDescription: "A clinic portal offering patient health dashboards, doctor search grids, and schedule selectors.",
      fullDescription: "Designed for clinical and remote doctor interactions, the Telemedicine App enables patients to search doctor specialties, book appointments, check live status updates, and review digital prescription archives.",
      techStack: ["React.js", "Node.js", "Tailwind CSS", "Express API", "PostgreSQL"],
      github: "https://github.com/prachikkk101/telemedicine-app-nabha",
      live: "#",
      features: [
        "Dynamic calendar booking interface with conflict resolution logic.",
        "Doctor appointment scheduler dashboard view.",
        "Patient medical history tracking chart.",
      ],
      color: "from-emerald-500/20 to-teal-500/10",
      border: "border-emerald-500/20",
      accent: "bg-emerald-500/10 text-emerald-400",
    },
    {
      id: 5,
      title: "Amazon E-Commerce Clone",
      category: "Clones",
      shortDescription: "Visual recreation of the Amazon homepage featuring custom item carousels and shopping cart flows.",
      fullDescription: "Rebuilt core Amazon retail patterns focusing on grid banners, persistent navigation searches, and checkout cart calculations.",
      techStack: ["React.js", "CSS Modules", "Local Storage State", "Responsive Flexbox"],
      github: "https://github.com/prachikkk101/amazon-clone",
      live: "#",
      features: [
        "Replicated Amazon search auto-suggest dropdown visuals.",
        "Add-to-cart count and total calculations dynamically synced.",
        "Interactive product description tabs.",
      ],
      color: "from-amber-500/20 to-orange-500/10",
      border: "border-amber-500/20",
      accent: "bg-amber-500/10 text-amber-400",
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
              <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-widest w-fit border border-white/5 ${project.accent}`}>
                {project.category}
              </span>
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
              <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-widest w-fit border border-white/5 ${activeProject.accent}`}>
                {activeProject.category}
              </span>
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
              <a
                href={activeProject.live}
                className="px-5 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-semibold rounded-full flex items-center gap-2 text-sm transition-all shadow-lg shadow-violet-500/10"
              >
                <ExternalLink size={16} /> Live Preview
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
