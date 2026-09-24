// Generates articles/index.html and articles/<slug>/index.html from content/articles.mjs.
// Usage: node build-articles.mjs  (commit the generated files; the site itself has no build step)
import { mkdirSync, writeFileSync, readdirSync, rmSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { AUTHOR, ARTICLES } from "./content/articles.mjs";

const root = dirname(fileURLToPath(import.meta.url));
// Public URL of the site, used for canonical links, structured data and the sitemap. Set it to the real domain.
const SITE = "https://omni-landing-sigma.vercel.app";

const escape = value => String(value).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const frenchDate = iso => new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${iso}T00:00:00Z`));
const initials = name => name.split(/\s+/).map(part => part[0]).join("").slice(0, 2).toUpperCase();

const ICONS = `<svg width="0" height="0" style="position:absolute" aria-hidden="true">
    <symbol id="i-arrow" viewBox="0 0 24 24"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></symbol>
    <symbol id="i-chat" viewBox="0 0 24 24"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/></symbol>
    <symbol id="i-calc" viewBox="0 0 24 24"><rect width="16" height="20" x="4" y="2" rx="2"/><path d="M8 6h8"/><path d="M16 14v4"/><path d="M16 10h.01"/><path d="M12 10h.01"/><path d="M8 10h.01"/><path d="M12 14h.01"/><path d="M8 14h.01"/><path d="M12 18h.01"/><path d="M8 18h.01"/></symbol>
  </svg>`;

const head = ({ title, description, canonical, jsonLd }) => `<!doctype html>
<html lang="fr">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escape(title)}</title>
  <meta name="description" content="${escape(description)}">
  <link rel="canonical" href="${canonical}">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet">
  <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
  <link rel="stylesheet" href="/styles.css">${jsonLd ? `\n  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>` : ""}
</head>
<body>
  ${ICONS}
  <header class="nav">
    <div class="container nav__inner">
      <a class="brand" href="/" aria-label="Omni, accueil"><span class="brand__mark"><svg><use href="#i-chat"/></svg></span>omni</a>
      <nav class="nav__links" aria-label="Navigation principale">
        <a href="/#fonctionnement">Fonctionnement</a>
        <a href="/#tarifs">Tarifs</a>
        <a href="/articles/">Articles</a>
      </nav>
      <a class="btn btn--primary btn--sm" href="/#contact">Demander une démo</a>
    </div>
  </header>
`;

const foot = `
  <footer class="footer">
    <div class="container footer__inner">
      <a class="brand" href="/"><span class="brand__mark"><svg><use href="#i-chat"/></svg></span>omni</a>
      <p><a href="/articles/">Articles</a> · © 2026 Omni</p>
    </div>
  </footer>
</body>
</html>
`;

const avatar = size => AUTHOR.image
  ? `<img class="avatar avatar--${size}" src="${escape(AUTHOR.image)}" alt="${escape(AUTHOR.name)}" width="96" height="96">`
  : `<span class="avatar avatar--${size}" aria-hidden="true">${initials(AUTHOR.name)}</span>`;

const byline = article => `
        <div class="byline">
          ${avatar("sm")}
          <div>
            <p class="byline__name">${escape(AUTHOR.name)}${AUTHOR.role ? `<span>, ${escape(AUTHOR.role)}</span>` : ""}</p>
            <p class="byline__date">Publié le <time datetime="${article.date}">${frenchDate(article.date)}</time>${article.updated ? ` · Mis à jour le <time datetime="${article.updated}">${frenchDate(article.updated)}</time>` : ""} · ${article.readingMinutes} min de lecture</p>
          </div>
        </div>`;

const insight = ({ insight: i }) => `
        <aside class="card insight" aria-label="Calcul Omni">
          <p class="insight__kicker"><svg><use href="#i-calc"/></svg>Calcul Omni</p>
          <p class="insight__title">${i.title}</p>
          <div class="insight__figure">
            <p class="insight__value">${i.value}</p>
            <p class="insight__label">${i.label}</p>
          </div>
          <p class="insight__body">${i.body}</p>
          <p class="insight__formula">${i.formula}</p>
          <p class="insight__source">${i.source}</p>
          <p class="insight__caveat">${i.caveat}</p>
        </aside>`;

const authorBox = `
        <section class="card author" aria-label="À propos de l’auteur">
          ${avatar("lg")}
          <div>
            <p class="eyebrow">L’auteur</p>
            <p class="author__name">${escape(AUTHOR.name)}</p>
            ${AUTHOR.role ? `<p class="author__role">${escape(AUTHOR.role)}</p>` : ""}
            ${AUTHOR.bio ? `<p class="author__bio">${AUTHOR.bio}</p>` : ""}
            ${AUTHOR.linkedin ? `<a class="author__link" href="${escape(AUTHOR.linkedin)}" rel="me noopener" target="_blank">Profil LinkedIn</a>` : ""}
          </div>
        </section>`;

const articleJsonLd = article => ({
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: article.title,
  description: article.description,
  inLanguage: "fr-FR",
  datePublished: article.date,
  dateModified: article.updated || article.date,
  mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE}/articles/${article.slug}/` },
  author: {
    "@type": "Person",
    name: AUTHOR.name,
    ...(AUTHOR.role && { jobTitle: AUTHOR.role }),
    ...(AUTHOR.image && { image: new URL(AUTHOR.image, SITE).href }),
    ...(AUTHOR.linkedin && { sameAs: [AUTHOR.linkedin] })
  },
  publisher: { "@type": "Organization", name: "Omni", url: SITE },
  citation: article.sources.map(source => source.url)
});

