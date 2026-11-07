"use client";

import { useEffect, useRef } from "react";

export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let mouseX = -9999;
    let mouseY = -9999;
    let isVisible = false;
    let mouseActive = false;
    let inactivityTimer: ReturnType<typeof setTimeout>;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      mouseActive = true;
      if (isVisible && !prefersReducedMotion.matches) draw();
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        mouseActive = false;
        cancelAnimationFrame(animationId);
      }, 120);
    };

    const dotSpacing = 40;
    const maxRadius = 2.5;
    const minRadius = 0.5;
    const influenceRadius = 200;

    const draw = () => {
      cancelAnimationFrame(animationId);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let x = dotSpacing; x < canvas.width; x += dotSpacing) {
        for (let y = dotSpacing; y < canvas.height; y += dotSpacing) {
          const dx = x - mouseX;
          const dy = y - mouseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const t = Math.max(0, 1 - dist / influenceRadius);
          const radius = minRadius + t * (maxRadius - minRadius);
          const alpha = 0.1 + t * 0.4;

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fillStyle =
            t > 0.1
              ? `rgba(34, 197, 94, ${alpha})`
              : `rgba(148, 163, 184, ${alpha})`;
          ctx.fill();
        }
      }

      if (isVisible && mouseActive && !prefersReducedMotion.matches) {
        animationId = requestAnimationFrame(draw);
      }
    };
    const resizeAndDraw = () => {
      resize();
      draw();
    };
    resizeAndDraw();
    window.addEventListener("resize", resizeAndDraw);
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      if (isVisible) draw();
      else cancelAnimationFrame(animationId);
    });
    observer.observe(canvas);
    const onMotionPreferenceChange = () => draw();
    prefersReducedMotion.addEventListener("change", onMotionPreferenceChange);
    window.addEventListener("mousemove", onMouseMove);
    draw();

    return () => {
      cancelAnimationFrame(animationId);
      observer.disconnect();
      prefersReducedMotion.removeEventListener("change", onMotionPreferenceChange);
      clearTimeout(inactivityTimer);
      window.removeEventListener("resize", resizeAndDraw);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden="true"
    />
  );
}
