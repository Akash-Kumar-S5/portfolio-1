"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "../shared/SectionHeading";
import TimelineItem from "./TimelineItem";
import { experiences } from "@/data/experience";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  });
  const lineHeight = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section id="experience" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Experience"
          subtitle="Where I've worked and what I've accomplished."
        />

        <div ref={containerRef} className="relative ml-4 md:ml-8">
          {/* Animated timeline line */}
          <div className="absolute left-0 top-0 h-full w-px bg-border/40">
            <motion.div
              className="w-full origin-top bg-accent"
              style={{ height: "100%", scaleY: lineHeight }}
            />
          </div>

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <TimelineItem key={`${exp.company}-${exp.role}`} experience={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