const articlePage = article => `${head({ title: `${article.title} | Omni`, description: article.description, canonical: `${SITE}/articles/${article.slug}/`, jsonLd: articleJsonLd(article) })}
  <main class="article">
    <div class="container article__container">
      <p class="breadcrumb"><a href="/articles/">Articles</a></p>
      <article>
        <header class="article__head">
          <p class="eyebrow">${escape(article.category)}</p>
          <h1>${article.title}</h1>
          <p class="article__dek">${article.description}</p>
          ${byline(article)}
        </header>
        ${insight(article)}
        <div class="prose">
${article.body.trim()}
        </div>
        <section class="sources" aria-labelledby="sources-${article.slug}">
          <h2 id="sources-${article.slug}">Sources</h2>
          <ol>
            ${article.sources.map(source => `<li><a href="${escape(source.url)}" rel="noopener" target="_blank">${source.label}</a></li>`).join("\n            ")}
          </ol>
        </section>
        ${authorBox}
        <section class="card article__cta">
          <div>
            <p class="article__cta-title">Omni répond à vos visiteurs, même hors horaires.</p>
            <p>Installé sur votre site en une ligne de code, à partir de 600&nbsp;€ par produit.</p>
          </div>
          <a class="btn btn--primary" href="/#contact">Demander une démo<svg><use href="#i-arrow"/></svg></a>
        </section>
      </article>
    </div>
  </main>
${foot}`;

const indexPage = () => `${head({ title: "Articles | Omni", description: "Chiffres, calculs et méthodes pour transformer les visiteurs de votre site en contacts, même en dehors des horaires d’ouverture.", canonical: `${SITE}/articles/` })}
  <main class="article-index">
    <div class="container">
      <div class="section__head">
        <p class="eyebrow">Articles</p>
        <h1>Des chiffres pour <em>ne plus perdre un visiteur</em></h1>
        <p class="article-index__lede">Chaque article part d’un calcul original, sourcé et reproductible.</p>
      </div>
      <div class="article-grid">
        ${[...ARTICLES].sort((a, b) => b.date.localeCompare(a.date)).map(article => `<a class="card article-card" href="/articles/${article.slug}/">
          <p class="article-card__category">${escape(article.category)}</p>
          <p class="article-card__value">${article.insight.value}</p>
          <p class="article-card__label">${article.insight.label}</p>
          <h2>${article.title}</h2>
          <p class="article-card__meta">${escape(AUTHOR.name)} · ${frenchDate(article.date)}</p>
        </a>`).join("\n        ")}
      </div>
    </div>
  </main>
${foot}`;

const articlesDir = join(root, "articles");
mkdirSync(articlesDir, { recursive: true });
const slugs = new Set(ARTICLES.map(article => article.slug));
for (const entry of readdirSync(articlesDir, { withFileTypes: true })) {
  if (entry.isDirectory() && !slugs.has(entry.name)) rmSync(join(articlesDir, entry.name), { recursive: true });
}
for (const article of ARTICLES) {
  mkdirSync(join(articlesDir, article.slug), { recursive: true });
  writeFileSync(join(articlesDir, article.slug, "index.html"), articlePage(article));
}
writeFileSync(join(articlesDir, "index.html"), indexPage());

const urls = ["/", "/articles/", ...ARTICLES.map(article => `/articles/${article.slug}/`)];
writeFileSync(join(root, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url><loc>${SITE}${url}</loc></url>`).join("\n")}
</urlset>
`);
console.log(`Built ${ARTICLES.length} articles.`);
