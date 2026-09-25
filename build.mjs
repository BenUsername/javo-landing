// Generates every page of the site in English (default, at "/") and French (under "/fr/"):
// home pages, article indexes, articles and sitemap.xml.
// Usage: node build.mjs  (commit the generated files; Vercel serves them as static files)
import { mkdirSync, writeFileSync, readdirSync, rmSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { LANGS, DEFAULT_LANG, STRINGS, VERIFICATION_TAGS, LATEST_ARTICLES_COUNT } from "./content/site.mjs";
import { AUTHOR, ARTICLES_FR } from "./content/articles.mjs";
import { ARTICLES_EN } from "./content/articles.en.mjs";

const root = dirname(fileURLToPath(import.meta.url));

// Public URL of the site, used for canonical links, hreflang, structured data and the sitemap.
const SITE = "https://omni-chat-ia.vercel.app";

const ARTICLES = { en: ARTICLES_EN, fr: ARTICLES_FR };

for (const article of ARTICLES_EN) {
  if (!ARTICLES_FR.some(fr => fr.id === article.id)) throw new Error(`No French version of ${article.id}`);
}
for (const article of ARTICLES_FR) {
  if (!ARTICLES_EN.some(en => en.id === article.id)) throw new Error(`No English version of ${article.id}`);
}

const escape = value => String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const initials = name => name.split(/\s+/).map(part => part[0]).join("").slice(0, 2).toUpperCase();

const prefix = lang => (lang === DEFAULT_LANG ? "" : `/${lang}`);
const homePath = lang => `${prefix(lang)}/`;
const indexPath = lang => `${prefix(lang)}/articles/`;
const articlePath = (lang, id) => `${prefix(lang)}/articles/${ARTICLES[lang].find(article => article.id === id).slug}/`;

// Newest first; articles published the same day keep the most recently added first.
const newestFirst = lang => ARTICLES[lang].map((article, index) => ({ article, index }))
  .sort((a, b) => b.article.date.localeCompare(a.article.date) || b.index - a.index)
  .map(({ article }) => article);

const formatDate = (lang, iso) => new Intl.DateTimeFormat(STRINGS[lang].locale, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${iso}T00:00:00Z`));

const ICONS = `<svg width="0" height="0" style="position:absolute" aria-hidden="true">
    <symbol id="i-arrow" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></symbol>
    <symbol id="i-check" viewBox="0 0 24 24"><path d="M20 6 9 17l-5-5"/></symbol>
    <symbol id="i-chat" viewBox="0 0 24 24"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></symbol>
    <symbol id="i-code" viewBox="0 0 24 24"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></symbol>
    <symbol id="i-settings" viewBox="0 0 24 24"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></symbol>
    <symbol id="i-user-plus" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6"/><path d="M22 11h-6"/></symbol>
    <symbol id="i-phone" viewBox="0 0 24 24"><rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/></symbol>
    <symbol id="i-moon" viewBox="0 0 24 24"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></symbol>
    <linearGradient id="g-cyan" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#3fd8ff"/><stop offset="1" stop-color="#0a7dfc"/></linearGradient>
    <linearGradient id="g-blue" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2f6bff"/><stop offset="1" stop-color="#1a2f78"/></linearGradient>
    <linearGradient id="g-body" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#1d63ff"/><stop offset="1" stop-color="#084efb"/></linearGradient>
    <radialGradient id="g-knob" cx="0.35" cy="0.3" r="0.8"><stop offset="0" stop-color="#7fb0ff"/><stop offset="0.55" stop-color="#084efb"/><stop offset="1" stop-color="#1a2f78"/></radialGradient>
    <radialGradient id="g-knob-cyan" cx="0.35" cy="0.3" r="0.8"><stop offset="0" stop-color="#a6ecff"/><stop offset="0.55" stop-color="#0aa8fc"/><stop offset="1" stop-color="#084efb"/></radialGradient>
    <symbol id="g-code" viewBox="0 0 48 48"><path d="M19 12 8.5 24 19 36" fill="none" stroke="url(#g-blue)" stroke-width="6.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M29 12 39.5 24 29 36" fill="none" stroke="url(#g-cyan)" stroke-width="6.5" stroke-linecap="round" stroke-linejoin="round"/></symbol>
    <symbol id="g-settings" viewBox="0 0 48 48"><rect x="7" y="13" width="34" height="6" rx="3" fill="url(#g-blue)"/><rect x="7" y="29" width="34" height="6" rx="3" fill="url(#g-cyan)"/><circle cx="17" cy="16" r="6.5" fill="url(#g-knob)"/><circle cx="31" cy="32" r="6.5" fill="url(#g-knob-cyan)"/></symbol>
    <symbol id="g-user-plus" viewBox="0 0 48 48"><circle cx="19" cy="15" r="7.5" fill="url(#g-knob)"/><path d="M5.5 40c0-8.3 6-13.5 13.5-13.5S32.5 31.7 32.5 40c0 1.1-.9 2-2 2h-23c-1.1 0-2-.9-2-2Z" fill="url(#g-body)"/><path d="M38 11v12M32 17h12" fill="none" stroke="url(#g-cyan)" stroke-width="4.5" stroke-linecap="round"/></symbol>
    <symbol id="i-calc" viewBox="0 0 24 24"><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M8 6h8"/><path d="M16 14v4"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></symbol>
  </svg>`;

// alternates: { en: "/path", fr: "/fr/path" } for the same page in each language.
const head = ({ lang, title, description, alternates, jsonLd, extraHead = [], scripts = [] }) => {
  const t = STRINGS[lang];
  const links = LANGS.map(code => `  <link rel="alternate" hreflang="${STRINGS[code].htmlLang}" href="${SITE}${alternates[code]}">`);
  links.push(`  <link rel="alternate" hreflang="x-default" href="${SITE}${alternates[DEFAULT_LANG]}">`);
  return `<!doctype html>
<html lang="${t.htmlLang}">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">${extraHead.map(tag => `\n  ${tag}`).join("")}
  <title>${escape(title)}</title>
  <meta name="description" content="${escape(description)}">
  <link rel="canonical" href="${SITE}${alternates[lang]}">
${links.join("\n")}
  <meta property="og:title" content="${escape(title)}">
  <meta property="og:description" content="${escape(description)}">
  <meta property="og:locale" content="${t.ogLocale}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="icon" href="/assets/favicon-32.png" type="image/png" sizes="32x32">
  <link rel="icon" href="/assets/favicon-192.png" type="image/png" sizes="192x192">
  <link rel="apple-touch-icon" href="/assets/apple-touch-icon.png">
  <meta name="theme-color" content="#084efb">
  <meta property="og:image" content="${SITE}/assets/omni-logo.png">
  <link rel="stylesheet" href="/styles.css">${scripts.map(src => `\n  <script src="${src}" defer></script>`).join("")}${jsonLd ? `\n  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>` : ""}
</head>
<body>
  ${ICONS}
${header(lang, alternates)}`;
};

const langSwitch = (lang, alternates) => `<nav class="lang-switch" aria-label="${STRINGS[lang].languageNav}">
        ${LANGS.map(code => `<a href="${alternates[code]}" lang="${STRINGS[code].htmlLang}" hreflang="${STRINGS[code].htmlLang}" title="${STRINGS[code].languageName}"${code === lang ? ' aria-current="page"' : ""}>${code.toUpperCase()}</a>`).join("")}
      </nav>`;

const header = (lang, alternates) => {
  const t = STRINGS[lang];
  const home = homePath(lang);
  return `  <header class="nav">
    <div class="container nav__inner">
      <a class="brand" href="${home}" aria-label="${t.home}"><img class="brand__mark" src="/assets/omni-mark.png" alt="" width="32" height="32">omni</a>
      <nav class="nav__links" aria-label="${t.mainNav}">
        <a href="${home}#how">${t.nav.how}</a>
        <a href="${home}#pricing">${t.nav.pricing}</a>
        <a href="${indexPath(lang)}">${t.nav.articles}</a>
      </nav>
      ${langSwitch(lang, alternates)}
      <a class="btn btn--primary btn--sm nav__cta" href="${home}#contact">${t.ctaDemo}</a>
    </div>
  </header>
`;
};

const foot = lang => `
  <footer class="footer">
    <div class="container footer__inner">
      <a class="brand" href="${homePath(lang)}"><img class="brand__mark" src="/assets/omni-mark.png" alt="" width="32" height="32">omni</a>
      <nav class="footer__links" aria-label="${STRINGS[lang].mainNav}">
        <a href="${homePath(lang)}#how">${STRINGS[lang].nav.how}</a>
        <a href="${homePath(lang)}#pricing">${STRINGS[lang].nav.pricing}</a>
        <a href="${indexPath(lang)}">${STRINGS[lang].nav.articles}</a>
        <a href="${homePath(lang)}#contact">${STRINGS[lang].nav.contact}</a>
      </nav>
      <p>© 2026 Omni</p>
    </div>
  </footer>
</body>
</html>
`;

const landingPage = lang => {
  const t = STRINGS[lang];
  const l = t.landing;
  const alternates = Object.fromEntries(LANGS.map(code => [code, homePath(code)]));
  const stepIcons = ["g-code", "g-settings", "g-user-plus"];
  const benefitIcons = ["i-code", "i-phone", "i-moon"];
  return `${head({ lang, title: l.title, description: l.description, alternates, extraHead: VERIFICATION_TAGS, scripts: ["/main.js"] })}
  <main>
    <section class="hero">
      <div class="container hero__grid">
        <div class="hero__copy">
          <p class="badge"><span class="badge__dot"></span>${l.badge}</p>
          <h1>${l.h1}</h1>
          <p class="lede">${l.lede}</p>
          <div class="hero__ctas">
            <a class="btn btn--primary" href="#contact">${t.ctaDemo}<svg><use href="#i-arrow"/></svg></a>
            <a class="btn btn--secondary" href="#pricing">${l.seePricing}</a>
          </div>
          <ul class="benefits">
            ${l.benefits.map((benefit, i) => `<li><svg><use href="#${benefitIcons[i]}"/></svg>${benefit}</li>`).join("\n            ")}
          </ul>
        </div>
        <div class="hero__media">
          <div class="phone">
            <video class="phone__screen" src="${l.video}" poster="${l.poster}" autoplay muted loop playsinline preload="metadata" aria-label="${escape(l.videoLabel)}"></video>
          </div>
        </div>
      </div>
    </section>

    <section class="client" aria-labelledby="client-title">
      <div class="container">
        <div class="card client__card">
          <div class="client__logo"><img src="/assets/alyor-logo.png" alt="ALYOR" width="961" height="432"></div>
          <div class="client__copy">
            <p class="eyebrow">${l.clientEyebrow}</p>
            <h2 id="client-title">${l.clientTitle}</h2>
            <p>${l.clientBody}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="how" aria-labelledby="how-title">
      <div class="container">
        <div class="section__head">
          <p class="eyebrow">${l.howEyebrow}</p>
          <h2 id="how-title">${l.howTitle}</h2>
        </div>
        <div class="steps">
          ${l.steps.map(([title, body], i) => `<article class="card step">
            <span class="step__icon"><svg><use href="#${stepIcons[i]}"/></svg></span>
            <h3>${title}</h3>
            <p>${body}</p>
          </article>`).join("\n          ")}
        </div>
      </div>
    </section>

    <section class="section" id="pricing" aria-labelledby="pricing-title">
      <div class="container">
        <div class="section__head">
          <p class="eyebrow">${l.pricingEyebrow}</p>
          <h2 id="pricing-title">${l.pricingTitle}</h2>
        </div>
        <div class="card pricing">
          <div class="pricing__price">
            <p class="pricing__from">${l.pricingFrom}</p>
            <p class="pricing__amount">${l.pricingAmount}</p>
            <p class="pricing__unit">${l.pricingUnit}</p>
          </div>
          <ul class="pricing__list">
            ${l.pricingItems.map(item => `<li><svg><use href="#i-check"/></svg>${item}</li>`).join("\n            ")}
          </ul>
          <a class="btn btn--primary pricing__cta" href="#contact">${l.pricingCta}<svg><use href="#i-arrow"/></svg></a>
        </div>
      </div>
    </section>

    <section class="section" id="latest-articles" aria-labelledby="articles-title">
      <div class="container">
        <div class="section__head">
          <p class="eyebrow">${l.articlesEyebrow}</p>
          <h2 id="articles-title">${l.articlesTitle}</h2>
        </div>
        <div class="article-grid">
        ${newestFirst(lang).slice(0, LATEST_ARTICLES_COUNT).map(article => articleCard(lang, article)).join("\n        ")}
        </div>
        <p class="section__more"><a class="btn btn--secondary" href="${indexPath(lang)}">${l.articlesAll}<svg><use href="#i-arrow"/></svg></a></p>
      </div>
    </section>

    <section class="section" id="contact" aria-labelledby="contact-title">
      <div class="container contact">
        <div class="contact__copy">
          <p class="eyebrow">${l.contactEyebrow}</p>
          <h2 id="contact-title">${l.contactTitle}</h2>
          <p>${l.contactBody}</p>
        </div>
        <form class="card form" data-lead-form novalidate>
          <div class="form__row">
            <label for="name">${l.form.name} <span aria-hidden="true">*</span></label>
            <input id="name" name="name" type="text" autocomplete="name" required>
          </div>
          <div class="form__row">
            <label for="email">${l.form.email} <span aria-hidden="true">*</span></label>
            <input id="email" name="email" type="email" autocomplete="email" required>
          </div>
          <div class="form__row">
            <label for="website">${l.form.website}</label>
            <input id="website" name="website" type="text" inputmode="url" autocomplete="url" placeholder="${l.form.websitePlaceholder}">
          </div>
          <div class="form__row">
            <label for="message">${l.form.message}</label>
            <textarea id="message" name="message" rows="4"></textarea>
          </div>
          <input class="form__trap" type="text" name="_honey" tabindex="-1" autocomplete="off" aria-hidden="true">
          <button class="btn btn--primary form__submit" type="submit">${l.form.submit}<svg><use href="#i-arrow"/></svg></button>
          <p class="form__status" data-form-status role="status" aria-live="polite"></p>
        </form>
      </div>
    </section>
  </main>
${foot(lang)}`;
};

const avatar = size => AUTHOR.image
  ? `<img class="avatar avatar--${size}" src="${escape(AUTHOR.image)}" alt="${escape(AUTHOR.name)}" width="96" height="96">`
  : `<span class="avatar avatar--${size}" aria-hidden="true">${initials(AUTHOR.name)}</span>`;

const articlePage = (lang, article) => {
  const t = STRINGS[lang].articles;
  const role = AUTHOR.role[lang];
  const bio = AUTHOR.bio[lang];
  const alternates = Object.fromEntries(LANGS.map(code => [code, articlePath(code, article.id)]));
  const i = article.insight;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title.replace(/<[^>]+>/g, ""),
    description: article.description,
    inLanguage: STRINGS[lang].locale,
    datePublished: article.date,
    dateModified: article.updated || article.date,
    mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}${alternates[lang]}` },
    author: {
      "@type": "Person",
      name: AUTHOR.name,
      ...(role && { jobTitle: role }),
      ...(AUTHOR.image && { image: new URL(AUTHOR.image, SITE).href }),
      ...(AUTHOR.linkedin && { sameAs: [AUTHOR.linkedin] })
    },
    publisher: { "@type": "Organization", name: "Omni", url: SITE, logo: { "@type": "ImageObject", url: `${SITE}/assets/omni-logo.png` } },
    citation: article.sources.map(source => new URL(source.url, SITE).href)
  };
  return `${head({ lang, title: `${article.title} | Omni`, description: article.description, alternates, jsonLd })}
  <main class="article">
    <div class="container article__container">
      <p class="breadcrumb"><a href="${indexPath(lang)}">${t.eyebrow}</a></p>
      <article>
        <header class="article__head">
          <p class="eyebrow">${escape(article.category)}</p>
          <h1>${article.title}</h1>
          <p class="article__dek">${article.description}</p>
          <div class="byline">
            ${avatar("sm")}
            <div>
              <p class="byline__name">${escape(AUTHOR.name)}${role ? `<span>, ${escape(role)}</span>` : ""}</p>
              <p class="byline__date">${t.published} <time datetime="${article.date}">${formatDate(lang, article.date)}</time>${article.updated ? ` · ${t.updated} <time datetime="${article.updated}">${formatDate(lang, article.updated)}</time>` : ""} · ${t.readingTime(article.readingMinutes)}</p>
            </div>
          </div>
        </header>
        <aside class="card insight" aria-label="${t.insightKicker}">
          <p class="insight__kicker"><svg><use href="#i-calc"/></svg>${t.insightKicker}</p>
          <p class="insight__title">${i.title}</p>
          <div class="insight__figure">
            <p class="insight__value">${i.value}</p>
            <p class="insight__label">${i.label}</p>
          </div>
          <p class="insight__body">${i.body}</p>
          <p class="insight__formula">${i.formula}</p>
          <p class="insight__source">${i.source}</p>
          <p class="insight__caveat">${i.caveat}</p>
        </aside>
        <div class="prose">
${article.body.trim()}
        </div>
        <section class="sources" aria-labelledby="sources-${article.slug}">
          <h2 id="sources-${article.slug}">${t.sources}</h2>
          <ol>
            ${article.sources.map(source => `<li><a href="${escape(source.url)}"${source.url.startsWith("/") ? "" : ' rel="noopener" target="_blank"'}>${source.label}</a></li>`).join("\n            ")}
          </ol>
        </section>
        <section class="card author" aria-label="${t.author}">
          ${avatar("lg")}
          <div>
            <p class="eyebrow">${t.authorEyebrow}</p>
            <p class="author__name">${escape(AUTHOR.name)}</p>
            ${role ? `<p class="author__role">${escape(role)}</p>` : ""}
            ${bio ? `<p class="author__bio">${bio}</p>` : ""}
            ${AUTHOR.linkedin ? `<a class="author__link" href="${escape(AUTHOR.linkedin)}" rel="me noopener" target="_blank">${t.linkedin}</a>` : ""}
          </div>
        </section>
        <section class="card article__cta">
          <div>
            <p class="article__cta-title">${t.ctaTitle}</p>
            <p>${t.ctaBody}</p>
          </div>
          <a class="btn btn--primary" href="${homePath(lang)}#contact">${STRINGS[lang].ctaDemo}<svg><use href="#i-arrow"/></svg></a>
        </section>
      </article>
    </div>
  </main>
${foot(lang)}`;
};

