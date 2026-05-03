# 🎬 PROMPT DE REFONTE — Studio 73

> **À utiliser dans une nouvelle session Claude Code**, après avoir redémarré pour activer le MCP `magic` (21st.dev) et avec le skill `ui-ux-pro-max` actif.

---

## 📋 Comment l'utiliser

1. **Redémarrer Claude Code** (quitter complètement, puis relancer dans `/Users/maximejouret/Desktop/Studio73-site`).
2. Vérifier que le MCP est actif : tape `/mcp` dans Claude Code → tu dois voir `magic` dans la liste.
3. Vérifier que le skill est dispo : taper `/ui-ux-pro-max` ou simplement laisser Claude le trigger.
4. Coller le prompt ci-dessous (à partir de la ligne `=== PROMPT À COPIER ===`) dans le chat.

---

## === PROMPT À COPIER ===

Refonte complète du site Studio 73 (agence créative belge basée à Bruxelles) actuellement déployé sur https://studio73-site.vercel.app. Le projet existant est dans le dossier courant (Next.js 16, Tailwind CSS 4, framer-motion, déployé sur Vercel via le repo github.com/MaximeJouret/Studio73-site).

### Pourquoi cette refonte
La V1 actuelle est trop générique et ressemble à n'importe quel site IA. Pour un studio graphique, le site **EST** la démo. Il doit faire l'effet WOW dès la première seconde et prouver la maîtrise créative et technique de Studio 73.

### Direction artistique : **Dark Cinématique Multi-Accents**
- **Fond global** : noir profond #0A0A0A (et même #000000 absolu sur les pages projet) avec texture/grain subtil
- **Texte** : blanc cassé #FAFAFA, typo display XXL pour les titres (typo type Migra, PP Editorial New, Reckless, ou similaire — propose 3 options via le skill ui-ux-pro-max)
- **Accents par projet** : chaque projet du portfolio a sa propre couleur dominante (déjà définies dans `src/data/projects.ts`). Au survol/visite d'un projet, l'accent prend le contrôle du curseur, du fond, des CTA. Système orchestré via context React.
- **Inspirations** : Locomotive Mtl, Resn, Active Theory, Studio Lumio. Cinématique, immersif, scroll-driven storytelling.

