# Brooks & Mazzola Construction — Blueprint WebStudio Concept

Independent, non-official redesign concept for https://brooksmazzola.com/ (Brooks & Mazzola Construction Company, Inc., Collierville, TN).
Preview: https://bmc.blueprintwebstudio.com (noindex; the demo code lives in the Neon `demos` table).

Custom one-page build: content and layout in `src/App.jsx`, styles in `src/styles.css`, the Blueprint WebStudio concept widget in `src/concept.jsx`.

## Local setup
```bash
npm install
cp .env.example .env.local
npm run dev
```

## Deployment
Vercel project `brooks-mazzola-construction` (framework Vite, team mrwerner-s-projects); pushes to `main` deploy automatically. Domain `bmc.blueprintwebstudio.com` is a CNAME at Porkbun.
Optional env vars: `VITE_CONCEPT_END_DATE` (countdown, defaults to 2026-12-02), `RESEND_API_KEY` / `CONTACT_TO_EMAIL` / `CONTACT_FROM_EMAIL` for the bid form (`api/contact.js`; demo mode without them). The "I'm Interested" form posts to `api/demo-interest.js`, which proxies to the studio site.

## Design
- Logo: their original Brooks & Mazzola wordmark with the maroon triangle, on a light header (and a light plate in the dark footer).
- Palette from the original: logo/top-bar maroon #5c0a26, the tan #d9bf9c from their nav highlight, charcoal, and poured-concrete greys.
- Fonts: Barlow Condensed (job-sign headings), Barlow body, IBM Plex Mono for survey-style labels.
- Motif: survey stationing ("STA 1+00") as section markers, a faint rebar grid behind light sections, poured-slab stat strip.
- Unique sections: the FedEx Airbus hangar told as a six-step pour sequence (piers → grade beams → rebar → ready to pour → steel → in service), a drag-to-scrub ten-month aerial time-lapse of the Trousdale Correctional Facility (Oct 2014 – Jul 2015), a filterable portfolio built from the 60+ project photos already on their server, and a tile map of licensed vs eligible states.

## What changed from the current site
- Raw WPBakery shortcodes (`[vc_row]`, `[themex_feature_box ...]`) print as text on the homepage and every page; removed.
- The Portfolio page is empty even though the media library holds 60+ project photos; they're now the portfolio.
- The page title misspells the name ("Brooks & Mazolla"); fixed.
- "Over 20 years" and © 2015 are stale; the concept counts years from 1995.
- Duplicate pages (`?page_id=17` and `/company-background/`) collapse into one page; contact form CAPTCHA image replaced with a honeypot.
- Checked at 1280px and 390px with no sideways scrolling.

## Owner should confirm
- Project captions for photos that had only file names (Summit Phase I, Camp Creek Phase I, East Park, Medtronic, Johnson & Johnson expansion, U.S. Bankruptcy Courthouse) and which category each belongs in.
- Spelling: the site says "Voight & Schweitzer"; the concept uses the company's spelling "Voigt & Schweitzer".
- That Kyocera Mita America and Panattoni Development Co. are fine to name as clients.
- ABC award details (which years / projects won Excellence in Construction) so the badge can be specific; no badge image exists on the current site.
- Use of the Aerial Innovations time-lapse photos (watermarked) on a public site.
- Whether the 1,000,000 sq ft and six-state licensing statements are still current; the second phone (Vince Mazzola, 901-826-8999) should be public.
- No Google reviews are shown (none on the current site).

## Photo sources
All photos are from brooksmazzola.com's own media library (wp-content/uploads/2015). Replace with current, high-resolution originals before a real launch.
