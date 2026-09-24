// Article content for build-articles.mjs. Every figure in an insight box must be
// sourced or derived by a formula shown in the box; say what the number is not.

export const AUTHOR = {
  name: "Edouard Vary",
  role: "",       // e.g. "Fondateur, Omni" once confirmed
  bio: "",        // one or two sentences of credentials
  image: "",      // e.g. "/assets/edouard-vary.jpg"
  linkedin: ""    // full LinkedIn profile URL
};

const PUBLISHED = "2026-09-24";

export const ARTICLES = [
  {
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
      { label: "Omni, tarif : à partir de 600 € par produit", url: "/#tarifs" }
    ]
  },
  {
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
  }
];
