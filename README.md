# Innobiz Global Website v1.6 – Logo & Brand Color Alignment

This update aligns the website with the uploaded Innobiz Global Ventures logo.

## Included

- Actual Innobiz Global Ventures logo asset added under `public/images/`.
- New transparent header logo generated from the uploaded logo.
- Header and footer updated to use the logo.
- Brand palette updated around deep blue, electric blue, warm orange, and dark navy.
- Hero, CTA buttons, cards, hover effects, trust strip, and footer accents now follow the logo colors.
- v1.5 interactive hero functionality is preserved.

## Deploy

Copy the contents into the existing project folder, then run:

```bash
npm install
npm run build
git add .
git commit -m "Innobiz v1.6 logo and brand color alignment"
git push
```

If Hostinger does not redeploy automatically, click Redeploy from the Web Apps deployment screen.


## v1.6.1 Emergency CSS Loading Fix
This package adds the full global stylesheet as inline critical CSS in `app/layout.tsx`. It keeps `app/globals.css` also, but the inline CSS ensures the site remains styled even if Hostinger/Next static CSS assets are cached, delayed, or temporarily blocked.

Use this when the live site appears as plain HTML with blue links and default browser fonts.
