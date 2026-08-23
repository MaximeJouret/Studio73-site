"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { projects } from "@/data/projects";

export default function ProjetsPage() {
  return (
    <div className="pt-32 md:pt-40 pb-20 px-6 md:px-10">
      <div className="max-w-[1500px] mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-foreground/50 uppercase tracking-[0.3em] text-[11px] mb-6 font-mono">
            [001] Portfolio
          </p>
          <h1
            className="font-medium uppercase tracking-[-0.04em] leading-[0.85] mb-10"
            style={{ fontSize: "clamp(3rem, 11vw, 12rem)" }}
          >
            Projets<span className="text-foreground">.</span>
          </h1>
          <p className="text-foreground/60 text-lg max-w-2xl leading-relaxed">
            Chaque projet est une collaboration unique, pensée autour de vos
            besoins, de votre identité et de vos objectifs.
          </p>
        </motion.div>

        {/* Project list */}
        <div className="mt-24 md:mt-32 space-y-3">
          {projects.map((project, i) => {
            const hasDetailPage = !!project.cover;
            const cardContent = (
              <div className="group relative overflow-hidden rounded-xl border border-foreground/10 transition-colors hover:bg-foreground/[0.03]">
                <div className="grid grid-cols-12 gap-4 py-8 md:py-10 px-2 md:px-6 items-center">
                  {/* Index */}
                  <div className="col-span-2 md:col-span-1">
                    <span className="text-[11px] uppercase tracking-[0.25em] text-foreground/40 font-mono">
                      [{String(i + 1).padStart(3, "0")}]
                    </span>
                  </div>

                  {/* Title */}
                  <div className="col-span-10 md:col-span-5">
                    <h2
                      className="font-medium uppercase tracking-[-0.02em] leading-[0.95] group-hover:translate-x-2 transition-transform duration-500"
                      style={{ fontSize: "clamp(1.5rem, 3.5vw, 3rem)" }}
                    >
                      {project.title}
                    </h2>
                  </div>

                  {/* Category + tag */}
                  <div className="col-span-6 md:col-span-3 hidden md:block">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-foreground/50 font-mono">
                      {project.category}
                    </p>
                    {project.tag && (
                      <p className="text-[10px] uppercase tracking-[0.25em] text-foreground/30 font-mono mt-1">
                        {project.tag}
                      </p>
                    )}
                  </div>

                  {/* Year */}
                  <div className="col-span-3 md:col-span-2 hidden md:block">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-foreground/40 font-mono">
                      {project.year ?? ""}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="col-span-12 md:col-span-1 flex justify-end">
                    {hasDetailPage ? (
                      <span className="w-11 h-11 rounded-full border border-foreground/15 flex items-center justify-center group-hover:bg-foreground group-hover:text-background group-hover:border-foreground transition-all duration-500">
                        <ArrowUpRight size={18} />
                      </span>
                    ) : (
                      <span className="text-[10px] uppercase tracking-[0.25em] text-foreground/30 font-mono">
                        Bientôt
                      </span>
                    )}
                  </div>
                </div>

                {/* Hover preview image (peeks from left) */}
                {project.cover && (
                  <div
                    className="pointer-events-none absolute right-20 top-1/2 -translate-y-1/2 w-40 h-28 md:w-56 md:h-40 overflow-hidden rounded-md border border-foreground/20 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500"
                    style={{
                      filter: "saturate(1.1)",
                    }}
                  >
                    <Image
                      src={project.cover}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="240px"
                    />
                  </div>
                )}
              </div>
            );

            return (
              <AnimatedSection key={project.slug} delay={i * 0.04}>
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
        <AnimatedSection>
          <div className="mt-32 md:mt-48 text-center">
            <p className="text-foreground/50 uppercase tracking-[0.3em] text-[11px] mb-4 font-mono">
              Et si c&apos;était vous le prochain ?
            </p>
            <h2
              className="font-medium uppercase tracking-[-0.04em] leading-[0.9] mb-8"
              style={{ fontSize: "clamp(2rem, 6vw, 5rem)" }}
            >
              Travaillons ensemble.
            </h2>
            <Link
              href="/contact"
              data-magnetic="true"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm uppercase tracking-widest transition-all duration-300 bg-foreground text-background hover:bg-foreground/90"
            >
              Démarrer un projet
              <ArrowUpRight
                size={16}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </Link>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
