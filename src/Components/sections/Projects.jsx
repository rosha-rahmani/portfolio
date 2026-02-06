import React, { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ScrollReveal from "../animations/ScrollReveal";
import ProjectCard from "../ui/ProjectCard";
import { categories, projects } from "../../data/projects";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const scrollerRef = useRef(null);
  const [activeDot, setActiveDot] = useState(0);

  const filtered = useMemo(() => {
    if (activeCategory === "All") return projects;
    return projects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    // Reset scroll when category changes.
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: 0, behavior: "smooth" });
    setActiveDot(0);
  }, [activeCategory]);

  const scrollByCards = (dir = 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = el.clientWidth * 0.85;
    el.scrollBy({ left: dir * cardWidth, behavior: "smooth" });
  };

  const onScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = Math.max(1, el.scrollWidth - el.clientWidth);
    const t = el.scrollLeft / max;
    const idx = Math.round(t * Math.max(0, filtered.length - 1));
    setActiveDot(idx);
  };

  const scrollToIndex = (idx) => {
    const el = scrollerRef.current;
    if (!el) return;
    const max = Math.max(1, el.scrollWidth - el.clientWidth);
    const t = idx / Math.max(1, filtered.length - 1);
    el.scrollTo({ left: t * max, behavior: "smooth" });
  };

  return (
    <section id="projects" className="relative py-20">
      <div className="max-w-[1320px] mx-auto px-5">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Projects</h2>
          <p className="mt-4 text-white/70 max-w-2xl">
            A few recent highlights. Filter by category and swipe through.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActiveCategory(c)}
                className={
                  "rounded-full px-4 py-2 text-sm border transition " +
                  (activeCategory === c
                    ? "border-primary/30 bg-primary/15 text-primary"
                    : "border-white/10 bg-white/5 text-white/70 hover:text-white hover:border-white/20")
                }
              >
                {c}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <div className="mt-10 relative">
          <div className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <button
              onClick={() => scrollByCards(-1)}
              className="h-12 w-12 rounded-2xl border border-white/10 bg-white/5 text-white/80 transition hover:text-white hover:border-white/20"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6 mx-auto" />
            </button>
          </div>

          <div className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 hidden md:block">
            <button
              onClick={() => scrollByCards(1)}
              className="h-12 w-12 rounded-2xl border border-white/10 bg-white/5 text-white/80 transition hover:text-white hover:border-white/20"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6 mx-auto" />
            </button>
          </div>

          <div
            ref={scrollerRef}
            onScroll={onScroll}
            className="hide-scrollbar flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-2"
          >
            {filtered.map((p) => (
              <div
                key={p.id}
                className="min-w-[85%] sm:min-w-[60%] lg:min-w-[40%] snap-start"
              >
                <ProjectCard project={p} />
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {filtered.map((p, idx) => (
              <button
                key={p.id}
                onClick={() => scrollToIndex(idx)}
                className={
                  "h-2.5 rounded-full transition-all " +
                  (idx === activeDot
                    ? "w-8 bg-primary"
                    : "w-2.5 bg-white/20 hover:bg-white/30")
                }
                aria-label={`Go to ${p.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
