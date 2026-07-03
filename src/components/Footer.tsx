import React from "react";
import Link from "next/link";
import { Mail, ArrowUpRight, Heart } from "lucide-react";
import Github from "@/components/icons/Github";
import Linkedin from "@/components/icons/Linkedin";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-zinc-950 border-t border-white/5 py-12 px-6 md:px-8 mt-auto">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Left Column */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-violet-600 to-emerald-500 flex items-center justify-center font-bold text-white text-sm">
              PK
            </div>
            <span className="font-bold text-base tracking-tight text-white">
              Prachi Khandelwal
            </span>
          </div>
          <p className="text-zinc-500 text-sm max-w-xs">
            Designing and engineering premium web experiences, combining clean aesthetics with robust, scalable code.
          </p>
        </div>

        {/* Middle Column (Links) */}
        <div className="flex flex-col gap-3">
          <h4 className="text-white font-semibold text-sm tracking-wider uppercase">Navigation</h4>
          <div className="flex flex-col gap-2 text-sm text-zinc-500">
            <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
            <Link href="/intro" className="hover:text-emerald-400 transition-colors">My Intro</Link>
            <Link href="/projects" className="hover:text-emerald-400 transition-colors">Projects</Link>
            <Link href="/contact" className="hover:text-emerald-400 transition-colors">Contact</Link>
          </div>
        </div>

        {/* Right Column (Connect) */}
        <div className="flex flex-col gap-4">
          <h4 className="text-white font-semibold text-sm tracking-wider uppercase">Connect</h4>
          <div className="flex gap-4">
            <a
              href="https://github.com/prachikkk101"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:border-violet-500/50 hover:bg-zinc-800 transition-all shadow-sm"
              aria-label="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/prachi-khandelwal-035518320?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:border-violet-500/50 hover:bg-zinc-800 transition-all shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:khandelwalprachi42@gmail.com"
              className="w-10 h-10 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:border-violet-500/50 hover:bg-zinc-800 transition-all shadow-sm"
              aria-label="Send Email"
            >
              <Mail size={18} />
            </a>
            <Link
              href="/resume"
              className="h-10 px-4 rounded-full bg-zinc-900 border border-white/5 flex items-center gap-1.5 text-zinc-400 hover:text-white hover:border-emerald-500/50 hover:bg-zinc-800 transition-all text-xs font-semibold"
            >
              Resume <ArrowUpRight size={13} />
            </Link>
          </div>
          <span className="text-zinc-500 text-xs flex items-center gap-1">
            Based in India <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          </span>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
        <p>© {currentYear} Prachi Khandelwal. All rights reserved.</p>
        <p className="flex items-center gap-1">
          Made with <Heart size={10} className="text-red-500 fill-red-500" /> & Next.js in India
        </p>
      </div>
    </footer>
  );
}
