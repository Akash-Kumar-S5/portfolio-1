"use client";

import SectionHeading from "../shared/SectionHeading";
import AnimatedSection from "../shared/AnimatedSection";
import TechStack from "./TechStack";

export default function About() {
  return (
    <section id="about" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          title="About Me"
          subtitle="A quick overview of who I am and what I work with."
        />

        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <AnimatedSection>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                I&apos;m a Full Stack Developer at Presidio, Chennai. I thrive
                on translating creative ideas into seamless, user-centric web
                applications. My expertise lies in bridging the gap between
                front-end and back-end technologies, ensuring robust and
                scalable solutions.
              </p>
              <p>
                With hands-on experience in the MERN stack, Laravel, and modern
                CSS frameworks like Tailwind and Bootstrap, I enjoy building
                everything from dynamic UIs to RESTful APIs that power them.
              </p>
              <p>
                I graduated with a B.Tech in Information Technology from
                Karpagam College of Engineering and I&apos;m always keeping
                pace with industry trends and emerging technologies.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <TechStack />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
