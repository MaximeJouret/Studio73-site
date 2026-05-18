"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { TextMarquee } from "@/components/ui/text-marquee";
import { projects } from "@/data/projects";

const featuredProjects = projects.filter((p) => p.cover).slice(0, 4);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <>
      {/* ============ HERO — Video full-bleed (no text overlay) ============ */}
      <section
        ref={heroRef}
        className="relative h-screen min-h-[640px] w-full overflow-hidden bg-background"
      >
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="absolute inset-0"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/projects/rbfa/rbfa-06.jpg"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/video/intro.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* Subtle bottom gradient to blend into next section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background pointer-events-none" />

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.4 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-1"
          >
            <ArrowDown size={14} className="text-foreground/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* ============ MARQUEE BAND ============ */}
      <section className="py-10 md:py-14 border-y border-border bg-background overflow-hidden">
        <TextMarquee
          baseVelocity={-2}
          className="uppercase font-medium tracking-[-0.04em] leading-[0.9] text-foreground"
          repeat={6}
        >
          <span className="mr-12 text-[12vw] md:text-[9vw]">RBFA</span>
          <span className="mr-12 text-[12vw] md:text-[9vw] text-foreground/20">/</span>
          <span className="mr-12 text-[12vw] md:text-[9vw]">DFCO</span>
          <span className="mr-12 text-[12vw] md:text-[9vw] text-foreground/20">/</span>
          <span className="mr-12 text-[12vw] md:text-[9vw]">HERMÈS</span>
          <span className="mr-12 text-[12vw] md:text-[9vw] text-foreground/20">/</span>
          <span className="mr-12 text-[12vw] md:text-[9vw]">MOCRO KID</span>
          <span className="mr-12 text-[12vw] md:text-[9vw] text-foreground/20">/</span>
        </TextMarquee>
      </section>

      {/* ============ FEATURED PROJECTS ============ */}
      <section className="py-32 px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto">
          <AnimatedSection>
            <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
              <div>
                <p className="text-foreground/50 uppercase tracking-[0.3em] text-[11px] mb-4 font-mono">
                  [002] — Sélection
                </p>
                <h2
                  className="font-medium uppercase tracking-[-0.04em] leading-[0.9]"
                  style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
                >
                  Travaux récents
                </h2>
              </div>
              <Link
                href="/projets"
                data-magnetic
                className="hidden md:inline-flex items-center gap-3 border border-foreground/20 hover:border-foreground rounded-full px-6 py-3 text-sm uppercase tracking-[0.15em] transition-colors backdrop-blur-md bg-foreground/5"
              >
                Tout voir <ArrowRight size={14} />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {featuredProjects.map((project, i) => (
              <AnimatedSection key={project.slug} delay={i * 0.08}>
                <Link
                  href={`/projets/${project.slug}`}
                  className="group block relative"
                >
                  <div className="aspect-[4/3] overflow-hidden border border-border relative bg-muted">
                    {project.cover && (
                      <Image
                        src={project.cover}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-[1.2s] ease-out"
                        sizes="(max-width: 768px) 100vw, 700px"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500" />
                    {/* Top tag */}
                    <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-[0.25em] text-foreground/70 font-mono backdrop-blur-md bg-background/40 border border-border px-3 py-1 rounded-full">
                        [{String(i + 1).padStart(3, "0")}]
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.25em] text-foreground/70 font-mono backdrop-blur-md bg-background/40 border border-border px-3 py-1 rounded-full">
                        {project.year}
                      </span>
                    </div>
                    {/* Bottom content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      {project.tag && (
                        <span className="text-[10px] text-foreground/60 uppercase tracking-[0.25em] mb-2 block font-mono">
                          {project.tag}
                        </span>
                      )}
                      <h3
                        className="font-medium uppercase tracking-[-0.02em] leading-[0.95] group-hover:translate-x-1 transition-transform"
                        style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
                      >
                        {project.title}
                      </h3>
                      <p className="text-sm text-foreground/50 mt-2 uppercase tracking-[0.15em]">
                        {project.category}
                      </p>
                    </div>
                    {/* Hover overlay arrow */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-500">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.2}>
            <div className="mt-12 md:hidden text-center">
              <Link
                href="/projets"
                className="inline-flex items-center gap-2 text-foreground text-sm uppercase tracking-[0.2em]"
              >
                Tout voir <ArrowRight size={14} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ============ MANIFESTO ============ */}
      <section className="py-32 md:py-48 px-6 md:px-10 border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          <AnimatedSection>
            <p className="text-foreground/50 uppercase tracking-[0.3em] text-[11px] mb-6 font-mono">
              [003] — Manifeste
            </p>
            <h2
              className="font-medium uppercase tracking-[-0.04em] leading-[0.9] max-w-5xl"
              style={{ fontSize: "clamp(2.5rem, 8vw, 8rem)" }}
            >
              On ne dessine pas <span className="text-foreground/30">pour plaire.</span>{" "}
              On dessine pour <span className="italic font-light">marquer.</span>
            </h2>
          </AnimatedSection>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="py-32 md:py-40 px-6 md:px-10 border-t border-border">
        <div className="max-w-[1400px] mx-auto">
          <AnimatedSection>
            <p className="text-foreground/50 uppercase tracking-[0.3em] text-[11px] mb-6 font-mono">
              [004] — Contact
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-12">
              <h2
                className="font-medium uppercase tracking-[-0.04em] leading-[0.9]"
                style={{ fontSize: "clamp(3rem, 11vw, 12rem)" }}
              >
                Démarrons<br />
                <span className="italic font-light text-foreground/60">ensemble.</span>
              </h2>
              <div className="flex flex-col gap-4 md:items-end">
                <a
                  href="mailto:info@studio-73.be"
                  data-magnetic
                  className="text-foreground text-lg md:text-2xl uppercase tracking-[-0.01em] hover:opacity-60 transition-opacity"
                >
                  info@studio-73.be ↗
                </a>
                <a
                  href="tel:+32472356314"
                  className="text-foreground/60 text-sm md:text-base uppercase tracking-[0.15em] font-mono"
                >
                  +32 472 35 63 14
                </a>
                <Link
                  href="/contact"
                  data-magnetic
                  className="mt-4 group inline-flex items-center justify-between gap-6 bg-foreground text-background pl-6 pr-2 py-2 rounded-full uppercase tracking-[0.15em] text-sm font-medium transition-colors hover:bg-foreground/90 w-fit"
                >
                  <span>Formulaire complet</span>
                  <span className="w-10 h-10 rounded-full bg-background text-foreground flex items-center justify-center group-hover:rotate-[-45deg] transition-transform">
                    <ArrowRight size={16} />
                  </span>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
