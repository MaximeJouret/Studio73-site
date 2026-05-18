@AGENTS.md

# Studio 73 — Instructions pour Claude Code

## Contexte du projet

Site vitrine de Studio 73, agence créative belge basée à Bruxelles.
Stack : **Next.js (App Router)**, **TypeScript**, **Tailwind CSS v4**.
Déployé sur Vercel : https://studio73-site.vercel.app

## Structure des fichiers

```
src/
  app/
    page.tsx              → Page d'accueil
    projets/
      page.tsx            → Grille des projets
      [slug]/page.tsx     → Page projet dynamique
      rbfa/page.tsx       → Page projet RBFA (statique)
    services/page.tsx
    a-propos/page.tsx
    contact/page.tsx
    layout.tsx            → Layout global (Navbar, Footer, MagneticCursor)
    globals.css           → Variables CSS + Tailwind theme
  components/
    Navbar.tsx
    Footer.tsx
    AnimatedSection.tsx
    SmoothScroll.tsx
    SocialIcons.tsx
    ui/
      magnetic-cursor.tsx
      magnetic-text.tsx
      text-marquee.tsx
  data/
    projects.ts           → Source de vérité pour tous les projets
public/
  images/projects/        → Photos des projets (subdossiers par projet)
```

## Design system — règles strictes

### Couleurs (ne jamais sortir de cette palette sur les pages globales)
```css
--background:        #0A0A0A   /* fond principal */
--foreground:        #FAFAFA   /* texte principal */
--muted:             #141414   /* fond secondaire */
--muted-foreground:  #8A8A8A   /* texte secondaire */
--border:            #1F1F1F   /* bordures */
--accent:            #FAFAFA   /* fallback neutre */
```
Les couleurs d'accent (rouge, jaune, etc.) n'existent que **à l'intérieur des pages projet**, jamais dans les composants globaux (Navbar, Footer, sections génériques).

### Typographie
- **Clash Display** — police principale pour tous les titres et le corps de texte.
  Chargée via Fontshare : `https://api.fontshare.com/v2/css?f[]=clash-display@200,300,400,500,600,700&display=swap`
- **Geist Mono** — uniquement pour les labels techniques (`font-mono`), numéros, métadonnées.
- Ne jamais introduire une nouvelle police sans instruction explicite.

### Fichiers de ressources disponibles
Tous les assets du projet sont dans `/public/` :
- Logos, images projets : `public/images/projects/<slug>/`
- Si un nouveau logo ou fichier est fourni, le placer dans `public/` et le référencer avec `/nom-du-fichier.ext` (chemin absolu depuis la racine publique).

### Composants existants à réutiliser en priorité
- `<AnimatedSection>` — wrap tout bloc devant apparaître au scroll (fade + translateY).
- `<TextMarquee>` — bandeau texte défilant horizontal.
- `<MagneticText>` — effet magnétique sur les titres cliquables.
- Ajouter `data-magnetic="true"` sur n'importe quel élément pour activer l'aimant du curseur.

### Conventions de code
- Tailwind v4 : utiliser les classes utilitaires natives. Pas de `tailwind.config.js` — les tokens sont définis dans `globals.css` via `@theme inline`.
- Composants en `.tsx` avec `"use client"` seulement si vraiment nécessaire (animations, état, événements).
- Tout nouveau composant va dans `src/components/` ou `src/components/ui/`.
- Les données de projets se gèrent dans `src/data/projects.ts` — ne pas hardcoder les données dans les pages.

## Règle : copier un design web

Quand on te demande de **copier** ou **t'inspirer d'un design** (ex : "fais comme ce site", "reprends ce layout") :

1. **Analyse l'exemple fourni** : relève la structure de layout, les proportions, les espacements, les effets (hover, scroll, parallax), la hiérarchie typographique.
2. **Adapte au design system Studio 73** : remplace les couleurs/polices de l'exemple par celles du design system ci-dessus. Ne copie jamais les couleurs brutes de l'exemple.
3. **Traduis en code propre** : utilise les composants existants si applicable. Code directement dans les fichiers `.tsx` concernés.
4. **Garde le contenu Studio 73** : ne remplace jamais le vrai contenu (textes, projets, contacts) par du lorem ipsum ou des placeholders.

## Règle : déploiement

Après chaque modification, le déploiement se fait via `git push` (Vercel CI/CD automatique).
Ne jamais modifier les fichiers de config Vercel ou Next (`next.config.ts`, `vercel.json`) sans instruction explicite.

## Ce qu'il ne faut jamais faire

- Introduire une bibliothèque UI tierce (shadcn, MUI, Chakra…) sans accord explicite.
- Changer la police principale.
- Ajouter des couleurs hors palette sur les pages globales.
- Supprimer ou refactorer `MagneticCursor`, `SmoothScroll` ou `AnimatedSection` sans instruction explicite.
- Créer des fichiers de documentation (README, CHANGELOG…) non demandés.
