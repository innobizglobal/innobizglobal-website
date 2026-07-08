# Innobiz Global Website v1.8 - White Theme Conversion

This package converts the Innobiz Global website from a dark premium theme into a white, clean, corporate technology theme aligned with the Innobiz Global Ventures logo.

## Changes

- Converted the overall website to a white/light theme.
- Added a new light AI/network hero background SVG.
- Kept the Innobiz logo and blue/orange brand palette.
- Updated header, mega menu, hero, service cards, inner pages, contact form, and footer for light mode.
- Preserved the interactive hero switcher and individual menu pages from v1.7.
- Avoided the emergency inline CSS approach that previously caused deployment trouble.

## Deploy

Copy these files into your existing local project folder, replacing old files, then run:

```bash
npm install
npm run build
git add .
git commit -m "Innobiz v1.8 white theme conversion"
git push
```

Then redeploy/clear cache in Hostinger.
