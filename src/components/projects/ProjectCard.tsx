"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({
  project,
  featured,
}: {
  project: Project;
  featured?: boolean;
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const spotlightX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const spotlightY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const spotlightBackground = useTransform(
    [spotlightX, spotlightY],
    ([x, y]) =>
      `radial-gradient(300px circle at ${x}px ${y}px, rgba(34, 197, 94, 0.06), transparent 80%)`
  );

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      onMouseMove={handleMouse}
      className={`group relative overflow-hidden rounded-xl border border-border/60 bg-surface/50 p-6 transition-colors hover:border-accent/30 ${
        featured ? "sm:col-span-2 sm:row-span-1" : ""
      }`}
    >
      {/* Spotlight effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: spotlightBackground }}
      />

      <div className="relative z-10">
        {/* Tags */}
        <div className="mb-3 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-background/80 px-2 py-0.5 font-mono text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="font-heading text-xl font-semibold tracking-tight group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        {/* Links */}
        <div className="mt-4 flex gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-muted transition-colors hover:text-accent"
              aria-label={`View ${project.title} on GitHub`}
            >
              <Code2 size={18} />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-muted transition-colors hover:text-accent"
              aria-label={`View ${project.title} live demo`}
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
