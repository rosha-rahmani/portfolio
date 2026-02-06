import React, { useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "../../data/testimonials";
import Card from "../ui/Card";
import ScrollReveal from "../animations/ScrollReveal";
import { getIcon } from "../../utils/iconMap";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const items = useMemo(() => testimonials || [], []);

  const prev = () => setActive((v) => (v - 1 + items.length) % items.length);
  const next = () => setActive((v) => (v + 1) % items.length);

  useEffect(() => {
    if (!items.length) return;
    const id = window.setInterval(() => {
      setActive((v) => (v + 1) % items.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, [items.length]);

  if (!items.length) return null;
  const t = items[active];

  return (
    <section id="testimonials" className="relative py-20">
      <div className="max-w-[1320px] mx-auto px-5">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            Testimonials
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl">
            What clients say after we ship.
          </p>
        </ScrollReveal>

        <div className="mt-10 grid lg:grid-cols-12 gap-6 items-stretch">
          <ScrollReveal className="lg:col-span-8" delay={120}>
            <Card className="p-7 sm:p-8 h-full">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-white/60">{t.role} • {t.company}</p>
                  <p className="mt-1 text-2xl font-semibold text-white">{t.name}</p>
                </div>

                <div className="flex items-center gap-1" aria-label={`${t.rating} stars`}>
                  {Array.from({ length: 5 }).map((_, i) => {
                    const Star = getIcon("Star");
                    const filled = i < (t.rating || 0);
                    return Star ? (
                      <Star
                        key={i}
                        className={
                          "h-5 w-5 " +
                          (filled ? "text-primary" : "text-white/20")
                        }
                      />
                    ) : null;
                  })}
                </div>
              </div>

              <p className="mt-6 text-white/80 text-lg leading-relaxed">
                “{t.quote}”
              </p>

              <div className="mt-10 flex items-center justify-between">
                <div className="flex gap-2">
                  {items.map((it, idx) => (
                    <button
                      key={it.id}
                      onClick={() => setActive(idx)}
                      className={
                        "h-2.5 rounded-full transition-all " +
                        (idx === active
                          ? "w-8 bg-primary"
                          : "w-2.5 bg-white/20 hover:bg-white/30")
                      }
                      aria-label={`Go to testimonial ${idx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    className="h-11 w-11 rounded-2xl border border-white/10 bg-white/5 text-white/80 transition hover:text-white hover:border-white/20"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5 mx-auto" />
                  </button>
                  <button
                    onClick={next}
                    className="h-11 w-11 rounded-2xl border border-white/10 bg-white/5 text-white/80 transition hover:text-white hover:border-white/20"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5 mx-auto" />
                  </button>
                </div>
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal className="lg:col-span-4" delay={200}>
            <Card className="p-7 sm:p-8 h-full">
              <div className="flex items-center gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  {t.image ? (
                    <img
                      src={t.image}
                      alt={t.name}
                      className="h-full w-full object-cover grayscale hover:grayscale-0 transition"
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-full w-full bg-gradient-to-br from-primary/25 to-white/5" />
                  )}
                </div>
                <div>
                  <p className="text-white font-semibold">{t.name}</p>
                  <p className="text-white/60 text-sm">{t.role}</p>
                </div>
              </div>

              <div className="mt-8 grid gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-white/60 text-sm">Avg. Rating</p>
                  <p className="mt-1 text-2xl font-semibold text-white">5.0</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-white/60 text-sm">Repeat Clients</p>
                  <p className="mt-1 text-2xl font-semibold text-white">60%</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-white/60 text-sm">On-time Delivery</p>
                  <p className="mt-1 text-2xl font-semibold text-white">100%</p>
                </div>
              </div>
            </Card>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
