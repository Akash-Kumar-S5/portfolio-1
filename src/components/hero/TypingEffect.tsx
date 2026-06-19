"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TypingEffect({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
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
    <span className="font-heading text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
      {displayed}
      <motion.span
        animate={{ opacity: done ? [1, 0] : 1 }}
        transition={
          done ? { repeat: Infinity, duration: 0.8, repeatType: "reverse" } : {}
        }
        className="inline-block w-[3px] h-[0.85em] translate-y-[0.05em] ml-1 bg-accent"
      />
    </span>
  );
}
