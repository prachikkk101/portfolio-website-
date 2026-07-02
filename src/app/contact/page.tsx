"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, Sparkles, AlertCircle, Mail, Phone, MapPin } from "lucide-react";
import Github from "@/components/icons/Github";
import Linkedin from "@/components/icons/Linkedin";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    enquiry: "",
    isClient: false,
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, isClient: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Simple validation
    if (!formData.name.trim()) {
      setError("Please specify your name.");
      return;
    }
    if (!formData.email.trim() || !formData.email.includes("@")) {
      setError("Please provide a valid email address.");
      return;
    }
    if (!formData.enquiry.trim()) {
      setError("Please describe your query or project details.");
      return;
    }

    setStatus("submitting");

    try {
      // Send form data to Web3Forms API
      // Register your email on web3forms.com to get a free Access Key
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "de4e1c52-67af-468a-85d3-04a51ea530b5",
          name: formData.name,
          email: formData.email,
          phone: formData.phone || "Not Provided",
          message: formData.enquiry,
          subject: formData.isClient ? "🎯 New Client Project Enquiry" : "✉️ General Portfolio Contact",
          from_name: "Portfolio Form - " + formData.name,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          enquiry: "",
          isClient: false,
        });
      } else {
        setError(data.message || "Failed to send message. Please ensure your access key is correct.");
        setStatus("idle");
      }
    } catch (err) {
      console.error("Form submission error:", err);
      setError("Failed to connect to the email server. Please check your internet connection.");
      setStatus("idle");
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto px-6 py-12 md:py-20 flex flex-col md:flex-row gap-12">
      
      {/* Contact Info Column */}
      <div className="flex-1 flex flex-col gap-6 text-center md:text-left items-center md:items-start justify-center">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold tracking-wide w-fit">
          <Sparkles size={12} /> Contact Me
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Let's Build Something Great
        </h1>
        <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-md">
          Have an exciting project idea, a role vacancy, or just want to chat about web development? Drop me a message and I'll get back to you!
        </p>

        <div className="flex flex-col gap-4 mt-4 text-sm text-zinc-400 font-semibold items-center md:items-start">
          <a href="mailto:khandelwalprachi42@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
            <Mail size={16} className="text-violet-400" />
            khandelwalprachi42@gmail.com
          </a>
          <span className="flex items-center gap-2">
            <Phone size={16} className="text-violet-400" />
            +91 (Contact via Email First)
          </span>
          <a
            href="https://github.com/prachikkk101"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Github size={16} className="text-violet-400" />
            github.com/prachikkk101
          </a>
          <a
            href="https://www.linkedin.com/in/prachi-khandelwal-035518320?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Linkedin size={16} className="text-violet-400" />
            linkedin.com/in/prachi-khandelwal-035518320
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={16} className="text-emerald-400 animate-pulse" />
            Chennai, Tamil Nadu, India
          </span>
        </div>
      </div>

      {/* Form Column */}
      <div className="flex-1 max-w-lg w-full mx-auto">
        <div className="glass-card rounded-3xl p-6 md:p-8 border border-white/5 relative overflow-hidden">
          {/* Success Panel */}
          {status === "success" ? (
            <div className="flex flex-col items-center text-center gap-4 py-8 animate-fade-in">
              <CheckCircle2 size={56} className="text-emerald-400 glow-teal" />
              <h3 className="text-xl font-bold text-white">Message Sent!</h3>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
                Thank you for reaching out. Your enquiry was successfully recorded, and I will get back to you shortly!
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 px-6 py-2 bg-zinc-900 border border-white/10 hover:border-white/20 text-zinc-300 hover:text-white rounded-full text-xs font-semibold transition-all"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <h2 className="text-lg font-bold text-white mb-2">Send an Enquiry</h2>
              
              {error && (
                <div className="p-3 bg-red-950/30 border border-red-500/20 text-red-400 rounded-xl text-xs flex items-center gap-2 animate-pulse">
                  <AlertCircle size={14} className="shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="text-xs font-semibold text-zinc-400">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="px-4 py-2.5 bg-zinc-950 border border-white/5 rounded-xl text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-violet-500/30 transition-colors"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="text-xs font-semibold text-zinc-400">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="px-4 py-2.5 bg-zinc-950 border border-white/5 rounded-xl text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-violet-500/30 transition-colors"
                />
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-xs font-semibold text-zinc-400">
                  Phone Number (Optional)
                </label>
                <input
                  type="text"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 98765 43210"
                  className="px-4 py-2.5 bg-zinc-950 border border-white/5 rounded-xl text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-violet-500/30 transition-colors"
                />
              </div>

              {/* Enquiry */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="enquiry" className="text-xs font-semibold text-zinc-400">
                  Your Enquiry
                </label>
                <textarea
                  id="enquiry"
                  rows={4}
                  value={formData.enquiry}
                  onChange={handleChange}
                  placeholder="Tell me about your project, team opportunity, or general question..."
                  className="px-4 py-2.5 bg-zinc-950 border border-white/5 rounded-xl text-white text-sm placeholder-zinc-600 focus:outline-none focus:border-violet-500/30 transition-colors resize-none"
                />
              </div>

              {/* Checkbox */}
              <div className="flex items-center gap-2 mt-2">
                <input
                  type="checkbox"
                  id="isClient"
                  checked={formData.isClient}
                  onChange={handleChange}
                  className="w-4 h-4 rounded bg-zinc-950 border border-white/5 text-violet-600 focus:ring-0 cursor-pointer accent-violet-600"
                />
                <label htmlFor="isClient" className="text-xs text-zinc-400 select-none cursor-pointer">
                  I want to hire you for a custom project
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-4 w-full py-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 disabled:opacity-55 text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-violet-500/10 hover:shadow-violet-500/20 active:scale-95 transition-all text-sm cursor-pointer"
              >
                {status === "submitting" ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending Enquiry...
                  </>
                ) : (
                  <>
                    <Send size={15} /> Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
