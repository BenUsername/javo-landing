// English articles for build.mjs. Same figures, formulas and sources as the French
// versions in articles.mjs; each `id` pairs an article with its French version.

const PUBLISHED = "2026-09-24";
const PUBLISHED_2 = "2026-09-25";
const HOLIDAYS_SOURCE = { label: "Service-Public.fr, “Jours fériés et ponts dans le secteur privé”: 2026 public holiday calendar (in French)", url: "https://www.service-public.fr/particuliers/vosdroits/F2405" };

export const ARTICLES_EN = [
  {
    id: "heures-hors-bureau-2026",
    slug: "hours-outside-office-hours-2026",
    category: "Availability",
    title: "77% of the year’s hours fall outside your opening hours",
    description: "Open 9 am to 5 pm on weekdays, your business is closed for 6,744 hours in 2026. Here is the calculation, and what it means for your visitors.",
    date: PUBLISHED,
    readingMinutes: 4,
    insight: {
      title: "A business open 9 to 5 on weekdays is closed more than three hours in four",
      value: "77.0%",
      label: "of the 8,760 hours in 2026 fall outside office hours, public holidays included",
      body: "2026 has 261 weekdays. Nine French public holidays fall on a weekday, which leaves 252 working days of 8 hours: 2,016 opening hours in the year.",
      formula: "1 − (252 days × 8 h) ÷ 8,760 h = 1 − 2,016 ÷ 8,760 = 77.0%",
      source: "2026 calendar; public holidays from <a href=\"https://www.service-public.fr/particuliers/vosdroits/F2405\" rel=\"noopener\" target=\"_blank\">Service-Public.fr</a> (French Labour Code, articles L3133-1 to L3133-3).",
      caveat: "A calendar calculation for 9 am to 5 pm opening hours. It does not say when your visitors come: check that in your analytics before planning anything."
    },
    body: `
<p>Put the question another way: over a year, how many hours is your website being read while nobody can answer? With standard 9-to-5 weekday hours, the answer is more than three quarters of the year.</p>
<h2>The calculation</h2>
<p>2026 has 365 days, 261 of them Monday to Friday. Of France’s eleven national public holidays, nine fall on a weekday: 1 January, Easter Monday, 1 May, 8 May, Ascension Day, Whit Monday, 14 July, 11 November and Christmas Day. 15 August and All Saints’ Day fall at the weekend.</p>
<table>
  <thead><tr><th>Step</th><th>Value</th></tr></thead>
  <tbody>
    <tr><td>Weekdays in 2026</td><td>261</td></tr>
    <tr><td>Public holidays on a weekday</td><td>9</td></tr>
    <tr><td>Working days</td><td>252</td></tr>
    <tr><td>Opening hours (8 h a day)</td><td>2,016</td></tr>
    <tr><td>Closed hours out of 8,760</td><td>6,744</td></tr>
  </tbody>
</table>
<p>If you open 9 am to 6 pm, the share drops to 74.1%. The order of magnitude does not change: your business is closed most of the time.</p>
<h2>The longest closures</h2>
<p>An ordinary weekend, from Friday 5 pm to Monday 9 am, lasts 64 hours. Long weekends stretch the wait: from Friday 3 April at 5 pm to Tuesday 7 April at 9 am, the Easter closure lasts 88 hours. The Whitsun weekend and Christmas, which falls on a Friday in 2026, produce the same length.</p>
<h2>What this number does not say</h2>
<p>This is a calculation about the calendar, not about your visitors. Website traffic is not spread evenly: a business site may be busier during the day, a consumer site in the evening. To know how many visits happen out of hours, look at the hourly breakdown in your analytics tool.</p>
<p>What the calculation does show is how long the window is during which a visitor with a question cannot reach anyone. A contact form records the request, but it does not answer it.</p>
<h2>What to do with those 6,744 hours</h2>
<ul>
  <li><strong>Measure the real share</strong> of your visits and enquiries that arrive out of hours.</li>
  <li><strong>Show your opening hours</strong> next to your phone number, so nobody calls into an empty office.</li>
  <li><strong>Offer an instant answer</strong> out of hours: a chat agent can answer common questions and collect contact details for a call back on the next working day.</li>
</ul>`,
    sources: [HOLIDAYS_SOURCE]
  },
  {
    id: "rentabiliser-un-agent-de-chat",
    slug: "chat-agent-break-even",
    category: "Return on investment",
    title: "How many leads does it take to pay back a €600 chat agent?",
    description: "A simple formula for the break-even point of a chat agent, with worked examples based on what a client is worth to you and how many leads you convert.",
    date: PUBLISHED,
    readingMinutes: 4,
    insight: {
      title: "The break-even point depends on two numbers you already know",
      value: "3 leads",
      label: "are enough to cover €600 if a client brings you €1,000 of margin and you sign one lead in four",
      body: "The number of leads you need is the cost divided by the expected margin of one lead: a client’s margin multiplied by your conversion rate.",
      formula: "€600 ÷ (€1,000 × 25%) = 2.4, rounded up to 3 leads",
      source: "Break-even formula; example values chosen for illustration.",
      caveat: "An illustrative example, not a client result. Replace the margin and conversion rate with your own, and count only the leads that would not have reached you otherwise."
    },
    body: `
<p>Before installing any tool on your site, one question is enough: how many extra leads does it need to pay for itself? The answer is a single division.</p>
<h2>The formula</h2>
<p><strong>Leads needed = cost ÷ (margin per client × conversion rate)</strong></p>
<p>The margin per client is what a new client brings you once direct costs are deducted. The conversion rate is the share of leads that become clients. Multiplied together, they give the average value of a lead.</p>
<h2>Examples for €600</h2>
<table>
  <thead><tr><th>Margin per client</th><th>Conversion rate</th><th>Leads needed</th></tr></thead>
  <tbody>
    <tr><td>€300</td><td>20%</td><td>10</td></tr>
    <tr><td>€500</td><td>25%</td><td>5</td></tr>
    <tr><td>€1,000</td><td>25%</td><td>3</td></tr>
    <tr><td>€2,000</td><td>10%</td><td>3</td></tr>
    <tr><td>€5,000</td><td>10%</td><td>2</td></tr>
  </tbody>
</table>
<p>Each row rounds up to the next whole lead: you cannot sign 2.4 clients.</p>
<h2>Count only additional leads</h2>
<p>The classic trap is to credit the tool with every lead that passes through it. A visitor who would have phoned the next day anyway is not a lead gained. For a cautious estimate, count mainly the enquiries that arrive out of hours, or from visitors who left no other trace.</p>
<h2>How to estimate it before you start</h2>
<ul>
  <li>Take the average margin of your recent clients.</li>
  <li>Work out your conversion rate on enquiries received by form or phone.</li>
  <li>Check how many visits your site gets out of hours: that is the pool in which a chat agent can find additional leads.</li>
</ul>
<p>If the break-even point comes out at a few leads a year, the risk is low. If it is higher than the number of enquiries you receive today, measure first before you invest.</p>`,
    sources: [
      { label: "Omni pricing: from €600 per product", url: "/#pricing" }
    ]
  },
  {
    id: "cas-client-alyor",
    slug: "alyor-case-study",
    category: "Case study",
    title: "ALYOR: the chat takes over from the call button when the office is closed",
    description: "How Omni was installed on all 22 pages of alyor.fr, and why, on mobile, the call button gives way to the chat outside opening hours.",
    date: PUBLISHED,
    readingMinutes: 5,
    insight: {
      title: "On mobile, ALYOR’s call button is replaced by the chat for most of the year",
      value: "6,744 h",
      label: "a year during which the chat takes the call button’s place on mobile: 77% of the hours in 2026",
      body: "The call button shows Monday to Friday, 9 am to 5 pm Paris time, excluding public holidays. The rest of the time, mobile visitors see the chat in its place.",
      formula: "8,760 h − (252 working days × 8 h) = 6,744 h",
      source: "Omni configuration on alyor.fr; 2026 calendar.",
      caveat: "Display time calculated from the configuration, not a number of conversations or leads."
    },
    body: `
<p>ALYOR is a wealth advisory firm serving the self-employed: retirement, savings, health cover and income protection. Its website, alyor.fr, has 22 pages: the home page, product pages, articles, and contact and legal pages.</p>
<h2>One line, on every page</h2>
<p>The site is built from separate HTML pages with no shared template. Omni’s tag was therefore added just before the end of the page body on each of the 22 pages, once per page, and checked page by page.</p>
<h2>On mobile, three buttons were one too many</h2>
<p>On phones, alyor.fr shows a fixed contact bar at the bottom of the screen: a main button such as “Être rappelé” (request a call back) and a call button. The chat bubble, placed by default in the bottom-right corner, sat on top of the call button. Even once moved, it made three options for the same intention: talking to someone.</p>
<h2>The rule: call during opening hours, chat outside them</h2>
<ul>
  <li><strong>During opening hours</strong>, Monday to Friday from 9 am to 5 pm, the bar offers the main button and the call button. The chat bubble is hidden on mobile.</li>
  <li><strong>Outside them</strong>, in the evening, at weekends and on public holidays, the chat takes the exact place of the call button in the bar.</li>
  <li><strong>If the chat does not load</strong>, the call button stays: visitors always have a way to get in touch.</li>
</ul>
<p>The switch follows Paris time, wherever the visitor is, and takes moveable public holidays such as Easter Monday and Ascension Day into account.</p>
<h2>A chat that does not hide the page</h2>
<p>On phones, the chat opens in a floating window with rounded corners rather than full screen. The page stays visible around it, and the contact bar stays usable underneath.</p>
<h2>What to take away for your site</h2>
<ul>
  <li>Group your contact options in one place rather than adding one more bubble.</li>
  <li>Offer the channel that works right now: the phone when someone will pick up, the chat otherwise.</li>
  <li>Always plan a fallback in case an external tool does not load.</li>
</ul>`,
    sources: [
      { label: "alyor.fr", url: "https://alyor.fr/" },
      HOLIDAYS_SOURCE
    ]
  },
  {
    id: "contact-vendredi-soir-64-heures",
    slug: "friday-evening-lead-64-hours",
    category: "Responsiveness",
    title: "A lead that arrives at 5 pm on Friday waits 64 hours for a reply",
    description: "One weekend is enough to go far beyond the delay after which an enquiry loses most of its chances. The calculation, and what the Harvard Business Review study says.",
    date: PUBLISHED,
    readingMinutes: 5,
    insight: {
      title: "The weekend turns a warm lead into one that is more than 24 hours old",
      value: "64 h",
      label: "of waiting between Friday 5 pm and Monday 9 am: 2.7 times the 24-hour mark beyond which HBR measured qualification odds more than 60 times lower",
      body: "The Harvard Business Review compared companies by how quickly they responded to online enquiries. Those that tried to contact the lead within an hour were more than 60 times as likely to have a real conversation with a decision maker as those that waited 24 hours or more.",
      formula: "Friday 5 pm → Monday 9 am = 3 × 24 h − 8 h = 64 h; 64 h ÷ 24 h = 2.7",
      source: "Source: Oldroyd, McElheran and Elkington, “The Short Life of Online Sales Leads”, Harvard Business Review, March 2011.",
      caveat: "A study of US companies from 2011. It shows an association between delay and qualification, not a guaranteed effect for your business."
    },
    body: `
<p>An enquiry comes in through your form at 5:05 pm on a Friday. Nobody will read it before 9 am on Monday. In the meantime, the visitor may have contacted a competitor, or simply changed their mind.</p>
<h2>What the Harvard Business Review measured</h2>
<p>In 2011, three researchers published the results of two pieces of work on online enquiries in the Harvard Business Review.</p>
<ul>
  <li><strong>An audit of 2,241 US companies</strong>: 37% responded within an hour, 24% took more than 24 hours, and 23% never responded. Among those that responded within 30 days, the average response time was 42 hours.</li>
  <li><strong>An analysis of 1.25 million enquiries</strong> handled by 42 companies: those that tried to contact the lead within an hour were nearly seven times as likely to qualify it as those that waited even an hour longer, and more than 60 times as likely as those that waited 24 hours or more.</li>
</ul>
<p>The authors define qualification as a real conversation with a decision maker. It is a step before the sale, not the sale itself.</p>
<h2>The calendar works against you</h2>
<p>With 9-to-5 weekday hours, an enquiry that arrives after 5 pm on a working day waits at least until 9 am the next morning. Friday evening enquiries wait 64 hours. Those from Friday 3 April 2026, before the Easter weekend, wait 88 hours.</p>
<table>
  <thead><tr><th>Enquiry received</th><th>Earliest possible reply</th><th>Wait</th></tr></thead>
  <tbody>
    <tr><td>Tuesday 4:55 pm</td><td>Tuesday 4:55 pm</td><td>0 h</td></tr>
    <tr><td>Tuesday 6 pm</td><td>Wednesday 9 am</td><td>15 h</td></tr>
    <tr><td>Friday 5 pm</td><td>Monday 9 am</td><td>64 h</td></tr>
    <tr><td>Friday 3 April 2026, 5 pm</td><td>Tuesday 7 April, 9 am</td><td>88 h</td></tr>
  </tbody>
</table>
<h2>Cutting the wait without being on call day and night</h2>
<ul>
  <li><strong>Reply straight away, even without an adviser</strong>: a chat agent can answer common questions and tell the visitor when they will be called back.</li>
  <li><strong>Collect the right information</strong> in the first exchange, so the Monday call back is useful.</li>
  <li><strong>Handle weekend enquiries first</strong> on Monday morning: they are the oldest.</li>
</ul>`,
    sources: [
      { label: "Oldroyd, McElheran and Elkington, “The Short Life of Online Sales Leads”, Harvard Business Review, March 2011", url: "https://hbr.org/2011/03/the-short-life-of-online-sales-leads" }
    ]
  },
  {
    id: "cout-permanence-hors-horaires-smic",
    slug: "cost-of-out-of-hours-cover",
    category: "Costs",
    title: "Covering your closed hours with an employee would cost over €83,000 a year",
    description: "What a human presence during the 6,744 hours your business is closed in 2026 would cost at the French minimum wage, with more realistic scenarios.",
    date: PUBLISHED,
    readingMinutes: 4,
    insight: {
      title: "Even at the minimum wage, closed hours add up to a large budget",
      value: "€83,019",
      label: "of gross pay at the French minimum wage (SMIC) to cover the 6,744 closed hours of 2026, before employer contributions and premiums",
      body: "The gross hourly SMIC has been €12.31 since 1 June 2026. Multiplied by the hours a business open 9 to 5 on weekdays is closed, it gives a floor, not a real cost.",
      formula: "6,744 h × €12.31 = €83,018.64",
      source: "Source: gross hourly SMIC at 1 June 2026, Service-Public.fr; closed hours calculated from the 2026 calendar.",
      caveat: "A theoretical floor: the real employer cost adds contributions and night and Sunday premiums, and assumes several people. An employee also does far more than a chat agent."
    },
    body: `
<p>The question comes up as soon as you notice enquiries arriving in the evening or at weekends: do you need someone to answer them? A minimum-wage calculation gives an order of magnitude.</p>
<h2>Four scenarios at the minimum wage</h2>
<table>
  <thead><tr><th>Hours covered in 2026</th><th>Hours</th><th>Gross pay at SMIC</th></tr></thead>
  <tbody>
    <tr><td>Weekday evenings, 5 to 9 pm (252 days)</td><td>1,008</td><td>€12,408</td></tr>
    <tr><td>Saturdays, 9 am to 5 pm (52 Saturdays)</td><td>416</td><td>€5,121</td></tr>
    <tr><td>Evenings and Saturdays</td><td>1,424</td><td>€17,529</td></tr>
    <tr><td>All closed hours</td><td>6,744</td><td>€83,019</td></tr>
  </tbody>
</table>
<p>These amounts are floors. They include neither employer contributions, nor the night or Sunday premiums set by your collective agreement, nor holidays and cover.</p>
<h2>The comparison that matters</h2>
<p>Comparing an employee with a chat agent like for like makes no sense: an adviser understands a case, reassures, sells. A chat agent answers common questions, points people in the right direction and collects contact details.</p>
<p>The better question is: what do your visitors need out of hours? Often, a quick answer to a simple question and the certainty of being called back. That need does not justify a job, but it deserves an answer.</p>
<h2>A two-step approach</h2>
<ul>
  <li><strong>Out of hours</strong>, a chat agent answers immediately and records the request.</li>
  <li><strong>During opening hours</strong>, your team calls back the previous evening’s and the weekend’s leads first.</li>
</ul>`,
    sources: [
      { label: "Service-Public.fr, “Montant du Smic”: gross hourly SMIC of €12.31 at 1 June 2026 (in French)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2300" },
      { label: "Order of 22 May 2026 raising the minimum wage, Légifrance (in French)", url: "https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000054126589" },
      HOLIDAYS_SOURCE
    ]
  },
  {
    id: "mobile-hors-horaires-bouton-appel",
    slug: "mobile-call-button-out-of-hours",
    category: "Mobile",
    title: "On mobile, your call button is useless most of the time",
    description: "57% of web traffic in France comes from smartphones. Combined with your closed hours, that number says a lot about what your mobile visitors see.",
    date: PUBLISHED,
    readingMinutes: 4,
    insight: {
      title: "More than four visits in ten could be on mobile and out of hours",
      value: "44%",
      label: "of visits would be both on a smartphone and outside office hours if traffic were spread evenly across the year",
      body: "In 2025, 57.1% of measured web traffic in France came from smartphones and 2.3% from tablets. A business open 9 to 5 on weekdays is closed for 77.0% of the hours in 2026.",
      formula: "57.1% × 77.0% = 44.0%",
      source: "Source: StatCounter Global Stats, desktop, mobile and tablet share in France, full year 2025; 2026 calendar.",
      caveat: "A deliberately simple assumption: real traffic is not even across the day, and StatCounter’s monthly shares vary a lot. Check the device and hourly breakdown in your own analytics."
    },
    body: `
<p>On a site seen from a phone, the call button is often the most visible way to get in touch. Someone still has to pick up.</p>
<h2>Mobile’s share in France</h2>
<p>According to StatCounter, smartphones accounted for 57.1% of measured web traffic in France in 2025, against 40.6% for computers and 2.3% for tablets. The monthly share varies a lot from one month to the next, which is a reason to reason over the year rather than a single month.</p>
<h2>Crossed with your opening hours</h2>
<p>If you are open 9 to 5 on weekdays, you are closed 77% of the hours in the year. Assuming traffic is spread evenly, 44% of visits would be both on mobile and out of hours. For those visitors, a call goes to voicemail at best.</p>
<p>The assumption is rough: a business site probably gets more visits during the day. But even halved, the share remains significant.</p>
<h2>Match the buttons to the time of day</h2>
<ul>
  <li><strong>During opening hours</strong>, keep the call button: it is the most direct contact.</li>
  <li><strong>Outside them</strong>, replace it with a way to get in touch that works at that moment, such as a chat agent.</li>
  <li><strong>Avoid stacking</strong>: a contact bar and a chat bubble on top of each other make three options for a single intention.</li>
</ul>
<p>That is the rule used on alyor.fr: on mobile, the chat takes the call button’s place when the office is closed.</p>`,
    sources: [
      { label: "StatCounter Global Stats, “Desktop vs Mobile vs Tablet Market Share France”", url: "https://gs.statcounter.com/platform-market-share/desktop-mobile-tablet/france" },
      HOLIDAYS_SOURCE
    ]
  },
  {
    id: "ai-act-article-50-chatbot",
    slug: "ai-act-article-50-chatbots",
    category: "Regulation",
    title: "Chatbots: telling visitors they are talking to an AI has been mandatory since 2 August 2026",
    description: "Article 50 of the EU AI Act has applied since 2 August 2026. The Digital Omnibus adopted in July pushed back other deadlines, but not this one.",
    date: PUBLISHED,
    readingMinutes: 5,
    insight: {
      title: "The chatbot transparency obligation was not postponed",
      value: "0 days",
      label: "of delay for the obligation to tell people they are interacting with an AI, despite the Digital Omnibus adopted in July 2026",
      body: "Regulation (EU) 2026/1744, published on 24 July 2026, moved several AI Act deadlines. It gives more time for marking generated content, but leaves the application date of the chatbot disclosure obligation unchanged.",
      formula: "Article 50(1): applies from 2 August 2026 (Article 113). Extra time until 2 December 2026: Article 50(2) only, for systems already on the market.",
      source: "Sources: Regulation (EU) 2024/1689 and Regulation (EU) 2026/1744, Official Journal of the European Union.",
      caveat: "A reading of the published texts, not legal advice. For your specific situation, consult a lawyer."
    },
    body: `
<p>The EU Artificial Intelligence Act, adopted in 2024, has mostly applied since 2 August 2026. For a website with an AI-powered chat, one rule concerns your visitors directly.</p>
<h2>What Article 50 says</h2>
<p>Article 50(1) requires providers of AI systems intended to interact directly with people to design them so that those people are informed they are interacting with an AI, unless this is obvious to a reasonably attentive person given the context.</p>
<p>The obligation falls first on the provider of the tool. In practice, as a business installing a chat on your site, you have every reason to choose a tool that clearly presents itself as an automated assistant.</p>
<h2>What the Digital Omnibus changed, and what it did not</h2>
<table>
  <thead><tr><th>Obligation</th><th>Date</th></tr></thead>
  <tbody>
    <tr><td>Disclose that people are talking to an AI (Article 50(1))</td><td>2 August 2026</td></tr>
    <tr><td>Marking of generated content, systems already on the market (Article 50(2))</td><td>2 December 2026</td></tr>
    <tr><td>High-risk systems in Annex III</td><td>2 December 2027</td></tr>
  </tbody>
</table>
<p>A website chatbot that answers questions about your offers is not, in principle, a high-risk system. The rule that applies to it is transparency, and it already applies.</p>
<h2>Three checks for your chat</h2>
<ul>
  <li><strong>The first message</strong> says it is an automated assistant, for example “I’m the firm’s virtual assistant”.</li>
  <li><strong>The displayed name</strong> does not suggest a human adviser.</li>
  <li><strong>Handing over to a human</strong> is possible and explained: call back, email or booking an appointment.</li>
</ul>`,
    sources: [
      { label: "Regulation (EU) 2024/1689 on artificial intelligence, Articles 50 and 113 (EUR-Lex)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=OJ:L_202401689" },
      { label: "Regulation (EU) 2026/1744 of 8 July 2026, the Digital Omnibus (EUR-Lex)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=OJ:L_202601744" }
    ]
  },
  {
    id: "cnil-sanctions-2025-donnees-chat",
    slug: "cnil-fines-2025-chat-data",
    category: "Personal data",
    title: "CNIL fines in 2025: without the two record fines, the average falls to €146,000",
    description: "France’s data protection authority issued 83 sanctions totalling €486.8 million in 2025. Two fines account for almost 98% of it. What the remaining average tells small businesses that collect leads.",
    date: PUBLISHED,
    readingMinutes: 5,
    insight: {
      title: "The 2025 record total hides a reality at small-business scale",
      value: "€146,167",
      label: "average fine across the other 81 sanctions of 2025, once the two fines of €325 million and €150 million are removed",
      body: "The CNIL issued 83 sanctions in 2025 for a total of €486,839,500. Two fines of €325 million and €150 million, against two major players, make up 97.6% of that total.",
      formula: "(€486,839,500 − €325,000,000 − €150,000,000) ÷ (83 − 2) = €146,167",
      source: "Source: CNIL, “Bilan des sanctions 2025”, 9 February 2026.",
      caveat: "An arithmetic mean: it is still pulled up by a few large amounts, and many sanctions are much smaller. It does not predict the size of a sanction for your business."
    },
    body: `
<p>A chat that collects a name, an email address or a phone number collects personal data. The GDPR applies, and in France the CNIL enforces it.</p>
<h2>What the 2025 figures say</h2>
<p>In 2025, the CNIL carried out 323 inspections and issued 259 decisions, including 83 sanctions totalling €486,839,500. Two fines of €325 million and €150 million account for most of it. Without them, the other 81 sanctions add up to about €11.8 million, or €146,167 on average.</p>
<h2>The rules to apply to a chat</h2>
<ul>
  <li><strong>Ask only for what you need</strong>: a name and one way to get back in touch are enough for a call back.</li>
  <li><strong>Inform</strong> visitors, at the moment you collect their details, how they will be used and what their rights are, with a link to your privacy policy.</li>
  <li><strong>Set a retention period</strong> for conversations and for leads that do not become clients.</li>
  <li><strong>Check trackers</strong>: if the tool sets non-essential cookies, consent rules apply.</li>
  <li><strong>Put a contract in place with your provider</strong>: it processes data on your behalf, which requires an agreement that meets Article 28 of the GDPR.</li>
</ul>
<h2>Why the average matters more than the record</h2>
<p>Fines of several hundred million euros target very large companies. For a small business, the risk shows in ordinary sanctions, and above all in visitor trust: a form that asks for too much information drives people away before any legal question arises.</p>`,
    sources: [
      { label: "CNIL, “Bilan des sanctions 2025”, 9 February 2026 (in French)", url: "https://www.cnil.fr/fr/bilan-sanctions-2025" },
      { label: "CNIL, 2025 annual report, 18 May 2026 (in French)", url: "https://www.cnil.fr/fr/rapport-annuel-2025" }
    ]
  },
  {
    id: "reponse-immediate-10-minutes",
    slug: "ten-minute-response-expectation",
    category: "Responsiveness",
    title: "Your visitors expect a reply within 10 minutes. At weekends, it comes 384 times later",
    description: "For most consumers, an immediate reply to a sales question means 10 minutes or less. Against a 64-hour weekend, the gap is huge.",
    date: PUBLISHED,
    readingMinutes: 4,
    insight: {
      title: "A weekend wait goes far beyond what your visitors call “immediate”",
      value: "384×",
      label: "longer than 10 minutes: the wait for an enquiry received on Friday at 5 pm and handled on Monday at 9 am",
      body: "In a 2018 HubSpot survey, 82% of consumers rated an immediate response as important or very important for a sales or marketing question, and 62% defined “immediate” as 10 minutes or less for a sales question.",
      formula: "64 h × 60 min ÷ 10 min = 384",
      source: "Source: HubSpot Research, Consumer Customer Support Survey, Q2 2018, 1,000 consumers.",
      caveat: "A 2018 survey of consumers in the US, UK, Australia and Singapore, not France. It measures stated expectations, not buying behaviour."
    },
    body: `
<p>“Immediate” does not mean the same thing to you and to your visitors. For a business, replying the same day is fast. For a visitor comparing three providers on a Sunday evening, it is slow.</p>
<h2>What consumers call “immediate”</h2>
<p>HubSpot surveyed 1,000 consumers in 2018. For a sales or marketing question, 82% rated an immediate response as important or very important. For a customer service question, the share reached 90%.</p>
<table>
  <thead><tr><th>Type of question</th><th>“Immediate” = 10 min or less</th></tr></thead>
  <tbody>
    <tr><td>Customer service</td><td>60%</td></tr>
    <tr><td>Sales</td><td>62%</td></tr>
    <tr><td>Marketing</td><td>46%</td></tr>
  </tbody>
</table>
<h2>Expectations that are spreading</h2>
<p>More recently, Zendesk’s CX Trends 2026 study, covering 6,182 consumers in 22 countries including France, says 74% now expect service to be available around the clock thanks to AI. Zendesk sells customer service software: read the figure as a stated trend.</p>
<h2>Reply within 10 minutes, even when closed</h2>
<ul>
  <li><strong>An immediate reply does not have to be a complete one</strong>: confirming the request and saying when the visitor will be called back already counts.</li>
  <li><strong>Answer recurring questions</strong> without waiting: opening hours, service area, starting prices, documents to prepare.</li>
  <li><strong>Keep a record</strong> of every exchange so whoever calls back knows what it is about.</li>
</ul>`,
    sources: [
      { label: "HubSpot, “Live chat and the go-to-market flaw”, with results of the 2018 Consumer Customer Support Survey", url: "https://blog.hubspot.com/sales/live-chat-go-to-market-flaw" },
      { label: "Zendesk, CX Trends 2026 press release, 18 November 2025", url: "https://www.zendesk.com/newsroom/press-releases/contextual-intelligence-becomes-the-new-standard-for-exceptional-customer-experience-in-2026/" }
    ]
  },
  {
    id: "ia-generative-francais-2025",
    slug: "generative-ai-use-france-2025",
    category: "Usage",
    title: "48% of French people use generative AI: your visitors already know how to talk to a chat",
    description: "The share of French people using generative AI grew 2.4-fold in two years. What that changes for the chat on your website.",
    date: PUBLISHED,
    readingMinutes: 4,
    insight: {
      title: "Generative AI use more than doubled in two years",
      value: "2.4×",
      label: "between 2023 and 2025: the share of people aged 12 and over in France using generative AI rose from 20% to 48%",
      body: "The Baromètre du numérique measures this every year: 20% in 2023, 33% in 2024, 48% in 2025. Among 18 to 24-year-olds, the share reaches 85%.",
      formula: "48% ÷ 20% = 2.4; 48 − 20 = +28 points",
      source: "Source: Baromètre du numérique, 2026 edition, CREDOC for Arcep, Arcom, CGE and ANCT; 4,145 people surveyed in June 2025.",
      caveat: "The barometer measures stated use of generative AI tools in general, not the use of chats on business websites."
    },
    body: `
<p>A few years ago, a chat on a website mostly meant rigid menus and answers that missed the point. Your visitors have since picked up other habits.</p>
<h2>Now the majority among young adults</h2>
<p>According to the 2026 Baromètre du numérique, carried out by CREDOC for Arcep, Arcom, the Conseil général de l’économie and ANCT, 48% of people in France aged 12 and over used generative AI in 2025. Among users, ChatGPT is the most used tool, at 63%.</p>
<table>
  <thead><tr><th>Year</th><th>Generative AI users</th></tr></thead>
  <tbody>
    <tr><td>2023</td><td>20%</td></tr>
    <tr><td>2024</td><td>33%</td></tr>
    <tr><td>2025</td><td>48%</td></tr>
  </tbody>
</table>
<h2>What it changes for your site</h2>
<ul>
  <li><strong>Your visitors ask questions in full sentences</strong>, not keywords. A chat has to understand “Are you open on Saturday?” as a question about your opening hours.</li>
  <li><strong>They expect a precise answer</strong>, based on your actual offers, not a link back to the home page.</li>
  <li><strong>They know they are talking to an AI</strong>, and accept it all the more readily when it says so clearly.</li>
</ul>
<h2>The limit to keep in mind</h2>
<p>Just over half of people do not use generative AI yet. A chat has to stay simple for them: one question, one answer, and a clear way to be called back by a person.</p>`,
    sources: [
      { label: "Arcep, Baromètre du numérique, 2026 edition (infographic, in French)", url: "https://www.arcep.fr/uploads/tx_gspublication/barometre-du-numerique-edition-2026_INFOGRAPHIE.pdf" }
    ]
  },
  {
    id: "accessibilite-eaa-microentreprises",
    slug: "accessibility-act-microenterprise-exemption",
    category: "Regulation",
    title: "96.5% of French businesses are exempt from the Accessibility Act’s service rules. Your chat should still be usable",
    description: "The European Accessibility Act has applied since 28 June 2025, with an exemption for microenterprises providing services. Insee’s figures show how many businesses that covers, and why accessibility still pays.",
    date: PUBLISHED_2,
    readingMinutes: 5,
    insight: {
      title: "The microenterprise exemption covers almost every French business",
      value: "96.5%",
      label: "of French enterprises are microenterprises in Insee’s 2023 count, the same definition the Accessibility Act uses for its exemption",
      body: "The Act exempts microenterprises providing services: fewer than 10 people and an annual turnover or balance sheet of no more than €2 million. Insee counts 4,995,894 such enterprises out of 5,178,283 in the market sectors outside agriculture and finance.",
      formula: "4,995,894 ÷ 5,178,283 = 96.5%",
      source: "Sources: Directive (EU) 2019/882, Articles 3(23), 4(5) and 31; Insee, “L’essentiel sur… les entreprises”, 26 January 2026 (2023 data).",
      caveat: "The exemption covers services in the Act’s scope, not products, and Insee’s count excludes agriculture and finance. Being exempt does not make an inaccessible chat a good idea. Not legal advice."
    },
    body: `
<p>Since 28 June 2025, the European Accessibility Act has required many digital services sold to consumers, including e-commerce, to be accessible to people with disabilities. France transposed it through the law of 9 March 2023 and a decree of 9 October 2023.</p>
<h2>Who is exempt</h2>
<p>Article 4(5) of the directive exempts microenterprises providing services. Article 3(23) defines a microenterprise as one that employs fewer than 10 people and has an annual turnover or an annual balance sheet total of no more than €2 million. French law uses the same thresholds.</p>
<p>That is exactly Insee’s definition of a microenterprise. In 2023, Insee counted 5,178,283 enterprises in the market sectors outside agriculture and finance, of which 4,995,894 were microenterprises.</p>
<table>
  <thead><tr><th>Category (Insee, 2023)</th><th>Enterprises</th></tr></thead>
  <tbody>
    <tr><td>Microenterprises</td><td>4,995,894</td></tr>
    <tr><td>Small and medium-sized (excluding micro)</td><td>174,614</td></tr>
    <tr><td>Intermediate-sized</td><td>7,442</td></tr>
    <tr><td>Large</td><td>333</td></tr>
  </tbody>
</table>
<h2>Why accessibility still matters for your chat</h2>
<p>An exemption is not a reason to shut people out. A visitor who uses a screen reader or a keyboard, or who has poor eyesight, is still a potential client, and a chat window they cannot operate costs you that lead.</p>
<ul>
  <li><strong>Keyboard access</strong>: the chat opens, can be used and closes without a mouse, and Escape closes it.</li>
  <li><strong>Labels</strong>: the chat button and fields have text a screen reader can announce.</li>
  <li><strong>Contrast and size</strong>: text stays readable, and the window does not hide the whole page on a phone.</li>
  <li><strong>Another way to reach you</strong>: a phone number or form stays available for anyone who prefers it.</li>
</ul>
<p>If your business grows past 10 people or €2 million, the rules apply in full. Choosing an accessible tool now saves you from changing later.</p>`,
    sources: [
      { label: "Directive (EU) 2019/882 on the accessibility requirements for products and services (EUR-Lex)", url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32019L0882" },
      { label: "Law no. 2023-171 of 9 March 2023, Article 16, Légifrance (in French)", url: "https://www.legifrance.gouv.fr/jorf/article_jo/JORFARTI000047281814" },
      { label: "Insee, “L’essentiel sur… les entreprises”, 26 January 2026 (in French)", url: "https://www.insee.fr/fr/statistiques/5424748" }
    ]
  },
  {
    id: "entreprises-sans-salarie",
    slug: "businesses-without-employees",
    category: "Availability",
    title: "76% of French businesses have no employee to answer the phone",
    description: "Three quarters of active French businesses have no salaried staff. When the owner is with a client, nobody picks up. What that means for enquiries from your website.",
    date: PUBLISHED_2,
    readingMinutes: 4,
    insight: {
      title: "In three businesses out of four, the person who answers is also the person who works",
      value: "76.2%",
      label: "of economically active French businesses had no employee in 2024",
      body: "Insee counted 5,987,885 economically active legal units in industry, construction, trade and services in 2024. 4,562,923 of them had no salaried employee.",
      formula: "4,562,923 ÷ 5,987,885 = 76.2%",
      source: "Source: Insee, “Nombre d’unités légales et d’établissements par tranche d’effectif salarié”, 2024 data, published 23 July 2026.",
      caveat: "A business without employees may still have a partner, a relative or a service answering for it. The figure counts legal units, not people, and includes very small activities."
    },
    body: `
<p>A plumber on a job, a physiotherapist with a patient, a consultant in a meeting: when a business has no staff, the phone rings while the owner is working. Most French businesses are in exactly that position.</p>
<h2>What Insee counts</h2>
<p>In 2024, Insee counted 5,987,885 economically active legal units in France in industry, construction, trade and services. 4,562,923 of them had no salaried employee: 76.2%. The year before, the count was 4,317,601 out of 5,741,792.</p>
<p>Insee already noted in 2022 that three quarters of microenterprises have no employee at all.</p>
<h2>The real opening hours of a one-person business</h2>
<p>For a business with no staff, “opening hours” means the hours when the owner is free to answer, which is fewer than the hours they work. Every hour spent with a client is an hour when a website visitor with a question gets no reply.</p>
<h2>Three ways to answer without stopping work</h2>
<ul>
  <li><strong>Say when you will call back</strong>: a clear message on your site or voicemail beats silence.</li>
  <li><strong>Batch your call backs</strong>: set two slots a day to return calls and enquiries, and show them on your site.</li>
  <li><strong>Let a chat agent take the first step</strong>: it answers common questions straight away and collects the details you need to call back, without interrupting you.</li>
</ul>`,
    sources: [
      { label: "Insee, number of legal units and establishments by employee size band, 2024 (in French)", url: "https://www.insee.fr/fr/statistiques/9027479" },
      { label: "Insee, Les entreprises en France, 2022 edition: three quarters of microenterprises have no employee (in French)", url: "https://www.insee.fr/fr/statistiques/6666957?sommaire=6667157" }
    ]
  },
  {
    id: "conservation-donnees-prospects-3-ans",
    slug: "keeping-lead-data-three-years",
    category: "Personal data",
    title: "A lead collected by your chat today can be kept until 25 September 2029",
    description: "The CNIL’s guidance lets businesses keep prospect data for three years from collection or the prospect’s last contact. How to apply that to leads from a website chat.",
    date: PUBLISHED_2,
    readingMinutes: 4,
    insight: {
      title: "Three years, counted from the prospect’s last move, not yours",
      value: "1,096 days",
      label: "the CNIL’s three-year guideline for a lead collected on 25 September 2026, unless the prospect gets back in touch",
      body: "The CNIL says prospect data can be kept for three years from collection or from the last contact coming from the prospect, such as a reply or a click on a link. An email you send does not restart the clock, and neither does the prospect simply opening it.",
      formula: "25 September 2026 + 3 years = 25 September 2029, i.e. 1,096 days (2028 is a leap year)",
      source: "Source: CNIL, Q&A on the référentiels for managing commercial activities, 28 January 2022.",
      caveat: "CNIL référentiels are guidance, not binding rules, and a lead who becomes a client falls under client-data rules instead. Not legal advice."
    },
    body: `
<p>Every contact your chat collects is personal data. The GDPR requires you to set a retention period, and the CNIL gives a clear benchmark for prospects.</p>
<h2>The CNIL’s benchmark</h2>
<p>In its guidance on managing commercial activities, the CNIL says prospect data can be kept for three years from collection or from the last contact coming from the prospect. It gives a click on a link in an email as an example of such contact. Its sanction decisions add that simply opening an email does not count.</p>
<h2>What that means for a lead from your chat</h2>
<table>
  <thead><tr><th>Situation</th><th>Keep until</th></tr></thead>
  <tbody>
    <tr><td>Lead collected on 25 September 2026, no further contact</td><td>25 September 2029</td></tr>
    <tr><td>The same lead replies to you on 10 March 2027</td><td>10 March 2030</td></tr>
    <tr><td>The lead becomes a client</td><td>Client-data rules apply</td></tr>
  </tbody>
</table>
<h2>Four good habits</h2>
<ul>
  <li><strong>Date every lead</strong> when it arrives, and record the prospect’s last contact.</li>
  <li><strong>Review once a year</strong> and delete leads older than three years without any contact from them.</li>
  <li><strong>Keep the conversation only as long as needed</strong>: the chat transcript does not need to outlive the lead.</li>
  <li><strong>Say it up front</strong>: tell visitors how long you keep their details, in the chat and in your privacy policy.</li>
</ul>`,
    sources: [
      { label: "CNIL, Q&A on the référentiels for managing commercial activities, 28 January 2022 (in French)", url: "https://www.cnil.fr/fr/questions-reponses-sur-les-referentiels-relatifs-la-gestion-des-activites-commerciales-et-des" },
      { label: "CNIL, €80,000 sanction against CALOGA: opening an email is not a contact from the prospect (in French)", url: "https://www.cnil.fr/fr/sanction-de-80-000-euros-societe-caloga" }
    ]
  },
  {
    id: "conges-payes-independant-fermeture",
    slug: "paid-leave-closed-hours",
    category: "Availability",
    title: "With five weeks off, a one-person business is closed 79% of the year",
    description: "France’s standard five weeks of paid leave, applied to a business with nobody else to answer, pushes its closed hours from 77% to 79% of the year. The calculation and how to handle the gap.",
    date: PUBLISHED_2,
    readingMinutes: 4,
    insight: {
      title: "Holidays turn a closed evening into a closed month",
      value: "79.3%",
      label: "of the hours in 2026 fall outside opening hours for a 9-to-5 business that also takes five weeks off",
      body: "French employees earn 2.5 working days of paid leave per month, 30 working days or five weeks a year. Five weeks is 25 weekdays. Taken off 2026’s 252 working days, that leaves 227 days of 8 hours.",
      formula: "1 − (252 − 25) × 8 h ÷ 8,760 h = 1 − 1,816 ÷ 8,760 = 79.3%",
      source: "Sources: Service-Public.gouv.fr, paid leave (fiche F2258); 2026 calendar and public holidays from Service-Public.fr.",
      caveat: "The self-employed have no statutory paid leave; five weeks is used here as a common benchmark. A business with staff can rotate holidays and stay open."
    },
    body: `
<p>The self-employed have no legal entitlement to paid leave, but most take holidays, and the French benchmark is five weeks. For a business where nobody else can answer, those weeks are weeks without a reply.</p>
<h2>The calculation</h2>
<p>An employee earns 2.5 working days (jours ouvrables) of leave per month, 30 a year: five weeks. Counted in weekdays, five weeks is 25 days.</p>
<table>
  <thead><tr><th>2026, open 9 am to 5 pm</th><th>Working days</th><th>Share of hours closed</th></tr></thead>
  <tbody>
    <tr><td>No holidays</td><td>252</td><td>77.0%</td></tr>
    <tr><td>Five weeks off</td><td>227</td><td>79.3%</td></tr>
  </tbody>
</table>
<p>The difference looks small over a year, but it is concentrated: two or three weeks in August and one at Christmas, when enquiries do not stop.</p>
<h2>Before you go on holiday</h2>
<ul>
  <li><strong>Say it on your site</strong>: show the dates you are away and when you will reply.</li>
  <li><strong>Update your voicemail and email auto-reply</strong> with the same dates.</li>
  <li><strong>Keep answering the easy questions</strong>: a chat agent can reply about your services and prices, and collect contact details for when you are back.</li>
  <li><strong>Plan your return</strong>: block the first morning back for the leads that came in while you were away.</li>
</ul>`,
    sources: [
      { label: "Service-Public.gouv.fr, “Congés payés du salarié dans le secteur privé” (fiche F2258, in French)", url: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2258" },
      HOLIDAYS_SOURCE
    ]
  },
  {
    id: "ecart-ia-francais-entreprises",
    slug: "ai-adoption-gap-people-businesses",
    category: "Usage",
    title: "People in France use AI 2.7 times as often as French businesses do",
    description: "48% of people in France use generative AI, but only 18% of French businesses with 10 or more employees use any AI. Your visitors are ahead of most companies they deal with.",
    date: PUBLISHED_2,
    readingMinutes: 4,
    insight: {
      title: "Your customers adopted AI faster than the businesses they buy from",
      value: "2.7×",
      label: "the share of people in France using generative AI (48% in 2025) compared with French businesses of 10+ employees using AI (18% in 2025)",
      body: "The 2026 Baromètre du numérique found that 48% of people aged 12 and over used generative AI in 2025. Insee found that 18% of French businesses with 10 or more employees used at least one AI technology in 2025, up 8 points in a year.",
      formula: "48% ÷ 18% = 2.7",
      source: "Sources: Baromètre du numérique 2026 (CREDOC for Arcep, Arcom, CGE and ANCT); Insee Première no. 2120, 21 July 2026; Eurostat, isoc_eb_ai.",
      caveat: "The two surveys measure different things: personal use of generative AI versus a business’s use of any AI technology. Businesses under 10 employees are not in Insee’s figure."
    },
    body: `
<p>Your visitors have got used to asking questions to an AI. Most businesses have not caught up.</p>
<h2>Two surveys, one gap</h2>
<ul>
  <li><strong>People</strong>: according to the Baromètre du numérique 2026, 48% of people in France aged 12 and over used generative AI in 2025, up from 20% in 2023.</li>
  <li><strong>Businesses</strong>: according to Insee, 18% of French businesses with 10 or more employees used at least one AI technology in 2025, up from about 10% in 2024. Among businesses with 10 to 49 employees, the share is 15%.</li>
</ul>
<p>Across the EU, Eurostat puts business use of AI at 20% in 2025. France is slightly behind the European average.</p>
<h2>Why businesses hold back</h2>
<p>Among French businesses that do not use AI, 71% say they do not see the point, according to Insee. For a small business, the use has to be concrete: saving time or winning clients.</p>
<h2>Where it makes sense to start</h2>
<p>Answering visitors is one of the simplest places to start, because the demand already exists: people arrive with questions, often outside opening hours. A chat agent answers the usual questions and passes on the contact details. Your team keeps the conversations that need a person.</p>`,
    sources: [
      { label: "Insee Première no. 2120, use of AI in businesses, 21 July 2026 (in French)", url: "https://www.insee.fr/fr/statistiques/9025878?sommaire=7667330" },
      { label: "Eurostat, “Use of artificial intelligence in enterprises”", url: "https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Use_of_artificial_intelligence_in_enterprises" },
      { label: "Arcep, Baromètre du numérique, 2026 edition (infographic, in French)", url: "https://www.arcep.fr/uploads/tx_gspublication/barometre-du-numerique-edition-2026_INFOGRAPHIE.pdf" }
    ]
  },
  {
    id: "taux-conversion-landing-page",
    slug: "landing-page-conversion-rate",
    category: "Conversion",
    title: "934 out of 1,000 visitors leave a typical landing page without getting in touch",
    description: "The median landing page converts 6.6% of its visitors. What happens to the other 93.4%, and how a chat can give some of them a reason to stay.",
    date: PUBLISHED_2,
    readingMinutes: 4,
    insight: {
      title: "Most visitors leave without a word",
      value: "934",
      label: "visitors out of every 1,000 leave a median landing page without converting",
      body: "Unbounce analysed 41,000 landing pages with 464 million visits and 57 million conversions in the fourth quarter of 2024. The median conversion rate across industries was 6.6%.",
      formula: "1,000 × (1 − 6.6%) = 934",
      source: "Source: Unbounce, Conversion Benchmark Report, Q4 2024 data, updated 4 March 2025.",
      caveat: "A median across industries and page types, measured by a landing page vendor, mostly on English-speaking sites. Your own rate depends on your traffic and offer."
    },
    body: `
<p>Most visitors to a page leave without filling in the form, calling or booking. That is normal, and a benchmark shows how normal.</p>
<h2>What the benchmark says</h2>
<p>Unbounce studied 41,000 landing pages in the fourth quarter of 2024: 464 million visits and 57 million conversions. The median conversion rate across industries was 6.6%. On 1,000 visitors, that is 66 who convert and 934 who leave.</p>
<h2>Why visitors leave</h2>
<p>Some are not ready, some came by mistake, some compare several offers. But a share of them leave because of an unanswered question: the price, a delay, whether you cover their area. A form does not answer that question; it asks them to wait.</p>
<h2>Give the hesitant a quicker path</h2>
<ul>
  <li><strong>Answer the objections on the page</strong>: prices, delays and area served, in plain words.</li>
  <li><strong>Offer a low-effort next step</strong>: a question in a chat is easier than a form with eight fields.</li>
  <li><strong>Measure it separately</strong>: count chat leads apart from form leads, so you know what the chat really adds.</li>
</ul>
<p>Even a single percentage point matters: on 1,000 visitors, it is 10 extra leads.</p>`,
    sources: [
      { label: "Unbounce, “Average conversion rates for landing pages”, updated 4 March 2025", url: "https://unbounce.com/average-conversion-rates-landing-pages/" },
      { label: "Unbounce, Conversion Benchmark Report", url: "https://unbounce.com/conversion-benchmark-report/" }
    ]
  },
  {
    id: "reponse-emails-entreprises",
    slug: "email-response-times",
    category: "Responsiveness",
    title: "Companies took 73 times longer than the 10 minutes customers expect to answer an email",
    description: "In a test of 1,000 companies, 62% never answered a customer email, and the others took 12 hours 10 minutes on average. Set against what customers call an immediate reply, the gap is large.",
    date: PUBLISHED_2,
    readingMinutes: 4,
    insight: {
      title: "Between silence and a half-day wait",
      value: "73×",
      label: "longer than the 10 minutes most people call “immediate”: the 12 h 10 min average email response time measured by SuperOffice",
      body: "In 2018, SuperOffice emailed 1,000 companies with a customer question. 62% never replied. Among those that did, the average response time was 12 hours 10 minutes. In HubSpot’s 2018 survey, 62% of consumers defined an immediate reply to a sales question as 10 minutes or less.",
      formula: "12 h 10 min = 730 min; 730 ÷ 10 = 73",
      source: "Sources: SuperOffice, Customer Service Benchmark Report, 2018; HubSpot Research, Consumer Customer Support Survey, Q2 2018.",
      caveat: "Both studies date from 2018 and were not run in France. No more recent public benchmark of company email response times was found."
    },
    body: `
<p>Email feels like a safe channel: the request is written, nothing gets lost. In practice, many businesses answer late, or not at all.</p>
<h2>What SuperOffice measured</h2>
<p>In 2018, SuperOffice sent a customer service email to 1,000 companies and timed the answers.</p>
<ul>
  <li><strong>62%</strong> never replied.</li>
  <li><strong>90%</strong> did not acknowledge receipt.</li>
  <li>The average response time was <strong>12 hours 10 minutes</strong>.</li>
</ul>
<h2>Set against what customers expect</h2>
<p>The same year, HubSpot asked 1,000 consumers what “immediate” means: 62% put it at 10 minutes or less for a sales question. The average measured by SuperOffice is 73 times that.</p>
<table>
  <thead><tr><th>Out of 100 emails sent</th><th>Result</th></tr></thead>
  <tbody>
    <tr><td>No reply at all</td><td>62</td></tr>
    <tr><td>A reply, after 12 h 10 min on average</td><td>38</td></tr>
  </tbody>
</table>
<h2>Closing the gap</h2>
<ul>
  <li><strong>Acknowledge every request</strong> straight away, with a realistic time for the full answer.</li>
  <li><strong>Answer the frequent questions without waiting</strong>: a chat agent can do this at any hour.</li>
  <li><strong>Keep email for what needs thought</strong>, and track how long your replies really take.</li>
</ul>`,
    sources: [
      { label: "SuperOffice, “Customer Service Benchmark Report”, 2018", url: "https://www.superoffice.co.uk/resources/articles/customer-service-study/" },
      { label: "HubSpot, “Live chat and the go-to-market flaw”, with results of the 2018 Consumer Customer Support Survey", url: "https://blog.hubspot.com/sales/live-chat-go-to-market-flaw" }
    ]
  },
  {
    id: "appels-manques-messagerie",
    slug: "missed-calls-voicemail",
    category: "Responsiveness",
    title: "44% of calls to businesses never reach a person, and the famous voicemail statistic has no source",
    description: "A 2026 analysis of more than 70 million calls finds that only 56% are answered by a person. Meanwhile, the “80% of callers don’t leave a voicemail” figure repeated everywhere cannot be traced to any study.",
    date: PUBLISHED_2,
    readingMinutes: 5,
    insight: {
      title: "Almost one call in two ends without a conversation",
      value: "44%",
      label: "of calls to businesses are not answered by a person, according to an analysis of more than 70 million calls",
      body: "Invoca’s 2026 benchmark report, based on more than 70 million calls, finds that across all industries 56% of calls to businesses are answered by a person. The rest go to voicemail, a menu or nowhere.",
      formula: "100% − 56% = 44%",
      source: "Source: Invoca, Lead Conversion Benchmarks Report, July 2026.",
      caveat: "Invoca sells call-tracking software, and its data covers mostly US businesses of all sizes, not small French ones."
    },
    body: `
<p>“62% of calls to small businesses go unanswered.” “80% of callers sent to voicemail don’t leave a message.” These figures appear in countless articles. We tried to trace them.</p>
<h2>Where the popular figures come from</h2>
<ul>
  <li><strong>The 62%</strong> comes from a 2016 study by 411 Locals, a marketing agency, covering 85 businesses over 30 days. It counts calls that went to voicemail as unanswered: 37.8% answered, 37.8% voicemail, 24.3% no response.</li>
  <li><strong>The 80%</strong> could not be traced to any study. The earliest mention found, from 2014, attributes it to “statistics from Forbes” without a reference.</li>
</ul>
<h2>A more solid figure</h2>
<p>Invoca’s 2026 benchmark report, based on more than 70 million calls, finds that 56% of calls to businesses are answered by a person, so 44% are not. It is a vendor study, mostly American, but it rests on a large and documented sample.</p>
<h2>What it means for a small business</h2>
<p>If nearly half of calls do not reach a person across businesses of all sizes, a one-person business busy with a client is unlikely to do better. And a caller who reaches voicemail can simply try the next business on the list.</p>
<ul>
  <li><strong>Show when you pick up</strong>, next to your phone number.</li>
  <li><strong>Offer a channel that answers straight away</strong> when you cannot: a chat that replies and takes details for a call back.</li>
  <li><strong>Check your own numbers</strong>: your phone provider can often show how many calls you miss.</li>
</ul>`,
    sources: [
      { label: "Invoca, Lead Conversion Benchmarks Report, July 2026", url: "https://www.invoca.com/reports/the-invoca-call-conversion-industry-benchmarks-report-2025" },
      { label: "411 Locals, “Small business owners don’t answer 62% of phone calls”, 18 January 2016", url: "https://411locals.us/small-business-owners-dont-answer-62-of-phone-calls/" },
      { label: "CRM magazine, “Business voicemail goes unanswered”, 1 November 2014", url: "https://www.destinationcrm.com/Articles/CRM-Insights/Insight/Business-Voicemail-Goes-Unanswered-100080.aspx" }
    ]
  },
  {
    id: "temps-en-ligne-francais",
    slug: "time-spent-online-france",
    category: "Usage",
    title: "People in France now spend over 1,000 hours a year online",
    description: "Médiamétrie measured more than three hours online per day in 2025, a record, with mobile accounting for 80% of that time. Over a year, that is more than 1,095 hours, most of them on a phone.",
    date: PUBLISHED_2,
    readingMinutes: 4,
    insight: {
      title: "Your visitors’ time online adds up to more than half your opening hours",
      value: "1,095 h",
      label: "a year spent online, at the more than 3 hours a day Médiamétrie measured in 2025: 54% of the 2,016 hours a 9-to-5 business is open",
      body: "Médiamétrie’s L’Année Internet 2025 found that people in France now spend more than 3 hours a day online, a record, and nearly 5 hours for 15 to 24-year-olds. Mobile accounts for 80% of time online.",
      formula: "3 h × 365 days = 1,095 h; 1,095 ÷ 2,016 = 54%; 80% on mobile = 876 h",
      source: "Source: Médiamétrie, L’Année Internet 2025, 12 February 2026.",
      caveat: "“More than 3 hours” makes 1,095 hours a floor. The exact population behind the average is not stated on Médiamétrie’s summary page, and the study does not say at what time of day people are online."
    },
    body: `
<p>Time online in France keeps rising. According to Médiamétrie, it passed three hours a day in 2025.</p>
<h2>What Médiamétrie measured</h2>
<ul>
  <li><strong>More than 3 hours a day</strong> online on average, a record. Trade press reporting the presentation gives 3 h 01, up from 2 h 40 in 2024.</li>
  <li><strong>Nearly 5 hours</strong> for 15 to 24-year-olds.</li>
  <li><strong>48.6 million</strong> people online every day.</li>
  <li><strong>80%</strong> of time online spent on mobile.</li>
</ul>
<h2>Over a year</h2>
<p>At three hours a day, that is 1,095 hours a year, of which 876 are on a phone. A business open 9 to 5 on weekdays is open 2,016 hours in 2026: its visitors’ time online adds up to more than half of that. Médiamétrie does not say at what time of day people are online, so check your own analytics to see how much of your traffic arrives after hours.</p>
<h2>What to take from it</h2>
<ul>
  <li><strong>Design for the phone first</strong>: that is where most of the time is spent.</li>
  <li><strong>Expect questions outside your hours</strong> and give visitors a way to get an answer then.</li>
  <li><strong>Keep it short</strong>: on a phone, a question in a chat is easier than a long form.</li>
</ul>`,
    sources: [
      { label: "Médiamétrie, L’Année Internet 2025, 12 February 2026 (in French)", url: "https://www.mediametrie.fr/fr/audiences-et-resultats/internet/lannee-internet" },
      { label: "CB News, report on Médiamétrie’s L’Année Internet 2025, 12 February 2026 (in French)", url: "https://www.cbnews.fr/etudes/internet-francais-accelere-plus-temps-plus-mobile-plus-ia-mediametrie" }
    ]
  },
  {
    id: "calendrier-2027-ponts",
    slug: "calendar-2027-bridges",
    category: "Availability",
    title: "2027 has two more working days than 2026, and two 112-hour bridge weekends",
    description: "Four public holidays fall at the weekend in 2027, giving 254 working days. But Ascension Day and 11 November fall on a Thursday: take the Friday off and your business is closed 112 hours in a row.",
    date: PUBLISHED_2,
    readingMinutes: 4,
    insight: {
      title: "A Thursday holiday plus a bridge day makes the longest closure of the year",
      value: "112 h",
      label: "closed in a row from Wednesday 5 pm to Monday 9 am if you take the Friday after Ascension Day (6 May 2027) or 11 November 2027",
      body: "In 2027, 1 May, 8 May and Christmas fall on a Saturday and 15 August on a Sunday, so only 7 public holidays fall on a weekday. That gives 254 working days, two more than 2026. Ascension Day and 11 November both fall on a Thursday.",
      formula: "Wednesday 5 pm → Monday 9 am = 4 × 24 h + 16 h = 112 h",
      source: "2027 calendar; French public holidays (Service-Public.fr); Easter Sunday 2027 on 28 March.",
      caveat: "Bridge days are not public holidays: whether you close is your choice. Without the bridge, the longest 2027 closures last 88 hours, as in 2026."
    },
    body: `
<p>Planning 2027 starts with the calendar. The good news: more working days. The trap: two Thursdays that invite a long weekend.</p>
<h2>2027 in numbers</h2>
<table>
  <thead><tr><th></th><th>2026</th><th>2027</th></tr></thead>
  <tbody>
    <tr><td>Weekdays</td><td>261</td><td>261</td></tr>
    <tr><td>Public holidays on a weekday</td><td>9</td><td>7</td></tr>
    <tr><td>Working days</td><td>252</td><td>254</td></tr>
    <tr><td>Hours closed (9 am to 5 pm)</td><td>6,744</td><td>6,728</td></tr>
    <tr><td>Share of the year closed</td><td>77.0%</td><td>76.8%</td></tr>
  </tbody>
</table>
<p>In 2027, 1 May, 8 May and Christmas Day fall on a Saturday, and 15 August on a Sunday. Easter Monday is 29 March, Ascension Day 6 May and Whit Monday 17 May.</p>
<h2>The two bridges</h2>
<p>Ascension Day (Thursday 6 May) and Armistice Day (Thursday 11 November) invite a bridge on the Friday. With the bridge, the office closes on Wednesday at 5 pm and reopens on Monday at 9 am: 112 hours without an answer. Without it, the longest closures are the 88-hour long weekends, such as Easter or All Saints’ Day.</p>
<h2>Prepare now</h2>
<ul>
  <li><strong>Decide your bridges early</strong> and put them on your site.</li>
  <li><strong>Check who answers</strong> during each long weekend.</li>
  <li><strong>Plan the Monday after</strong>: that is when four days of enquiries arrive at once.</li>
</ul>`,
    sources: [
      { label: "Service-Public.fr, “Jours fériés et ponts dans le secteur privé”: list of French public holidays (in French)", url: "https://www.service-public.fr/particuliers/vosdroits/F2405" }
    ]
  }
];
