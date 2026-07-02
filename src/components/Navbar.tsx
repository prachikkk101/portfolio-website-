"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Code2, User, Briefcase, BookOpen, Send, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/", icon: Sparkles },
    { name: "My Intro", href: "/intro", icon: User },
    { name: "Projects", href: "/projects", icon: Code2 },
    { name: "Contact", href: "/contact", icon: Send },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 md:px-8 py-4 ${
        scrolled ? "top-2" : "top-0"
      }`}
    >
      <div
        className={`max-w-6xl mx-auto rounded-2xl md:rounded-full transition-all duration-300 px-6 py-3 flex items-center justify-between ${
          scrolled || isOpen
            ? "glass-nav shadow-lg border border-white/10"
            : "background-transparent border-transparent"
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-violet-600 to-emerald-500 flex items-center justify-center font-bold text-white shadow-md shadow-violet-500/20 group-hover:scale-105 transition-transform">
            PK
          </div>
          <span className="font-bold text-lg tracking-tight text-white group-hover:text-emerald-400 transition-colors">
            Prachi Khandelwal
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
                  isActive
                    ? "text-white"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {isActive && (
                  <span className="absolute inset-0 bg-white/10 rounded-full layout-id='active'" />
                )}
                <Icon size={15} className={isActive ? "text-violet-400" : "text-zinc-500"} />
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Contact CTA */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-white rounded-full group bg-gradient-to-br from-violet-600 to-emerald-500 group-hover:from-violet-600 group-hover:to-emerald-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-800"
          >
            <span className="relative px-5 py-1.5 transition-all ease-in duration-75 bg-zinc-950 rounded-full group-hover:bg-opacity-0">
              Let's Chat
            </span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-zinc-400 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors focus:outline-none"
          aria-label="Toggle menu"
          id="mobile-menu-btn"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden absolute top-[calc(100%+8px)] left-4 right-4 z-50 rounded-2xl glass border border-white/10 shadow-2xl p-4 flex flex-col gap-2 animate-float">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  isActive
                    ? "bg-violet-600/20 text-white border-l-4 border-violet-500"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon size={18} className={isActive ? "text-violet-400" : "text-zinc-500"} />
                {item.name}
              </Link>
            );
          })}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 w-full text-center py-3 bg-gradient-to-r from-violet-600 to-emerald-600 text-white rounded-xl font-semibold shadow-lg hover:opacity-90 transition-opacity"
          >
            Get In Touch
          </Link>
        </div>
      )}
    </header>
  );
}
