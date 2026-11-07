"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TypingEffect({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = requestAnimationFrame(() => setDisplayed(text));
      return () => cancelAnimationFrame(frame);
    }
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        setDone(true);
        clearInterval(interval);
      }
    }, 80);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <h1 aria-label={text} className="font-heading text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
      <span className="sr-only">{text}</span>
      <span aria-hidden="true">{displayed}</span>
      <motion.span
        aria-hidden="true"
        animate={{ opacity: done ? [1, 0] : 1 }}
        transition={
          done ? { repeat: Infinity, duration: 0.8, repeatType: "reverse" } : {}
        }
        className="inline-block w-[3px] h-[0.85em] translate-y-[0.05em] ml-1 bg-accent"
      />
    </h1>
  );
}
