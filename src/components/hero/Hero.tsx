"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import TypingEffect from "./TypingEffect";
import { ArrowDown } from "lucide-react";

const GridBackground = dynamic(() => import("./GridBackground"), {
  ssr: false,
});

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <GridBackground />

      <div className="relative z-10 max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mb-4 font-mono text-sm text-accent md:text-base"
        >
          Hi, my name is
        </motion.p>

        <TypingEffect text="Akash Kumar." />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          className="mt-6 font-heading text-2xl font-semibold text-muted sm:text-3xl md:text-4xl"
        >
          I build things for the web.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 0.5 }}
          className="mx-auto mt-6 max-w-lg text-muted text-base md:text-lg"
        >
          Full Stack Developer at Presidio, passionate about translating creative
          ideas into seamless, user-centric web applications.
        </motion.p>

        <motion.a
          href="#projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 0.5 }}
          className="mt-10 inline-flex items-center gap-2 rounded-full border border-accent px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent/10 cursor-pointer"
        >
          View my work
          <ArrowDown size={16} />
        </motion.a>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="h-10 w-6 rounded-full border-2 border-border flex items-start justify-center pt-2"
        >
          <div className="h-2 w-1 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
