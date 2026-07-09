# Innobiz Global Website v2.0 – Dark Brand System Implementation

This package applies the approved Innobiz Global Ventures brand palette across the website:

- Deep Brand Blue: `#0B2F8A`
- Bright Electric Blue: `#1E63FF`
- Warm Orange: `#FF8A00`
- Deep Orange: `#FF5A00`
- Dark Background: `#060B14`
- Soft Dark Blue: `#0D1630`
- White: `#FFFFFF`
- Muted Gray: `#B8C2D6`

## What changed

- Restored a premium dark/blue website base.
- Updated header to very dark navy/black.
- Uses the newer Innobiz Global Ventures nav logo: `/public/images/innobiz-logo-nav.png`.
- Header logo is forced to a controlled size to prevent huge-logo display.
- Navigation text is white with blue active/hover states.
- Orange is used sparingly for badges, indicators, and hover accents.
- Hero is dark navy/black with blue glowing technology ambience and subtle orange highlights.
- Primary CTA uses blue gradient: `#0B2F8A → #1E63FF`.
- Secondary/hover accents use orange: `#FF8A00 → #FF5A00`.
- Cards and sections use dark glass styling with blue outlines/glows.
- Keeps the 4 rotating banner concepts and the uploaded banner images as subtle visual layers.
- Removes the client/trust logo strip from the hero banner.
- Keeps individual pages for menu links.
- Includes full critical CSS in `app/layout.tsx` plus `app/globals.css` so the site stays styled even if external CSS is delayed.

## Build test

Tested successfully with:

```bash
npm run build
```

## Deployment

Copy all files into your local project folder and run:

```bash
npm install
npm run build
git add .
git commit -m "Implement Innobiz dark brand system"
git push
```

Then redeploy in Hostinger and clear cache.
