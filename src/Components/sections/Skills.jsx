import React from "react";
import { skills } from "../../data/skills";
import Card from "../ui/Card";
import ScrollReveal from "../animations/ScrollReveal";
import { getIcon } from "../../utils/iconMap";

const levelToPercent = (level) => {
  switch ((level || "").toLowerCase()) {
    case "expert":
      return 95;
    case "advanced":
      return 80;
    case "intermediate":
      return 65;
    default:
      return 50;
  }
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-20">
      <div className="max-w-[1320px] mx-auto px-5">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Skills</h2>
          <p className="mt-4 text-white/70 max-w-2xl">
            My core stack and the tools I use day-to-day.
          </p>
        </ScrollReveal>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((s, idx) => {
            const Icon = getIcon(s.icon);
            const pct = levelToPercent(s.level);
            return (
              <ScrollReveal key={s.id} delay={80 + idx * 35}>
                <Card className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
                        {Icon ? <Icon className="h-6 w-6 text-primary" /> : null}
                      </div>
                      <div>
                        <p className="text-lg font-semibold text-white">{s.name}</p>
                        <p className="text-sm text-white/60">{s.experience}</p>
                      </div>
                    </div>

                    <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs text-primary">
                      {s.level}
                    </span>
                  </div>

                  <div className="mt-6">
                    <div className="h-2 w-full rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                    <p className="mt-3 text-sm text-white/60">Proficiency</p>
                  </div>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
