# Innobiz Global Ventures Website v2.1

White brand system update with:

- New Innobiz Global Ventures logo resized safely for header use
- Four uploaded banner images used as the rotating homepage hero backgrounds
- Clean white / blue / orange brand palette
- Header and menu rebuilt with properly aligned dropdown chevrons
- Mega menu text removed from default HTML flow, so it will not appear as plain links if CSS is delayed
- Critical CSS embedded in `app/layout.tsx` and also in `app/globals.css`
- Build verified with `npm run build`

## Deploy

Copy files into the project root, then run:

```bash
npm install
npm run build
git add .
git commit -m "Innobiz v2.1 white brand system with banners"
git push
```

Then redeploy on Hostinger and clear cache.
