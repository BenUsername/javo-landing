# Omni landing page

Static landing page for Omni, the AI chat agent for websites. Plain HTML, CSS and JavaScript, no build step.

- English is the default at `/`; French is under `/fr/`. Every page has an EN / FR switch and `hreflang` links to its other version.
- `index.html`, `fr/index.html`, `articles/` and `fr/articles/` are generated: edit `content/` and run `node build.mjs`, never the generated HTML.
- Landing page: hero with demo video, ALYOR client example, how it works, pricing (from €600 per product), contact form.
- `styles.css`: styles. Omni tokens: Manrope with Instrument Serif italics, pine green `#127a64` with an apricot accent, pill buttons, 18px cards.
- `main.js`: contact form, messages in the page's language.
- `api/`: Vercel functions that store leads and export them (see Leads).
- `assets/`: demo video and poster, ALYOR logo, favicon.
- `video-source/`: the animated scene behind the demo video and the script that records it.
- `content/site.mjs`: landing page and page chrome text in each language, plus search engine verification tags.
- `content/articles.en.mjs`, `content/articles.mjs`: the 10 articles in English and French (paired by `id`), and the author.
- `build.mjs`: generates all pages and `sitemap.xml`.
- `vercel.json`: redirects the original French article URLs (`/articles/<french-slug>/`) to `/fr/articles/`.

## Leads

The contact form posts to `api/lead.js`, which stores each lead as a private JSON file in the `omni-leads` Vercel Blob store (connected to the project through `BLOB_READ_WRITE_TOKEN`).

- Download all leads as a CSV (opens in Excel or Google Sheets): `https://omni-chat-ia.vercel.app/api/leads/?key=<LEADS_KEY>`. Add `&format=json` for JSON.
- `LEADS_KEY` is a sensitive environment variable on the Vercel project. To change it, edit it in Vercel (Settings > Environment Variables) and redeploy.
- The raw files are also visible in Vercel under Storage > omni-leads.

## Run locally

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000. The contact form needs the Vercel functions, so test it on a deployment.

## Deploy

Import the repository in Vercel as a static site (framework preset "Other", no build command).

## Regenerate the demo video

Edit `video-source/demo.html` (the `render(t)` timeline drives every frame), then:

```sh
npm i playwright ffmpeg-static
npx playwright install chromium
node video-source/record.mjs
```

This writes `assets/omni-demo-en.mp4` and `assets/omni-demo-fr.mp4` (H.264, 720x1480, 15 s loop) with their posters. The scene text for each language is in `TEXT` in `demo.html`.

## Articles

Articles live in `content/articles.en.mjs` (English) and `content/articles.mjs` (French); both languages must have the same `id`s. Each one opens with a "Calcul Omni" box: a derived number, the formula, the source and a caveat saying what the number is not. Only use figures you can source or derive in the box.

After editing, regenerate the pages and commit the output:

```sh
node build.mjs
```

- Author details (role and bio per language, photo, LinkedIn) are in `AUTHOR` at the top of `content/articles.mjs`; empty fields are simply not shown.
- `SITE` at the top of `build.mjs` sets the canonical URLs and the sitemap (currently the Vercel URL). Update it if the site moves to its own domain.

## Search engines

- `robots.txt` points crawlers at `sitemap.xml`, which lists every page with its language versions.
- Verification: add Google or Bing `<meta>` tags to `VERIFICATION_TAGS` in `content/site.mjs` and rebuild, or commit the verification file they provide at the repo root.
- IndexNow key: `9654f1c761652d608cb13b9fda3516d3.txt` at the site root. After publishing new or changed pages, notify Bing, Yandex, Seznam and Naver:

```sh
curl -X POST https://api.indexnow.org/indexnow -H "Content-Type: application/json; charset=utf-8" \
  -d '{"host":"omni-chat-ia.vercel.app","key":"9654f1c761652d608cb13b9fda3516d3","keyLocation":"https://omni-chat-ia.vercel.app/9654f1c761652d608cb13b9fda3516d3.txt","urlList":["https://omni-chat-ia.vercel.app/"]}'
```
