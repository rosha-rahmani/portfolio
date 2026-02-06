import React from "react";

/**
 * Simple fade/slide animation helper.
 * Use with ScrollReveal or directly when you already know the element is visible.
 */
export default function FadeIn({
  show = true,
  delay = 0,
  className = "",
  children,
}) {
  return (
    <div
      className={
        "transition-all duration-700 will-change-[transform,opacity] " +
        (show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6") +
        " " +
        className
      }
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
