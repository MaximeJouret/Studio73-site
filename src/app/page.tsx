"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";

const featuredProjects = [
  {
    title: "DFCO Dijon",
    category: "Rebranding",
    tag: "Concept fictif",
    color: "#E53E3E",
  },
  {
    title: "BackOnTrack",
    category: "Rebranding",
    color: "#FAFAFA",
  },
  {
    title: "Hermès",
    category: "Vitrine + Maquette",
    tag: "Concept fictif",
    color: "#F6AD55",
  },
  {
    title: "Mocro Kid & Edess",
    category: "CD Cover",
    color: "#9F7AEA",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/5 via-background to-background" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-accent uppercase tracking-[0.3em] text-sm mb-6"
          >
            Studio créatif — Bruxelles
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight leading-[0.9]"
          >
            Agence
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground via-accent to-foreground">
              créative
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-8 text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Nous concevons des identités visuelles fortes, sincères et
            impactantes. Du logotype au rebranding complet.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/projets"
              className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest transition-all duration-300"
            >
              Voir nos projets
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-border hover:border-accent text-foreground px-8 py-4 rounded-full text-sm uppercase tracking-widest transition-all duration-300 hover:text-accent"
            >
              Nous contacter
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={20} className="text-muted-foreground" />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="flex items-end justify-between mb-16">
              <div>
                <p className="text-accent uppercase tracking-[0.3em] text-sm mb-2">
                  Portfolio
                </p>
                <h2 className="text-4xl md:text-6xl font-bold">
                  Projets récents
                </h2>
              </div>
              <Link
                href="/projets"
                className="hidden md:inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm uppercase tracking-widest"
              >
                Tout voir <ArrowRight size={14} />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredProjects.map((project, i) => (
              <AnimatedSection key={project.title} delay={i * 0.1}>
                <Link href="/projets" className="group block relative">
                  <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted border border-border relative">
                    <div
                      className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                      style={{ backgroundColor: project.color }}
                    />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                      <span
                        className="text-6xl md:text-8xl font-bold opacity-10 group-hover:opacity-20 transition-opacity duration-500 select-none"
                        style={{ color: project.color }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/80 to-transparent">
                      {project.tag && (
                        <span className="text-xs text-accent uppercase tracking-wider mb-1 block">
                          {project.tag}
                        </span>
                      )}
                      <h3 className="text-xl font-bold group-hover:text-accent transition-colors">
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

          <div className="mt-8 md:hidden text-center">
            <Link
              href="/projets"
              className="inline-flex items-center gap-2 text-accent text-sm uppercase tracking-widest"
            >
              Tout voir <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section className="py-32 px-6 bg-muted">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <p className="text-accent uppercase tracking-[0.3em] text-sm mb-2 text-center">
              Nos expertises
            </p>
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
              Ce que nous faisons
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Rebranding",
              "Logotype",
              "Charte graphique",
              "Naming",
              "Motion design",
              "Identité visuelle",
              "Affiche",
              "Illustration",
            ].map((service, i) => (
              <AnimatedSection key={service} delay={i * 0.05}>
                <Link
                  href="/services"
                  className="group block p-6 rounded-xl border border-border hover:border-accent bg-background transition-all duration-300"
                >
                  <span className="text-xs text-accent font-mono">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 font-medium group-hover:text-accent transition-colors">
                    {service}
                  </h3>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <div className="mt-12 text-center">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors text-sm uppercase tracking-widest"
              >
                Voir tous nos services <ArrowRight size={14} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Travaillons
              <br />
              <span className="text-accent">ensemble</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              Une idée, un projet, une envie ? Parlons-en et créons quelque
              chose d&apos;unique.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-10 py-5 rounded-full text-sm uppercase tracking-widest transition-all duration-300"
            >
              Nous contacter
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
