"use client";

import { motion } from "framer-motion";
import type { Experience } from "@/data/experience";

export default function TimelineItem({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 md:pl-12"
    >
      {/* Dot */}
      <div className="absolute left-0 top-1.5 -translate-x-1/2">
        <div className="h-3 w-3 rounded-full border-2 border-accent bg-background" />
      </div>

      {/* Content */}
      <div className="rounded-xl border border-border/40 bg-surface/30 p-5 md:p-6 transition-colors hover:border-border/70">
        <div className="flex flex-wrap items-center gap-2 md:gap-4">
          <h3 className="font-heading text-lg font-semibold">{experience.role}</h3>
          <span className="text-accent font-medium text-sm">
            @ {experience.company}
          </span>
        </div>
        <p className="mt-1 font-mono text-xs text-muted">
          {experience.period} &middot; {experience.location}
        </p>
        <p className="mt-3 text-sm text-muted leading-relaxed">
          {experience.description}
        </p>
        <ul className="mt-3 space-y-1.5">
          {experience.achievements.map((a) => (
            <li key={a} className="flex items-start gap-2 text-sm text-muted">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              {a}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
