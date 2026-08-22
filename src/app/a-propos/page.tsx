"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Comprendre",
    description:
      "Tout commence par un échange : nous analysons votre univers, vos objectifs, vos valeurs et votre audience. Cette immersion nous permet de poser des bases solides.",
  },
  {
    num: "02",
    title: "Créer",
    description:
      "Nous concevons des identités, concepts et supports qui ne sont pas seulement esthétiques, ils racontent une histoire, portent un message et renforcent votre positionnement.",
  },
  {
    num: "03",
    title: "Collaborer",
    description:
      "Vous êtes impliqué à chaque étape. Feedbacks, itérations, ajustements : nous avançons ensemble, dans un vrai dialogue de confiance.",
  },
  {
    num: "04",
    title: "Finaliser & livrer",
    description:
      "Des livrables de qualité professionnelle, prêts à être déployés, et qui reflètent pleinement l'identité et l'ambition de votre marque.",
  },
];

export default function AProposPage() {
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
            [003] Studio
          </p>
          <h1
            className="font-medium uppercase tracking-[-0.04em] leading-[0.85] mb-10 text-foreground"
            style={{ fontSize: "clamp(3rem, 11vw, 12rem)" }}
          >
            À propos.
          </h1>
        </motion.div>

        {/* Intro statement */}
        <AnimatedSection>
          <div className="mt-12 md:mt-20 max-w-5xl">
            <h2
              className="font-medium uppercase tracking-[-0.03em] leading-[0.9] text-foreground"
              style={{ fontSize: "clamp(2rem, 5.5vw, 5rem)" }}
            >
              Agence créative belge, fondée à Bruxelles.
            </h2>
          </div>
        </AnimatedSection>

        {/* Intro text */}
        <AnimatedSection delay={0.1}>
          <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <p className="text-[11px] uppercase tracking-[0.25em] text-foreground/40 font-mono">
                [I]<br />
                Origine
              </p>
            </div>
            <div className="md:col-span-9 space-y-6 text-foreground/70 text-base md:text-lg leading-relaxed max-w-3xl">
              <p>
                Studio 73, c&apos;est l&apos;histoire d&apos;un regard jeune,
                passionné et exigeant porté sur le design graphique.
              </p>
              <p>
                Fondé à Bruxelles par un créatif fraîchement diplômé avec
                distinction et lauréat du prix du meilleur travail de fin
                d&apos;étude remis par la Ville de Bruxelles, le studio est né
                d&apos;une volonté simple : créer des identités visuelles
                fortes, sincères et impactantes.
              </p>
              <p>
                Je m&apos;appelle Loïc, et après un stage en agence et une
                petite expérience en freelance, j&apos;ai décidé de lancer
                Studio 73 pour donner vie à des projets ambitieux. Une vision
                jeune, fraîche, à l&apos;affût des tendances, mais toujours
                guidée par le sens.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Approach */}
        <div className="mt-32 md:mt-48">
          <AnimatedSection>
            <p className="text-foreground/50 uppercase tracking-[0.3em] text-[11px] mb-6 font-mono">
              [II] Méthode
            </p>
            <h2
              className="font-medium uppercase tracking-[-0.04em] leading-[0.9] mb-16 md:mb-20"
              style={{ fontSize: "clamp(2.5rem, 7vw, 7rem)" }}
            >
              Notre approche.
            </h2>
          </AnimatedSection>

          <div>
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.06}>
                <div className="group relative grid grid-cols-12 gap-4 md:gap-8 py-10 md:py-14 border-t border-foreground/10 last:border-b last:border-foreground/10 transition-colors hover:bg-foreground/[0.03] px-2 md:px-6">
                  <div className="col-span-2 md:col-span-1">
                    <span className="text-[11px] uppercase tracking-[0.25em] text-foreground/40 font-mono">
                      [{step.num}]
                    </span>
                  </div>
                  <div className="col-span-10 md:col-span-4">
                    <h3
                      className="font-medium uppercase tracking-[-0.02em] leading-[0.95] group-hover:translate-x-2 transition-transform duration-500"
                      style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)" }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <div className="col-span-12 md:col-span-7">
                    <p className="text-foreground/60 leading-relaxed max-w-2xl">
                      {step.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>

        {/* Mission */}
        <AnimatedSection>
          <div className="mt-32 md:mt-48 grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-3">
              <p className="text-[11px] uppercase tracking-[0.25em] text-foreground/40 font-mono">
                [III]<br />
                Mission
              </p>
            </div>
            <div className="md:col-span-9">
              <h2
                className="font-medium uppercase tracking-[-0.03em] leading-[0.95] mb-10 text-foreground"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3.5rem)" }}
              >
                Une approche créative adaptée à chaque projet.
              </h2>
              <div className="space-y-5 text-foreground/70 text-base md:text-lg leading-relaxed max-w-3xl">
                <p>
                  Nous croyons au pouvoir d&apos;un visuel bien pensé, d&apos;un
                  logo qui parle, d&apos;un concept qui reste en tête. Chaque
                  projet est conçu avec soin, dans un dialogue constant entre
                  créativité, stratégie et esthétique.
                </p>
                <p>
                  Que vous soyez une jeune marque, un projet culturel, une
                  entreprise ambitieuse ou un artiste en quête d&apos;identité,
                  nous vous accompagnons à chaque étape.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </div>
  );
}
