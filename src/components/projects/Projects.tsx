"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "../shared/SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects, type Project } from "@/data/projects";

const filters = ["all", "frontend", "backend", "fullstack", "opensource"] as const;
type Filter = (typeof filters)[number];

const filterLabels: Record<Filter, string> = {
  all: "All",
  frontend: "Frontend",
  backend: "Backend",
  fullstack: "Full Stack",
  opensource: "Open Source",
};

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p: Project) => p.category === filter);

  return (
    <section id="projects" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Projects"
          subtitle="A selection of things I've built and contributed to."
        />

        {/* Filter bar */}
        <div className="mb-10 flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`relative cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                filter === f ? "text-accent" : "text-muted hover:text-foreground"
              }`}
            >
              {filterLabels[f]}
              {filter === f && (
                <motion.span
                  layoutId="filter-indicator"
                  className="absolute inset-0 -z-10 rounded-lg bg-accent/10"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <motion.div
          layout
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard
                key={project.title}
                project={project}
                featured={project.featured}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