const articleCard = (lang, article) => `<a class="card article-card" href="${articlePath(lang, article.id)}">
          <p class="article-card__category">${escape(article.category)}</p>
          <p class="article-card__value">${article.insight.value}</p>
          <p class="article-card__label">${article.insight.label}</p>
          <h3>${article.title}</h3>
          <p class="article-card__meta">${escape(AUTHOR.name)} · ${formatDate(lang, article.date)}</p>
        </a>`;

const indexPage = lang => {
  const t = STRINGS[lang].articles;
  const alternates = Object.fromEntries(LANGS.map(code => [code, indexPath(code)]));
  return `${head({ lang, title: t.indexTitle, description: t.indexDescription, alternates })}
  <main class="article-index">
    <div class="container">
      <div class="section__head">
        <p class="eyebrow">${t.eyebrow}</p>
        <h1>${t.h1}</h1>
        <p class="article-index__lede">${t.lede}</p>
      </div>
      <div class="article-grid">
        ${newestFirst(lang).map(article => articleCard(lang, article)).join("\n        ")}
      </div>
    </div>
  </main>
${foot(lang)}`;
};

const write = (path, html) => {
  const file = join(root, path, "index.html");
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, html);
};

// Remove article folders that no longer match an article in their language.
for (const lang of LANGS) {
  const dir = join(root, prefix(lang), "articles");
  if (!existsSync(dir)) continue;
  const slugs = new Set(ARTICLES[lang].map(article => article.slug));
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory() && !slugs.has(entry.name)) rmSync(join(dir, entry.name), { recursive: true });
  }
}

