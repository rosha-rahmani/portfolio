import React from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../../utils/constants";
import { scrollToSection } from "../../hooks/useScrollSpy";
import Card from "../ui/Card";
import RadialGradientBackground from "../backgrounds/RadialGradientBackground";
import ScrollReveal from "../animations/ScrollReveal";
import { getIcon } from "../../utils/iconMap";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      <RadialGradientBackground />

      <div className="max-w-[1320px] mx-auto px-5">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm text-primary">
                <Sparkles className="h-4 w-4" />
                {PERSONAL_INFO.availability}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
                {PERSONAL_INFO.name}
                <span className="block mt-3 text-white/70 text-2xl sm:text-3xl lg:text-4xl">
                  {PERSONAL_INFO.title}
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <p className="mt-6 text-lg text-white/70 max-w-xl">
                {PERSONAL_INFO.tagline}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <div className="mt-8 flex flex-wrap gap-3">
                {PERSONAL_INFO.highlights.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="px-7 py-3.5 bg-white text-[#212121] font-medium text-base rounded-[17px] border border-white transition-all duration-300 hover:bg-transparent hover:text-white"
                >
                  View Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="px-7 py-3.5 bg-transparent text-white font-medium text-base rounded-[17px] border border-white/30 transition-all duration-300 hover:border-white"
                >
                  Contact
                </button>

                <div className="flex items-center gap-2 ml-1">
                  {SOCIAL_LINKS.map((s) => {
                    const Icon = getIcon(s.icon);
                    return (
                      <a
                        key={s.id}
                        href={s.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/80 transition hover:text-white hover:border-white/20 hover:scale-[1.03]"
                        aria-label={s.label}
                      >
                        {Icon ? <Icon className="h-5 w-5" /> : null}
                      </a>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="relative">
            <ScrollReveal>
              <Card className="p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-white/60">Based in</p>
                    <p className="text-xl font-semibold text-white">
                      {PERSONAL_INFO.location}
                    </p>
                  </div>
                  <div className="h-12 w-12 rounded-2xl border border-primary/25 bg-primary/10 flex items-center justify-center">
                    <span className="h-3 w-3 rounded-full bg-primary animate-pulse" />
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-3 gap-3">
                  {PERSONAL_INFO.stats.map((st) => (
                    <div
                      key={st.label}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <p className="text-2xl font-semibold text-white">
                        {st.value}
                      </p>
                      <p className="mt-1 text-sm text-white/60">
                        {st.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-white/60">Email</p>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="mt-1 block text-white hover:text-primary transition"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </Card>
            </ScrollReveal>

            <div className="absolute -inset-10 -z-10 opacity-60">
              <div className="absolute inset-0 rounded-[40px] bg-[conic-gradient(from_180deg,rgba(141,255,105,0.45),transparent,rgba(141,255,105,0.25))] blur-2xl" />
            </div>
          </div>
        </div>

        <div className="mt-14 flex justify-center">
          <button
            onClick={() => scrollToSection("about")}
            className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition"
            aria-label="Scroll to About"
          >
            <span className="text-sm">Scroll</span>
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
