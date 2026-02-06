import React from "react";
import { services } from "../../data/services";
import Card from "../ui/Card";
import ScrollReveal from "../animations/ScrollReveal";
import { getIcon } from "../../utils/iconMap";

export default function Services() {
  return (
    <section id="services" className="relative py-20">
      <div className="max-w-[1320px] mx-auto px-5">
        <ScrollReveal>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Services</h2>
          <p className="mt-4 text-white/70 max-w-2xl">
            How I can help you ship faster with a polished, production-ready UI.
          </p>
        </ScrollReveal>

        <div className="mt-10 grid lg:grid-cols-12 gap-6">
          {services.map((svc, idx) => {
            const Icon = getIcon(svc.icon);
            const isBig = idx === 0 || idx === 3;
            return (
              <ScrollReveal
                key={svc.id}
                delay={80 + idx * 40}
                className={isBig ? "lg:col-span-6" : "lg:col-span-3"}
              >
                <Card className="p-6 h-full group">
                  <div className="flex items-start justify-between gap-4">
                    <div className="h-12 w-12 rounded-2xl border border-primary/25 bg-primary/10 flex items-center justify-center">
                      {Icon ? <Icon className="h-6 w-6 text-primary" /> : null}
                    </div>
                    <span className="h-2 w-2 rounded-full bg-primary/60 opacity-0 group-hover:opacity-100 transition" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-white">{svc.title}</h3>
                  <p className="mt-3 text-white/70 leading-relaxed">
                    {svc.description}
                  </p>

                  <div className="mt-6 h-px w-full bg-gradient-to-r from-primary/30 via-white/10 to-transparent" />
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
