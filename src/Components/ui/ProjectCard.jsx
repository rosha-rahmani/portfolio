import React from "react";
import Card from "./Card";
import { ExternalLink, Github } from "lucide-react";

export default function ProjectCard({ project }) {
  if (!project) return null;

  return (
    <Card className="group overflow-hidden">
      <div className="relative">
        <div className="aspect-[16/10] w-full overflow-hidden bg-white/5">
          {/* Image is optional; we fallback to a gradient placeholder */}
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-primary/30 via-white/5 to-white/0" />
          )}
        </div>

        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute -inset-20 bg-[radial-gradient(circle_at_30%_20%,rgba(141,255,105,0.18),transparent_55%)]" />
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm text-white/70">{project.category}</p>
            <h3 className="mt-1 text-xl font-semibold text-white">{project.title}</h3>
          </div>
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:text-white hover:border-white/20"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/80 transition hover:text-white hover:border-white/20"
                aria-label="Live Demo"
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        <p className="mt-4 text-white/70 line-clamp-3">{project.description}</p>

        {project.metrics && (
          <div className="mt-4 inline-flex items-center gap-2 rounded-xl border border-primary/25 bg-primary/10 px-3 py-2 text-sm text-primary">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="font-medium">{project.metrics}</span>
          </div>
        )}

        {Array.isArray(project.technologies) && project.technologies.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.slice(0, 6).map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/80"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
}
