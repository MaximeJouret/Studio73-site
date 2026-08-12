"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const services = [
  { name: "Rebranding", description: "Refonte complète d'identité de marque" },
  { name: "Logotype", description: "Création de logos" },
  { name: "Charte graphique", description: "Guides visuels complets" },
  { name: "Naming", description: "Recherche et création de noms" },
  { name: "Mise en page", description: "Design éditorial print et digital" },
  { name: "Motion design", description: "Animations et vidéos graphiques" },
  { name: "Traitement d'image", description: "Retouche et manipulation photo" },
  { name: "Identité visuelle", description: "Systèmes visuels cohérents et forts" },
  { name: "Affiche", description: "Posters et affiches grand format" },
  { name: "Cover d'artiste", description: "Pochettes d'album et visuels musicaux" },
  { name: "Illustration", description: "Illustrations sur mesure" },
  { name: "Réseaux sociaux", description: "Templates et contenus visuels" },
  { name: "Vitrine", description: "Conception de vitrines et espaces" },
  { name: "Packaging", description: "Design d'emballages produits" },
  { name: "Étalage", description: "Mise en scène et présentation produits" },
  { name: "Stratégie de marque", description: "Positionnement et stratégie globale" },
];

export default function ServicesPage() {
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
            [002] — Expertises
          </p>
          <h1
            className="font-medium uppercase tracking-[-0.04em] leading-[0.85] mb-10"
            style={{ fontSize: "clamp(3rem, 11vw, 12rem)" }}
          >
            Services<span className="text-foreground">.</span>
          </h1>
          <p className="text-foreground/60 text-lg max-w-2xl leading-relaxed">
            De la conception de logos au rebranding complet, nous donnons vie
            à vos idées avec créativité et précision. Pas de bullshit, pas de
            templates — du sur-mesure.
          </p>
        </motion.div>

        {/* Services list (uppercase, type-driven) */}
        <div className="mt-24 md:mt-32 grid grid-cols-1 md:grid-cols-2 gap-x-12">
          {services.map((service, i) => (
            <AnimatedSection key={service.name} delay={i * 0.025}>
              <div className="group relative flex items-baseline justify-between gap-6 py-6 border-t border-foreground/10 last:border-b last:border-foreground/10 transition-colors hover:bg-foreground/[0.03] px-2">
                <div className="flex items-baseline gap-4 md:gap-6 min-w-0">
                  <span className="text-[11px] uppercase tracking-[0.25em] text-foreground/40 font-mono shrink-0 w-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2
                    className="font-medium uppercase tracking-[-0.02em] leading-none truncate group-hover:translate-x-2 transition-transform duration-500"
                    style={{ fontSize: "clamp(1.25rem, 2.5vw, 2rem)" }}
                  >
                    {service.name}
                  </h2>
                </div>
                <p className="hidden lg:block text-[11px] uppercase tracking-[0.25em] text-foreground/40 font-mono shrink-0">
                  {service.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.2}>
          <div className="mt-32 md:mt-48 py-16 md:py-20 border-t border-foreground/10">
            <p className="text-foreground/50 uppercase tracking-[0.3em] text-[11px] mb-6 font-mono">
              [+] — Vous ne savez pas par où commencer ?
            </p>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
              <h2
                className="font-medium uppercase tracking-[-0.04em] leading-[0.9] text-foreground"
                style={{ fontSize: "clamp(2.5rem, 8vw, 8rem)" }}
              >
                On en parle<br />
                autour d&apos;un café ?
              </h2>
              <Link
                href="/contact"
                data-magnetic
                className="group inline-flex items-center justify-between gap-6 bg-foreground text-background pl-6 pr-2 py-2 rounded-full uppercase tracking-[0.15em] text-sm font-medium transition-colors hover:bg-foreground/90 w-fit"
              >
                <span>Démarrer un projet</span>
                <span className="w-10 h-10 rounded-full bg-background text-foreground flex items-center justify-center group-hover:rotate-[-45deg] transition-transform">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
