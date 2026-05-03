"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useRef } from "react";
import { ArrowRight, ArrowDown } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { MagneticText } from "@/components/ui/magnetic-text";
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
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <>
      {/* === HERO === */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 50%, #000 40%, transparent 100%)",
          }}
        />

        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="relative z-10 w-full px-6"
        >
          {/* Status pill */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-muted/50 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground" />
              </span>
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                Disponible — Bruxelles
              </span>
            </div>
          </motion.div>

          {/* Main typographic block */}
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[16vw] md:text-[12vw] lg:text-[11vw] leading-[0.85]"
            >
              <MagneticText
                text="STUDIO"
                hoverText="VISION"
                circleSize={220}
                circleBg="#FAFAFA"
                innerColor="#0A0A0A"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-[16vw] md:text-[12vw] lg:text-[11vw] leading-[0.85] italic font-light text-foreground/80"
            >
              <span className="font-medium tracking-tighter italic">créative</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed"
            >
              Identités visuelles fortes, sincères et impactantes. Du logotype
              au rebranding complet — pour les marques qui veulent marquer.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/projets"
                data-magnetic
                className="group inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-foreground/90 transition-colors"
              >
                Voir les projets
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="/contact"
                data-magnetic
                className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-4 rounded-full text-sm uppercase tracking-widest hover:border-foreground transition-colors"
              >
                Démarrer un projet
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Scroll
            </span>
            <ArrowDown size={16} className="text-muted-foreground" />
          </motion.div>
        </motion.div>
      </section>

      {/* === MARQUEE INFINI === */}
      <section className="py-20 border-y border-border bg-background">
        <TextMarquee
          baseVelocity={-2}
          className="text-[14vw] md:text-[10vw] font-bold tracking-[-0.04em] leading-[0.9] text-foreground/95"
        >
          <span className="mr-12">RBFA</span>
          <span className="mr-12 text-foreground/30">⊹</span>
          <span className="mr-12">DFCO</span>
          <span className="mr-12 text-foreground/30">⊹</span>
          <span className="mr-12">HERMÈS</span>
          <span className="mr-12 text-foreground/30">⊹</span>
          <span className="mr-12">MOCRO KID</span>
          <span className="mr-12 text-foreground/30">⊹</span>
        </TextMarquee>
        <TextMarquee
          baseVelocity={2}
          className="text-[14vw] md:text-[10vw] font-light tracking-[-0.04em] leading-[0.9] italic text-foreground/40"
        >
          <span className="mr-12">REBRANDING</span>
          <span className="mr-12">—</span>
          <span className="mr-12">IDENTITÉ</span>
          <span className="mr-12">—</span>
          <span className="mr-12">LOGOTYPE</span>
          <span className="mr-12">—</span>
          <span className="mr-12">MOTION</span>
          <span className="mr-12">—</span>
        </TextMarquee>
      </section>

      {/* === FEATURED PROJECTS === */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
              <div>
                <p className="text-muted-foreground uppercase tracking-[0.3em] text-xs mb-3 font-mono">
                  ⊹ Sélection
                </p>
                <h2 className="text-5xl md:text-7xl font-medium tracking-tight">
                  Travaux
                  <br />
                  <span className="italic font-light">récents</span>
                </h2>
              </div>
              <Link
                href="/projets"
                data-magnetic
                className="hidden md:inline-flex items-center gap-2 border border-border hover:border-foreground rounded-full px-6 py-3 text-sm uppercase tracking-widest transition-colors"
              >
                Tout voir <ArrowRight size={14} />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project, i) => (
              <AnimatedSection key={project.slug} delay={i * 0.08}>
                <Link
                  href={`/projets/${project.slug}`}
                  className="group block relative"
                >
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border relative bg-muted">
                    {project.cover && (
                      <Image
                        src={project.cover}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                        sizes="(max-width: 768px) 100vw, 640px"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest bg-background/60 backdrop-blur border border-border text-foreground/80">
                      {String(i + 1).padStart(2, "0")} — {project.year}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      {project.tag && (
                        <span className="text-xs text-foreground/50 uppercase tracking-widest mb-1 block">
                          {project.tag}
                        </span>
                      )}
                      <h3 className="text-2xl md:text-3xl font-medium group-hover:translate-x-1 transition-transform">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {project.category}
                      </p>
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
                className="inline-flex items-center gap-2 text-foreground text-sm uppercase tracking-widest"
              >
                Tout voir <ArrowRight size={14} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* === CTA === */}
      <section className="py-32 px-6 border-t border-border">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-muted-foreground uppercase tracking-[0.3em] text-xs mb-6 font-mono">
              ⊹ Travaillons ensemble
            </p>
            <div className="text-7xl md:text-9xl font-bold tracking-tight leading-[0.9] mb-10">
              <MagneticText
                text="HELLO"
                hoverText="BONJOUR"
                circleSize={180}
                circleBg="#FAFAFA"
                innerColor="#0A0A0A"
              />
            </div>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              Une idée, un projet, une envie ? On en parle autour d&apos;un
              café — ou en visio si Bruxelles c&apos;est trop loin.
            </p>
            <Link
              href="/contact"
              data-magnetic
              className="group inline-flex items-center gap-3 bg-foreground text-background px-10 py-5 rounded-full text-sm uppercase tracking-widest hover:bg-foreground/90 transition-colors"
            >
              Démarrer un projet
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
