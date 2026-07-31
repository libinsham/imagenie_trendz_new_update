# Fox Agency — Next.js conversion (homepage)

This is the fox.agency homepage, converted from the crawled WordPress/HTML site into a
Next.js 14 (App Router) project. Per your scope choice, this covers the **homepage only**,
built with reusable components so the rest of the site (1,162 remaining pages) can be added
using the same patterns.

## Running it

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## What's included

- `app/layout.js`, `app/page.js` — root layout and the homepage, assembled from section components
- `app/globals.css` — the site's actual CSS (from `wp-content/themes/fox.agency/assets/css/app.min94dd.css`),
  reformatted for readability, with all `url()` paths rewritten to point at `/public`
- `components/` — one component per homepage section (Header, Hero, TextText, VideoEmbed,
  OffsetCards, ImageText, MessageTicker, SplitCards, ArticlesSection, ContactForm, Footer,
  CookieConsent)
- `lib/navigation.js` — the full mega-menu tree, footer links, office addresses, and social
  links, extracted from the original WordPress menus
- `lib/homeContent.js` — homepage-specific content (client logos, work case studies, insight
  articles, awards)
- `public/images`, `public/fonts`, `public/decorations` — every image/font/SVG actually used
  on the homepage, copied over from the crawl

## Notable conversions from the original

- **Off-canvas mega menu**: the original slide-out panel (`.c-header__secondary-nav`,
  `.sub-menu.is-active`, etc.) was driven by inline WordPress theme JS. It's now driven by
  React state in `Header.jsx` — same CSS classes, same visual behavior, just toggled from
  `useState` instead of vanilla JS/jQuery.
- **Hero video**: the responsive video-source-swap script (`720p` above 991px, `540p` below)
  is now a `useEffect` in `Hero.jsx`.
- **HubSpot form**: loaded via `next/script`, targeting a `<div id="hubspot-form-target">`
  instead of the original inline `<script>` tag.
- **Cookie consent**: the original used the WordPress Complianz plugin, which ships a large
  GDPR preference-center UI (category toggles, vendor lists, etc.). I replaced it with a
  lightweight equivalent (`CookieConsent.jsx`) that stores accept/reject in `localStorage`.
  If you need full IAB/TCF-style consent management, swap this for a dedicated consent
  library (e.g. Cookiebot, Osano, or `next-cookie-consent`) rather than porting Complianz's
  markup directly.
- **Language switcher (EN/US)**: the original site has a parallel `/us` version with its own
  crawled pages. Since this conversion only covers the homepage, the EN/US flag switcher
  wasn't ported — add it back once the `/us` route exists.

## Extending to more pages

Every other page in the crawl (`work/`, `insights/`, `expertise/…`, `industries/…`, etc.)
follows the same theme (`c-b-hero`, `c-b-text-text`, `c-b-image-text`, `c-b-cards-loop`, and
so on) — those are already implemented as components here. Building out a new page is mostly:
extract the copy/images from the corresponding crawled HTML file, and compose it from the
existing section components (or add a new one if the page introduces a section type not seen
on the homepage).
