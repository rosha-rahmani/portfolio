import React from "react";

/**
 * Glassmorphism-style card.
 */
export default function Card({
  className = "",
  children,
  as: As = "div",
  ...props
}) {
  return (
    <As
      className={
        "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-lg shadow-[0_0_0_1px_rgba(255,255,255,0.05)] " +
        "transition-all duration-300 hover:border-white/20 hover:bg-white/7 " +
        className
      }
      {...props}
    >
      {children}
    </As>
  );
}
