# Omni landing page

Static landing page for Omni, the AI chat agent for websites. Plain HTML, CSS and JavaScript, no build step.

- `index.html`: hero with demo video, ALYOR client example, how it works, pricing (from €600 per product), contact form.
- `styles.css`: styles. Omni tokens: Manrope with Instrument Serif italics, pine green `#127a64` with an apricot accent, pill buttons, 18px cards.
- `main.js`: contact form. Leads are e-mailed through [FormSubmit](https://formsubmit.co).
- `assets/`: demo video and poster, ALYOR logo, favicon.
- `video-source/`: the animated scene behind the demo video and the script that records it.
- `content/articles.mjs` + `build-articles.mjs`: the 10 articles and the author, generated into `articles/` and `sitemap.xml`.

## Lead e-mails

Set the receiving address in `LEAD_EMAIL` at the top of `main.js`. Until it is set, the form shows an error and sends nothing.

1. Deploy with the address set and submit the form once.
2. FormSubmit sends that inbox an "Activate form" e-mail. Click the link; later leads are then delivered.
3. Optional: the activation page gives a random alias. Put it in `LEAD_EMAIL` instead of the address so the address is not in the page source.

## Run locally

```sh
python3 -m http.server 8000
```

Then open http://localhost:8000.

## Deploy

Import the repository in Vercel as a static site (framework preset "Other", no build command).

## Regenerate the demo video

Edit `video-source/demo.html` (the `render(t)` timeline drives every frame), then:

```sh
npm i playwright ffmpeg-static
npx playwright install chromium
node video-source/record.mjs
```

This writes `assets/omni-demo.mp4` (H.264, 720x1480, 15 s loop) and `assets/omni-demo-poster.jpg`.

## Articles

Articles live in `content/articles.mjs`. Each one opens with a "Calcul Omni" box: a derived number, the formula, the source and a caveat saying what the number is not. Only use figures you can source or derive in the box.

After editing, regenerate the pages and commit the output:

```sh
node build-articles.mjs
```

- Author details (role, bio, photo, LinkedIn) are in `AUTHOR` at the top of `content/articles.mjs`; empty fields are simply not shown.
- `SITE` at the top of `build-articles.mjs` sets the canonical URLs and the sitemap (currently the Vercel URL). Update it if the site moves to its own domain.

## Search engines

- `robots.txt` points crawlers at `sitemap.xml`.
- IndexNow key: `9654f1c761652d608cb13b9fda3516d3.txt` at the site root. After publishing new or changed pages, notify Bing, Yandex, Seznam and Naver:

```sh
curl -X POST https://api.indexnow.org/indexnow -H "Content-Type: application/json; charset=utf-8" \
  -d '{"host":"omni-chat-ia.vercel.app","key":"9654f1c761652d608cb13b9fda3516d3","keyLocation":"https://omni-chat-ia.vercel.app/9654f1c761652d608cb13b9fda3516d3.txt","urlList":["https://omni-chat-ia.vercel.app/"]}'
```
