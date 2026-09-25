// Page text for the landing page and the shared page chrome, in each language.
// English is the default and lives at "/", French lives under "/fr/".

export const LANGS = ["en", "fr"];
export const DEFAULT_LANG = "en";

// Search engine verification tags, added to both home pages, e.g.
// '<meta name="google-site-verification" content="...">'.
// Number of latest articles shown on the home page.
export const LATEST_ARTICLES_COUNT = 3;

export const VERIFICATION_TAGS = [
  '<meta name="google-site-verification" content="tXSdlWH-AtagVF7jXyHNNn9rm_i_qE1H0Qv11Bku6o0" />',
  '<meta name="msvalidate.01" content="F49FEFEDE4108C6CC9DA9548E9A251E4" />'
];

export const STRINGS = {
  en: {
    htmlLang: "en",
    locale: "en-GB",
    ogLocale: "en_GB",
    languageName: "English",
    home: "Javo, home",
    mainNav: "Main navigation",
    languageNav: "Language",
    nav: { how: "How it works", pricing: "Pricing", articles: "Articles", contact: "Contact" },
    ctaDemo: "Book a demo",
    footerArticles: "Articles",
    landing: {
      title: "Javo, the chat agent that answers your website visitors",
      description: "Javo answers your visitors' questions day and night and collects their contact details. Installed on your site with one line of code, from €600 per product.",
      badge: "AI agent for your website",
      h1: "Your visitors have questions <em>at&nbsp;10&nbsp;pm</em>. Javo answers them.",
      lede: "A chat agent that answers your visitors day and night, then passes their contact details on to you. Installed on your site with one line of code.",
      seePricing: "See pricing",
      benefits: ["One line of code", "Built for mobile", "Available out of hours"],
      video: "/assets/javo-demo-en.mp4",
      poster: "/assets/javo-demo-en-poster.jpg",
      videoLabel: "Demo: a visitor asks a question in the evening and Javo takes their call-back request",
      clientEyebrow: "Who uses Javo",
      clientTitle: "ALYOR, wealth advice for the self-employed",
      clientBody: "On alyor.fr, Javo is on every page. On mobile, it takes the place of the call button outside opening hours, so evening and weekend visitors always have someone to talk to.",
      howEyebrow: "How it works",
      howTitle: "Live in a few days, <em>not a few months</em>",
      steps: [
        ["One line of code", "Paste one tag on your site and Javo appears on every page, on desktop and mobile."],
        ["Set up for your business", "We configure the agent with your offers, your standard answers and your tone, so it sounds like your team."],
        ["Leads, not just conversations", "Before chatting, visitors leave their name, email or phone number. You know who to call back."]
      ],
      pricingEyebrow: "Pricing",
      pricingTitle: "Simple pricing, <em>per product</em>",
      pricingFrom: "From",
      pricingAmount: "€600",
      pricingUnit: "per product",
      pricingItems: ["Installation on your site", "Agent set up for your business", "Mobile and opening-hours integration", "Launch support"],
      pricingCta: "Get a quote",
      articlesEyebrow: "Latest articles",
      articlesTitle: "The numbers behind <em>every missed visitor</em>",
      articlesAll: "All articles",
      contactEyebrow: "Contact",
      contactTitle: "Let's talk about <em>your site</em>",
      contactBody: "Tell us where you'd like to install Javo. We'll come back to you with a demo and a quote.",
      form: { name: "Name", email: "Email", website: "Website", websitePlaceholder: "example.com", message: "Message", submit: "Send" }
    },
    articles: {
      indexTitle: "Articles | Javo",
      indexDescription: "Figures, calculations and methods to turn your website visitors into leads, even outside opening hours.",
      eyebrow: "Articles",
      h1: "Numbers to help you <em>stop losing visitors</em>",
      lede: "Every article starts from an original calculation that is sourced and reproducible.",
      insightKicker: "Javo calculation",
      published: "Published",
      updated: "Updated",
      readingTime: minutes => `${minutes} min read`,
      sources: "Sources",
      author: "About the author",
      authorEyebrow: "The author",
      linkedin: "LinkedIn profile",
      ctaTitle: "Javo answers your visitors, even out of hours.",
      ctaBody: "Installed on your site with one line of code, from €600 per product."
    }
  },
  fr: {
    htmlLang: "fr",
    locale: "fr-FR",
    ogLocale: "fr_FR",
    languageName: "Français",
    home: "Javo, accueil",
    mainNav: "Navigation principale",
    languageNav: "Langue",
    nav: { how: "Fonctionnement", pricing: "Tarifs", articles: "Articles", contact: "Contact" },
    ctaDemo: "Demander une démo",
    footerArticles: "Articles",
    landing: {
      title: "Javo, l’agent de chat qui répond à vos visiteurs",
      description: "Javo répond aux questions de vos visiteurs jour et nuit et recueille leurs coordonnées. Installé sur votre site en une ligne de code, à partir de 600 € par produit.",
      badge: "Agent IA pour votre site",
      h1: "Vos visiteurs ont des questions <em>à&nbsp;22h</em>. Javo y répond.",
      lede: "Un agent de chat qui répond à vos visiteurs jour et nuit, puis vous transmet leurs coordonnées. Installé sur votre site en une ligne de code.",
      seePricing: "Voir les tarifs",
      benefits: ["Une ligne de code", "Pensé pour le mobile", "Disponible hors horaires"],
      video: "/assets/javo-demo-fr.mp4",
      poster: "/assets/javo-demo-fr-poster.jpg",
      videoLabel: "Démonstration : un visiteur pose une question le soir et Javo recueille sa demande de rappel",
      clientEyebrow: "Ils utilisent Javo",
      clientTitle: "ALYOR, conseil patrimonial pour les indépendants",
      clientBody: "Sur alyor.fr, Javo est présent sur chaque page. Sur mobile, il prend la place du bouton d’appel en dehors des heures d’ouverture&nbsp;: les visiteurs du soir et du week-end ont toujours quelqu’un à qui parler.",
      howEyebrow: "Fonctionnement",
      howTitle: "En place en quelques jours, <em>pas en quelques mois</em>",
      steps: [
        ["Une ligne de code", "Une balise à coller sur votre site, et Javo s’affiche sur toutes les pages, sur ordinateur comme sur mobile."],
        ["Configuré pour votre activité", "Nous paramétrons l’agent avec vos offres, vos réponses types et votre ton, pour qu’il parle comme votre équipe."],
        ["Des leads, pas seulement des conversations", "Avant d’échanger, le visiteur laisse son nom, son e-mail ou son téléphone. Vous savez qui rappeler."]
      ],
      pricingEyebrow: "Tarifs",
      pricingTitle: "Un prix simple, <em>par produit</em>",
      pricingFrom: "À partir de",
      pricingAmount: "600&nbsp;€",
      pricingUnit: "par produit",
      pricingItems: ["Installation sur votre site", "Agent configuré pour votre activité", "Intégration mobile et horaires d’ouverture", "Accompagnement au lancement"],
      pricingCta: "Obtenir un devis",
      articlesEyebrow: "Derniers articles",
      articlesTitle: "Les chiffres derrière <em>chaque visiteur perdu</em>",
      articlesAll: "Tous les articles",
      contactEyebrow: "Contact",
      contactTitle: "Parlons de <em>votre site</em>",
      contactBody: "Dites-nous où vous voulez installer Javo. Nous revenons vers vous avec une démo et un devis.",
      form: { name: "Nom", email: "E-mail", website: "Site web", websitePlaceholder: "exemple.fr", message: "Message", submit: "Envoyer" }
    },
    articles: {
      indexTitle: "Articles | Javo",
      indexDescription: "Chiffres, calculs et méthodes pour transformer les visiteurs de votre site en contacts, même en dehors des horaires d’ouverture.",
      eyebrow: "Articles",
      h1: "Des chiffres pour <em>ne plus perdre un visiteur</em>",
      lede: "Chaque article part d’un calcul original, sourcé et reproductible.",
      insightKicker: "Calcul Javo",
      published: "Publié le",
      updated: "Mis à jour le",
      readingTime: minutes => `${minutes} min de lecture`,
      sources: "Sources",
      author: "À propos de l’auteur",
      authorEyebrow: "L’auteur",
      linkedin: "Profil LinkedIn",
      ctaTitle: "Javo répond à vos visiteurs, même hors horaires.",
      ctaBody: "Installé sur votre site en une ligne de code, à partir de 600&nbsp;€ par produit."
    }
  }
};
