# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

ArFolio is a single-page personal portfolio site (Ali Reza Rezayee) built with Next.js 16 (App Router), React 19, TypeScript, and Tailwind CSS v4. There is no backend/database — content is static/hardcoded, contact form goes through Formspree, and images are served via Cloudinary.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm start        # Serve the production build
npm run lint     # ESLint (extends next/core-web-vitals)
```

There is no test suite configured in this repo (no test script, no test framework installed).

Environment variables are loaded from `.env.local` (copy `.env.example`); key vars: `NEXT_PUBLIC_BASE_URL`, `NEXT_PUBLIC_GOOGLE_ANALYTICS`, `NEXT_PUBLIC_CLOUDINARY_NAME`/`NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME`, `NEXT_PUBLIC_HOTJAR_ID`, `FORMSPREE_FORM_ID`.

## Architecture

**Single page, section-based.** `src/app/page.tsx` is the entire site: it dynamically imports (`next/dynamic` + `Suspense`) five section components — Hero, About, Experience, Works, Contact — each wrapped in its own `<section id="...">`. Navigation (`src/components/layouts/sidebar.tsx`) uses `react-scroll` to smooth-scroll/spy between these section ids, so section `id` values, `MENU_ITEM.value` in `src/content/constants.tsx`, and the `section` elements in `page.tsx` must stay in sync.

**Directory roles:**
- `src/app/` — Next.js App Router root: `layout.tsx` (root HTML shell, `metadata` export, Google Analytics/Optimize/Hotjar `<Script>` tags), `page.tsx` (section composition), `globals.css` (Tailwind v4 `@theme` tokens — colors, shadows, breakpoints — plus scrollbar styling).
- `src/components/layouts/` — page chrome: `layout.tsx` composes `Header` + `Sidebar` + `main` + `Footer` + `BackToTop`.
- `src/components/pages/` — one component per homepage section (`homePage.tsx` = Hero, `about.tsx`, `experience.tsx`, `works.tsx`, `contact.tsx`), re-exported through `src/components/pages/index.ts` for the dynamic imports in `page.tsx`.
- `src/components/libs/` — shared building blocks (`accordion.tsx`, `skills.tsx`, `scrollRevealWrapper.tsx`, `backToTop.tsx`, `performance.tsx`, `transitions.tsx`, `socialMediaMetaTags.tsx`, `imageCreator.ts`), re-exported through `src/components/libs/index.ts`.
- `src/content/` — all editable copy/data as typed constants: `constants.tsx` (`MENU_ITEM`, `SOCIAL_LINKS`, `skills`, `EXPERIENCE`, `projects`), `hero-content.ts`, `metaTag.ts` (`META_TAGS` — per-network OG/Twitter copy).
- `src/configs/` — third-party config: `clConfig.ts` (Cloudinary instance), `srConfig.ts` (ScrollReveal defaults).
- `src/utils/` — `cloudinary.ts` (image public IDs + a second Cloudinary instance), `gAnalytics.ts`, `scrollReveal.ts` (currently unused/commented out — ScrollReveal is invoked directly from `scrollRevealWrapper.tsx` instead).

**SEO/meta tags live in two places that must be kept consistent:** `src/app/layout.tsx` sets the Next.js `metadata` export (title, OG, Twitter, icons, `metadataBase`), while `src/components/libs/socialMediaMetaTags.tsx` (rendered as `<MetaTags />` in the `<body>`, not `<head>`, to avoid hydration mismatches) injects JSON-LD structured data (`schema.org/Person`). Both read shared copy from `src/content/metaTag.ts`. `src/app/head.tsx` is intentionally a no-op — all `<head>` content is meant to go through the `metadata` export instead.

**Images** are served via Cloudinary rather than static files: `generateImageUrl()` in `src/components/libs/imageCreator.ts` builds URLs from public IDs defined in `src/utils/cloudinary.ts`, using the `cld` instance from `src/configs/clConfig.ts`. `next.config.js` allow-lists `res.cloudinary.com` for `next/image` and enables AVIF/WebP.

**Animation** comes from two independent systems: ScrollReveal (`src/components/libs/scrollRevealWrapper.tsx`, dynamically imported client-side, configured via `srConfig()`) for on-scroll reveal effects, and `react-transition-group` (`src/components/libs/transitions.tsx` — `Fade`/`FadeUp`/`FadeDown`, styles in `src/styles/transitionStyle.css`) for mount/unmount transitions.

**Styling** uses Tailwind v4's CSS-based config (`@theme` block in `globals.css`) rather than a `tailwind.config.js` — color tokens (`primary`, `secondary`, `accent`, `dark-accent`, each with 50–900 shades) and the `lg` breakpoint (992px) are defined there directly.

**Path alias:** `@/*` maps to `src/*` (see `tsconfig.json`).

**React Compiler** is enabled (`next.config.js` `reactCompiler: true`, `babel-plugin-react-compiler` devDependency) — avoid manual `useMemo`/`useCallback` micro-optimizations that fight the compiler.
