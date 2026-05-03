"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { projects } from "@/data/projects";

export default function ProjetsPage() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-foreground uppercase tracking-[0.3em] text-sm mb-4">
            Portfolio
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Projets</h1>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
            Chaque projet est une collaboration unique, une rencontre entre
            votre vision et notre créativité. Découvrez un aperçu des marques,
            concepts et univers que nous avons eu le plaisir de faire émerger.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="mt-20 space-y-8">
          {projects.map((project, i) => {
            const hasDetailPage = !!project.cover;
            const cardContent = (
              <div className="group relative rounded-2xl border border-border bg-muted overflow-hidden hover:border-foreground/50 transition-all duration-500">
                <div className="flex flex-col md:flex-row">
                  {/* Cover or color block */}
                  <div
                    className="w-full md:w-80 h-56 md:h-auto relative overflow-hidden"
                    style={{ backgroundColor: `${project.color}10` }}
                  >
                    {project.cover ? (
                      <Image
                        src={project.cover}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, 320px"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span
                          className="text-7xl md:text-9xl font-bold opacity-20 select-none group-hover:scale-110 transition-transform duration-500"
                          style={{ color: project.color }}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </div>
                    )}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ backgroundColor: project.color }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-8 md:p-10 flex flex-col justify-center relative">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs text-muted-foreground uppercase tracking-widest">
                        {project.category}
                      </span>
                      {project.tag && (
                        <>
                          <span className="text-border">•</span>
                          <span className="text-xs text-foreground uppercase tracking-widest">
                            {project.tag}
                          </span>
                        </>
                      )}
                      {project.year && (
                        <>
                          <span className="text-border">•</span>
                          <span className="text-xs text-muted-foreground font-mono">
                            {project.year}
                          </span>
                        </>
                      )}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold group-hover:text-foreground transition-colors duration-300">
                      {project.title}
                    </h2>
                    <p className="mt-3 text-muted-foreground leading-relaxed max-w-xl">
                      {project.description}
                    </p>
                    {hasDetailPage && (
                      <span className="absolute top-8 right-8 w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-all duration-300">
                        <ArrowUpRight size={18} />
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );

            return (
              <AnimatedSection key={project.slug} delay={i * 0.05}>
                {hasDetailPage ? (
                  <Link href={`/projets/${project.slug}`}>{cardContent}</Link>
                ) : (
                  cardContent
                )}
              </AnimatedSection>
            );
          })}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.2}>
          <div className="mt-32 text-center">
            <p className="text-muted-foreground text-lg mb-2">
              Envie de créer quelque chose ensemble ?
            </p>
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              Parlons de votre <span className="text-foreground">projet</span>
            </h3>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-foreground hover:bg-foreground/90 text-background px-8 py-4 rounded-full text-sm uppercase tracking-widest transition-all duration-300"
            >
              Nous contacter
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
