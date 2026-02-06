import React from "react";
import { Heart } from "lucide-react";
import { NAV_LINKS, PERSONAL_INFO, SOCIAL_LINKS } from "../../utils/constants";
import { scrollToSection } from "../../hooks/useScrollSpy";
import { getIcon } from "../../utils/iconMap";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-black">
      <div className="max-w-[1320px] mx-auto px-5 py-14">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <p className="text-2xl font-semibold text-white">{PERSONAL_INFO.name}</p>
            <p className="mt-3 text-white/70 max-w-md">
              Modern portfolio template built with React + Tailwind CSS. Customize the data files and make it yours.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {SOCIAL_LINKS.map((s) => {
                const Icon = getIcon(s.icon);
                return (
                  <a
                    key={s.id}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 transition hover:text-white hover:border-white/20"
                  >
                    {Icon ? <Icon className="h-4 w-4" /> : null}
                    {s.label}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="text-sm font-semibold text-white">Quick Links</p>
            <div className="mt-4 flex flex-col gap-2">
              {NAV_LINKS.filter((l) => l.id !== "home").map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollToSection(l.id)}
                  className="text-left text-white/70 hover:text-white transition"
                >
                  {l.label}
                </button>
              ))}
            </div>
          </div>

          <div className="md:col-span-4">
            <p className="text-sm font-semibold text-white">Get in touch</p>
            <p className="mt-4 text-white/70">
              Email me at
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="ml-2 text-white hover:text-primary transition"
              >
                {PERSONAL_INFO.email}
              </a>
            </p>
            <p className="mt-2 text-white/60 text-sm">{PERSONAL_INFO.location}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-8">
          <p className="text-white/60 text-sm">© {year} {PERSONAL_INFO.name}. All rights reserved.</p>
          <p className="text-white/60 text-sm flex items-center gap-2">
            Built with <Heart className="h-4 w-4 text-primary animate-pulse" /> React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}
