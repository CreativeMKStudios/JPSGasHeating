# JPS Gas & Heating

Static site for JPS Gas & Heating, a gas engineer based at 59 Kingfisher Street, Great Wakering, Southend-on-Sea, SS3 0FS.

Facts on the pages come from the public Google Business Profile and the MyJobQuote profile. Opening hours beyond the Thursday hours shown on Google are not listed, because the full week was not published in the panel. No Gas Safe registration number is printed, because none was published. Ask to see the card.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run preview
```

The production URL in `astro.config.mjs` is `https://www.jpsgasandheating.co.uk`. Change `site` in `src/data/site.ts` and `astro.config.mjs` together if the real domain is different.

`dist/` is the folder to upload. `public/robots.txt` points at the sitemap.
