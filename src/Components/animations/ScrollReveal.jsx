import React from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import FadeIn from "./FadeIn";

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
}) {
  const { ref, isVisible } = useScrollReveal({ threshold, rootMargin });

  return (
    <div ref={ref} className={className}>
      <FadeIn show={isVisible} delay={delay}>
        {children}
      </FadeIn>
    </div>
  );
}
