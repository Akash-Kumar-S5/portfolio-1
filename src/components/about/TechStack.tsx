"use client";

import { motion } from "framer-motion";
import { techStack } from "@/data/techStack";

const categoryColors: Record<string, string> = {
  language: "border-accent text-accent",
  frontend: "border-accent-secondary text-accent-secondary",
  backend: "border-purple-400 text-purple-400",
  tool: "border-amber-400 text-amber-400",
};

export default function TechStack() {
  return (
    <div>
      <h3 className="mb-4 font-mono text-sm text-muted">
        {">"} tech_stack.map()
      </h3>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, i) => (
          <motion.span
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.3 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className={`cursor-default rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors ${categoryColors[tech.category]}`}
          >
            {tech.name}
          </motion.span>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted">
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-accent" />
          Languages
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-accent-secondary" />
          Frontend
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-purple-400" />
          Backend
        </span>
        <span className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-amber-400" />
          Tools
        </span>
      </div>
    </div>
  );
}
