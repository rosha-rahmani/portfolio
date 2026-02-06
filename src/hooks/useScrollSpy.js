import { useEffect, useState } from "react";

export const useScrollSpy = (sectionIds, offset = 120) => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (!Array.isArray(sectionIds) || sectionIds.length === 0) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Default to "home" if we're near the top.
      if (window.scrollY < 80) {
        setActiveSection("home");
        return;
      }

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        if (!section) continue;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(sectionId);
          return;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);

  return activeSection;
};

// Smooth scroll to a section.
export const scrollToSection = (sectionId, offset = 100) => {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const top = Math.max(0, section.offsetTop - offset);
  window.scrollTo({ top, behavior: "smooth" });
};