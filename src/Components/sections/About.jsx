import React from "react";
import Card from "../ui/Card";
import ScrollReveal from "../animations/ScrollReveal";
import { PERSONAL_INFO } from "../../utils/constants";

export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="max-w-[1320px] mx-auto px-5">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">
            About Me
          </h2>
          <p className="mt-4 text-white/70 max-w-2xl">
            I’m a frontend developer focused on building clean, scalable UI systems. I care about
            accessibility, performance, and delightful micro-interactions.
          </p>
        </ScrollReveal>

        <div className="mt-10 grid lg:grid-cols-3 gap-6">
          <ScrollReveal className="lg:col-span-2" delay={100}>
            <Card className="p-7 sm:p-8">
              <h3 className="text-xl font-semibold text-white">What I do</h3>
              <p className="mt-4 text-white/70 leading-relaxed">
                I help teams ship modern web apps with React and TypeScript—from design handoff to
                production. I enjoy creating component libraries, optimizing Core Web Vitals, and
                building interfaces that feel smooth and polished.
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {PERSONAL_INFO.highlights.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-primary/25 bg-primary/10 px-4 py-2 text-sm text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </Card>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="grid gap-6">
              {PERSONAL_INFO.stats.map((st) => (
                <Card key={st.label} className="p-6">
                  <p className="text-3xl font-semibold text-white">{st.value}</p>
                  <p className="mt-2 text-white/60">{st.label}</p>
                </Card>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