### 🌟 Projet phare : RBFA × Adidas
Le projet **RBFA × Adidas** est le projet le plus récent et le plus fort visuellement de Studio 73. Il doit être **mis en avant** sur la home et ouvrir la galerie projets. Sa direction artistique (noir absolu + rouge écarlate #E10600 + jaune #FFCD00 + typo gothique « L'Union fait la Force ») peut servir de référence pour le ton global du nouveau site. Les 11 visuels sont dans `public/images/projects/rbfa/rbfa-01.jpg` à `rbfa-11.jpg`. Page détail déjà scaffoldée à `/projets/rbfa` — à enrichir avec scroll-driven storytelling, sticky sections, et transitions cinématiques. Le hero de la home pourrait emprunter cette typo gothique pour le mot "créative".

### Stack technique imposée
- Garder Next.js 16 + Tailwind CSS 4 (déjà en place)
- **Lenis** (`@studio-freight/lenis`) pour le smooth scroll
- **GSAP + ScrollTrigger** pour les animations scroll-driven complexes (en plus de framer-motion qui reste pour les micro-interactions et page transitions)
- **next-view-transitions** ou **framer-motion** pour les page transitions cinématiques (rideau / mask / fade complexe — PAS de flash blanc)

### Composants signatures à intégrer (utiliser le MCP `magic` de 21st.dev pour les chercher et les adapter)

1. **Curseur custom magnétique** : curseur qui se transforme au hover (devient un disque agrandi sur les CTA, affiche "VIEW" sur les projets, magnétisme sur les boutons). Cherche sur 21st.dev : "magnetic cursor", "custom cursor", "follow cursor".

2. **Marquee infini** : bandeau défilant en très grosse typo avec les noms des projets/services. S'inverse de direction au hover. Cherche : "infinite marquee", "scrolling text", "running ticker".

3. **Hero scroll-driven** : pas de hero statique. Au scroll, transitions complexes — texte qui se décompose, image qui apparaît derrière, parallaxe profonde. Cherche : "scroll hero", "scroll reveal hero", "split text scroll".

4. **Galerie portfolio sticky/horizontal** : la page projets utilise un scroll horizontal sticky OU une galerie sticky où chaque projet remplit l'écran avec mockups XXL et l'accent du projet prend le contrôle. Cherche : "horizontal scroll gallery", "sticky portfolio", "case study scroll".

5. **Page transitions cinématiques** : entre pages, animation pleine page (rideau noir qui descend puis remonte, ou révélation par mask SVG). Pas de flash blanc.

6. **Beams animés / dot patterns / aurora** : éléments de fond ambient pour donner vie aux sections (à utiliser avec parcimonie, mais quelques-uns sur les sections clés). Cherche sur 21st.dev : "background beams", "aurora background", "dot pattern", "grid pattern".

### Structure (5 pages)
**Garder la structure** mais transformer chaque page en expérience.

1. **`/` Accueil** — Hero scroll-driven WOW + Marquee projets + Aperçu portfolio sticky + Bento services + CTA
2. **`/projets`** — Galerie sticky/horizontal avec accent par projet. Chaque carte → prochaine étape : pages détail individuelles `/projets/[slug]` (à scaffolder mais contenu plus tard)
3. **`/services`** — Bento grid moderne (cherche "bento grid" sur 21st.dev) avec hover effects par service
4. **`/a-propos`** — Storytelling vertical avec scroll-jacking sur les 5 étapes du process. Image Loïc + valeurs.
5. **`/contact`** — Formulaire dark stylé + carte interactive Bruxelles + gros CTA téléphone/email avec hover magnétique

### Éléments à conserver
- Toutes les infos de contact actuelles (+32 472 35 63 14 / info@studio-73.be / Bruxelles)
- Les 4 réseaux sociaux (Instagram, Facebook, LinkedIn, X)
- La liste des 16 services actuels
- Les projets actuels (déjà centralisés dans `src/data/projects.ts`) : RBFA × Adidas (hero), DFCO Dijon, BackOnTrack, Hermès, Mocro Kid & Edess, La Vallée, Underdog, Journée Droits de l'Homme
- Le repo GitHub et le déploiement Vercel auto

### Méthode d'exécution attendue

1. **D'abord, utiliser le skill `ui-ux-pro-max`** pour générer un design system complet (palette finale avec les accents par projet, typo Google Fonts, espacements, tokens). Output : un fichier `DESIGN_SYSTEM.md` dans le projet.

2. **Ensuite, utiliser le MCP `magic` de 21st.dev** pour chercher et récupérer les composants listés ci-dessus (un par un, pas tous d'un coup). Pour chaque composant : montrer les 2-3 meilleures options de 21st.dev avant de choisir.

3. **Implémenter page par page**, en partant de l'accueil. À chaque page : me montrer un screenshot du résultat (via Chrome MCP) avant de passer à la suivante.

4. **Tester en continu** : à chaque modif majeure, screenshot de la page concernée. Vérifier le smooth scroll, le curseur, les transitions.

5. **Commit & push après chaque page validée** (déploiement auto sur Vercel).

### Critères d'acceptation
- [ ] Lighthouse Performance ≥ 85 sur mobile, ≥ 90 sur desktop
- [ ] Pas de CLS, pas de flash blanc entre pages
- [ ] Smooth scroll fluide avec Lenis
- [ ] Curseur custom fonctionnel sur desktop, désactivé sur mobile
- [ ] Tous les composants 21st.dev utilisés sont créditésdans le code (commentaire `// from 21st.dev/...`)
- [ ] Le site fait clairement l'effet WOW dès le hero (test : me montrer un screenshot après le hero, je dois pouvoir dire "ok, c'est différent")

### Workflow
- Mode plan d'abord (utiliser `/plan` ou ExitPlanMode pour validation avant gros changements)
- Pas d'install massive sans validation (Lenis, GSAP : ok, mais demander avant d'ajouter d'autres libs)
- À chaque blocage, montrer le problème et proposer 2-3 solutions

C'est parti — commence par le design system avec ui-ux-pro-max, puis on attaque le hero.

## === FIN DU PROMPT ===

---

## 🎁 Bonus : Variantes du prompt

### Si tu veux ne refaire QUE le hero d'abord
Remplace la section "Structure" par : "Refaire **uniquement le hero de l'accueil** pour l'instant. Le reste du site reste tel quel. Objectif : prouver que la nouvelle direction fonctionne avant de tout refaire."

### Si tu veux ajouter les vraies images des projets
Ajoute après "Éléments à conserver" : "Les vraies images des projets sont dans `public/images/projects/{slug}/`. Utilise-les en priorité au lieu de mockups génériques."

### Si tu veux contraindre le temps
Ajoute en fin de prompt : "Cible 3-4h max au total. Si tu sens que ça déborde, propose une version simplifiée pour tenir le timing."
