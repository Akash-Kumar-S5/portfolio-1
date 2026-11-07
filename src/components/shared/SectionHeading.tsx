"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 md:mb-16"
    >
      <h2 className="font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
        <span className="text-accent font-mono text-lg font-normal md:text-xl">
          {"//"}&nbsp;
        </span>
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 max-w-xl text-muted text-base md:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
