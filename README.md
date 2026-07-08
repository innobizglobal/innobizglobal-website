# Innobiz Global Ventures Website

Premium Next.js corporate website for Innobiz Global Ventures.

## Version

v1.1 — service detail pages, SEO metadata, reusable components, improved contact enquiry flow, realistic imagery, and additional trust/process sections.

## Tech stack

- Next.js 14
- React 18
- TypeScript
- CSS animations
- Hostinger Web Apps / Node.js deployment ready

## Local setup

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Production build

```bash
npm run build
npm run start
```

## Hostinger deployment settings

```text
Framework preset: Next.js
Branch: main
Node version: 22.x
Root directory: ./
Build and output settings: Default for Next.js
Environment variables: None for this version
```

## GitHub update workflow

After replacing files locally:

```bash
git add .
git commit -m "Innobiz website v1.1 updates"
git push
```

Hostinger should redeploy automatically after the push, or you can trigger redeploy manually from hPanel.

## Contact form note

The contact form opens the visitor's email application with enquiry details addressed to `hello@innobizglobal.com`. For direct server-side email delivery, add SMTP credentials later and replace the mailto flow with an API route.
