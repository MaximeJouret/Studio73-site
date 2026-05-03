"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";

const projects = [
  {
    title: "DFCO Dijon",
    category: "Rebranding",
    tag: "Concept fictif",
    description:
      "Refonte complète de l'identité visuelle du club de football DFCO Dijon. Logo, typographie, supports de communication et présence digitale.",
    color: "#E53E3E",
  },
  {
    title: "BackOnTrack",
    category: "Rebranding",
    description:
      "Création d'une identité visuelle moderne pour une marque de coaching sportif. Logo, iconographie et déclinaisons sur supports variés.",
    color: "#FAFAFA",
  },
  {
    title: "Hermès — Vitrine + Maquette & Livret",
    category: "Vitrine & Print",
    tag: "Concept fictif",
    description:
      "Concept de vitrine et livret éditorial pour la maison Hermès. Mise en page soignée et direction artistique haut de gamme.",
    color: "#F6AD55",
  },
  {
    title: "Mieux qu'hier — Mocro Kid & Edess",
    category: "CD Cover",
    description:
      "Conception de la pochette d'album « Mieux qu'hier ». Direction artistique, typographie et retouche photo.",
    color: "#9F7AEA",
  },
  {
    title: "La Vallée",
    category: "Affiche A3",
    tag: "Concept fictif",
    description:
      "Affiche événementielle grand format. Composition typographique audacieuse et palette de couleurs impactante.",
    color: "#48BB78",
  },
  {
    title: "Underdog",
    category: "Logotype",
    description:
      "Création d'un logotype distinctif pour la marque Underdog. Recherche typographique et déclinaisons.",
    color: "#4299E1",
  },
  {
    title: "Journée Mondiale des Droits de l'Homme",
    category: "Affiche A3",
    tag: "Concept fictif",
    description:
      "Affiche engagée pour la Journée Mondiale des Droits de l'Homme. Communication visuelle au service d'une cause.",
    color: "#ED8936",
  },
];

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
          <p className="text-accent uppercase tracking-[0.3em] text-sm mb-4">
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
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.05}>
              <div className="group relative rounded-2xl border border-border bg-muted overflow-hidden hover:border-accent/50 transition-all duration-500">
                <div className="flex flex-col md:flex-row">
                  {/* Color accent */}
                  <div
                    className="w-full md:w-80 h-48 md:h-auto flex items-center justify-center relative overflow-hidden"
                    style={{ backgroundColor: `${project.color}10` }}
                  >
                    <span
                      className="text-7xl md:text-9xl font-bold opacity-20 select-none group-hover:scale-110 transition-transform duration-500"
                      style={{ color: project.color }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div
                      className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ backgroundColor: project.color }}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs text-muted-foreground uppercase tracking-widest">
                        {project.category}
                      </span>
                      {project.tag && (
                        <>
                          <span className="text-border">•</span>
                          <span className="text-xs text-accent uppercase tracking-widest">
                            {project.tag}
                          </span>
                        </>
                      )}
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold group-hover:text-accent transition-colors duration-300">
                      {project.title}
                    </h2>
                    <p className="mt-3 text-muted-foreground leading-relaxed max-w-xl">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.2}>
          <div className="mt-32 text-center">
            <p className="text-muted-foreground text-lg mb-2">
              Envie de créer quelque chose ensemble ?
            </p>
            <h3 className="text-3xl md:text-4xl font-bold mb-8">
              Parlons de votre <span className="text-accent">projet</span>
            </h3>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-full text-sm uppercase tracking-widest transition-all duration-300"
            >
              Nous contacter
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
