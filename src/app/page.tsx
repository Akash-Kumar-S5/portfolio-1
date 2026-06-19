"use client";

import Navbar from "@/components/nav/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Projects from "@/components/projects/Projects";
import Experience from "@/components/experience/Experience";
import Contact from "@/components/contact/Contact";
import ScrollProgress from "@/components/shared/ScrollProgress";
import { Code2, Globe, Send } from "lucide-react";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <footer className="border-t border-border/30 px-6 py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted">
            Built with Next.js & lots of coffee.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/akashkumars"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-muted transition-colors hover:text-accent"
              aria-label="GitHub"
            >
              <Code2 size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/akash-kumars"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-muted transition-colors hover:text-accent"
              aria-label="LinkedIn"
            >
              <Globe size={18} />
            </a>
            <a
              href="mailto:akashkumar20485@gmail.com"
              className="cursor-pointer text-muted transition-colors hover:text-accent"
              aria-label="Email"
            >
              <Send size={18} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
