"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Comprendre",
    description:
      "Tout commence par un échange : nous analysons votre univers, vos objectifs, vos valeurs et votre audience. Cette immersion nous permet de poser des bases solides et cohérentes.",
  },
  {
    num: "02",
    title: "Créer avec sens",
    description:
      "Nous concevons des identités visuelles, concepts et supports qui ne sont pas seulement esthétiques — ils racontent une histoire, portent un message et renforcent votre positionnement.",
  },
  {
    num: "03",
    title: "Designer avec exigence",
    description:
      "Chaque détail compte. Nous combinons créativité, sens du design et rigueur graphique pour produire des visuels impactants, modernes et durables.",
  },
  {
    num: "04",
    title: "Collaborer en transparence",
    description:
      "Vous êtes impliqué à chaque étape. Feedbacks, itérations, ajustements : nous avançons ensemble, dans un vrai dialogue de confiance.",
  },
  {
    num: "05",
    title: "Livrer avec impact",
    description:
      "Notre objectif final : vous fournir des livrables de qualité professionnelle, prêts à être déployés, et qui reflètent pleinement l'identité et l'ambition de votre marque.",
  },
];

export default function AProposPage() {
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
            Notre histoire
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">À propos</h1>
        </motion.div>

        {/* Intro */}
        <AnimatedSection>
          <div className="mt-8 max-w-4xl">
            <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-8">
              Studio 73 est une agence créative belge,{" "}
              <span className="text-foreground">fondée à Bruxelles.</span>
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
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
                Studio 73 pour donner vie à des projets ambitieux. Notre
                force ? Une vision jeune, fraîche, à l&apos;affût des
                tendances, mais toujours guidée par le sens.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Approach */}
        <div className="mt-32">
          <AnimatedSection>
            <p className="text-foreground uppercase tracking-[0.3em] text-sm mb-4">
              Méthodologie
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-16">
              Notre approche
            </h2>
          </AnimatedSection>

          <div className="space-y-6">
            {steps.map((step, i) => (
              <AnimatedSection key={step.num} delay={i * 0.08}>
                <div className="group flex flex-col md:flex-row gap-6 md:gap-12 p-8 rounded-2xl border border-border bg-muted hover:border-foreground/50 transition-all duration-300">
                  <span className="text-5xl font-bold text-foreground/20 group-hover:text-foreground/40 transition-colors">
                    {step.num}
                  </span>
                  <div>
                    <h3 className="text-xl font-bold mb-2 group-hover:text-foreground transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed max-w-2xl">
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
          <div className="mt-32 p-12 md:p-16 rounded-3xl bg-muted border border-border">
            <p className="text-foreground uppercase tracking-[0.3em] text-sm mb-4">
              Notre raison d&apos;être
            </p>
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              Notre mission
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed max-w-3xl">
              <p>
                Née d&apos;une passion pour l&apos;image et les idées qui
                marquent, notre mission est simple : donner du sens et du
                style à votre marque.
              </p>
              <p>
                Nous croyons au pouvoir d&apos;un visuel bien pensé,
                d&apos;un logo qui parle, d&apos;un concept qui reste en
                tête. Chaque projet est conçu avec soin, dans un dialogue
                constant entre créativité, stratégie et excellence visuelle.
              </p>
              <p>
                Que vous soyez une jeune marque, un projet culturel, une
                entreprise ambitieuse ou un artiste en quête d&apos;identité,
                nous vous accompagnons à chaque étape.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection>
          <div className="mt-32 text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Travaillons{" "}
              <span className="text-foreground">ensemble</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
              Une idée, un projet, une envie ? Parlons-en !
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-foreground hover:bg-foreground/90 text-background px-10 py-5 rounded-full text-sm uppercase tracking-widest transition-all duration-300"
            >
              Nous contacter
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
