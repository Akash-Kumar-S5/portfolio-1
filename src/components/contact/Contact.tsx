"use client";

import SectionHeading from "../shared/SectionHeading";
import AnimatedSection from "../shared/AnimatedSection";
import TerminalForm from "./TerminalForm";
import { Code2, Globe, Send, Mail } from "lucide-react";

const socials = [
  { icon: Code2, label: "GitHub", href: "https://github.com/akashkumars" },
  { icon: Globe, label: "LinkedIn", href: "https://www.linkedin.com/in/akash-kumars" },
  { icon: Mail, label: "Email", href: "mailto:akashkumar20485@gmail.com" },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="Contact"
          subtitle="Have an idea or want to work together? Let's talk."
        />

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <AnimatedSection>
            <TerminalForm />
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div>
              <h3 className="mb-4 font-mono text-sm text-muted">
                {">"} find_me_online()
              </h3>
              <div className="flex flex-col gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 cursor-pointer rounded-lg border border-border/40 bg-surface/30 px-4 py-3 text-muted transition-colors hover:border-accent/30 hover:text-accent"
                  >
                    <s.icon size={18} />
                    <span className="text-sm font-medium">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
