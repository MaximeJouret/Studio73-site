export type Project = {
  slug: string;
  title: string;
  category: string;
  tag?: string;
  description: string;
  /** Couleur d'accent dominante pour ce projet (hex) */
  color: string;
  /** Couleur secondaire (optionnelle) */
  colorSecondary?: string;
  /** Couleur de fond recommandée pour le projet (par défaut #0A0A0A) */
  background?: string;
  /** Année du projet */
  year?: string;
  /** Client / partenaire */
  client?: string;
  /** Liste des images du projet (chemins relatifs à /public) */
  images?: string[];
  /** Image principale utilisée comme cover dans la galerie */
  cover?: string;
  /** Tags / catégories de design */
  disciplines?: string[];
  /** Description longue pour la page détail */
  fullDescription?: string;
};

export const projects: Project[] = [
  {
    slug: "rbfa",
    title: "RBFA × Adidas",
    category: "Rebranding & Concept Design",
    tag: "Concept fictif — Limited Edition",
    description:
      "Concept de collaboration limited edition entre Adidas et la Royal Belgian Football Association. Direction artistique sombre et incisive autour de la devise nationale « L'Union fait la Force ».",
    fullDescription:
      "Concept de collection limited edition imaginé pour la collaboration Adidas × RBFA à l'occasion de la qualification pour la Coupe du Monde 2026. La direction artistique exploite l'identité historique des Diables Rouges en mêlant typographie gothique, contraste extrême noir/rouge sang et iconographie héritée du folklore belge. La palette se construit sur une base noire profonde rehaussée de rouge écarlate et touches de jaune solaire — un clin d'œil aux couleurs nationales sans tomber dans le tricolore évident. Mockups : maillots, écharpe, t-shirt, drapeaux de stade, signalétique du King Baudouin Stadium.",
    color: "#E10600",
    colorSecondary: "#FFCD00",
    background: "#000000",
    year: "2026",
    client: "Adidas × RBFA",
    disciplines: [
      "Direction artistique",
      "Identité visuelle",
      "Typographie",
      "Photographie",
      "Mockups produit",
    ],
    cover: "/images/projects/rbfa/rbfa-06.jpg",
    images: [
      "/images/projects/rbfa/rbfa-01.jpg",
      "/images/projects/rbfa/rbfa-02.jpg",
      "/images/projects/rbfa/rbfa-03.jpg",
      "/images/projects/rbfa/rbfa-04.jpg",
      "/images/projects/rbfa/rbfa-05.jpg",
      "/images/projects/rbfa/rbfa-06.jpg",
      "/images/projects/rbfa/rbfa-07.jpg",
      "/images/projects/rbfa/rbfa-08.jpg",
      "/images/projects/rbfa/rbfa-09.jpg",
      "/images/projects/rbfa/rbfa-10.jpg",
      "/images/projects/rbfa/rbfa-11.jpg",
    ],
  },
  {
    slug: "dfco-dijon",
    title: "DFCO Dijon",
    category: "Rebranding",
    tag: "Concept fictif",
    description:
      "Refonte complète de l'identité visuelle du club de football DFCO Dijon. Logo, typographie, supports de communication et présence digitale.",
    fullDescription:
      "Refonte intégrale de l'identité visuelle du Dijon Football Côte-d'Or. De l'écusson à la signalétique du stade, en passant par les supports e-commerce, les cartes d'abonnés et les déclinaisons sur réseaux sociaux. Direction artistique pensée pour ré-affirmer la fierté du club et donner aux supporters une identité visuelle digne d'une grande équipe européenne.",
    color: "#E53E3E",
    background: "#0A0A0A",
    year: "2025",
    client: "DFCO Dijon",
    disciplines: ["Rebranding", "Logotype", "Identité visuelle", "Web design", "Print"],
    cover: "/images/projects/dfco-dijon/dijon-01.jpg",
    images: Array.from({ length: 12 }, (_, i) =>
      `/images/projects/dfco-dijon/dijon-${String(i + 1).padStart(2, "0")}.jpg`
    ),
  },
  {
    slug: "backontrack",
    title: "BackOnTrack",
    category: "Rebranding",
    description:
      "Création d'une identité visuelle moderne pour une marque de coaching sportif. Logo, iconographie et déclinaisons sur supports variés.",
    color: "#FAFAFA",
    year: "2025",
    disciplines: ["Rebranding", "Logotype", "Iconographie"],
  },
  {
    slug: "hermes",
    title: "Hermès — Vitrine + Maquette & Livret",
    category: "Vitrine & Print",
    tag: "Concept fictif",
    description:
      "Concept de vitrine et livret éditorial pour la maison Hermès. Mise en page soignée et direction artistique haut de gamme.",
    fullDescription:
      "Concept de vitrine et livret éditorial pour la maison Hermès. Mise en page soignée mêlant photographie, typographie classique et codes graphiques iconiques de la maison. Travail de direction artistique haut de gamme, exercice de style autour du luxe et de l'artisanat.",
    color: "#F6AD55",
    background: "#0A0A0A",
    year: "2025",
    client: "Hermès (concept)",
    disciplines: ["Vitrine", "Édition", "Direction artistique", "Mise en page"],
    cover: "/images/projects/hermes/hermes-01.jpg",
    images: Array.from({ length: 5 }, (_, i) =>
      `/images/projects/hermes/hermes-${String(i + 1).padStart(2, "0")}.jpg`
    ),
  },
  {
    slug: "mocro-kid-edess",
    title: "Mieux qu'hier — Mocro Kid & Edess",
    category: "CD Cover",
    description:
      "Conception de la pochette d'album « Mieux qu'hier ». Direction artistique, typographie et retouche photo.",
    fullDescription:
      "Conception de la pochette d'album « Mieux qu'hier » des artistes Mocro Kid et Edess. Direction artistique complète : recherche de concept, photographie, retouche, typographie sur mesure et déclinaisons single / album / merchandising.",
    color: "#9F7AEA",
    background: "#0A0A0A",
    year: "2024",
    client: "Mocro Kid & Edess",
    disciplines: ["Cover d'artiste", "Typographie", "Retouche photo", "Direction artistique"],
    cover: "/images/projects/mocro-kid-edess/mocro-01.jpg",
    images: Array.from({ length: 3 }, (_, i) =>
      `/images/projects/mocro-kid-edess/mocro-${String(i + 1).padStart(2, "0")}.jpg`
    ),
  },
  {
    slug: "affiches",
    title: "Affiches A3 — Sélection",
    category: "Affiche & Print",
    tag: "Sélection de travaux",
    description:
      "Sélection d'affiches A3 — La Vallée, Journée Mondiale des Droits de l'Homme, et autres compositions typographiques audacieuses.",
    fullDescription:
      "Sélection de travaux d'affiches A3 réalisées pour différents projets et causes. Composition typographique audacieuse, palettes de couleurs impactantes, et recherche graphique constante pour faire passer un message en un seul visuel.",
    color: "#48BB78",
    background: "#0A0A0A",
    year: "2024",
    disciplines: ["Affiche", "Typographie", "Print"],
    cover: "/images/projects/affiches/affiche-01.jpg",
    images: Array.from({ length: 3 }, (_, i) =>
      `/images/projects/affiches/affiche-${String(i + 1).padStart(2, "0")}.jpg`
    ),
  },
  {
    slug: "underdog",
    title: "Underdog",
    category: "Logotype",
    description:
      "Création d'un logotype distinctif pour la marque Underdog. Recherche typographique et déclinaisons.",
    color: "#4299E1",
    year: "2024",
    disciplines: ["Logotype", "Typographie"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
