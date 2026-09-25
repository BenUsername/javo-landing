// French articles for build.mjs. Every figure in an insight box must be sourced
// or derived by a formula shown in the box; say what the number is not.
// Each article's `id` pairs it with its English version in articles.en.mjs.

export const AUTHOR = {
  name: "Edouard Vary",
  role: { en: "", fr: "" },   // e.g. "Founder, Omni" / "Fondateur, Omni" once confirmed
  bio: { en: "", fr: "" },    // one or two sentences of credentials
  image: "",                  // e.g. "/assets/edouard-vary.jpg"
  linkedin: ""                // full LinkedIn profile URL
};

const PUBLISHED = "2026-09-24";
const PUBLISHED_2 = "2026-09-25";

export const ARTICLES_FR = [
  {
    id: "heures-hors-bureau-2026",
    slug: "heures-hors-bureau-2026",
    category: "Disponibilité",
    title: "77 % des heures de l’année tombent en dehors de vos horaires d’ouverture",
    description: "Avec des horaires de 9 h à 17 h du lundi au vendredi, votre entreprise est fermée 6 744 heures en 2026. Voici le calcul, et ce qu’il change pour vos visiteurs.",
    date: PUBLISHED,
    readingMinutes: 4,
    insight: {
      title: "Une entreprise ouverte de 9 h à 17 h en semaine est fermée plus de trois heures sur quatre",
      value: "77,0 %",
      label: "des 8 760 heures de 2026 tombent en dehors des horaires de bureau, jours fériés compris",
      body: "2026 compte 261 jours de semaine. Neuf jours fériés tombent en semaine, ce qui laisse 252 jours ouvrés de 8 heures, soit 2 016 heures d’ouverture sur l’année.",
      formula: "1 − (252 jours × 8 h) ÷ 8 760 h = 1 − 2 016 ÷ 8 760 = 77,0 %",
      source: "Calendrier 2026 ; jours fériés d’après <a href=\"https://www.service-public.fr/particuliers/vosdroits/F2405\" rel=\"noopener\" target=\"_blank\">Service-Public.fr</a> (Code du travail, articles L3133-1 à L3133-3).",
      caveat: "Calcul calendaire pour des horaires de 9 h à 17 h. Il ne dit pas quand vos visiteurs viennent : mesurez-le dans vos statistiques de fréquentation avant de dimensionner quoi que ce soit."
    },
    body: `
<p>Posez la question autrement : sur une année, combien d’heures votre site est-il consulté alors que personne ne peut répondre ? Avec des horaires classiques de 9 h à 17 h en semaine, la réponse dépasse les trois quarts de l’année.</p>
<h2>Le détail du calcul</h2>
<p>L’année 2026 compte 365 jours, dont 261 du lundi au vendredi. Sur les onze jours fériés nationaux, neuf tombent en semaine : le 1er janvier, le lundi de Pâques, le 1er mai, le 8 mai, l’Ascension, le lundi de Pentecôte, le 14 juillet, le 11 novembre et Noël. Le 15 août et la Toussaint tombent un week-end.</p>
<table>
  <thead><tr><th>Étape</th><th>Valeur</th></tr></thead>
  <tbody>
    <tr><td>Jours de semaine en 2026</td><td>261</td></tr>
    <tr><td>Jours fériés tombant en semaine</td><td>9</td></tr>
    <tr><td>Jours ouvrés</td><td>252</td></tr>
    <tr><td>Heures d’ouverture (8 h par jour)</td><td>2 016</td></tr>
    <tr><td>Heures fermées sur 8 760</td><td>6 744</td></tr>
  </tbody>
</table>
<p>Si vous ouvrez de 9 h à 18 h, la part baisse à 74,1 %. L’ordre de grandeur ne change pas : votre entreprise est fermée la grande majorité du temps.</p>
<h2>Les fermetures les plus longues</h2>
<p>Un week-end ordinaire, du vendredi 17 h au lundi 9 h, dure 64 heures. Les ponts allongent l’attente : du vendredi 3 avril à 17 h au mardi 7 avril à 9 h, la fermeture de Pâques dure 88 heures. Le week-end de Pentecôte et Noël, qui tombe un vendredi en 2026, produisent la même durée.</p>
<h2>Ce que ce chiffre ne dit pas</h2>
<p>Ce calcul porte sur le calendrier, pas sur vos visiteurs. Le trafic d’un site n’est pas réparti uniformément : il peut être plus fort en journée pour un site professionnel, ou le soir pour un site grand public. Pour savoir combien de visites tombent hors horaires, regardez la répartition par heure dans votre outil de statistiques.</p>
<p>Ce que le calcul montre, en revanche, c’est l’étendue du créneau pendant lequel un visiteur qui a une question ne peut joindre personne. Un formulaire de contact enregistre sa demande, mais ne lui répond pas.</p>
<h2>Que faire de ces 6 744 heures</h2>
<ul>
  <li><strong>Mesurez la part réelle</strong> de vos visites et de vos demandes arrivées hors horaires.</li>
  <li><strong>Affichez vos horaires</strong> près du numéro de téléphone, pour éviter un appel qui sonne dans le vide.</li>
  <li><strong>Proposez une réponse immédiate</strong> hors horaires : un agent de chat peut répondre aux questions courantes et recueillir les coordonnées pour un rappel le jour ouvré suivant.</li>
</ul>`,
    sources: [
      { label: "Service-Public.fr, « Jours fériés et ponts dans le secteur privé » : calendrier des jours fériés 2026", url: "https://www.service-public.fr/particuliers/vosdroits/F2405" }
    ]
  },
  {
    id: "rentabiliser-un-agent-de-chat",
    slug: "rentabiliser-un-agent-de-chat",
    category: "Rentabilité",
    title: "Combien de contacts faut-il pour rentabiliser un agent de chat à 600 € ?",
    description: "Une formule simple pour calculer le seuil de rentabilité d’un agent de chat, avec des exemples chiffrés selon la valeur d’un client et votre taux de transformation.",
    date: PUBLISHED,
    readingMinutes: 4,
    insight: {
      title: "Le seuil de rentabilité dépend de deux chiffres que vous connaissez déjà",
      value: "3 contacts",
      label: "suffisent à couvrir 600 € si un client vous rapporte 1 000 € de marge et que vous signez un contact sur quatre",
      body: "Le nombre de contacts nécessaires se calcule en divisant le coût par la marge attendue d’un contact, c’est-à-dire la marge d’un client multipliée par votre taux de transformation.",
      formula: "600 € ÷ (1 000 € × 25 %) = 2,4, arrondi à 3 contacts",
      source: "Formule de seuil de rentabilité ; valeurs d’exemple choisies pour l’illustration.",
      caveat: "Exemple illustratif, pas un résultat client. Remplacez la marge et le taux de transformation par les vôtres, et ne comptez que les contacts qui ne vous seraient pas parvenus autrement."
    },
    body: `
<p>Avant d’installer un outil sur votre site, une question suffit : combien de contacts supplémentaires faut-il pour qu’il se paie ? La réponse tient en une division.</p>
<h2>La formule</h2>
<p><strong>Contacts nécessaires = coût ÷ (marge par client × taux de transformation)</strong></p>
<p>La marge par client est ce qu’un nouveau client vous rapporte une fois vos coûts directs déduits. Le taux de transformation est la part des contacts qui deviennent clients. Leur produit donne la valeur moyenne d’un contact.</p>
<h2>Des exemples pour 600 €</h2>
<table>
  <thead><tr><th>Marge par client</th><th>Taux de transformation</th><th>Contacts nécessaires</th></tr></thead>
  <tbody>
    <tr><td>300 €</td><td>20 %</td><td>10</td></tr>
    <tr><td>500 €</td><td>25 %</td><td>5</td></tr>
    <tr><td>1 000 €</td><td>25 %</td><td>3</td></tr>
    <tr><td>2 000 €</td><td>10 %</td><td>3</td></tr>
    <tr><td>5 000 €</td><td>10 %</td><td>2</td></tr>
  </tbody>
</table>
<p>Chaque ligne arrondit au contact supérieur : on ne signe pas 2,4 clients.</p>
<h2>Ne comptez que les contacts additionnels</h2>
<p>Le piège classique consiste à attribuer à l’outil tous les contacts qui passent par lui. Un visiteur qui aurait de toute façon appelé le lendemain n’est pas un contact gagné. Pour une estimation prudente, comptez surtout les demandes arrivées hors horaires ou de visiteurs qui n’ont laissé aucune autre trace.</p>
<h2>Comment l’estimer avant de vous lancer</h2>
<ul>
  <li>Reprenez la marge moyenne de vos derniers clients.</li>
  <li>Calculez votre taux de transformation sur les demandes reçues par formulaire ou par téléphone.</li>
  <li>Regardez combien de visites votre site reçoit hors horaires : c’est le réservoir dans lequel un agent de chat peut trouver des contacts additionnels.</li>
</ul>
<p>Si le seuil obtenu est de quelques contacts sur l’année, le risque est faible. S’il dépasse le nombre de demandes que vous recevez aujourd’hui, commencez par mesurer avant d’investir.</p>`,
    sources: [
      { label: "Omni, tarif : à partir de 600 € par produit", url: "/fr/#pricing" }
    ]
  },
  {
    id: "cas-client-alyor",
    slug: "cas-client-alyor",
    category: "Cas client",
    title: "ALYOR : le chat prend la place du bouton d’appel quand le cabinet est fermé",
    description: "Comment Omni a été installé sur les 22 pages d’alyor.fr, et pourquoi, sur mobile, le bouton d’appel laisse sa place au chat en dehors des heures d’ouverture.",
    date: PUBLISHED,
    readingMinutes: 5,
    insight: {
      title: "Sur mobile, le bouton d’appel d’ALYOR est remplacé par le chat la majorité de l’année",
      value: "6 744 h",
      label: "par an pendant lesquelles le chat occupe la place du bouton d’appel sur mobile, soit 77 % des heures de 2026",
      body: "Le bouton d’appel s’affiche du lundi au vendredi de 9 h à 17 h, heure de Paris, hors jours fériés. Le reste du temps, le visiteur mobile voit le chat à sa place.",
      formula: "8 760 h − (252 jours ouvrés × 8 h) = 6 744 h",
      source: "Configuration d’Omni sur alyor.fr ; calendrier 2026.",
      caveat: "Durée d’affichage calculée à partir de la configuration, pas un nombre de conversations ni de contacts obtenus."
    },
    body: `
<p>ALYOR est un cabinet de conseil patrimonial au service des indépendants : retraite, épargne, santé et prévoyance. Son site, alyor.fr, compte 22 pages : l’accueil, les pages produits, les articles et les pages de contact et d’informations légales.</p>
<h2>Une ligne, sur chaque page</h2>
<p>Le site est composé de pages HTML indépendantes, sans gabarit commun. La balise d’Omni a donc été ajoutée juste avant la fermeture du corps de page sur chacune des 22 pages, une seule fois par page, puis vérifiée page par page.</p>
<h2>Sur mobile, trois boutons, c’était un de trop</h2>
<p>Sur téléphone, alyor.fr affiche en bas d’écran une barre de contact fixe : un bouton principal, comme « Être rappelé », et un bouton d’appel. La bulle du chat, placée par défaut dans le coin inférieur droit, venait se superposer au bouton d’appel. Même une fois décalée, elle faisait trois options pour une même intention : parler à quelqu’un.</p>
<h2>La règle retenue : appeler pendant les horaires, discuter en dehors</h2>
<ul>
  <li><strong>Pendant les horaires d’ouverture</strong>, du lundi au vendredi de 9 h à 17 h, la barre propose le bouton principal et l’appel. La bulle du chat est masquée sur mobile.</li>
  <li><strong>En dehors</strong>, le soir, le week-end et les jours fériés, le chat prend la place exacte du bouton d’appel dans la barre.</li>
  <li><strong>Si le chat ne se charge pas</strong>, le bouton d’appel reste affiché : le visiteur a toujours un moyen de contact.</li>
</ul>
<p>Le basculement se fait à l’heure de Paris, quelle que soit la localisation du visiteur, et tient compte des jours fériés mobiles comme le lundi de Pâques ou l’Ascension.</p>
<h2>Un chat qui ne masque pas la page</h2>
<p>Sur téléphone, le chat s’ouvre dans une fenêtre flottante aux coins arrondis plutôt qu’en plein écran. La page reste visible autour, et la barre de contact reste utilisable en dessous.</p>
<h2>Ce qu’il faut retenir pour votre site</h2>
<ul>
  <li>Regroupez vos moyens de contact au même endroit plutôt que d’ajouter une bulle de plus.</li>
  <li>Proposez le canal qui fonctionne à l’instant présent : le téléphone quand quelqu’un décroche, le chat sinon.</li>
  <li>Prévoyez toujours un repli si un outil externe ne se charge pas.</li>
</ul>`,
    sources: [
      { label: "alyor.fr", url: "https://alyor.fr/" },
      { label: "Service-Public.fr, « Jours fériés et ponts dans le secteur privé » : calendrier des jours fériés 2026", url: "https://www.service-public.fr/particuliers/vosdroits/F2405" }
    ]
  },
  {
    id: "contact-vendredi-soir-64-heures",
    slug: "contact-vendredi-soir-64-heures",
    category: "Réactivité",
    title: "Un contact reçu vendredi à 17 h attend 64 heures avant qu’on lui réponde",
    description: "Un week-end suffit à dépasser de loin le délai au-delà duquel une demande perd l’essentiel de ses chances d’aboutir. Le calcul, et ce que dit l’étude de la Harvard Business Review.",
    date: PUBLISHED,
    readingMinutes: 5,
    insight: {
      title: "Le week-end transforme un contact chaud en contact de plus de 24 heures",
      value: "64 h",
      label: "d’attente entre vendredi 17 h et lundi 9 h, soit 2,7 fois le seuil de 24 heures au-delà duquel la HBR mesure des chances de qualification plus de 60 fois plus faibles",
      body: "La Harvard Business Review a comparé des entreprises selon leur délai de réponse aux demandes reçues en ligne. Celles qui tentaient de joindre le contact dans l’heure avaient plus de 60 fois plus de chances d’avoir un vrai échange avec un décideur que celles qui attendaient 24 heures ou plus.",
      formula: "Vendredi 17 h → lundi 9 h = 3 × 24 h − 8 h = 64 h ; 64 h ÷ 24 h = 2,7",
      source: "Source : Oldroyd, McElheran et Elkington, « The Short Life of Online Sales Leads », Harvard Business Review, mars 2011.",
      caveat: "Étude menée sur des entreprises américaines en 2011. Elle montre une association entre délai et qualification, pas un effet garanti pour votre activité."
    },
    body: `
<p>Une demande arrive par votre formulaire un vendredi à 17 h 05. Personne ne la lira avant lundi 9 h. Entre-temps, le visiteur a peut-être contacté un concurrent, ou simplement changé d’avis.</p>
<h2>Ce que mesure la Harvard Business Review</h2>
<p>En 2011, trois chercheurs ont publié dans la Harvard Business Review les résultats de deux travaux sur les demandes reçues en ligne.</p>
<ul>
  <li><strong>Un audit de 2 241 entreprises américaines</strong> : 37 % répondaient dans l’heure, 24 % mettaient plus de 24 heures, et 23 % ne répondaient jamais. Parmi celles qui répondaient dans les 30 jours, le délai moyen était de 42 heures.</li>
  <li><strong>Une analyse de 1,25 million de demandes</strong> traitées par 42 entreprises : celles qui tentaient de joindre le contact dans l’heure avaient près de sept fois plus de chances de le qualifier que celles qui attendaient ne serait-ce qu’une heure de plus, et plus de 60 fois plus que celles qui attendaient 24 heures ou davantage.</li>
</ul>
<p>Les auteurs définissent la qualification comme un échange réel avec un décideur. C’est une étape avant la vente, pas la vente elle-même.</p>
<h2>Le calendrier joue contre vous</h2>
<p>Avec des horaires de 9 h à 17 h en semaine, une demande reçue après 17 h un jour ouvré attend au moins jusqu’au lendemain 9 h. Celles du vendredi soir attendent 64 heures. Celles du vendredi 3 avril 2026, veille du week-end de Pâques, attendent 88 heures.</p>
<table>
  <thead><tr><th>Demande reçue</th><th>Première réponse possible</th><th>Attente</th></tr></thead>
  <tbody>
    <tr><td>Mardi 16 h 55</td><td>Mardi 16 h 55</td><td>0 h</td></tr>
    <tr><td>Mardi 18 h</td><td>Mercredi 9 h</td><td>15 h</td></tr>
    <tr><td>Vendredi 17 h</td><td>Lundi 9 h</td><td>64 h</td></tr>
    <tr><td>Vendredi 3 avril 2026, 17 h</td><td>Mardi 7 avril, 9 h</td><td>88 h</td></tr>
  </tbody>
</table>
<h2>Réduire l’attente sans être joignable jour et nuit</h2>
<ul>
  <li><strong>Répondez tout de suite, même sans conseiller</strong> : un agent de chat peut répondre aux questions courantes et confirmer au visiteur quand il sera rappelé.</li>
  <li><strong>Recueillez les bonnes informations</strong> dès le premier échange, pour que le rappel du lundi soit utile.</li>
  <li><strong>Traitez en premier les demandes du week-end</strong> le lundi matin : ce sont les plus anciennes.</li>
</ul>`,
    sources: [
      { label: "Oldroyd, McElheran et Elkington, « The Short Life of Online Sales Leads », Harvard Business Review, mars 2011", url: "https://hbr.org/2011/03/the-short-life-of-online-sales-leads" }
    ]
  },
  {
    id: "cout-permanence-hors-horaires-smic",
    slug: "cout-permanence-hors-horaires-smic",
    category: "Coûts",
    title: "Couvrir vos heures de fermeture avec un salarié coûterait plus de 83 000 € par an",
    description: "Ce que coûterait une présence humaine pendant les 6 744 heures où votre entreprise est fermée en 2026, calculé au SMIC, et des scénarios plus réalistes.",
    date: PUBLISHED,
    readingMinutes: 4,
    insight: {
      title: "Même payées au SMIC, les heures de fermeture représentent un budget considérable",
      value: "83 019 €",
      label: "de salaire brut au SMIC pour couvrir les 6 744 heures de fermeture de 2026, avant cotisations patronales et majorations",
      body: "Le SMIC horaire brut est de 12,31 € depuis le 1er juin 2026. Multiplié par les heures où une entreprise ouverte de 9 h à 17 h en semaine est fermée, il donne un plancher, pas un coût réel.",
      formula: "6 744 h × 12,31 € = 83 018,64 €",
      source: "Source : SMIC horaire brut au 1er juin 2026, Service-Public.fr ; heures de fermeture calculées sur le calendrier 2026.",
      caveat: "Plancher théorique : le coût employeur réel ajoute les cotisations, les majorations de nuit et du dimanche, et suppose plusieurs personnes. Un salarié fait aussi bien plus qu’un agent de chat."
    },
    body: `
<p>La question se pose dès qu’on constate que des demandes arrivent le soir ou le week-end : faut-il quelqu’un pour y répondre ? Le calcul au SMIC donne un ordre de grandeur.</p>
<h2>Quatre scénarios au SMIC</h2>
<table>
  <thead><tr><th>Créneau couvert en 2026</th><th>Heures</th><th>Salaire brut au SMIC</th></tr></thead>
  <tbody>
    <tr><td>Soirs de semaine, 17 h à 21 h (252 jours)</td><td>1 008</td><td>12 408 €</td></tr>
    <tr><td>Samedis, 9 h à 17 h (52 samedis)</td><td>416</td><td>5 121 €</td></tr>
    <tr><td>Soirs et samedis</td><td>1 424</td><td>17 529 €</td></tr>
    <tr><td>Toutes les heures de fermeture</td><td>6 744</td><td>83 019 €</td></tr>
  </tbody>
</table>
<p>Ces montants sont des planchers. Ils n’incluent ni les cotisations patronales, ni les majorations pour travail de nuit ou du dimanche prévues par votre convention collective, ni les congés et remplacements.</p>
<h2>La comparaison qui compte</h2>
<p>Comparer un salarié et un agent de chat n’a pas de sens terme à terme : un conseiller comprend un dossier, rassure, vend. Un agent de chat répond aux questions courantes, oriente et recueille des coordonnées.</p>
<p>La bonne question est plutôt : de quoi vos visiteurs ont-ils besoin hors horaires ? Souvent, d’une réponse rapide à une question simple et de la certitude d’être rappelés. Ce besoin-là ne justifie pas un poste, mais il mérite une réponse.</p>
<h2>Une approche en deux temps</h2>
<ul>
  <li><strong>Hors horaires</strong>, un agent de chat répond immédiatement et recueille la demande.</li>
  <li><strong>Pendant les horaires</strong>, votre équipe rappelle en priorité les contacts de la veille et du week-end.</li>
</ul>`,
    sources: [
      { label: "Service-Public.fr, « Montant du Smic » : SMIC horaire brut de 12,31 € au 1er juin 2026", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2300" },
      { label: "Arrêté du 22 mai 2026 relatif au relèvement du salaire minimum de croissance (Légifrance)", url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000054126589" },
      { label: "Service-Public.fr, « Jours fériés et ponts dans le secteur privé »", url: "https://www.service-public.fr/particuliers/vosdroits/F2405" }
    ]
  },
  {
    id: "mobile-hors-horaires-bouton-appel",
    slug: "mobile-hors-horaires-bouton-appel",
    category: "Mobile",
    title: "Sur mobile, votre bouton d’appel ne sert à rien la plupart du temps",
    description: "57 % du trafic web en France vient des smartphones. Croisé avec vos heures de fermeture, ce chiffre dit beaucoup de ce que voient vos visiteurs mobiles.",
    date: PUBLISHED,
    readingMinutes: 4,
    insight: {
      title: "Plus de quatre visites sur dix pourraient tomber sur mobile, hors horaires",
      value: "44 %",
      label: "des visites seraient à la fois sur smartphone et en dehors des horaires de bureau si le trafic se répartissait uniformément sur l’année",
      body: "En 2025, 57,1 % du trafic web mesuré en France venait des smartphones, et 2,3 % des tablettes. Une entreprise ouverte de 9 h à 17 h en semaine est fermée 77,0 % des heures de 2026.",
      formula: "57,1 % × 77,0 % = 44,0 %",
      source: "Source : StatCounter Global Stats, répartition ordinateur, mobile et tablette en France, année 2025 ; calendrier 2026.",
      caveat: "Hypothèse volontairement simple : le trafic réel n’est pas uniforme selon l’heure, et les parts mensuelles de StatCounter varient fortement. Vérifiez la répartition par appareil et par heure dans vos propres statistiques."
    },
    body: `
<p>Sur un site vu depuis un téléphone, le bouton d’appel est souvent le moyen de contact le plus visible. Encore faut-il que quelqu’un décroche.</p>
<h2>La part du mobile en France</h2>
<p>Selon StatCounter, les smartphones ont représenté 57,1 % du trafic web mesuré en France en 2025, contre 40,6 % pour les ordinateurs et 2,3 % pour les tablettes. La part mensuelle varie beaucoup d’un mois à l’autre, ce qui invite à raisonner sur l’année plutôt que sur un mois isolé.</p>
<h2>Le croisement avec vos horaires</h2>
<p>Si vous êtes ouvert de 9 h à 17 h en semaine, vous êtes fermé 77 % des heures de l’année. En supposant un trafic réparti uniformément, 44 % des visites seraient à la fois sur mobile et hors horaires. Pour ces visiteurs, un appel tombe au mieux sur une messagerie.</p>
<p>Cette hypothèse est grossière : un site professionnel reçoit sans doute plus de visites en journée. Mais même divisée par deux, la part reste significative.</p>
<h2>Adapter les boutons à l’heure</h2>
<ul>
  <li><strong>Pendant les horaires</strong>, gardez le bouton d’appel : c’est le contact le plus direct.</li>
  <li><strong>En dehors</strong>, remplacez-le par un moyen de contact qui fonctionne à cet instant, comme un agent de chat.</li>
  <li><strong>Évitez l’empilement</strong> : une barre de contact et une bulle de chat superposées font trois options pour une seule intention.</li>
</ul>
<p>C’est la règle retenue sur alyor.fr : sur mobile, le chat prend la place du bouton d’appel quand le cabinet est fermé.</p>`,
    sources: [
      { label: "StatCounter Global Stats, « Desktop vs Mobile vs Tablet Market Share France »", url: "https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/france" },
      { label: "Service-Public.fr, « Jours fériés et ponts dans le secteur privé »", url: "https://www.service-public.fr/particuliers/vosdroits/F2405" }
    ]
  },
  {
    id: "ai-act-article-50-chatbot",
    slug: "ai-act-article-50-chatbot",
    category: "Réglementation",
    title: "Chatbot : informer le visiteur qu’il parle à une IA est obligatoire depuis le 2 août 2026",
    description: "L’article 50 du règlement européen sur l’IA s’applique depuis le 2 août 2026. L’Omnibus numérique adopté en juillet a reporté d’autres échéances, mais pas celle-ci.",
    date: PUBLISHED,
    readingMinutes: 5,
    insight: {
      title: "L’obligation de transparence des chatbots n’a pas été reportée",
      value: "0 jour",
      label: "de report pour l’obligation d’informer les personnes qu’elles interagissent avec une IA, malgré l’Omnibus numérique adopté en juillet 2026",
      body: "Le règlement (UE) 2026/1744, publié le 24 juillet 2026, a décalé plusieurs échéances du règlement sur l’IA. Il accorde un délai au marquage des contenus générés, mais laisse inchangée la date d’application de l’obligation d’information des chatbots.",
      formula: "Article 50, paragraphe 1 : applicable au 2 août 2026 (article 113). Délai jusqu’au 2 décembre 2026 : article 50, paragraphe 2 seulement, pour les systèmes déjà sur le marché.",
      source: "Sources : règlement (UE) 2024/1689 et règlement (UE) 2026/1744, Journal officiel de l’Union européenne.",
      caveat: "Lecture des textes publiés, pas un avis juridique. Pour votre situation précise, consultez un juriste."
    },
    body: `
<p>Le règlement européen sur l’intelligence artificielle, adopté en 2024, s’applique pour l’essentiel depuis le 2 août 2026. Pour un site qui propose un chat animé par une IA, une règle concerne directement vos visiteurs.</p>
<h2>Ce que dit l’article 50</h2>
<p>L’article 50, paragraphe 1, impose aux fournisseurs de systèmes d’IA destinés à interagir directement avec des personnes de les concevoir de façon à ce que ces personnes soient informées qu’elles échangent avec une IA, sauf si c’est évident pour une personne raisonnablement attentive, compte tenu du contexte.</p>
<p>L’obligation vise d’abord le fournisseur de l’outil. En pratique, en tant qu’entreprise qui installe un chat sur son site, vous avez intérêt à choisir un outil qui se présente clairement comme un assistant automatisé.</p>
<h2>Ce que l’Omnibus numérique a changé, et ce qu’il n’a pas changé</h2>
<table>
  <thead><tr><th>Obligation</th><th>Date</th></tr></thead>
  <tbody>
    <tr><td>Informer qu’on parle à une IA (article 50, § 1)</td><td>2 août 2026</td></tr>
    <tr><td>Marquage des contenus générés, systèmes déjà sur le marché (article 50, § 2)</td><td>2 décembre 2026</td></tr>
    <tr><td>Systèmes à haut risque de l’annexe III</td><td>2 décembre 2027</td></tr>
  </tbody>
</table>
<p>Un chatbot de site qui répond aux questions sur vos offres ne relève pas, en principe, des systèmes à haut risque. La règle qui le concerne est celle de la transparence, et elle s’applique déjà.</p>
<h2>Trois vérifications sur votre chat</h2>
<ul>
  <li><strong>Le premier message</strong> indique qu’il s’agit d’un assistant automatisé, par exemple « Je suis l’assistant virtuel du cabinet ».</li>
  <li><strong>Le nom affiché</strong> ne laisse pas croire à un conseiller humain.</li>
  <li><strong>Le passage à un humain</strong> est possible et expliqué : rappel, e-mail ou prise de rendez-vous.</li>
</ul>`,
    sources: [
      { label: "Règlement (UE) 2024/1689 sur l’intelligence artificielle, articles 50 et 113 (EUR-Lex)", url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=OJ:L_202401689" },
      { label: "Règlement (UE) 2026/1744 du 8 juillet 2026, dit Omnibus numérique (EUR-Lex)", url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=OJ:L_202601744" }
    ]
  },
  {
    id: "cnil-sanctions-2025-donnees-chat",
    slug: "cnil-sanctions-2025-donnees-chat",
    category: "Données personnelles",
    title: "Sanctions CNIL 2025 : sans les deux amendes record, la moyenne tombe à 146 000 €",
    description: "La CNIL a prononcé 83 sanctions pour 486,8 millions d’euros en 2025. Deux amendes en représentent près de 98 %. Ce que la moyenne restante dit aux PME qui collectent des contacts.",
    date: PUBLISHED,
    readingMinutes: 5,
    insight: {
      title: "Le montant record de 2025 cache une réalité à l’échelle des PME",
      value: "146 167 €",
      label: "d’amende moyenne sur les 81 autres sanctions de 2025, une fois retirées les deux amendes de 325 et 150 millions d’euros",
      body: "La CNIL a prononcé 83 sanctions en 2025 pour un total de 486 839 500 €. Deux amendes de 325 et 150 millions d’euros, prononcées contre deux acteurs majeurs, pèsent 97,6 % de ce total.",
      formula: "(486 839 500 € − 325 000 000 € − 150 000 000 €) ÷ (83 − 2) = 146 167 €",
      source: "Source : CNIL, « Bilan des sanctions 2025 », 9 février 2026.",
      caveat: "Moyenne arithmétique : elle reste tirée par quelques montants élevés, et beaucoup de sanctions sont bien plus faibles. Elle ne prédit pas le montant d’une sanction pour votre entreprise."
    },
    body: `
<p>Un chat qui recueille un nom, un e-mail ou un téléphone collecte des données personnelles. Le RGPD s’applique, et la CNIL contrôle.</p>
<h2>Ce que disent les chiffres 2025</h2>
<p>En 2025, la CNIL a mené 323 contrôles et rendu 259 décisions, dont 83 sanctions pour un montant total de 486 839 500 €. Deux amendes de 325 millions et 150 millions d’euros en représentent l’essentiel. Sans elles, les 81 autres sanctions totalisent environ 11,8 millions d’euros, soit 146 167 € en moyenne.</p>
<h2>Les règles à appliquer à un chat</h2>
<ul>
  <li><strong>Ne demandez que le nécessaire</strong> : un nom et un moyen de recontacter suffisent pour un rappel.</li>
  <li><strong>Informez</strong> le visiteur, au moment de la collecte, de l’usage de ses coordonnées et de ses droits, avec un lien vers votre politique de confidentialité.</li>
  <li><strong>Fixez une durée de conservation</strong> pour les conversations et les contacts qui ne deviennent pas clients.</li>
  <li><strong>Vérifiez les traceurs</strong> : si l’outil dépose des cookies non essentiels, ils relèvent des règles de consentement.</li>
  <li><strong>Encadrez votre prestataire</strong> : il traite des données pour votre compte, ce qui suppose un contrat conforme à l’article 28 du RGPD.</li>
</ul>
<h2>Pourquoi la moyenne compte plus que le record</h2>
<p>Les amendes de plusieurs centaines de millions visent de très grands acteurs. Pour une PME, le risque se lit plutôt dans les sanctions ordinaires, et surtout dans la confiance des visiteurs : un formulaire qui demande trop d’informations fait fuir avant même toute question juridique.</p>`,
    sources: [
      { label: "CNIL, « Bilan des sanctions 2025 », 9 février 2026", url: "https://www.cnil.fr/fr/bilan-sanctions-2025" },
      { label: "CNIL, rapport annuel 2025, 18 mai 2026", url: "https://www.cnil.fr/fr/rapport-annuel-2025" }
    ]
  },
  {
    id: "reponse-immediate-10-minutes",
    slug: "reponse-immediate-10-minutes",
    category: "Réactivité",
    title: "Vos visiteurs attendent une réponse en 10 minutes. Le week-end, elle arrive 384 fois plus tard",
    description: "Pour une majorité de consommateurs, une réponse immédiate à une question commerciale, c’est 10 minutes ou moins. Face à un week-end de 64 heures, l’écart est considérable.",
    date: PUBLISHED,
    readingMinutes: 4,
    insight: {
      title: "L’attente d’un week-end dépasse de très loin ce que vos visiteurs appellent « immédiat »",
      value: "384 ×",
      label: "plus long que 10 minutes : c’est l’attente d’une demande reçue vendredi à 17 h et traitée lundi à 9 h",
      body: "Dans une enquête HubSpot de 2018, 82 % des consommateurs jugeaient une réponse immédiate importante ou très importante pour une question commerciale ou marketing, et 62 % situaient « immédiat » à 10 minutes ou moins pour une question commerciale.",
      formula: "64 h × 60 min ÷ 10 min = 384",
      source: "Source : HubSpot Research, Consumer Customer Support Survey, 2e trimestre 2018, 1 000 consommateurs.",
      caveat: "Enquête de 2018 menée aux États-Unis, au Royaume-Uni, en Australie et à Singapour, pas en France. Elle mesure des attentes déclarées, pas un comportement d’achat."
    },
    body: `
<p>« Immédiat » n’a pas le même sens pour vous et pour vos visiteurs. Pour une entreprise, répondre dans la journée est rapide. Pour un visiteur qui compare trois prestataires un dimanche soir, c’est long.</p>
<h2>Ce que les consommateurs appellent « immédiat »</h2>
<p>HubSpot a interrogé 1 000 consommateurs en 2018. Pour une question commerciale ou marketing, 82 % jugeaient une réponse immédiate importante ou très importante. Pour une question de service client, la part atteignait 90 %.</p>
<table>
  <thead><tr><th>Type de question</th><th>« Immédiat » = 10 min ou moins</th></tr></thead>
  <tbody>
    <tr><td>Service client</td><td>60 %</td></tr>
    <tr><td>Commerciale</td><td>62 %</td></tr>
    <tr><td>Marketing</td><td>46 %</td></tr>
  </tbody>
</table>
<h2>Des attentes qui se généralisent</h2>
<p>Plus récemment, l’étude CX Trends 2026 de Zendesk, menée auprès de 6 182 consommateurs dans 22 pays dont la France, indique que 74 % s’attendent désormais à un service disponible en permanence grâce à l’IA. Zendesk vend des logiciels de service client : le chiffre est à lire comme une tendance déclarée.</p>
<h2>Répondre dans les 10 minutes, même fermé</h2>
<ul>
  <li><strong>Une réponse immédiate n’est pas forcément une réponse complète</strong> : confirmer la demande et dire quand le visiteur sera rappelé compte déjà.</li>
  <li><strong>Répondez aux questions récurrentes</strong> sans attendre : horaires, zone d’intervention, tarifs de départ, documents à prévoir.</li>
  <li><strong>Gardez la trace</strong> de chaque échange pour que la personne qui rappelle sache de quoi il s’agit.</li>
</ul>`,
    sources: [
      { label: "HubSpot, « Live chat and the go-to-market flaw », avec les résultats de la Consumer Customer Support Survey 2018", url: "https://blog.hubspot.com/sales/live-chat-go-to-market-flaw" },
      { label: "Zendesk, communiqué CX Trends 2026, 18 novembre 2025", url: "https://www.zendesk.com/newsroom/press-releases/contextual-intelligence-becomes-the-new-standard-for-exceptional-customer-experience-in-2026/" }
    ]
  },
  {
    id: "ia-generative-francais-2025",
    slug: "ia-generative-francais-2025",
    category: "Usages",
    title: "48 % des Français utilisent l’IA générative : vos visiteurs savent déjà parler à un chat",
    description: "La part des Français qui utilisent l’IA générative a été multipliée par 2,4 en deux ans. Ce que cela change pour le chat de votre site.",
    date: PUBLISHED,
    readingMinutes: 4,
    insight: {
      title: "L’usage de l’IA générative a plus que doublé en deux ans",
      value: "× 2,4",
      label: "entre 2023 et 2025 : la part des Français de 12 ans et plus qui utilisent l’IA générative est passée de 20 % à 48 %",
      body: "Le Baromètre du numérique mesure cet usage chaque année : 20 % en 2023, 33 % en 2024, 48 % en 2025. Chez les 18-24 ans, la part atteint 85 %.",
      formula: "48 % ÷ 20 % = 2,4 ; 48 − 20 = + 28 points",
      source: "Source : Baromètre du numérique, édition 2026, CREDOC pour l’Arcep, l’Arcom, le CGE et l’ANCT ; 4 145 personnes interrogées en juin 2025.",
      caveat: "Le baromètre mesure l’usage déclaré d’outils d’IA générative en général, pas l’usage des chats sur les sites d’entreprises."
    },
    body: `
<p>Il y a quelques années, un chat sur un site évoquait surtout des menus rigides et des réponses à côté de la question. Vos visiteurs ont depuis pris d’autres habitudes.</p>
<h2>Un usage devenu majoritaire chez les jeunes adultes</h2>
<p>Selon le Baromètre du numérique 2026, réalisé par le CREDOC pour l’Arcep, l’Arcom, le Conseil général de l’économie et l’ANCT, 48 % des personnes de 12 ans et plus ont utilisé l’IA générative en 2025. Parmi les utilisateurs, ChatGPT est l’outil le plus cité, à 63 %.</p>
<table>
  <thead><tr><th>Année</th><th>Utilisateurs d’IA générative</th></tr></thead>
  <tbody>
    <tr><td>2023</td><td>20 %</td></tr>
    <tr><td>2024</td><td>33 %</td></tr>
    <tr><td>2025</td><td>48 %</td></tr>
  </tbody>
</table>
<h2>Ce que cela change pour votre site</h2>
<ul>
  <li><strong>Vos visiteurs posent des questions en phrases complètes</strong>, pas en mots-clés. Un chat doit comprendre « Vous êtes ouverts samedi ? » comme une question sur vos horaires.</li>
  <li><strong>Ils attendent une réponse précise</strong>, fondée sur vos offres réelles, pas une redirection vers la page d’accueil.</li>
  <li><strong>Ils savent qu’ils parlent à une IA</strong>, et l’accepteront d’autant mieux qu’elle le dit clairement.</li>
</ul>
<h2>La limite à garder en tête</h2>
<p>Un peu plus d’une personne sur deux n’utilise pas encore l’IA générative. Un chat doit rester simple pour elles : une question, une réponse, et un moyen clair d’être rappelé par une personne.</p>`,
    sources: [
      { label: "Arcep, Baromètre du numérique, édition 2026 (infographie)", url: "https://www.arcep.fr/uploads/tx_gspublication/barometre-du-numerique-edition-2026_INFOGRAPHIE.pdf" }
    ]
  },
  {
    id: "accessibilite-eaa-microentreprises",
    slug: "accessibilite-eaa-microentreprises",
    category: "Réglementation",
    title: "96,5 % des entreprises françaises échappent aux règles d’accessibilité des services. Votre chat doit rester utilisable",
    description: "L’acte européen sur l’accessibilité s’applique depuis le 28 juin 2025, avec une exemption pour les microentreprises de services. Les chiffres de l’Insee montrent combien d’entreprises elle couvre, et pourquoi l’accessibilité reste payante.",
    date: PUBLISHED_2,
    readingMinutes: 5,
    insight: {
      title: "L’exemption des microentreprises couvre presque toutes les entreprises françaises",
      value: "96,5 %",
      label: "des entreprises françaises sont des microentreprises selon l’Insee en 2023, avec la même définition que celle de l’exemption européenne",
      body: "La directive exempte les microentreprises qui fournissent des services : moins de 10 personnes et un chiffre d’affaires annuel ou un total de bilan d’au plus 2 millions d’euros. L’Insee en compte 4 995 894 sur 5 178 283 entreprises des secteurs marchands hors agriculture et finance.",
      formula: "4 995 894 ÷ 5 178 283 = 96,5 %",
      source: "Sources : directive (UE) 2019/882, articles 3, point 23, 4, paragraphe 5, et 31 ; Insee, « L’essentiel sur… les entreprises », 26 janvier 2026 (données 2023).",
      caveat: "L’exemption concerne les services entrant dans le champ de la directive, pas les produits, et le décompte de l’Insee exclut l’agriculture et la finance. Être exempté ne rend pas un chat inaccessible acceptable. Pas un avis juridique."
    },
    body: `
<p>Depuis le 28 juin 2025, l’acte européen sur l’accessibilité impose à de nombreux services numériques vendus aux consommateurs, dont le commerce en ligne, d’être accessibles aux personnes handicapées. La France l’a transposé par la loi du 9 mars 2023 et un décret du 9 octobre 2023.</p>
<h2>Qui est exempté</h2>
<p>L’article 4, paragraphe 5, de la directive exempte les microentreprises qui fournissent des services. L’article 3, point 23, définit la microentreprise comme une entreprise qui occupe moins de 10 personnes et dont le chiffre d’affaires annuel ou le total du bilan annuel n’excède pas 2 millions d’euros. Le droit français reprend les mêmes seuils.</p>
<p>C’est exactement la définition de la microentreprise de l’Insee. En 2023, l’Insee comptait 5 178 283 entreprises dans les secteurs marchands hors agriculture et finance, dont 4 995 894 microentreprises.</p>
<table>
  <thead><tr><th>Catégorie (Insee, 2023)</th><th>Entreprises</th></tr></thead>
  <tbody>
    <tr><td>Microentreprises</td><td>4 995 894</td></tr>
    <tr><td>PME hors microentreprises</td><td>174 614</td></tr>
    <tr><td>Entreprises de taille intermédiaire</td><td>7 442</td></tr>
    <tr><td>Grandes entreprises</td><td>333</td></tr>
  </tbody>
</table>
<h2>Pourquoi l’accessibilité compte quand même pour votre chat</h2>
<p>Une exemption n’est pas une raison d’exclure. Un visiteur qui utilise un lecteur d’écran ou le clavier, ou qui voit mal, reste un client potentiel, et une fenêtre de chat qu’il ne peut pas utiliser vous fait perdre ce contact.</p>
<ul>
  <li><strong>Accès au clavier</strong> : le chat s’ouvre, s’utilise et se ferme sans souris, et la touche Échap le ferme.</li>
  <li><strong>Libellés</strong> : le bouton du chat et les champs ont un texte qu’un lecteur d’écran peut annoncer.</li>
  <li><strong>Contraste et taille</strong> : le texte reste lisible, et la fenêtre ne masque pas toute la page sur téléphone.</li>
  <li><strong>Un autre moyen de vous joindre</strong> : un numéro ou un formulaire reste disponible pour qui le préfère.</li>
</ul>
<p>Si votre entreprise dépasse 10 personnes ou 2 millions d’euros, les règles s’appliquent pleinement. Choisir un outil accessible dès maintenant vous évite d’en changer plus tard.</p>`,
    sources: [
      { label: "Directive (UE) 2019/882 relative aux exigences en matière d’accessibilité applicables aux produits et services (EUR-Lex)", url: "https://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX:32019L0882" },
      { label: "Loi n° 2023-171 du 9 mars 2023, article 16 (Légifrance)", url: "https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000047281814" },
      { label: "Insee, « L’essentiel sur… les entreprises », 26 janvier 2026", url: "https://www.insee.fr/fr/statistiques/5424748" }
    ]
  },
  {
    id: "entreprises-sans-salarie",
    slug: "entreprises-sans-salarie",
    category: "Disponibilité",
    title: "76 % des entreprises françaises n’ont aucun salarié pour décrocher le téléphone",
    description: "Trois entreprises actives sur quatre n’ont aucun salarié. Quand le dirigeant est avec un client, personne ne répond. Ce que cela change pour les demandes qui arrivent par votre site.",
    date: PUBLISHED_2,
    readingMinutes: 4,
    insight: {
      title: "Dans trois entreprises sur quatre, celui qui répond est aussi celui qui travaille",
      value: "76,2 %",
      label: "des entreprises économiquement actives en France n’avaient aucun salarié en 2024",
      body: "L’Insee a compté 5 987 885 unités légales économiquement actives dans l’industrie, la construction, le commerce et les services en 2024. 4 562 923 d’entre elles n’avaient aucun salarié.",
      formula: "4 562 923 ÷ 5 987 885 = 76,2 %",
      source: "Source : Insee, « Nombre d’unités légales et d’établissements par tranche d’effectif salarié », données 2024, publié le 23 juillet 2026.",
      caveat: "Une entreprise sans salarié peut avoir un associé, un proche ou un service qui répond pour elle. Le chiffre compte des unités légales, pas des personnes, et inclut de très petites activités."
    },
    body: `
<p>Un plombier sur un chantier, une kinésithérapeute avec un patient, un consultant en rendez-vous : quand une entreprise n’a pas de salarié, le téléphone sonne pendant que le dirigeant travaille. La plupart des entreprises françaises sont dans ce cas.</p>
<h2>Ce que compte l’Insee</h2>
<p>En 2024, l’Insee a compté 5 987 885 unités légales économiquement actives en France dans l’industrie, la construction, le commerce et les services. 4 562 923 n’avaient aucun salarié, soit 76,2 %. L’année précédente, elles étaient 4 317 601 sur 5 741 792.</p>
<p>L’Insee notait déjà en 2022 que les trois quarts des microentreprises n’ont aucun salarié.</p>
<h2>Les vrais horaires d’une entreprise d’une personne</h2>
<p>Pour une entreprise sans salarié, les « horaires d’ouverture » sont les heures où le dirigeant est libre de répondre, qui sont moins nombreuses que ses heures de travail. Chaque heure passée avec un client est une heure où un visiteur du site reste sans réponse.</p>
<h2>Trois façons de répondre sans s’arrêter de travailler</h2>
<ul>
  <li><strong>Dites quand vous rappelez</strong> : un message clair sur votre site ou votre messagerie vaut mieux que le silence.</li>
  <li><strong>Regroupez vos rappels</strong> : prévoyez deux créneaux par jour pour les appels et les demandes, et affichez-les sur votre site.</li>
  <li><strong>Laissez un agent de chat faire le premier pas</strong> : il répond tout de suite aux questions courantes et recueille les informations utiles pour rappeler, sans vous interrompre.</li>
</ul>`,
    sources: [
      { label: "Insee, nombre d’unités légales et d’établissements par tranche d’effectif salarié, 2024", url: "https://www.insee.fr/fr/statistiques/9027479" },
      { label: "Insee, Les entreprises en France, édition 2022 : les trois quarts des microentreprises n’ont aucun salarié", url: "https://www.insee.fr/fr/statistiques/6666957?sommaire=6667157" }
    ]
  },
  {
    id: "conservation-donnees-prospects-3-ans",
    slug: "conservation-donnees-prospects-3-ans",
    category: "Données personnelles",
    title: "Un contact recueilli par votre chat aujourd’hui peut être conservé jusqu’au 25 septembre 2029",
    description: "Selon la CNIL, les données d’un prospect peuvent être conservées trois ans à compter de leur collecte ou du dernier contact venant de lui. Comment l’appliquer aux contacts d’un chat.",
    date: PUBLISHED_2,
    readingMinutes: 4,
    insight: {
      title: "Trois ans, comptés à partir du dernier geste du prospect, pas du vôtre",
      value: "1 096 jours",
      label: "durée repère de la CNIL pour un contact recueilli le 25 septembre 2026, sauf si le prospect se manifeste à nouveau",
      body: "La CNIL indique que les données d’un prospect peuvent être conservées trois ans à compter de leur collecte ou du dernier contact venant du prospect, comme une réponse ou un clic sur un lien. Un e-mail que vous envoyez ne relance pas le délai, et sa simple ouverture non plus.",
      formula: "25 septembre 2026 + 3 ans = 25 septembre 2029, soit 1 096 jours (2028 est bissextile)",
      source: "Source : CNIL, questions-réponses sur les référentiels relatifs à la gestion des activités commerciales, 28 janvier 2022.",
      caveat: "Les référentiels de la CNIL sont des recommandations, pas des règles contraignantes, et un prospect devenu client relève des règles applicables aux clients. Pas un avis juridique."
    },
    body: `
<p>Chaque contact recueilli par votre chat est une donnée personnelle. Le RGPD impose de fixer une durée de conservation, et la CNIL donne un repère clair pour les prospects.</p>
<h2>Le repère de la CNIL</h2>
<p>Dans ses questions-réponses sur la gestion des activités commerciales, la CNIL indique que les données d’un prospect peuvent être conservées trois ans à compter de leur collecte ou du dernier contact venant du prospect. Elle cite en exemple un clic sur un lien dans un e-mail. Ses décisions de sanction précisent que la simple ouverture d’un e-mail ne compte pas.</p>
<h2>Ce que cela donne pour un contact issu du chat</h2>
<table>
  <thead><tr><th>Situation</th><th>Conservation jusqu’au</th></tr></thead>
  <tbody>
    <tr><td>Contact recueilli le 25 septembre 2026, sans suite</td><td>25 septembre 2029</td></tr>
    <tr><td>Le même contact vous répond le 10 mars 2027</td><td>10 mars 2030</td></tr>
    <tr><td>Le contact devient client</td><td>Règles applicables aux clients</td></tr>
  </tbody>
</table>
<h2>Quatre bonnes habitudes</h2>
<ul>
  <li><strong>Datez chaque contact</strong> à son arrivée, et notez le dernier contact venant du prospect.</li>
  <li><strong>Faites le tri une fois par an</strong> et supprimez les contacts de plus de trois ans sans nouvelles de leur part.</li>
  <li><strong>Ne gardez la conversation que le temps nécessaire</strong> : l’historique du chat n’a pas à survivre au contact.</li>
  <li><strong>Annoncez-le</strong> : indiquez la durée de conservation dans le chat et dans votre politique de confidentialité.</li>
</ul>`,
    sources: [
      { label: "CNIL, questions-réponses sur les référentiels relatifs à la gestion des activités commerciales, 28 janvier 2022", url: "https://www.cnil.fr/fr/questions-reponses-sur-les-referentiels-relatifs-la-gestion-des-activites-commerciales-et-des" },
      { label: "CNIL, sanction de 80 000 euros à l’encontre de la société CALOGA", url: "https://www.cnil.fr/fr/sanction-de-80-000-euros-societe-caloga" }
    ]
  },
  {
    id: "conges-payes-independant-fermeture",
    slug: "conges-payes-independant-fermeture",
    category: "Disponibilité",
    title: "Avec cinq semaines de congés, une entreprise d’une personne est fermée 79 % de l’année",
    description: "Les cinq semaines de congés habituelles, appliquées à une entreprise où personne d’autre ne répond, font passer la part des heures fermées de 77 % à 79 %. Le calcul, et comment gérer ces semaines.",
    date: PUBLISHED_2,
    readingMinutes: 4,
    insight: {
      title: "Les vacances transforment une soirée fermée en mois fermé",
      value: "79,3 %",
      label: "des heures de 2026 tombent hors horaires pour une entreprise ouverte de 9 h à 17 h qui prend aussi cinq semaines de congés",
      body: "Un salarié acquiert 2,5 jours ouvrables de congés par mois, soit 30 jours ouvrables ou cinq semaines par an. Cinq semaines représentent 25 jours de semaine. Retirés des 252 jours ouvrés de 2026, il reste 227 jours de 8 heures.",
      formula: "1 − (252 − 25) × 8 h ÷ 8 760 h = 1 − 1 816 ÷ 8 760 = 79,3 %",
      source: "Sources : Service-Public.gouv.fr, congés payés (fiche F2258) ; calendrier 2026 et jours fériés d’après Service-Public.fr.",
      caveat: "Les indépendants n’ont pas de congés payés légaux : cinq semaines servent ici de repère. Une entreprise avec des salariés peut échelonner les congés et rester ouverte."
    },
    body: `
<p>Les indépendants n’ont pas droit légalement à des congés payés, mais la plupart prennent des vacances, et le repère français est de cinq semaines. Pour une entreprise où personne d’autre ne peut répondre, ce sont des semaines sans réponse.</p>
<h2>Le calcul</h2>
<p>Un salarié acquiert 2,5 jours ouvrables de congés par mois, 30 par an : cinq semaines. Comptées en jours de semaine, cinq semaines font 25 jours.</p>
<table>
  <thead><tr><th>2026, ouvert de 9 h à 17 h</th><th>Jours ouvrés</th><th>Part des heures fermées</th></tr></thead>
  <tbody>
    <tr><td>Sans congés</td><td>252</td><td>77,0 %</td></tr>
    <tr><td>Avec cinq semaines de congés</td><td>227</td><td>79,3 %</td></tr>
  </tbody>
</table>
<p>L’écart paraît faible sur l’année, mais il est concentré : deux ou trois semaines en août et une à Noël, alors que les demandes, elles, ne s’arrêtent pas.</p>
<h2>Avant de partir en vacances</h2>
<ul>
  <li><strong>Annoncez-le sur votre site</strong> : affichez vos dates d’absence et la date de reprise.</li>
  <li><strong>Mettez à jour votre messagerie et votre réponse automatique</strong> avec les mêmes dates.</li>
  <li><strong>Continuez à répondre aux questions simples</strong> : un agent de chat peut renseigner sur vos services et vos tarifs, et recueillir les coordonnées pour votre retour.</li>
  <li><strong>Préparez le retour</strong> : bloquez la première matinée pour les demandes arrivées pendant votre absence.</li>
</ul>`,
    sources: [
      { label: "Service-Public.gouv.fr, « Congés payés du salarié dans le secteur privé » (fiche F2258)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2258" },
      { label: "Service-Public.fr, « Jours fériés et ponts dans le secteur privé »", url: "https://www.service-public.fr/particuliers/vosdroits/F2405" }
    ]
  },
  {
    id: "ecart-ia-francais-entreprises",
    slug: "ecart-ia-francais-entreprises",
    category: "Usages",
    title: "Les Français utilisent l’IA 2,7 fois plus que les entreprises françaises",
    description: "48 % des Français utilisent l’IA générative, mais seulement 18 % des entreprises de 10 salariés ou plus utilisent une technologie d’IA. Vos visiteurs ont une longueur d’avance sur la plupart des entreprises.",
    date: PUBLISHED_2,
    readingMinutes: 4,
    insight: {
      title: "Vos clients ont adopté l’IA plus vite que les entreprises auxquelles ils s’adressent",
      value: "2,7×",
      label: "la part des Français qui utilisent l’IA générative (48 % en 2025) rapportée à celle des entreprises de 10 salariés ou plus qui utilisent l’IA (18 % en 2025)",
      body: "Le Baromètre du numérique 2026 indique que 48 % des personnes de 12 ans et plus ont utilisé l’IA générative en 2025. L’Insee indique que 18 % des entreprises françaises de 10 salariés ou plus déclarent utiliser au moins une technologie d’IA en 2025, 8 points de plus qu’en 2024.",
      formula: "48 % ÷ 18 % = 2,7",
      source: "Sources : Baromètre du numérique 2026 (CREDOC pour l’Arcep, l’Arcom, le CGE et l’ANCT) ; Insee Première n° 2120, 21 juillet 2026 ; Eurostat, isoc_eb_ai.",
      caveat: "Les deux enquêtes ne mesurent pas la même chose : l’usage personnel de l’IA générative d’un côté, l’usage d’une technologie d’IA par l’entreprise de l’autre. Les entreprises de moins de 10 salariés ne sont pas dans le chiffre de l’Insee."
    },
    body: `
<p>Vos visiteurs ont pris l’habitude de poser leurs questions à une IA. La plupart des entreprises n’ont pas encore suivi.</p>
<h2>Deux enquêtes, un écart</h2>
<ul>
  <li><strong>Les particuliers</strong> : selon le Baromètre du numérique 2026, 48 % des personnes de 12 ans et plus ont utilisé l’IA générative en 2025, contre 20 % en 2023.</li>
  <li><strong>Les entreprises</strong> : selon l’Insee, 18 % des entreprises françaises de 10 salariés ou plus utilisent au moins une technologie d’IA en 2025, contre environ 10 % en 2024. Chez les entreprises de 10 à 49 salariés, la part est de 15 %.</li>
</ul>
<p>À l’échelle de l’Union, Eurostat mesure 20 % d’entreprises utilisatrices en 2025. La France est légèrement en dessous de la moyenne européenne.</p>
<h2>Pourquoi les entreprises hésitent</h2>
<p>Parmi les entreprises françaises qui n’utilisent pas l’IA, 71 % n’en voient pas l’utilité, selon l’Insee. Pour une petite entreprise, l’usage doit être concret : gagner du temps ou gagner des clients.</p>
<h2>Par où commencer</h2>
<p>Répondre aux visiteurs est l’un des points de départ les plus simples, car la demande existe déjà : les gens arrivent avec des questions, souvent en dehors des horaires. Un agent de chat répond aux questions habituelles et transmet les coordonnées. Votre équipe garde les échanges qui demandent une personne.</p>`,
    sources: [
      { label: "Insee Première n° 2120, l’usage de l’IA dans les entreprises, 21 juillet 2026", url: "https://www.insee.fr/fr/statistiques/9025878?sommaire=7667330" },
      { label: "Eurostat, « Use of artificial intelligence in enterprises » (en anglais)", url: "https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Use_of_artificial_intelligence_in_enterprises" },
      { label: "Arcep, Baromètre du numérique, édition 2026 (infographie)", url: "https://www.arcep.fr/uploads/tx_gspublication/barometre-du-numerique-edition-2026_INFOGRAPHIE.pdf" }
    ]
  },
  {
    id: "taux-conversion-landing-page",
    slug: "taux-conversion-landing-page",
    category: "Conversion",
    title: "934 visiteurs sur 1 000 quittent une page type sans vous contacter",
    description: "La page d’atterrissage médiane convertit 6,6 % de ses visiteurs. Que deviennent les 93,4 % restants, et comment un chat peut donner à certains une raison de rester.",
    date: PUBLISHED_2,
    readingMinutes: 4,
    insight: {
      title: "La plupart des visiteurs partent sans un mot",
      value: "934",
      label: "visiteurs sur 1 000 quittent une page d’atterrissage médiane sans convertir",
      body: "Unbounce a analysé 41 000 pages d’atterrissage, 464 millions de visites et 57 millions de conversions au quatrième trimestre 2024. Le taux de conversion médian, tous secteurs confondus, était de 6,6 %.",
      formula: "1 000 × (1 − 6,6 %) = 934",
      source: "Source : Unbounce, Conversion Benchmark Report, données du 4e trimestre 2024, mis à jour le 4 mars 2025.",
      caveat: "Une médiane tous secteurs et tous types de pages, mesurée par un éditeur d’outils de pages d’atterrissage, surtout sur des sites anglophones. Votre taux dépend de votre trafic et de votre offre."
    },
    body: `
<p>La plupart des visiteurs d’une page repartent sans remplir le formulaire, appeler ou réserver. C’est normal, et une étude de référence montre à quel point.</p>
<h2>Ce que dit l’étude</h2>
<p>Unbounce a étudié 41 000 pages d’atterrissage au quatrième trimestre 2024 : 464 millions de visites et 57 millions de conversions. Le taux de conversion médian, tous secteurs confondus, était de 6,6 %. Sur 1 000 visiteurs, 66 convertissent et 934 repartent.</p>
<h2>Pourquoi les visiteurs repartent</h2>
<p>Certains ne sont pas prêts, d’autres sont arrivés par erreur, d’autres comparent plusieurs offres. Mais une partie repart à cause d’une question restée sans réponse : le prix, un délai, votre zone d’intervention. Un formulaire ne répond pas à cette question ; il demande d’attendre.</p>
<h2>Offrir un chemin plus court à ceux qui hésitent</h2>
<ul>
  <li><strong>Répondez aux objections sur la page</strong> : prix, délais et zone couverte, en termes simples.</li>
  <li><strong>Proposez une étape légère</strong> : une question dans un chat est plus facile qu’un formulaire de huit champs.</li>
  <li><strong>Mesurez à part</strong> : comptez les contacts issus du chat séparément de ceux du formulaire, pour savoir ce que le chat apporte vraiment.</li>
</ul>
<p>Même un seul point de conversion compte : sur 1 000 visiteurs, c’est 10 contacts de plus.</p>`,
    sources: [
      { label: "Unbounce, « Average conversion rates for landing pages », 4 mars 2025 (en anglais)", url: "https://unbounce.com/average-conversion-rates-landing-pages/" },
      { label: "Unbounce, Conversion Benchmark Report (en anglais)", url: "https://unbounce.com/conversion-benchmark-report/" }
    ]
  },
  {
    id: "reponse-emails-entreprises",
    slug: "reponse-emails-entreprises",
    category: "Réactivité",
    title: "Les entreprises répondent aux e-mails 73 fois plus lentement que les 10 minutes attendues",
    description: "Sur 1 000 entreprises testées, 62 % n’ont jamais répondu à un e-mail de client, et les autres ont mis 12 h 10 en moyenne. Face à ce que les clients appellent une réponse immédiate, l’écart est considérable.",
    date: PUBLISHED_2,
    readingMinutes: 4,
    insight: {
      title: "Entre le silence et une demi-journée d’attente",
      value: "73×",
      label: "plus long que les 10 minutes que la plupart des gens jugent « immédiates » : le délai moyen de 12 h 10 mesuré par SuperOffice",
      body: "En 2018, SuperOffice a envoyé une question de client par e-mail à 1 000 entreprises. 62 % n’ont jamais répondu. Chez celles qui ont répondu, le délai moyen était de 12 h 10. Dans l’enquête HubSpot de 2018, 62 % des consommateurs situaient une réponse immédiate à une question commerciale à 10 minutes ou moins.",
      formula: "12 h 10 = 730 min ; 730 ÷ 10 = 73",
      source: "Sources : SuperOffice, Customer Service Benchmark Report, 2018 ; HubSpot Research, Consumer Customer Support Survey, 2e trimestre 2018.",
      caveat: "Les deux études datent de 2018 et n’ont pas été menées en France. Aucune étude publique plus récente sur les délais de réponse des entreprises par e-mail n’a été trouvée."
    },
    body: `
<p>L’e-mail semble un canal sûr : la demande est écrite, rien ne se perd. En pratique, beaucoup d’entreprises répondent tard, ou pas du tout.</p>
<h2>Ce qu’a mesuré SuperOffice</h2>
<p>En 2018, SuperOffice a envoyé un e-mail de service client à 1 000 entreprises et chronométré les réponses.</p>
<ul>
  <li><strong>62 %</strong> n’ont jamais répondu.</li>
  <li><strong>90 %</strong> n’ont pas accusé réception.</li>
  <li>Le délai moyen de réponse était de <strong>12 h 10</strong>.</li>
</ul>
<h2>Face aux attentes des clients</h2>
<p>La même année, HubSpot a demandé à 1 000 consommateurs ce que signifie « immédiat » : 62 % le situaient à 10 minutes ou moins pour une question commerciale. La moyenne mesurée par SuperOffice est 73 fois plus longue.</p>
<table>
  <thead><tr><th>Sur 100 e-mails envoyés</th><th>Résultat</th></tr></thead>
  <tbody>
    <tr><td>Aucune réponse</td><td>62</td></tr>
    <tr><td>Une réponse, après 12 h 10 en moyenne</td><td>38</td></tr>
  </tbody>
</table>
<h2>Réduire l’écart</h2>
<ul>
  <li><strong>Accusez réception de chaque demande</strong> tout de suite, avec un délai réaliste pour la réponse complète.</li>
  <li><strong>Répondez sans attendre aux questions fréquentes</strong> : un agent de chat peut le faire à toute heure.</li>
  <li><strong>Gardez l’e-mail pour ce qui demande réflexion</strong>, et mesurez vos vrais délais de réponse.</li>
</ul>`,
    sources: [
      { label: "SuperOffice, « Customer Service Benchmark Report », 2018 (en anglais)", url: "https://www.superoffice.co.uk/resources/articles/customer-service-study/" },
      { label: "HubSpot, « Live chat and the go-to-market flaw », avec les résultats de la Consumer Customer Support Survey 2018 (en anglais)", url: "https://blog.hubspot.com/sales/live-chat-go-to-market-flaw" }
    ]
  },
  {
    id: "appels-manques-messagerie",
    slug: "appels-manques-messagerie",
    category: "Réactivité",
    title: "44 % des appels aux entreprises n’aboutissent à personne, et la célèbre statistique sur la messagerie n’a pas de source",
    description: "Une analyse de plus de 70 millions d’appels publiée en 2026 montre que seuls 56 % sont décrochés par une personne. Le chiffre de « 80 % des appelants ne laissent pas de message », repris partout, est introuvable.",
    date: PUBLISHED_2,
    readingMinutes: 5,
    insight: {
      title: "Près d’un appel sur deux se termine sans conversation",
      value: "44 %",
      label: "des appels aux entreprises ne sont pas décrochés par une personne, selon une analyse de plus de 70 millions d’appels",
      body: "Le rapport Invoca publié en 2026, fondé sur plus de 70 millions d’appels, indique que, tous secteurs confondus, 56 % des appels aux entreprises sont décrochés par une personne. Les autres aboutissent à une messagerie, à un serveur vocal ou à rien.",
      formula: "100 % − 56 % = 44 %",
      source: "Source : Invoca, Lead Conversion Benchmarks Report, juillet 2026.",
      caveat: "Invoca vend des logiciels de suivi d’appels, et ses données portent surtout sur des entreprises américaines de toutes tailles, pas sur des petites entreprises françaises."
    },
    body: `
<p>« 62 % des appels aux petites entreprises restent sans réponse. » « 80 % des appelants renvoyés vers la messagerie ne laissent pas de message. » Ces chiffres circulent dans d’innombrables articles. Nous avons cherché leur origine.</p>
<h2>D’où viennent les chiffres populaires</h2>
<ul>
  <li><strong>Les 62 %</strong> viennent d’une étude de 2016 de 411 Locals, une agence marketing, portant sur 85 entreprises pendant 30 jours. Elle compte comme sans réponse les appels tombés sur la messagerie : 37,8 % décrochés, 37,8 % messagerie, 24,3 % sans réponse.</li>
  <li><strong>Les 80 %</strong> n’ont pu être rattachés à aucune étude. La plus ancienne mention trouvée, de 2014, les attribue à des « statistiques de Forbes » sans référence.</li>
</ul>
<h2>Un chiffre plus solide</h2>
<p>Le rapport Invoca publié en 2026, fondé sur plus de 70 millions d’appels, indique que 56 % des appels aux entreprises sont décrochés par une personne, donc 44 % ne le sont pas. C’est une étude d’éditeur, surtout américaine, mais elle repose sur un échantillon large et documenté.</p>
<h2>Ce que cela signifie pour une petite entreprise</h2>
<p>Si près de la moitié des appels n’aboutissent à personne, toutes tailles d’entreprise confondues, une entreprise d’une personne occupée avec un client a peu de chances de faire mieux. Et un appelant qui tombe sur la messagerie peut simplement essayer l’entreprise suivante de la liste.</p>
<ul>
  <li><strong>Affichez quand vous décrochez</strong>, à côté de votre numéro.</li>
  <li><strong>Proposez un canal qui répond tout de suite</strong> quand vous ne pouvez pas : un chat qui répond et prend les coordonnées pour rappeler.</li>
  <li><strong>Vérifiez vos propres chiffres</strong> : votre opérateur peut souvent indiquer combien d’appels vous manquez.</li>
</ul>`,
    sources: [
      { label: "Invoca, Lead Conversion Benchmarks Report, juillet 2026 (en anglais)", url: "https://www.invoca.com/reports/the-invoca-call-conversion-industry-benchmarks-report-2025" },
      { label: "411 Locals, « Small business owners don’t answer 62% of phone calls », 18 janvier 2016 (en anglais)", url: "https://411locals.us/small-business-owners-dont-answer-62-of-phone-calls/" },
      { label: "CRM magazine, « Business voicemail goes unanswered », 1er novembre 2014 (en anglais)", url: "https://www.destinationcrm.com/Articles/CRM-Insights/Insight/Business-Voicemail-Goes-Unanswered-100080.aspx" }
    ]
  },
  {
    id: "temps-en-ligne-francais",
    slug: "temps-en-ligne-francais",
    category: "Usages",
    title: "Les Français passent désormais plus de 1 000 heures par an en ligne",
    description: "Médiamétrie a mesuré plus de trois heures en ligne par jour en 2025, un record, dont 80 % sur mobile. Sur une année, cela fait plus de 1 095 heures, en grande partie sur téléphone.",
    date: PUBLISHED_2,
    readingMinutes: 4,
    insight: {
      title: "Le temps en ligne de vos visiteurs dépasse la moitié de vos heures d’ouverture",
      value: "1 095 h",
      label: "par an passées en ligne, au rythme de plus de 3 heures par jour mesuré par Médiamétrie en 2025, soit 54 % des 2 016 heures d’ouverture d’une entreprise de 9 h à 17 h",
      body: "L’Année Internet 2025 de Médiamétrie indique que les Français passent désormais plus de 3 heures par jour en ligne, un record, et près de 5 heures pour les 15-24 ans. Le mobile représente 80 % du temps passé en ligne.",
      formula: "3 h × 365 jours = 1 095 h ; 1 095 ÷ 2 016 = 54 % ; 80 % sur mobile = 876 h",
      source: "Source : Médiamétrie, L’Année Internet 2025, 12 février 2026.",
      caveat: "« Plus de 3 heures » fait de 1 095 heures un minimum. La population exacte derrière cette moyenne n’est pas précisée sur la page de synthèse de Médiamétrie, et l’étude n’indique pas à quelle heure de la journée les gens sont en ligne."
    },
    body: `
<p>Le temps passé en ligne continue d’augmenter en France. Selon Médiamétrie, il a dépassé trois heures par jour en 2025.</p>
<h2>Ce qu’a mesuré Médiamétrie</h2>
<ul>
  <li><strong>Plus de 3 heures par jour</strong> en ligne en moyenne, un record. La presse spécialisée qui a relayé la présentation donne 3 h 01, contre 2 h 40 en 2024.</li>
  <li><strong>Près de 5 heures</strong> pour les 15-24 ans.</li>
  <li><strong>48,6 millions</strong> de Français en ligne chaque jour.</li>
  <li><strong>80 %</strong> du temps en ligne passé sur mobile.</li>
</ul>
<h2>Sur une année</h2>
<p>À trois heures par jour, cela fait 1 095 heures par an, dont 876 sur téléphone. Une entreprise ouverte de 9 h à 17 h en semaine est ouverte 2 016 heures en 2026 : le temps en ligne de ses visiteurs en représente plus de la moitié. Médiamétrie n’indique pas à quelle heure de la journée les gens sont en ligne : regardez vos propres statistiques pour savoir quelle part de votre trafic arrive hors horaires.</p>
<h2>Ce qu’il faut en retenir</h2>
<ul>
  <li><strong>Pensez d’abord au téléphone</strong> : c’est là que se passe l’essentiel du temps.</li>
  <li><strong>Attendez-vous à des questions hors horaires</strong> et donnez aux visiteurs un moyen d’obtenir une réponse à ce moment-là.</li>
  <li><strong>Faites court</strong> : sur téléphone, une question dans un chat est plus simple qu’un long formulaire.</li>
</ul>`,
    sources: [
      { label: "Médiamétrie, L’Année Internet 2025, 12 février 2026", url: "https://www.mediametrie.fr/fr/audiences-et-resultats/internet/lannee-internet" },
      { label: "CB News, compte rendu de L’Année Internet 2025 de Médiamétrie, 12 février 2026", url: "https://www.cbnews.fr/etudes/internet-francais-accelere-plus-temps-plus-mobile-plus-ia-mediametrie" }
    ]
  },
  {
    id: "calendrier-2027-ponts",
    slug: "calendrier-2027-ponts",
    category: "Disponibilité",
    title: "2027 compte deux jours ouvrés de plus que 2026, et deux ponts de 112 heures",
    description: "Quatre jours fériés tombent un week-end en 2027, ce qui donne 254 jours ouvrés. Mais l’Ascension et le 11 novembre tombent un jeudi : en faisant le pont, votre entreprise est fermée 112 heures d’affilée.",
    date: PUBLISHED_2,
    readingMinutes: 4,
    insight: {
      title: "Un jeudi férié plus un pont, c’est la plus longue fermeture de l’année",
      value: "112 h",
      label: "de fermeture d’affilée, du mercredi 17 h au lundi 9 h, en faisant le pont de l’Ascension (6 mai 2027) ou du 11 novembre 2027",
      body: "En 2027, le 1er mai, le 8 mai et Noël tombent un samedi, et le 15 août un dimanche : seuls 7 jours fériés tombent en semaine. Cela donne 254 jours ouvrés, deux de plus qu’en 2026. L’Ascension et le 11 novembre tombent tous deux un jeudi.",
      formula: "Mercredi 17 h → lundi 9 h = 4 × 24 h + 16 h = 112 h",
      source: "Calendrier 2027 ; jours fériés d’après Service-Public.fr ; dimanche de Pâques 2027 le 28 mars.",
      caveat: "Les ponts ne sont pas des jours fériés : fermer relève de votre choix. Sans pont, les plus longues fermetures de 2027 durent 88 heures, comme en 2026."
    },
    body: `
<p>Préparer 2027 commence par le calendrier. La bonne nouvelle : plus de jours ouvrés. Le piège : deux jeudis qui invitent au pont.</p>
<h2>2027 en chiffres</h2>
<table>
  <thead><tr><th></th><th>2026</th><th>2027</th></tr></thead>
  <tbody>
    <tr><td>Jours de semaine</td><td>261</td><td>261</td></tr>
    <tr><td>Jours fériés en semaine</td><td>9</td><td>7</td></tr>
    <tr><td>Jours ouvrés</td><td>252</td><td>254</td></tr>
    <tr><td>Heures fermées (9 h à 17 h)</td><td>6 744</td><td>6 728</td></tr>
    <tr><td>Part de l’année fermée</td><td>77,0 %</td><td>76,8 %</td></tr>
  </tbody>
</table>
<p>En 2027, le 1er mai, le 8 mai et Noël tombent un samedi, et le 15 août un dimanche. Le lundi de Pâques tombe le 29 mars, l’Ascension le 6 mai et le lundi de Pentecôte le 17 mai.</p>
<h2>Les deux ponts</h2>
<p>L’Ascension (jeudi 6 mai) et l’Armistice (jeudi 11 novembre) invitent à faire le pont le vendredi. Avec le pont, le bureau ferme le mercredi à 17 h et rouvre le lundi à 9 h : 112 heures sans réponse. Sans pont, les plus longues fermetures sont les week-ends prolongés de 88 heures, comme Pâques ou la Toussaint.</p>
<h2>Préparez-vous dès maintenant</h2>
<ul>
  <li><strong>Décidez tôt de vos ponts</strong> et annoncez-les sur votre site.</li>
  <li><strong>Vérifiez qui répond</strong> pendant chaque week-end prolongé.</li>
  <li><strong>Prévoyez le lundi suivant</strong> : c’est là qu’arrivent d’un coup quatre jours de demandes.</li>
</ul>`,
    sources: [
      { label: "Service-Public.fr, « Jours fériés et ponts dans le secteur privé »", url: "https://www.service-public.fr/particuliers/vosdroits/F2405" }
    ]
  },
  {
    id: "demarchage-telephonique-consentement-2026",
    slug: "demarchage-telephonique-consentement-2026",
    category: "Réglementation",
    title: "Depuis le 11 août 2026, le démarchage téléphonique exige un consentement, dans une fenêtre de 45 heures par semaine",
    description: "La France est passée au consentement préalable pour le démarchage téléphonique des consommateurs, et les appels restent limités à certains horaires en semaine. Les contacts qui demandent à être rappelés n’ont jamais eu autant de valeur.",
    date: PUBLISHED_2,
    readingMinutes: 5,
    insight: {
      title: "Une fenêtre étroite, et désormais seulement pour ceux qui ont dit oui",
      value: "45 h",
      label: "par semaine au maximum pendant lesquelles un consommateur peut être démarché par téléphone en France, soit 26,8 % de la semaine, et depuis le 11 août 2026 seulement avec son consentement préalable",
      body: "Les appels aux consommateurs sont autorisés du lundi au vendredi, de 10 h à 13 h et de 14 h à 20 h, hors jours fériés, et au plus 4 fois en 30 jours. Depuis le 11 août 2026, le Code de la consommation interdit en outre de démarcher par téléphone un consommateur qui n’y a pas consenti au préalable.",
      formula: "(3 h + 6 h) × 5 jours = 45 h ; 45 ÷ 168 h = 26,8 %",
      source: "Sources : Code de la consommation, article L223-1 réécrit par la loi n° 2025-594 du 30 juin 2025 (article 13), et article D223-9 modifié par le décret n° 2026-662 du 23 juillet 2026, Légifrance.",
      caveat: "Ces règles visent les appels aux consommateurs, pas aux entreprises, et rappeler quelqu’un qui vous l’a demandé n’est pas du démarchage. Pas un avis juridique."
    },
    body: `
<p>Pendant des années, les consommateurs devaient s’inscrire sur Bloctel pour ne plus recevoir d’appels commerciaux. Depuis le 11 août 2026, la logique est inversée : une entreprise ne peut démarcher un consommateur par téléphone que s’il l’a accepté au préalable.</p>
<h2>Ce qui a changé le 11 août 2026</h2>
<p>L’article 13 de la loi du 30 juin 2025 contre toutes les fraudes aux aides publiques a réécrit l’article L223-1 du Code de la consommation. Il interdit désormais de démarcher par téléphone un consommateur qui n’a pas exprimé préalablement son consentement, et c’est au professionnel d’en apporter la preuve. Les articles sur la liste d’opposition Bloctel sont abrogés.</p>
<h2>Les horaires s’appliquent toujours</h2>
<p>L’article D223-9, modifié en juillet 2026, maintient la fenêtre d’appel : du lundi au vendredi, de 10 h à 13 h et de 14 h à 20 h, jamais les jours fériés, et au plus 4 appels en 30 jours.</p>
<table>
  <thead><tr><th>Règle</th><th>Limite</th></tr></thead>
  <tbody>
    <tr><td>Jours</td><td>Du lundi au vendredi, hors jours fériés</td></tr>
    <tr><td>Horaires</td><td>10 h à 13 h et 14 h à 20 h</td></tr>
    <tr><td>Fréquence</td><td>4 appels en 30 jours au maximum</td></tr>
    <tr><td>Consentement</td><td>Préalable, depuis le 11 août 2026</td></tr>
  </tbody>
</table>
<h2>Pourquoi les demandes entrantes comptent davantage</h2>
<p>Un visiteur qui remplit votre formulaire ou demande à votre chat d’être rappelé a sollicité le contact. Ce n’est pas du démarchage. Avec un démarchage désormais réservé aux personnes qui l’ont accepté, les contacts recueillis par votre site deviennent l’un des rares moyens d’engager une conversation téléphonique avec un nouveau client particulier.</p>
<ul>
  <li><strong>Gardez une trace de la demande</strong> : sa date et ce que le visiteur a demandé.</li>
  <li><strong>Rappelez pour ce qui a été demandé</strong>, pas pour autre chose.</li>
  <li><strong>Facilitez la demande de rappel</strong> : un chat qui recueille un numéro et un créneau préféré fait exactement cela.</li>
</ul>`,
    sources: [
      { label: "Loi n° 2025-594 du 30 juin 2025 contre toutes les fraudes aux aides publiques, article 13 (Légifrance)", url: "https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000051824325" },
      { label: "Code de la consommation, article D223-9 en vigueur au 11 août 2026 (Légifrance)", url: "https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000046422695/2026-08-11" },
      { label: "Décret n° 2022-1313 du 13 octobre 2022 relatif aux jours, horaires et fréquence du démarchage téléphonique (Légifrance)", url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000046421823" }
    ]
  },
  {
    id: "tpe-pme-sans-site-internet",
    slug: "tpe-pme-sans-site-internet",
    category: "Visibilité",
    title: "Une TPE-PME sur trois n’a toujours pas de site internet",
    description: "65 % des TPE et PME françaises ont un site internet, et pour la première fois les réseaux sociaux passent devant. Ce que manquent les 35 % restantes, et ce qu’un site devrait faire pour les autres.",
    date: PUBLISHED_2,
    readingMinutes: 4,
    insight: {
      title: "Un tiers des petites entreprises ne peuvent pas être trouvées sur leur propre site",
      value: "35 %",
      label: "des TPE et PME françaises n’ont pas de site internet présentant leur activité",
      body: "Le Baromètre France Num 2025, réalisé pour la Direction générale des entreprises, a interrogé 11 021 entreprises. 65 % ont un site internet présentant l’entreprise, un chiffre stable sur un an, quand 66 % ont un compte sur les réseaux sociaux : c’est la première fois que les réseaux sociaux passent devant.",
      formula: "100 % − 65 % = 35 %",
      source: "Source : Baromètre France Num 2025 (DGE), 11 021 entreprises interrogées du 26 mars au 18 avril 2025, rapport du 29 septembre 2025.",
      caveat: "Enquête auprès des entreprises de moins de 250 salariés. Une page sur les réseaux sociaux peut remplir une partie du rôle d’un site, mais vous ne la maîtrisez pas de la même façon."
    },
    body: `
<p>Chaque année, le Baromètre France Num interroge les TPE et PME françaises sur leurs usages numériques. L’édition 2025 réserve une surprise.</p>
<h2>Ce que montre le baromètre</h2>
<ul>
  <li><strong>65 %</strong> ont un site internet présentant l’entreprise, sans changement sur un an.</li>
  <li><strong>66 %</strong> ont un compte sur les réseaux sociaux : pour la première fois, plus que celles qui ont un site.</li>
  <li><strong>84 %</strong> disposent d’au moins un outil de visibilité en ligne.</li>
  <li><strong>26 %</strong> utilisent l’intelligence artificielle, deux fois plus qu’en 2024, et <strong>14 %</strong> un chatbot, un assistant ou un outil de recherche d’informations.</li>
</ul>
<h2>Pourquoi un site reste utile</h2>
<p>Une page sur un réseau social est un espace loué : la plateforme décide qui la voit, à quoi elle ressemble et ce que deviennent vos contacts. Un site vous appartient. C’est aussi ce que lisent les moteurs de recherche et les assistants d’IA quand quelqu’un demande qui peut l’aider.</p>
<h2>Un site qui travaille pour vous</h2>
<ul>
  <li><strong>Dites clairement ce que vous faites, où et pour qui</strong>, dès le premier écran.</li>
  <li><strong>Indiquez comment vous joindre</strong> et quand vous répondez.</li>
  <li><strong>Recueillez les demandes à toute heure</strong> : un formulaire, ou un chat qui répond aux questions et prend les coordonnées.</li>
</ul>`,
    sources: [
      { label: "Baromètre France Num 2025, rapport (DGE, PDF)", url: "https://www.francenum.gouv.fr/files/2025-09/Barom%C3%A8tre%20France%20Num%202025%20-%20Rapport.pdf" }
    ]
  },
  {
    id: "chatgpt-utilisateurs-hebdomadaires",
    slug: "chatgpt-utilisateurs-hebdomadaires",
    category: "Usages",
    title: "Une personne sur neuf dans le monde utilise ChatGPT chaque semaine",
    description: "ChatGPT a atteint 900 millions d’utilisateurs hebdomadaires en février 2026. Rapporté à la population mondiale, c’est plus d’une personne sur dix. Vos visiteurs ont pris l’habitude de poser une question et d’obtenir une réponse.",
    date: PUBLISHED_2,
    readingMinutes: 4,
    insight: {
      title: "Poser une question à une machine est devenu banal",
      value: "10,9 %",
      label: "de la population mondiale : la part que représentent les 900 millions d’utilisateurs hebdomadaires de ChatGPT",
      body: "OpenAI a annoncé 900 millions d’utilisateurs actifs hebdomadaires de ChatGPT en février 2026. L’ONU estime la population mondiale à 8,23 milliards en 2025.",
      formula: "900 millions ÷ 8 231 613 070 = 10,9 %",
      source: "Sources : annonce d’OpenAI rapportée par TechCrunch, 27 février 2026 ; Nations unies, World Population Prospects 2024.",
      caveat: "Les utilisateurs actifs hebdomadaires sont des comptes, pas des personnes uniques, et l’usage varie beaucoup selon les pays. En juillet 2026, OpenAI a indiqué que ses modèles touchent plus d’un milliard d’utilisateurs actifs, tous produits confondus."
    },
    body: `
<p>En quelques années, poser une question à une IA est passé de la curiosité à l’habitude pour une grande partie du monde.</p>
<h2>Les chiffres</h2>
<p>En février 2026, OpenAI a annoncé que ChatGPT comptait 900 millions d’utilisateurs actifs hebdomadaires. L’ONU estime la population mondiale à 8,23 milliards en 2025 : c’est environ une personne sur neuf. En juillet 2026, OpenAI a ajouté que ses modèles touchent plus d’un milliard d’utilisateurs actifs, tous produits confondus.</p>
<p>En France, le Baromètre du numérique 2026 indique que 48 % des personnes de 12 ans et plus ont utilisé l’IA générative en 2025.</p>
<h2>Ce que vos visiteurs attendent désormais</h2>
<ul>
  <li><strong>Une réponse, pas une liste de liens</strong> : ils posent une question en langage courant et attendent une réponse directe.</li>
  <li><strong>À toute heure</strong> : un assistant n’a pas d’horaires de bureau.</li>
  <li><strong>Une étape suivante claire</strong> : réserver, obtenir un devis, être rappelé.</li>
</ul>
<h2>Répondre à cette attente sur votre site</h2>
<p>Un agent de chat configuré avec vos services offre la même expérience sur votre site : le visiteur demande, l’agent répond à partir de vos propres informations et, quand une personne est nécessaire, il recueille ses coordonnées.</p>`,
    sources: [
      { label: "TechCrunch, « ChatGPT reaches 900M weekly active users », 27 février 2026 (en anglais)", url: "https://techcrunch.com/2026/02/27/chatgpt-reaches-900m-weekly-active-users/" },
      { label: "BNN Bloomberg (AFP), « OpenAI says it has more than 1 billion active users », 31 juillet 2026 (en anglais)", url: "https://www.bnnbloomberg.ca/business/artificial-intelligence/2026/07/31/openai-says-has-more-than-1-billion-active-users/" },
      { label: "Nations unies, World Population Prospects 2024 (en anglais)", url: "https://population.un.org/wpp/" }
    ]
  },
  {
    id: "trafic-ia-sites-commerce",
    slug: "trafic-ia-sites-commerce",
    category: "Usages",
    title: "Le trafic des assistants d’IA vers les sites marchands a été multiplié par 14 en 19 mois",
    description: "Adobe mesure une hausse de 1 324 % des visites issues des outils d’IA générative vers les sites marchands américains entre octobre 2024 et mai 2026. De plus en plus de visiteurs arrivent après avoir interrogé un assistant.",
    date: PUBLISHED_2,
    readingMinutes: 4,
    insight: {
      title: "Les assistants d’IA deviennent une porte d’entrée vers les sites",
      value: "14,2×",
      label: "le niveau du trafic issu des outils d’IA générative vers les sites marchands américains en mai 2026, par rapport à octobre 2024",
      body: "Adobe Analytics, à partir des visites sur les sites marchands américains, a mesuré une hausse de 1 324 % du trafic issu des outils d’IA générative entre octobre 2024 et mai 2026. Sur la même période, ce trafic vers les sites de voyage a augmenté de 2 215 %.",
      formula: "1 + 1 324 % = 14,2 fois le niveau d’octobre 2024",
      source: "Source : Adobe, annonce du 17 juin 2026 (données Adobe Analytics).",
      caveat: "Sites marchands américains, à partir d’un niveau de départ faible : les assistants d’IA envoient encore bien moins de visites que les moteurs de recherche. Non mesuré en France."
    },
    body: `
<p>Avant de visiter le site d’une boutique, de plus en plus de gens demandent à un assistant d’IA quel produit ou quel prestataire choisir. Adobe en mesure l’effet sur les sites marchands.</p>
<h2>Ce qu’a mesuré Adobe</h2>
<ul>
  <li>Le trafic issu des outils d’IA générative vers les sites marchands américains a augmenté de <strong>1 324 %</strong> entre octobre 2024 et mai 2026.</li>
  <li>Vers les sites de voyage, il a augmenté de <strong>2 215 %</strong> sur la même période.</li>
  <li>Pendant les fêtes de fin d’année 2025, ce trafic vers les sites marchands était <strong>693 %</strong> plus élevé qu’un an plus tôt.</li>
</ul>
<h2>Ce que cela signifie pour vous</h2>
<p>Ces visiteurs arrivent avec du contexte : ils ont déjà décrit leur besoin à un assistant, qui les a orientés vers vous. Ils attendent que votre site confirme ce qu’on leur a dit et réponde vite à la question suivante.</p>
<ul>
  <li><strong>Rendez vos informations clés faciles à trouver et à citer</strong> : services, prix, zone, horaires.</li>
  <li><strong>Prolongez la conversation</strong> : un visiteur habitué à poser des questions en posera aussi sur votre site.</li>
  <li><strong>Mesurez-le</strong> : repérez dans vos statistiques les visites venant de chatgpt.com, perplexity.ai et d’autres assistants.</li>
</ul>`,
    sources: [
      { label: "Adobe, « Introducing Adobe Brand Visibility », 17 juin 2026 (en anglais)", url: "https://news.adobe.com/news/2026/06/introducing-adobe-brand-visibility" },
      { label: "Adobe, bilan des fêtes de fin d’année 2025, 7 janvier 2026 (PDF, en anglais)", url: "https://news.adobe.com/news/downloads/pdfs/2026/01/010726-holiday-shopping-season-2025.pdf" }
    ]
  },
  {
    id: "trafic-bots-sites",
    slug: "trafic-bots-sites",
    category: "Visiteurs",
    title: "Seules 47 visites sur 100 viennent désormais d’humains",
    description: "Les robots représentaient 53 % du trafic web en 2025, et les robots malveillants 40 % à eux seuls. Ce que cela change pour votre formulaire de contact et vos statistiques de visites.",
    date: PUBLISHED_2,
    readingMinutes: 4,
    insight: {
      title: "Plus de la moitié de vos « visiteurs » sont des machines",
      value: "47",
      label: "visites humaines sur 100 sur le web en 2025, une fois le trafic automatisé retiré",
      body: "Le Bad Bot Report 2026 d’Imperva, filiale de Thales, indique que les robots représentaient 53 % de tout le trafic web en 2025, contre 51 % un an plus tôt. Les robots malveillants représentaient à eux seuls 40 %, en hausse de 3 points.",
      formula: "100 % − 53 % = 47 % de trafic humain",
      source: "Source : Thales/Imperva, Bad Bot Report 2026 (données 2025), 29 avril 2026.",
      caveat: "Une moyenne sur l’ensemble du web, mesurée par un éditeur de sécurité. La part sur le site d’une petite entreprise peut être très différente."
    },
    body: `
<p>Vos statistiques affichent des visiteurs, votre formulaire reçoit des messages. Une part croissante des deux ne sont pas des personnes.</p>
<h2>Ce qu’a mesuré Imperva</h2>
<p>Selon le Bad Bot Report 2026 d’Imperva, les robots représentaient 53 % de tout le trafic web en 2025, contre 51 % un an plus tôt. Les robots malveillants, qui aspirent les contenus, testent des mots de passe volés ou remplissent des formulaires, en représentaient 40 % à eux seuls.</p>
<h2>Ce que cela change pour le site d’une petite entreprise</h2>
<ul>
  <li><strong>Des statistiques gonflées</strong> : le nombre de visites inclut du trafic automatisé, et votre taux de conversion paraît plus faible qu’il ne l’est.</li>
  <li><strong>De faux contacts</strong> : des robots remplissent les formulaires avec du spam, ce qui fait perdre du temps et peut masquer de vraies demandes.</li>
</ul>
<h2>Écarter les robots sans gêner les visiteurs</h2>
<ul>
  <li><strong>Un champ piège caché</strong> : invisible pour les personnes, rempli par les robots, dont les messages peuvent être écartés discrètement.</li>
  <li><strong>Vérifiez les champs côté serveur</strong>, pas seulement dans le navigateur.</li>
  <li><strong>Comptez les vraies conversations</strong> : un contact qui a répondu à une question dans un chat a bien plus de chances d’être une personne qu’un formulaire envoyé.</li>
</ul>`,
    sources: [
      { label: "Imperva, « Bad Bot Report 2026: bots in the agentic age » (en anglais)", url: "https://www.imperva.com/blog/bad-bot-report-2026-bots-agentic-age/" },
      { label: "Thales, « Bad bots in the agentic age », 29 avril 2026 (en anglais)", url: "https://cpl.thalesgroup.com/blog/application-security/bad-bots-in-the-agentic-age" }
    ]
  },
  {
    id: "recherches-zero-clic-france",
    slug: "recherches-zero-clic-france",
    category: "Visibilité",
    title: "En France, il faut 3,7 recherches Google pour envoyer un visiteur vers un site",
    description: "65,3 % des recherches Google en France se terminent sans clic, et seules 271 sur 1 000 envoient quelqu’un vers le web ouvert. Chaque visiteur qui arrive sur votre site vaut plus que jamais.",
    date: PUBLISHED_2,
    readingMinutes: 4,
    insight: {
      title: "La plupart des recherches ne quittent jamais Google",
      value: "3,7",
      label: "recherches Google en France pour chaque clic qui atteint le web ouvert, sur la base de 271 clics de ce type pour 1 000 recherches en 2026",
      body: "L’étude 2026 de SparkToro, fondée sur les données Similarweb de janvier à avril 2026, indique que 65,3 % des recherches Google en France se terminent sans aucun clic, et que 271 recherches sur 1 000 envoient un clic vers le web ouvert.",
      formula: "1 000 ÷ 271 = 3,7 recherches par visite vers le web ouvert",
      source: "Source : SparkToro (Rand Fishkin), étude sur les recherches sans clic, 16 juin 2026 (données Similarweb, janvier à avril 2026).",
      caveat: "Le web ouvert désigne les sites qui n’appartiennent pas à Google ; voir la méthodologie de SparkToro pour la définition exacte. Le chiffre est une moyenne sur toutes les recherches, pas pour votre secteur."
    },
    body: `
<p>Les moteurs de recherche répondent de plus en plus directement sur la page de résultats. SparkToro mesure combien de recherches envoient encore quelqu’un vers un site.</p>
<h2>Ce qu’a mesuré SparkToro en 2026</h2>
<table>
  <thead><tr><th>Pays</th><th>Recherches sans clic</th><th>Clics vers le web ouvert pour 1 000 recherches</th></tr></thead>
  <tbody>
    <tr><td>France</td><td>65,3 %</td><td>271</td></tr>
    <tr><td>Allemagne</td><td>62,1 %</td><td>287</td></tr>
    <tr><td>États-Unis</td><td>68,0 %</td><td>231</td></tr>
    <tr><td>Royaume-Uni</td><td>69,5 %</td><td>232</td></tr>
  </tbody>
</table>
<p>En France, 271 recherches Google sur 1 000 envoient un clic vers un site extérieur à Google : une visite toutes les 3,7 recherches.</p>
<h2>Ce que cela signifie pour votre site</h2>
<p>Si moins de recherches se transforment en visites, chaque visite compte davantage. Un visiteur qui arrive sur votre site et repart sans réponse est plus difficile à remplacer qu’avant.</p>
<ul>
  <li><strong>Répondez à la question sur la page d’arrivée</strong>, pas trois clics plus loin.</li>
  <li><strong>Donnez un moyen de demander</strong> si la page ne répond pas : un chat est à un geste.</li>
  <li><strong>Recueillez le contact</strong> avant qu’il ne parte, à toute heure.</li>
</ul>`,
    sources: [
      { label: "SparkToro, recherches sans clic par pays, 16 juin 2026 (en anglais)", url: "https://sparktoro.com/blog/zero-click-searches-highest-in-the-uk-lowest-in-germany-and-france-has-the-most-efficient-searchers/" },
      { label: "SparkToro, « In 2026, less than one third of Google searches still send a click », 8 juin 2026 (en anglais)", url: "https://sparktoro.com/blog/in-2026-less-than-one-third-of-google-searches-still-send-a-click/" }
    ]
  },
  {
    id: "e-commerce-france-2025",
    slug: "e-commerce-france-2025",
    category: "Usages",
    title: "Les Français ont réalisé 101 achats en ligne par seconde en 2025",
    description: "3,2 milliards de transactions en ligne et 196,4 milliards d’euros dépensés en France en 2025. Répartis sur l’année, cela fait 101 achats et plus de 6 000 euros chaque seconde, de jour comme de nuit.",
    date: PUBLISHED_2,
    readingMinutes: 4,
    insight: {
      title: "L’achat en ligne ne ferme jamais",
      value: "101 / s",
      label: "transactions en ligne chaque seconde en France en 2025, en moyenne sur toutes les heures de l’année",
      body: "La FEVAD, fédération du e-commerce et de la vente à distance, a compté 3,2 milliards de transactions en ligne en 2025, en hausse de 10 %, pour 196,4 milliards d’euros de ventes, en hausse de 7 %, avec un panier moyen de 62 euros.",
      formula: "3,2 milliards ÷ (365 × 86 400 s) = 101,5 par seconde ; 196,4 Md€ ÷ 31 536 000 s = 6 228 € par seconde",
      source: "Source : FEVAD, bilan du e-commerce en France en 2025, 11 février 2026.",
      caveat: "Une moyenne : les achats ne sont pas répartis uniformément dans la journée. Les services, dont les voyages et la billetterie, représentent 120,3 milliards d’euros du total."
    },
    body: `
<p>Les Français achètent un peu plus en ligne chaque année. Les chiffres 2025 de la FEVAD montrent à quel point, et avec quelle constance.</p>
<h2>Le e-commerce en France en 2025</h2>
<table>
  <thead><tr><th>Indicateur</th><th>2025</th></tr></thead>
  <tbody>
    <tr><td>Ventes en ligne</td><td>196,4 milliards d’euros (+7 %)</td></tr>
    <tr><td>dont services</td><td>120,3 milliards d’euros</td></tr>
    <tr><td>dont produits</td><td>76,1 milliards d’euros</td></tr>
    <tr><td>Transactions</td><td>3,2 milliards (+10 %)</td></tr>
    <tr><td>Panier moyen</td><td>62 euros (−3 %)</td></tr>
  </tbody>
</table>
<p>Réparti sur les 31,5 millions de secondes d’une année, cela fait 101 achats et 6 228 euros chaque seconde, nuits et week-ends compris.</p>
<h2>Ce que cela signifie pour une entreprise de services</h2>
<p>Ceux qui achètent en ligne à toute heure cherchent aussi des services à toute heure : un conseiller, un artisan, un praticien. Ils ont l’habitude d’obtenir une réponse ou une confirmation tout de suite.</p>
<ul>
  <li><strong>Affichez vos prix ou vos fourchettes de prix</strong> quand c’est possible : les acheteurs en ligne comparent.</li>
  <li><strong>Rendez l’étape suivante immédiate</strong> : réservation, demande de devis, rappel.</li>
  <li><strong>Répondez hors horaires</strong>, quand beaucoup de ces décisions se prennent.</li>
</ul>`,
    sources: [
      { label: "FEVAD, bilan du e-commerce en France en 2025, 11 février 2026", url: "https://www.fevad.com/bilan-du-e-commerce-en-france-les-francais-ont-depense-pres-de-200-milliards-deuros-sur-internet-en-2025/" }
    ]
  },
  {
    id: "avis-clients-reponse",
    slug: "avis-clients-reponse",
    category: "Réputation",
    title: "La part des consommateurs qui lisent toujours les avis a bondi de 41 % en un an",
    description: "97 % des consommateurs lisent les avis sur les commerces et services locaux, et 41 % les lisent désormais toujours, contre 29 %. 89 % attendent une réponse du dirigeant. Les visiteurs veulent voir que quelqu’un répond.",
    date: PUBLISHED_2,
    readingMinutes: 4,
    insight: {
      title: "Les avis sont plus lus, et les réponses attendues",
      value: "+41 %",
      label: "de hausse de la part des consommateurs qui lisent toujours les avis sur les entreprises locales, de 29 % à 41 % en un an",
      body: "L’enquête Local Consumer Review Survey 2026 de BrightLocal, menée auprès de 1 002 adultes américains, indique que 97 % lisent les avis sur les entreprises locales et que 41 % les lisent toujours, contre 29 %. 89 % attendent des dirigeants qu’ils répondent aux avis.",
      formula: "41 % ÷ 29 % − 1 = +41 %",
      source: "Source : BrightLocal, Local Consumer Review Survey 2026, 1 002 adultes américains, publiée le 11 février 2026.",
      caveat: "Une enquête américaine menée par un éditeur de logiciels de marketing local. Les habitudes françaises peuvent différer."
    },
    body: `
<p>Avant de contacter une entreprise locale, on regarde ce qu’en disent les autres. L’enquête 2026 de BrightLocal montre que cette habitude se renforce.</p>
<h2>Ce qu’a trouvé BrightLocal</h2>
<ul>
  <li><strong>97 %</strong> des consommateurs lisent les avis sur les entreprises locales.</li>
  <li><strong>41 %</strong> les lisent toujours, contre 29 % un an plus tôt.</li>
  <li><strong>89 %</strong> attendent des dirigeants qu’ils répondent aux avis, et <strong>19 %</strong> attendent une réponse le jour même.</li>
  <li><strong>42 %</strong> ont peu de chances de faire appel à une entreprise qui ne répond pas à ses avis.</li>
</ul>
<h2>Ce que les avis et les questions ont en commun</h2>
<p>Répondre à un avis montre que quelqu’un écoute. Répondre vite à une question sur votre site aussi. Les visiteurs jugent une entreprise sur les deux : ce qu’elle a fait pour d’autres, et la façon dont elle les traite maintenant.</p>
<ul>
  <li><strong>Répondez à chaque avis</strong>, y compris aux bons, dans la semaine au plus tard.</li>
  <li><strong>Répondez vite aux questions des visiteurs</strong>, y compris en dehors des horaires.</li>
  <li><strong>Reliez les deux</strong> : après une prestation réussie, demandez un avis au client.</li>
</ul>`,
    sources: [
      { label: "BrightLocal, Local Consumer Review Survey 2026 (en anglais)", url: "https://www.brightlocal.com/research/local-consumer-review-survey/" }
    ]
  },
  {
    id: "baisse-appels-telephoniques-france",
    slug: "baisse-appels-telephoniques-france",
    category: "Usages",
    title: "Les Français téléphonent 16 % de moins qu’en 2021",
    description: "Le trafic vocal en France est tombé à 214,4 milliards de minutes en 2025, contre 256,5 milliards en 2021. Les appels depuis les lignes fixes ont été divisés par plus de deux. Le téléphone n’est plus le moyen évident de prendre contact.",
    date: PUBLISHED_2,
    readingMinutes: 4,
    insight: {
      title: "Le téléphone recule, année après année",
      value: "−16,4 %",
      label: "de baisse des minutes d’appels sortants en France entre 2021 et 2025, fixe et mobile confondus",
      body: "L’Arcep a compté 214,4 milliards de minutes d’appels sortants en 2025, en baisse de 3,6 % sur un an et contre 256,5 milliards en 2021. Les minutes depuis les lignes fixes sont passées de 42,6 à 18,5 milliards. Les SMS ont reculé de 26,9 % en un an.",
      formula: "(214,4 − 256,5) ÷ 256,5 = −16,4 % ; lignes fixes : (18,5 − 42,6) ÷ 42,6 = −56,6 %",
      source: "Source : Arcep, marché des communications électroniques en France, résultats provisoires 2025, 28 mai 2026.",
      caveat: "Ne compte que les appels et SMS classiques : les appels et messages passés dans des applications comme WhatsApp ne sont pas inclus, et une partie de la baisse correspond à un transfert vers ces applications."
    },
    body: `
<p>Longtemps, « appelez-nous » a été la façon par défaut de joindre une entreprise. Les chiffres de l’Arcep montrent que les Français utilisent de moins en moins ce canal.</p>
<h2>Ce qu’a mesuré l’Arcep</h2>
<table>
  <thead><tr><th>Trafic vocal sortant</th><th>2021</th><th>2025</th></tr></thead>
  <tbody>
    <tr><td>Total (milliards de minutes)</td><td>256,5</td><td>214,4</td></tr>
    <tr><td>dont lignes fixes</td><td>42,6</td><td>18,5</td></tr>
  </tbody>
</table>
<p>Le trafic vocal baisse depuis 2014. En 2025, il a reculé de 3,6 % en un an. Les SMS ont baissé encore plus vite, de 26,9 % en un an, à 64,7 milliards de messages.</p>
<h2>Où sont passées les conversations</h2>
<p>Les appels et SMS classiques cèdent la place aux messageries et aux échanges écrits. On a pris l’habitude de taper une question et d’obtenir une réponse, plutôt que d’appeler et d’attendre que quelqu’un décroche.</p>
<h2>Ce que cela change pour vos moyens de contact</h2>
<ul>
  <li><strong>Gardez le téléphone</strong> pour ceux qui le préfèrent, et indiquez quand vous répondez.</li>
  <li><strong>Proposez un canal écrit qui répond tout de suite</strong> : un chat sur votre site.</li>
  <li><strong>Laissez choisir</strong> : un rappel au moment qui convient, demandé en quelques mots.</li>
</ul>`,
    sources: [
      { label: "Arcep, marché des communications électroniques en France, résultats provisoires 2025, 28 mai 2026", url: "https://www.arcep.fr/cartes-et-donnees/nos-publications-chiffrees/observatoire-des-marches-des-communications-electroniques-en-france/marche-communications-electroniques-france-2025-resultats-provisoires.html" }
    ]
  },
  {
    id: "creations-entreprises-2025",
    slug: "creations-entreprises-2025",
    category: "Entreprises",
    title: "3 194 entreprises ont été créées en France chaque jour de 2025",
    description: "Un record de 1 165 800 entreprises créées en France en 2025, dont deux tiers de micro-entrepreneurs. Chacune doit se faire trouver et répondre à ses premiers clients.",
    date: PUBLISHED_2,
    readingMinutes: 4,
    insight: {
      title: "Une année record pour les créations, surtout de micro-entreprises",
      value: "3 194",
      label: "entreprises créées en France en moyenne chaque jour de 2025, dont environ deux tiers sous le régime du micro-entrepreneur",
      body: "L’Insee a compté un record de 1 165 800 créations d’entreprises en 2025, en hausse de 5 % sur 2024. 758 600 étaient des micro-entrepreneurs, leur plus haut niveau historique.",
      formula: "1 165 800 ÷ 365 = 3 194 par jour ; 758 600 ÷ 1 165 800 = 65,1 % de micro-entrepreneurs",
      source: "Source : Insee Première n° 2092, créations d’entreprises en 2025, 28 janvier 2026.",
      caveat: "Toutes les créations ne deviennent pas des entreprises actives : certains micro-entrepreneurs s’immatriculent sans démarrer, d’autres cessent en quelques années."
    },
    body: `
<p>La France continue de battre son record de créations d’entreprises. En 2025, l’Insee en a compté 1 165 800.</p>
<h2>Ce qu’a compté l’Insee</h2>
<table>
  <thead><tr><th>Type de création, 2025</th><th>Nombre</th><th>Évolution</th></tr></thead>
  <tbody>
    <tr><td>Micro-entrepreneurs</td><td>758 600</td><td>+6 %</td></tr>
    <tr><td>Sociétés</td><td>301 300</td><td>+6 %</td></tr>
    <tr><td>Entreprises individuelles classiques</td><td>105 900</td><td>−4 %</td></tr>
    <tr><td>Total</td><td>1 165 800</td><td>+5 %</td></tr>
  </tbody>
</table>
<p>Cela fait 3 194 nouvelles entreprises par jour, dont deux tiers de micro-entrepreneurs.</p>
<h2>Ce dont une nouvelle entreprise a besoin d’abord</h2>
<p>Une nouvelle entreprise doit se faire trouver et transformer ses premiers visiteurs en clients, souvent sans personne pour décrocher pendant que le fondateur travaille.</p>
<ul>
  <li><strong>Un site simple</strong> qui dit ce que vous faites, où et pour qui.</li>
  <li><strong>Un moyen clair de vous joindre</strong>, avec les horaires où vous répondez.</li>
  <li><strong>Quelque chose qui répond quand vous ne pouvez pas</strong> : un chat qui répond aux questions courantes et prend les coordonnées.</li>
</ul>`,
    sources: [
      { label: "Insee Première n° 2092, créations d’entreprises en 2025, 28 janvier 2026", url: "https://www.insee.fr/fr/statistiques/8721354" }
    ]
  }
];
