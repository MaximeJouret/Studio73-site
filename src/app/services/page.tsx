"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/AnimatedSection";
import {
  Palette,
  PenTool,
  BookOpen,
  Type,
  Layout,
  Film,
  ImageIcon,
  Fingerprint,
  FrameIcon,
  Disc3,
  Brush,
  Share2,
  Store,
  Package,
  Monitor,
  Megaphone,
} from "lucide-react";
import Link from "next/link";

const services = [
  { name: "Rebranding", icon: Palette, description: "Refonte complète d'identité de marque" },
  { name: "Logotype", icon: PenTool, description: "Création de logos uniques et mémorables" },
  { name: "Charte graphique", icon: BookOpen, description: "Guides visuels complets pour votre marque" },
  { name: "Naming", icon: Type, description: "Recherche et création de noms de marque" },
  { name: "Mise en page", icon: Layout, description: "Design éditorial print et digital" },
  { name: "Motion design", icon: Film, description: "Animations et vidéos graphiques" },
  { name: "Traitement d'image", icon: ImageIcon, description: "Retouche et manipulation photo" },
  { name: "Identité visuelle", icon: Fingerprint, description: "Systèmes visuels cohérents et forts" },
  { name: "Affiche", icon: FrameIcon, description: "Posters et affiches grand format" },
  { name: "Cover d'artiste", icon: Disc3, description: "Pochettes d'album et visuels musicaux" },
  { name: "Illustration", icon: Brush, description: "Illustrations sur mesure" },
  { name: "Réseaux sociaux", icon: Share2, description: "Templates et contenus visuels" },
  { name: "Vitrine", icon: Store, description: "Conception de vitrines et espaces" },
  { name: "Packaging", icon: Package, description: "Design d'emballages produits" },
  { name: "Étalage", icon: Monitor, description: "Mise en scène et présentation produits" },
  { name: "Stratégie de marque", icon: Megaphone, description: "Positionnement et stratégie globale" },
];

export default function ServicesPage() {
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
            Nos expertises
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">Services</h1>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
            Studio 73 vous accompagne dans la création d&apos;identités
            visuelles fortes et cohérentes. De la conception de logos au
            rebranding complet, en passant par la charte graphique, l&apos;affiche,
            le motion design et la mise en page, nous donnons vie à vos idées
            avec créativité et précision.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <AnimatedSection key={service.name} delay={i * 0.03}>
              <div className="group relative p-6 rounded-2xl border border-border bg-muted hover:border-foreground hover:bg-foreground/5 transition-all duration-300 h-full">
                <div className="w-12 h-12 rounded-xl bg-foreground/10 flex items-center justify-center mb-4 group-hover:bg-foreground/20 transition-colors">
                  <service.icon
                    size={22}
                    className="text-foreground"
                  />
                </div>
                <h3 className="text-lg font-semibold group-hover:text-foreground transition-colors mb-2">
                  {service.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection delay={0.2}>
          <div className="mt-32 p-12 rounded-3xl border border-border bg-muted text-center">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Un projet en tête ?
            </h3>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              Discutons de vos besoins et trouvons ensemble la meilleure
              approche pour donner vie à votre vision.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-foreground hover:bg-foreground/90 text-background px-8 py-4 rounded-full text-sm uppercase tracking-widest transition-all duration-300"
            >
              Démarrer un projet
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
