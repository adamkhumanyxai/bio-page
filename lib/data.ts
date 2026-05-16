export const TIMELINE = [
  {
    era: "PBX · The copper years",
    years: "2004 – 2008",
    industry: "On-prem PBX, copper PSTN, beige racks bolted to the wall. IT owned the closet, the install was the product, and every quote was a fax away.",
    role: "Junior admin → Sales Support → Channel Manager · IPL Communications · Sydney",
    win: "Started as a junior admin clerk shadowing senior sales leaders. Promoted to Channel Manager supporting 75+ Avaya and Alcatel resellers across NSW. Front and centre for the cutover from TDM to IP.",
    artifact: "Avaya. Alcatel. Punch-down blocks. Quote sheets in triplicate. The first time I sat behind a sales leader and took notes.",
    current: false,
  },
  {
    era: "IP Telephony & UC",
    years: "2008 – 2013",
    industry: "SIP eats TDM. The reseller channel learns to sell IP. Video conferencing arrives. The phone becomes software.",
    role: "Communications Consultant → National Channel Manager · Infiniti / Distribution Central (Arrow ECS) / Arrow Voice & Data",
    win: "Grew the Vivid Systems distribution book from $2.9M to $5.1M as National Channel Manager. Productised Avaya/Radvision video conferencing. First international travel — working across APAC with Avaya and a regional reseller base.",
    artifact: "QoS arguments. SIP trunks. The first time a CFO asked me what a codec was. Trade-show booths from Singapore to KL.",
    current: false,
  },
  {
    era: "Contact Centre · The vendor years",
    years: "2014 – 2018",
    industry: "Cloud contact centre becomes a real category. PureCloud / PureEngage land. CX moves from a cost centre to a P&L line.",
    role: "Market Territory Manager → Mid-Market Sales Manager · Genesys / Interactive Intelligence · Sydney",
    win: "Closed Employsure — 500 agents, multi-year. Global Mid-Market Rep of the Year, 2015. 186% of target. President's Club, Costa Rica. Then led a team of four through 152% personal / 106% team target. President's Club, Jamaica. The crossing from channel into pure vendor.",
    artifact: "WFM. Speech analytics. PureCloud. The realisation that voice is a data stream, not a feature.",
    current: false,
  },
  {
    era: "CCaaS · The cloud wave",
    years: "2018 – 2020",
    industry: "CCaaS leaders take share from on-prem. The buyer changes — it's CX now, not IT. Multi-tenant becomes the default.",
    role: "Account Executive · 8x8 · Sydney (NSW / VIC)",
    win: "Closed SiteMinder — 250 agents, 500 users, multi-year. President's Club, Monaco, at 108% of target. Sold a full UCaaS + CCaaS stack against legacy incumbents in the most competitive segment of my career.",
    artifact: "Multi-tenant SaaS pricing. SLA wars. The death of the appliance refresh.",
    current: false,
  },
  {
    era: "CPaaS · APIs eat the appliance",
    years: "2021 – 2024",
    industry: "Developers, not IT, buy voice. APIs replace boxes. Twilio defines the era. 'Build, not buy' becomes the buyer's default.",
    role: "Mid-Market AE → Strategic AE → New Business AE · ISVs ANZ · Twilio · Sydney",
    win: "331% of quota in 2021. 175% software / 119% revenue in 2022. President's Club, Bahamas. Closed OfficeHQ Flex — 250 agents — in 8 weeks. Then 191% in FY23, 120% in FY24. The buyer became the developer, and I learned to read API docs the way I used to read RFPs.",
    artifact: "Webhooks. SDKs. Studio flows. The first time I wrote a line of working code instead of speccing one.",
    current: false,
  },
  {
    era: "Voice AI · The agent answers",
    years: "2024 → now",
    industry: "Sub-second latency. The agent doesn't just route the call — it takes it. Founders are shipping conversational products faster than enterprises can write a policy on them.",
    role: "Net-new for Xero's JAX · vibe-coder on nights & weekends · looking for the right founding-GTM seat",
    win: "Closed Xero as a net-new Twilio customer for JAX — their generative AI business companion. Shipped four of my own AI side projects on nights and weekends, including Son GPT 2.0 — a clone of me my Mum can call. The next move is into the room — not selling for the wave-makers, but with them.",
    artifact: "ElevenLabs. HeyGen. Twilio Voice AI. The fact that you can have a conversation with me right now without me being awake.",
    current: true,
  },
];

export const PROJECTS = [
  {
    name: "Son GPT 2.0",
    blurb: "My first vibe-coded app. A voice clone of me that my Mum can call — trained on our actual conversations — so she always has me on the line, even when I'm on a wave in Canggu. The project that made me realise voice AI's real power isn't enterprise. It's intimacy.",
    stack: "ElevenLabs · GPT-4 · Twilio · Next.js",
    status: "Live · the one that started it",
  },
  {
    name: "AI Voice Agent Builder",
    blurb: "Because every Voice AI demo I sat through made me think 'I could build this in a weekend.' So I did. A drag-and-drop builder for outbound voice agents — ElevenLabs for voice, OpenAI for brains, Twilio for the pipes.",
    stack: "ElevenLabs · OpenAI · Twilio · Next.js",
    status: "Live",
  },
  {
    name: "ICP Tool",
    blurb: "An AE's nightmare: a list of 'leads' with no fit signal. I built my own ICP scorer that takes a domain, pulls public signals, and tells me whether to bother. Saves me four hours a week.",
    stack: "OpenAI · Clearbit · Vercel",
    status: "In production",
  },
  {
    name: "Twin",
    blurb: "The agent on this site — my ElevenLabs voice clone, plugged into a HeyGen avatar, answering from twenty years of decks and deals. The portfolio piece that doubles as the demo.",
    stack: "ElevenLabs · HeyGen · LiveKit",
    status: "You're using it",
  },
];

export const RECORD = [
  { num: "4×", label: "President's Club — Monaco · Costa Rica · Jamaica · Bahamas", tone: "primary" as const },
  { num: "180%", label: "avg quota over 5 yrs at Twilio — 331% → 175% → 191% → 120% → 81%", tone: "secondary" as const },
  { num: "2015", label: "Global Mid-Market Rep of the Year — Genesys / Interactive Intelligence", tone: "secondary" as const },
  { num: "20 yrs", label: "In voice — every wave from PBX to Voice AI", tone: "secondary" as const },
  { num: "3 seats", label: "Reseller · distributor · vendor — every layer of the supply chain", tone: "secondary" as const },
  { num: "4", label: "AI side projects shipped — Son GPT 2.0 was the first", tone: "secondary" as const },
];
