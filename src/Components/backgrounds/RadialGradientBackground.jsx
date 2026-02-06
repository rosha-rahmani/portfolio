import React from "react";

/**
 * Decorative background used across sections.
 */
export default function RadialGradientBackground({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={
        "pointer-events-none absolute inset-0 overflow-hidden " + className
      }
    >
      <div className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute top-20 right-[-10rem] h-[32rem] w-[32rem] rounded-full bg-white/5 blur-3xl" />
      <div className="absolute bottom-[-12rem] left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
    </div>
  );
}
