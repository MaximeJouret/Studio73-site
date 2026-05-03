"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { use } from "react";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { getProjectBySlug, projects } from "@/data/projects";

export default function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const accent = project.color;
  const accentSecondary = project.colorSecondary;
  const bg = project.background ?? "#0A0A0A";

  // Find next project for the bottom navigation
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const nextProject =
    projects[(currentIndex + 1) % projects.length];

  return (
    <div className="min-h-screen" style={{ backgroundColor: bg }}>
      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at center top, ${accent}40 0%, transparent 60%)`,
          }}
        />

        <div className="relative max-w-7xl mx-auto">
          <Link
            href="/projets"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-12 text-sm uppercase tracking-widest"
          >
            <ArrowLeft size={16} />
            Tous les projets
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span
                className="text-xs uppercase tracking-[0.3em] font-medium"
                style={{ color: accent }}
              >
                {project.category}
              </span>
              {project.tag && (
                <>
                  <span className="text-white/30">•</span>
                  <span className="text-xs uppercase tracking-[0.3em] text-white/50">
                    {project.tag}
                  </span>
                </>
              )}
            </div>

            <h1 className="text-5xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-[0.95] text-white">
              {project.title}
            </h1>

            {project.fullDescription && (
              <p className="mt-10 text-white/70 text-lg md:text-xl max-w-3xl leading-relaxed">
                {project.fullDescription}
              </p>
            )}
          </motion.div>

          {/* Meta grid */}
          <AnimatedSection delay={0.2}>
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-white/10">
              {project.client && (
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-2">
                    Client
                  </p>
                  <p className="text-white font-medium">{project.client}</p>
                </div>
              )}
              {project.year && (
                <div>
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-2">
                    Année
                  </p>
                  <p className="text-white font-medium">{project.year}</p>
                </div>
              )}
              {project.disciplines && project.disciplines.length > 0 && (
                <div className="col-span-2">
                  <p className="text-xs uppercase tracking-widest text-white/40 mb-2">
                    Disciplines
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.disciplines.map((d) => (
                      <span
                        key={d}
                        className="text-xs px-3 py-1 rounded-full border border-white/20 text-white/70"
                      >
                        {d}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </AnimatedSection>

          {/* Color palette */}
          <AnimatedSection delay={0.3}>
            <div className="mt-12 flex items-center gap-4 flex-wrap">
              <p className="text-xs uppercase tracking-widest text-white/40">
                Palette
              </p>
              <div className="flex gap-2">
                <div
                  className="w-10 h-10 rounded-full border border-white/20"
                  style={{ backgroundColor: bg }}
                  title="Fond"
                />
                <div
                  className="w-10 h-10 rounded-full border border-white/20"
                  style={{ backgroundColor: accent }}
                  title="Accent"
                />
                {accentSecondary && (
                  <div
                    className="w-10 h-10 rounded-full border border-white/20"
                    style={{ backgroundColor: accentSecondary }}
                    title="Accent secondaire"
                  />
                )}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery */}
      {project.images && project.images.length > 0 && (
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto space-y-6">
            {project.images.map((img, i) => (
              <AnimatedSection key={img} delay={Math.min(i * 0.04, 0.3)}>
                <figure
                  className="relative rounded-2xl overflow-hidden border border-white/10"
                  style={{ backgroundColor: bg }}
                >
                  <Image
                    src={img}
                    alt={`${project.title} — visuel ${i + 1}`}
                    width={1600}
                    height={1067}
                    className="w-full h-auto"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1280px"
                    priority={i < 2}
                  />
                </figure>
              </AnimatedSection>
            ))}
          </div>
        </section>
      )}

      {/* Next project */}
      {nextProject && nextProject.slug !== project.slug && (
        <section className="py-20 px-6 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <AnimatedSection>
              <Link
                href={`/projets/${nextProject.slug}`}
                className="group block"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4">
                  Projet suivant
                </p>
                <div className="flex items-center justify-between">
                  <h3
                    className="text-3xl md:text-5xl font-bold text-white group-hover:translate-x-2 transition-transform duration-500"
                    style={{
                      ["--hover-color" as string]: nextProject.color,
                    }}
                  >
                    <span className="group-hover:text-[var(--hover-color)] transition-colors">
                      {nextProject.title}
                    </span>
                  </h3>
                  <span
                    className="w-14 h-14 md:w-20 md:h-20 rounded-full border border-white/20 flex items-center justify-center text-white group-hover:bg-[var(--hover-color)] group-hover:border-transparent transition-all duration-500"
                    style={{
                      ["--hover-color" as string]: nextProject.color,
                    }}
                  >
                    <ArrowRight size={20} />
                  </span>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Closing CTA */}
      <section className="py-32 px-6 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <p
              className="uppercase tracking-[0.3em] text-sm mb-4"
              style={{ color: accent }}
            >
              Un projet similaire ?
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Travaillons <span style={{ color: accent }}>ensemble</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm uppercase tracking-widest transition-all duration-300 text-white"
                style={{ backgroundColor: accent }}
              >
                Démarrer un projet
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/projets"
                className="inline-flex items-center gap-2 border border-white/20 hover:border-white text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest transition-all duration-300"
              >
                Autres projets
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
