import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prachi Khandelwal | AI/ML Engineer & Problem Solver",
  description: "Professional portfolio of Prachi Khandelwal - AI/ML engineer specializing in Machine Learning, Deep Learning models, data science, and intelligent full-stack integrations. VIT Chennai, India.",
  keywords: ["Prachi Khandelwal", "AI/ML Engineer", "Machine Learning Practitioner", "Data Scientist", "VIT Chennai Student", "Deep Learning Models", "Next.js AI Integration", "Competitive Programming"],
  authors: [{ name: "Prachi Khandelwal", url: "https://github.com/prachikkk101" }],
  robots: "index, follow",
};

export const viewport = {
  width: "device-width",
  initialScale: 1.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-black text-zinc-100 relative">
        {/* Glow Spheres Backdrop */}
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] pointer-events-none -z-10 animate-pulse-slow" />
        <div className="absolute top-[30%] right-[-10%] w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[150px] pointer-events-none -z-10" />
        <div className="absolute bottom-[10%] left-[5%] w-[450px] h-[450px] bg-indigo-500/5 rounded-full blur-[130px] pointer-events-none -z-10 animate-pulse-slow" />

        {/* Global Navigation */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow flex flex-col pt-24 w-full">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
