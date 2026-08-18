# mlnarikmatyas

Osobní portfolio — **Matyáš Mlnařík**, Lead Developer & Hardware Engineer.
Tech-brutalistický one-pager: absolutní černá, elektricky modrý akcent,
kinetická typografie a scroll-driven animace.

## Stack

| Vrstva     | Technologie                          |
| ---------- | ------------------------------------ |
| Framework  | Next.js 15 (App Router) + React 19   |
| Styling    | Tailwind CSS 3.4                     |
| Animace    | Framer Motion 12                     |
| Scroll     | Lenis                                |
| Typografie | Syncopate (display), JetBrains Mono  |
| Jazyk      | TypeScript (strict)                  |

## Spuštění

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # produkční build
npm start        # produkční server
```

## Struktura

```
app/
  layout.tsx        fonty, metadata, globální vrstvy (scroll, kurzor, grain, nav)
  page.tsx          složení sekcí
  globals.css       design tokeny, .display / .eyebrow / .grid-bg / .noise
components/
  Hero.tsx          kinetická typografie, deformace jména při scrollu
  HopeToSee.tsx     flagship projekt + Wall of Fame
  TechStack.tsx     sekce ve stylu IDE (explorer, taby, editor, status bar)
  Hardware.tsx      stroje, výroba, datová tabulka historických objektů
  Mindset.tsx       manifest, terminálová mřížka zálib, tým
  Footer.tsx        kontakt + oversized podpis
  Nav.tsx           fixní lišta, scroll progress, aktivní sekce (IntersectionObserver)
  SmoothScroll.tsx  Lenis + plynulé kotvy
  MagneticCursor.tsx  vlastní kurzor, magnetický snap na [data-magnetic]
  ui/               Reveal, SectionHeader, Marquee, AwardBadge, GuideLines, GrainOverlay
lib/
  content.ts        veškerý obsah na jednom místě (texty, ocenění, stack, data objektů)
```

## Editace obsahu

Texty, ocenění, položky stacku i data objektů žijí v [lib/content.ts](lib/content.ts).
Komponenty z něj jen čtou — přidání ocenění nebo řádku ve stacku nevyžaduje zásah do JSX.

## Poznámky k designu

- **Diakritika**: display nadpisy mají `leading` ≥ 1.0 a klipovací obálky v Heru
  extra `padding-top`, aby se háčky a čárky (Á, Š, Ř, Í) nikde neořezávaly.
- **Přístupnost**: jméno v Heru je pro čtečky v `sr-only` (vizuálně je rozsekané
  po znacích), celý obsah stacku je v DOM i pro neaktivní taby.
- **prefers-reduced-motion**: vypíná Lenis i CSS animace.
- **Vlastní kurzor** se aktivuje jen na `(hover: hover) and (pointer: fine)`.
# mlnarikmatys