const pages = [];
for (const lang of LANGS) {
  write(homePath(lang), landingPage(lang));
  write(indexPath(lang), indexPage(lang));
  pages.push(Object.fromEntries(LANGS.map(code => [code, homePath(code)])));
  pages.push(Object.fromEntries(LANGS.map(code => [code, indexPath(code)])));
  for (const article of ARTICLES[lang]) {
    write(articlePath(lang, article.id), articlePage(lang, article));
    pages.push(Object.fromEntries(LANGS.map(code => [code, articlePath(code, article.id)])));
  }
}

// One <url> per page and language, each listing all language versions.
const seen = new Set();
const entries = [];
for (const alternates of pages) {
  for (const lang of LANGS) {
    const loc = alternates[lang];
    if (seen.has(loc)) continue;
    seen.add(loc);
    const links = LANGS.map(code => `    <xhtml:link rel="alternate" hreflang="${STRINGS[code].htmlLang}" href="${SITE}${alternates[code]}"/>`).join("\n");
    entries.push(`  <url>\n    <loc>${SITE}${loc}</loc>\n${links}\n    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE}${alternates[DEFAULT_LANG]}"/>\n  </url>`);
  }
}
writeFileSync(join(root, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join("\n")}
</urlset>
`);
console.log(`Built ${LANGS.length} languages, ${entries.length} pages.`);
