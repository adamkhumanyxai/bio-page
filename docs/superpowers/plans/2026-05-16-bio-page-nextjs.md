# Adam Kratiuk Bio Page — Next.js Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task.

**Goal:** Recreate the Adam Kratiuk personal bio site pixel-accurately in a production Next.js 15 App Router project.

**Architecture:** Single-page Next.js app (`app/page.tsx`) composed of 12 section components. Inline styles mirror the prototype design tokens exactly. CSS Modules handle hover transitions and scroll animations. HeyGen API key lives server-side in an API route.

**Tech Stack:** Next.js 15 App Router, TypeScript, CSS Modules, Google Fonts (Inter Tight / Inter / Geist Mono), next/image, HeyGen Streaming Avatar API (placeholder env vars)

**Source of truth:** `/home/akratiuk85/Bio-Page/extracted/design_handoff_adam_kratiuk_bio/direction-a-v2-standalone.jsx` and `shared.jsx` — every style value and content string comes from there.

---

## File Map

```
/home/akratiuk85/Bio-Page/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── api/heygen/route.ts
├── components/
│   ├── TopBar.tsx
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── Brands.tsx
│   ├── Timeline.tsx
│   ├── Avatar.tsx
│   ├── Projects.tsx
│   ├── Record.tsx
│   ├── OnStage.tsx
│   ├── OffTheClock.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── VoiceCloneModal.tsx
│   └── Placeholder.tsx
├── lib/data.ts
├── hooks/useFadeIn.ts
├── public/
│   ├── adam-portrait.jpg   ← already present
│   └── adam-podium.jpg     ← already present
├── .env.local
├── next.config.ts
└── package.json
```

---

### Task 1: Scaffold Next.js project

**Files:**
- Create: `package.json`, `next.config.ts`, `tsconfig.json`, `.env.local`

- [ ] **Step 1: Init project (non-interactive)**

```bash
cd /home/akratiuk85/Bio-Page
pnpm dlx create-next-app@latest . --typescript --app --no-src-dir --no-tailwind --import-alias "@/*" --yes 2>&1 | tail -5
```

Expected: "Success! Created ... at ..."

- [ ] **Step 2: Verify structure**

```bash
ls /home/akratiuk85/Bio-Page/app/
```

Expected: `layout.tsx  page.tsx  globals.css  favicon.ico`

- [ ] **Step 3: Create .env.local**

```bash
cat > /home/akratiuk85/Bio-Page/.env.local << 'EOF'
HEYGEN_API_KEY=your_heygen_api_key_here
HEYGEN_AGENT_ID=your_heygen_agent_id_here
EOF
```

- [ ] **Step 4: Verify dev server starts**

```bash
cd /home/akratiuk85/Bio-Page && pnpm dev &
sleep 5 && curl -s -o /dev/null -w "%{http_code}" http://localhost:3000
```

Expected: `200`

```bash
kill %1 2>/dev/null; true
```

- [ ] **Step 5: Commit**

```bash
cd /home/akratiuk85/Bio-Page
git add -A && git commit -m "feat: scaffold Next.js 15 app router project"
```

---

### Task 2: Global CSS + design tokens

**Files:**
- Modify: `app/globals.css`
- Create: `app/layout.tsx`

- [ ] **Step 1: Write globals.css**

```css
/* app/globals.css */
@import url('https://fonts.googleapis.com/css2?family=Inter+Tight:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500&family=Inter:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500;600;700&display=swap');

:root {
  --bg: #ffffff;
  --bg-card: #ffffff;
  --bg-deep: #f5f5f3;
  --bg-ink: #0a0a0b;
  --ink: #0a0a0b;
  --body: rgba(10,10,11,0.78);
  --muted: rgba(10,10,11,0.55);
  --faint: rgba(10,10,11,0.35);
  --rule: rgba(10,10,11,0.12);
  --rule-hard: rgba(10,10,11,0.2);
  --accent: #2C5FFF;
  --accent-soft: #E9EEFF;
  --accent-ink: #1740C2;
  --display: 'Inter Tight', Helvetica, Arial, sans-serif;
  --body-f: 'Inter', -apple-system, sans-serif;
  --mono: 'Geist Mono', 'JetBrains Mono', ui-monospace, monospace;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

html { scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--ink);
  font-family: var(--body-f);
  -webkit-font-smoothing: antialiased;
}

a { color: inherit; text-decoration: none; }
button { font-family: inherit; }
img { display: block; max-width: 100%; }

/* Fade-in animation */
.fadeIn {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.fadeIn.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Hover transitions that can't be done inline */
.brandName {
  color: var(--faint);
  transition: color 0.2s;
  cursor: default;
}
.brandName:hover { color: var(--ink); }

.navLink {
  color: var(--ink);
  opacity: 0.78;
  transition: opacity 0.15s;
}
.navLink:hover { opacity: 1; }

.projectCard {
  transition: box-shadow 0.2s, transform 0.2s;
  cursor: default;
}
.projectCard:hover {
  box-shadow: 0 12px 40px rgba(0,0,0,0.10);
  transform: translateY(-3px);
}

.winRow {
  transition: background 0.15s;
  cursor: default;
}
.winRow:hover { background: var(--bg-deep); }

.stageRow {
  transition: background 0.15s;
  cursor: default;
}
.stageRow:hover { background: rgba(10,10,11,0.04); }

/* Waveform bar animation */
@keyframes pulse-0 { 0%,100%{transform:scale(1);opacity:.4} 50%{transform:scale(1.05);opacity:.15} }
@keyframes pulse-1 { 0%,100%{transform:scale(1.18);opacity:.3} 50%{transform:scale(1.25);opacity:.08} }
@keyframes pulse-2 { 0%,100%{transform:scale(1.36);opacity:.2} 50%{transform:scale(1.45);opacity:.05} }
```

- [ ] **Step 2: Write app/layout.tsx**

```tsx
// app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Adam Kratiuk — Twenty years in voice',
  description: 'Voice AI sales professional. Founding GTM. Former Twilio AE. This site is the conversation, the demo, and the first work sample.',
  openGraph: {
    title: 'Adam Kratiuk — Twenty years in voice',
    description: 'Founding GTM seat in Voice AI. Twenty years selling every wave of business voice.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

- [ ] **Step 3: Commit**

```bash
cd /home/akratiuk85/Bio-Page
git add app/globals.css app/layout.tsx
git commit -m "feat: add design tokens, global CSS, root layout"
```

---

### Task 3: Data + useFadeIn hook

**Files:**
- Create: `lib/data.ts`
- Create: `hooks/useFadeIn.ts`

- [ ] **Step 1: Write lib/data.ts**

```typescript
// lib/data.ts
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
  { num: "191%", label: "of quota — FY23 at Twilio. 331% in 2021. 175% software / 119% revenue in 2022.", tone: "secondary" as const },
  { num: "2015", label: "Global Mid-Market Rep of the Year — Genesys / Interactive Intelligence", tone: "secondary" as const },
  { num: "20 yrs", label: "In voice — every wave from PBX to Voice AI", tone: "secondary" as const },
  { num: "3 seats", label: "Reseller · distributor · vendor — every layer of the supply chain", tone: "secondary" as const },
  { num: "4", label: "AI side projects shipped — Son GPT 2.0 was the first", tone: "secondary" as const },
];
```

- [ ] **Step 2: Write hooks/useFadeIn.ts**

```typescript
// hooks/useFadeIn.ts
'use client';
import { useRef, useEffect } from 'react';

export function useFadeIn(delay = 0) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.add('fadeIn');
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay);
          io.disconnect();
        }
      },
      { threshold: 0.06 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return ref;
}
```

- [ ] **Step 3: Commit**

```bash
cd /home/akratiuk85/Bio-Page
git add lib/data.ts hooks/useFadeIn.ts
git commit -m "feat: add site data and useFadeIn hook"
```

---

### Task 4: Placeholder + VoiceCloneModal components

**Files:**
- Create: `components/Placeholder.tsx`
- Create: `components/VoiceCloneModal.tsx`

- [ ] **Step 1: Write Placeholder.tsx**

```tsx
// components/Placeholder.tsx
'use client';
import { CSSProperties } from 'react';

interface Props {
  caption: string;
  tone?: 'light' | 'dark';
  style?: CSSProperties;
}

export default function Placeholder({ caption, tone = 'light', style }: Props) {
  const dark = tone === 'dark';
  const stripe1 = dark ? '#1a1a1c' : '#e8e6e0';
  const stripe2 = dark ? '#222226' : '#dcd9d2';
  const text = dark ? 'rgba(245,244,241,0.55)' : 'rgba(10,10,11,0.45)';
  return (
    <div style={{
      width: '100%', height: '100%', position: 'absolute', inset: 0,
      background: `repeating-linear-gradient(135deg, ${stripe1} 0 12px, ${stripe2} 12px 24px)`,
      display: 'grid', placeItems: 'center',
      ...style,
    }}>
      <div style={{
        fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: 0.4,
        color: text, textAlign: 'center', padding: 8,
        background: dark ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.6)',
        backdropFilter: 'blur(6px)', borderRadius: 4,
      }}>
        [{caption}]
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Write VoiceCloneModal.tsx**

```tsx
// components/VoiceCloneModal.tsx
'use client';
import { useState, useEffect, useRef } from 'react';

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function VoiceCloneModal({ open, onClose }: Props) {
  const [state, setState] = useState<'idle' | 'listening' | 'thinking' | 'speaking'>('idle');
  const [transcript, setTranscript] = useState<{ who: string; text: string }[]>([]);
  const [muted, setMuted] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!open) { setState('idle'); setTranscript([]); }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape' && open) onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!open) return null;

  const accent = '#2C5FFF';
  const border = 'rgba(0,0,0,0.08)';

  const press = () => {
    if (state !== 'idle') return;
    setState('listening');
    timerRef.current = setTimeout(() => {
      setTranscript(t => [...t, { who: 'you', text: 'Tell me about your time at Twilio.' }]);
      setState('thinking');
      timerRef.current = setTimeout(() => {
        setState('speaking');
        setTranscript(t => [...t, {
          who: 'adam',
          text: "Twilio was where I stopped selling phone systems and started selling infrastructure. The buyer changed — it was the developer now, not the CIO. So I learned to read API docs the way I used to read RFPs. Closed Xero's JAX as net-new, hit 191% in FY23, President's Club in the Bahamas. The real win, though, was what it taught me: voice isn't a product category anymore — it's a primitive. That's why I'm coming for the next seat.",
        }]);
        timerRef.current = setTimeout(() => setState('idle'), 4200);
      }, 900);
    }, 1600);
  };

  const stateLabel = {
    idle: '● Press to talk',
    listening: 'Listening…',
    thinking: 'Thinking…',
    speaking: 'Speaking…',
  }[state];

  return (
    <div
      style={{ position: 'fixed', inset: 0, background: 'rgba(15,15,20,0.45)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, padding: 40 }}
      onClick={onClose}
    >
      <div onClick={e => e.stopPropagation()} style={{ width: 560, maxWidth: '100%', background: '#fff', color: '#0a0a0b', borderRadius: 20, border: `1px solid ${border}`, boxShadow: '0 30px 80px rgba(0,0,0,0.35)', overflow: 'hidden' }}>
        {/* Header */}
        <div style={{ padding: '20px 24px', borderBottom: `1px solid ${border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 10, height: 10, borderRadius: 999, background: state === 'idle' ? 'rgba(10,10,11,0.55)' : accent, boxShadow: state !== 'idle' ? `0 0 0 4px ${accent}22` : 'none', transition: 'all .3s' }} />
            <div style={{ fontSize: 13, letterSpacing: 0.4, textTransform: 'uppercase', fontWeight: 600 }}>Live with Adam's clone</div>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#0a0a0b', fontSize: 20, cursor: 'pointer', opacity: 0.6 }}>✕</button>
        </div>

        {/* Orb */}
        <div style={{ padding: '44px 24px 28px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ position: 'relative', width: 180, height: 180, display: 'grid', placeItems: 'center' }}>
            {[0, 1, 2].map(i => (
              <div key={i} style={{
                position: 'absolute', inset: 0, borderRadius: 999, border: `1px solid ${accent}`,
                opacity: state === 'speaking' ? 0.4 - i * 0.1 : state === 'listening' ? 0.25 : 0.08,
                transform: `scale(${state === 'speaking' ? 1 + i * 0.18 : 1 + i * 0.06})`,
                transition: 'all .9s cubic-bezier(.3,.7,.3,1)',
                animation: state === 'speaking' ? `pulse-${i} 1.4s ease-in-out infinite` : 'none',
              }} />
            ))}
            <div style={{
              width: 88, height: 88, borderRadius: 999,
              background: `radial-gradient(circle at 35% 35%, ${accent}, ${accent}aa 60%, ${accent}66)`,
              boxShadow: `0 0 60px ${accent}66, inset 0 0 30px rgba(255,255,255,0.2)`,
              transform: state === 'listening' ? 'scale(0.92)' : state === 'speaking' ? 'scale(1.08)' : 'scale(1)',
              transition: 'transform .4s',
            }} />
          </div>
          <div style={{ marginTop: 24, fontSize: 14, color: 'rgba(10,10,11,0.55)', minHeight: 20 }}>
            {state === 'idle' && 'Press to start — ask me about any era, any deal, or about Bender.'}
            {state === 'listening' && 'Listening…'}
            {state === 'thinking' && 'Thinking…'}
            {state === 'speaking' && 'Speaking — tap orb to interrupt.'}
          </div>
        </div>

        {/* Transcript */}
        {transcript.length > 0 && (
          <div style={{ padding: '0 24px 12px', maxHeight: 200, overflowY: 'auto' }}>
            {transcript.map((t, i) => (
              <div key={i} style={{ marginBottom: 14 }}>
                <div style={{ fontSize: 11, letterSpacing: 0.6, textTransform: 'uppercase', color: t.who === 'you' ? 'rgba(10,10,11,0.55)' : accent, fontWeight: 700, marginBottom: 4 }}>
                  {t.who === 'you' ? 'You' : 'Adam'}
                </div>
                <div style={{ fontSize: 15, lineHeight: 1.5 }}>{t.text}</div>
              </div>
            ))}
          </div>
        )}

        {/* Controls */}
        <div style={{ padding: 20, borderTop: `1px solid ${border}`, display: 'flex', gap: 10 }}>
          <button onClick={press} disabled={state !== 'idle'} style={{ flex: 1, padding: '14px 18px', background: state === 'idle' ? accent : `${accent}40`, color: state === 'idle' ? '#fff' : 'rgba(10,10,11,0.55)', border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: state === 'idle' ? 'pointer' : 'default', transition: 'all .2s' }}>
            {stateLabel}
          </button>
          <button onClick={() => setMuted(m => !m)} style={{ padding: '14px 16px', background: 'transparent', color: '#0a0a0b', border: `1px solid ${border}`, borderRadius: 10, cursor: 'pointer', fontSize: 14 }}>
            {muted ? '🔇' : '🎤'}
          </button>
          <button style={{ padding: '14px 16px', background: 'transparent', color: '#0a0a0b', border: `1px solid ${border}`, borderRadius: 10, cursor: 'pointer', fontSize: 13 }}>
            Switch to video twin →
          </button>
        </div>

        <div style={{ padding: '10px 24px 16px', fontSize: 11, color: 'rgba(10,10,11,0.55)', letterSpacing: 0.4 }}>
          Voice: ElevenLabs (my real clone) · Video: HeyGen · Avg. response 740ms · Demo loop
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Commit**

```bash
cd /home/akratiuk85/Bio-Page
git add components/Placeholder.tsx components/VoiceCloneModal.tsx
git commit -m "feat: add Placeholder and VoiceCloneModal components"
```

---

### Task 5: TopBar + Nav

**Files:**
- Create: `components/TopBar.tsx`
- Create: `components/Nav.tsx`

- [ ] **Step 1: Write TopBar.tsx**

```tsx
// components/TopBar.tsx
export default function TopBar() {
  return (
    <div style={{ background: 'var(--bg-ink)', color: '#fff' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '8px 56px', display: 'flex', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: 0.6, color: 'rgba(255,255,255,0.7)' }}>
        <span>Cronulla, NSW · Australia</span>
        <span style={{ marginLeft: 'auto' }}>this site is the work sample</span>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Write Nav.tsx**

```tsx
// components/Nav.tsx
'use client';

interface Props { onTalk: () => void; }

const NAV_LINKS = [
  ['Story', '#story'], ['Timeline', '#timeline'], ['Projects', '#projects'],
  ['On Stage', '#on-stage'], ['Off the Clock', '#off-the-clock'], ['Contact', '#contact'],
] as const;

export default function Nav({ onTalk }: Props) {
  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--rule)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '20px 56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 32, height: 32, background: 'var(--bg-ink)', color: '#fff', display: 'grid', placeItems: 'center', fontSize: 13, fontWeight: 700, fontFamily: 'var(--display)', letterSpacing: -0.4 }}>
            AK
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span style={{ fontFamily: 'var(--display)', fontSize: 16, fontWeight: 600, letterSpacing: -0.2 }}>Adam Kratiuk</span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted)', letterSpacing: 0.6 }}>twenty years in voice</span>
          </div>
        </div>

        {/* Nav links */}
        <div style={{ display: 'flex', gap: 32, fontSize: 14, fontWeight: 500 }}>
          {NAV_LINKS.map(([label, href]) => (
            <a key={label} href={href} className="navLink" style={{ textDecoration: 'none' }}>{label}</a>
          ))}
        </div>

        {/* CTA */}
        <button onClick={onTalk} style={{ padding: '11px 18px 11px 14px', background: 'var(--bg-ink)', color: '#fff', border: 'none', borderRadius: 999, fontSize: 13, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 7, height: 7, borderRadius: 999, background: 'var(--accent)', boxShadow: '0 0 0 4px rgba(44,95,255,0.25)' }} />
          Meet my AI twin
        </button>
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Commit**

```bash
cd /home/akratiuk85/Bio-Page
git add components/TopBar.tsx components/Nav.tsx
git commit -m "feat: add TopBar and Nav components"
```

---

### Task 6: Hero section

**Files:**
- Create: `components/Hero.tsx`

- [ ] **Step 1: Write Hero.tsx**

```tsx
// components/Hero.tsx
'use client';
import Image from 'next/image';
import { useFadeIn } from '@/hooks/useFadeIn';

interface Props { onTalk: () => void; }

const STATS = [
  { big: '20+', small: 'Years in voice', note: 'PBX → Voice AI', accent: false },
  { big: '4×', small: "President's Club", note: 'Monaco · Costa Rica · Jamaica · Bahamas', accent: false },
  { big: '191%', small: 'Quota, FY23 at Twilio', note: '331% in 2021 · 175% in 2022', accent: false },
  { big: '4', small: 'AI projects shipped', note: 'Nights & weekends', accent: true },
];

export default function Hero({ onTalk }: Props) {
  const ref = useFadeIn();
  return (
    <section id="story" ref={ref as React.RefObject<HTMLElement>} style={{ maxWidth: 1320, margin: '0 auto', padding: '72px 56px 0' }}>
      {/* Two-column grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 56, alignItems: 'end' }}>
        {/* Left: copy */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 36, fontSize: 11, letterSpacing: 2.4, textTransform: 'uppercase', color: 'var(--muted)', fontFamily: 'var(--mono)' }}>
            <span style={{ width: 36, height: 1, background: 'var(--ink)', display: 'block' }} />
            Vol. I · A bio in long form
          </div>

          <h1 style={{ fontFamily: 'var(--display)', fontSize: 196, lineHeight: 0.88, letterSpacing: -8, margin: 0, fontWeight: 800 }}>
            Hello<span style={{ color: 'var(--accent)' }}>.</span>
          </h1>

          <div style={{ marginTop: 36, maxWidth: 520 }}>
            <p style={{ fontFamily: 'var(--display)', fontSize: 30, lineHeight: 1.2, margin: 0, fontWeight: 500, letterSpacing: -0.6 }}>
              Twenty years in voice.<br />
              Six platform shifts.{' '}
              <span style={{ color: 'var(--muted)', fontWeight: 400, fontStyle: 'italic' }}>One that finally talks back.</span>
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--body)', marginTop: 24 }}>
              I&apos;m Adam. I&apos;ve sold every wave of business voice since the PBX — most recently as an
              enterprise AE at Twilio. I&apos;m now pivoting into a founding GTM seat at a Voice AI
              startup. This site is the conversation, the demo, and the first work sample.
            </p>

            <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
              <button onClick={onTalk} style={{ padding: '15px 22px', background: 'var(--bg-ink)', color: '#fff', border: 'none', borderRadius: 0, fontSize: 13, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 7, height: 7, borderRadius: 999, background: 'var(--accent)', boxShadow: '0 0 0 4px rgba(44,95,255,0.25)' }} />
                Meet my AI twin
              </button>
              <a href="#timeline" style={{ padding: '15px 22px', background: 'transparent', color: 'var(--ink)', border: '1px solid var(--ink)', borderRadius: 0, fontSize: 13, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600, display: 'inline-flex', alignItems: 'center' }}>
                Skip to timeline ↓
              </a>
            </div>
          </div>
        </div>

        {/* Right: portrait */}
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', top: -32, right: -16, padding: '5px 10px', background: 'var(--accent)', color: '#fff', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: 1.2, zIndex: 2 }}>
            FIG. 01 · THE OPERATOR
          </div>
          <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/5', maxHeight: 620 }}>
            <Image src="/adam-portrait.jpg" alt="Adam Kratiuk" fill style={{ objectFit: 'cover', objectPosition: 'center 30%', filter: 'grayscale(1) contrast(1.05)' }} priority />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 60%, rgba(44,95,255,0.09) 100%)', mixBlendMode: 'multiply' }} />
          </div>
          <div style={{ marginTop: 14, display: 'flex', justifyContent: 'space-between', fontSize: 10, color: 'var(--muted)', letterSpacing: 1.4, textTransform: 'uppercase', fontFamily: 'var(--mono)' }}>
            <span>Adam Kratiuk</span><span>shot · cronulla, nsw</span><span>© 2026</span>
          </div>
        </div>
      </div>

      {/* Stat strip */}
      <div style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', border: '1px solid var(--rule-hard)' }}>
        {STATS.map((s, i) => (
          <div key={i} style={{ padding: '32px', borderRight: i < 3 ? '1px solid var(--rule)' : 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ fontSize: 10, letterSpacing: 1.6, color: 'var(--muted)', fontFamily: 'var(--mono)' }}>↗ {String(i + 1).padStart(2, '0')}</div>
            <div style={{ fontFamily: 'var(--display)', fontSize: s.big.length >= 4 ? 46 : 64, fontWeight: 800, letterSpacing: -2, lineHeight: 1, color: s.accent ? 'var(--accent)' : 'var(--ink)' }}>
              {s.big}
            </div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>{s.small}</div>
              <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{s.note}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Pull quote */}
      <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: 48, alignItems: 'center' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: 1.4 }}>
          ↘ Reading time · 7 min<br />↘ Listening time · as long as you&apos;d like
        </div>
        <p style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 19, lineHeight: 1.45, color: 'var(--body)', margin: 0, textAlign: 'center', maxWidth: 600, justifySelf: 'center' }}>
          &ldquo;If you&apos;ve sold every version of a thing for twenty years — and you can still vibe-code
          one yourself on a Saturday — you can probably sell the next one.&rdquo;
        </p>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: 1.4, textAlign: 'right' }}>
          A. Kratiuk, 2026<br />Cronulla, NSW
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
cd /home/akratiuk85/Bio-Page
git add components/Hero.tsx hooks/useFadeIn.ts
git commit -m "feat: add Hero section with stat strip and pull quote"
```

---

### Task 7: Brands strip + Timeline

**Files:**
- Create: `components/Brands.tsx`
- Create: `components/Timeline.tsx`

- [ ] **Step 1: Write Brands.tsx**

```tsx
// components/Brands.tsx
const BRANDS = ['Avaya', 'Cisco', 'Mitel', 'Genesys', 'NICE', 'Five9', 'RingCentral', 'Twilio'];

export default function Brands() {
  return (
    <section style={{ borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)', marginTop: 72 }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '28px 56px', display: 'flex', alignItems: 'center', gap: 40 }}>
        <div style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--muted)', fontFamily: 'var(--mono)', whiteSpace: 'nowrap' }}>
          Sold for / against →
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', gap: 24 }}>
          {BRANDS.map(b => (
            <span key={b} className="brandName" style={{ fontFamily: 'var(--display)', fontSize: 22, fontWeight: 600, letterSpacing: -0.4 }}>{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Write Timeline.tsx**

```tsx
// components/Timeline.tsx
'use client';
import Image from 'next/image';
import { useState } from 'react';
import { TIMELINE } from '@/lib/data';
import Placeholder from './Placeholder';
import { useFadeIn } from '@/hooks/useFadeIn';

export default function Timeline() {
  const [active, setActive] = useState(5);
  const ref = useFadeIn();
  const t = TIMELINE[active];

  return (
    <section id="timeline" ref={ref as React.RefObject<HTMLElement>} style={{ background: 'var(--bg-ink)', color: '#fff', padding: '120px 0 140px' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '0 56px' }}>
        {/* Section header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 14, borderBottom: '1px solid rgba(255,255,255,0.15)', marginBottom: 56, fontSize: 11, letterSpacing: 2.4, textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--mono)' }}>
          <span><span style={{ color: 'var(--accent)' }}>§ 01</span> · The spine</span>
          <span>Click any era · pictured: era {String(active + 1).padStart(2, '0')} of {String(TIMELINE.length).padStart(2, '0')}</span>
        </div>

        {/* Intro grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 64, alignItems: 'end', marginBottom: 56 }}>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 104, lineHeight: 0.94, letterSpacing: -4, margin: 0, fontWeight: 800 }}>
            Every wave of voice,<br />
            <span style={{ color: 'rgba(255,255,255,0.55)' }}>in the seat where it happened.</span>
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: 'rgba(255,255,255,0.65)', margin: 0, maxWidth: 380 }}>
            Six platform shifts. Six product categories born and matured. I was selling
            into all six — not commenting on them. Each row is a wave the industry
            made and the seat I was in when it broke.
          </p>
        </div>

        {/* Era selector */}
        <div style={{ display: 'grid', gridTemplateColumns: `repeat(${TIMELINE.length}, 1fr)`, borderTop: '1px solid rgba(255,255,255,0.15)', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
          {TIMELINE.map((row, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              padding: '22px 14px',
              background: active === i ? 'rgba(44,95,255,0.18)' : 'transparent',
              color: '#fff', border: 'none',
              borderRight: i < TIMELINE.length - 1 ? '1px solid rgba(255,255,255,0.15)' : 'none',
              borderBottom: active === i ? '2px solid var(--accent)' : '2px solid transparent',
              borderTop: active === i ? '2px solid var(--accent)' : '2px solid transparent',
              marginTop: -1, marginBottom: -1,
              textAlign: 'left', cursor: 'pointer', transition: 'all .2s',
            }}>
              <div style={{ fontSize: 10, letterSpacing: 1.4, color: 'rgba(255,255,255,0.5)', marginBottom: 8, fontFamily: 'var(--mono)' }}>{row.years}</div>
              <div style={{ fontFamily: 'var(--display)', fontSize: 20, fontWeight: 600, letterSpacing: -0.4 }}>
                {row.era}
                {row.current && <span style={{ marginLeft: 8, fontSize: 9, padding: '2px 6px', background: 'var(--accent)', borderRadius: 2, letterSpacing: 1, verticalAlign: 3, fontFamily: 'var(--mono)', fontWeight: 600 }}>NOW</span>}
              </div>
            </button>
          ))}
        </div>

        {/* Active era detail */}
        <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: '1.1fr 1.4fr', gap: 56, alignItems: 'start' }}>
          {/* Era image */}
          <div>
            <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', background: '#15171b' }}>
              {t.current ? (
                <Image src="/adam-podium.jpg" alt="Adam on stage" fill style={{ objectFit: 'cover', objectPosition: 'center 25%', filter: 'grayscale(1) contrast(1.1) brightness(1.05)' }} />
              ) : (
                <Placeholder caption={`era ${String(active + 1).padStart(2, '0')} · adam · ${t.era.toLowerCase()} · candid`} tone="dark" />
              )}
              <div style={{ position: 'absolute', left: 16, bottom: 16, padding: '6px 10px', background: 'rgba(0,0,0,0.7)', color: '#fff', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: 1.2, backdropFilter: 'blur(4px)' }}>
                FIG · {t.era} · {t.years.split(' – ')[0]}
              </div>
            </div>
            <div style={{ marginTop: 14, fontFamily: 'var(--mono)', fontSize: 11, color: 'rgba(255,255,255,0.55)', letterSpacing: 0.6 }}>
              {t.current ? 'Pictured · keynoting an internal Twilio summit, 2024.' : 'Pictured · placeholder · drop in an era-appropriate photo.'}
            </div>
          </div>

          {/* Era detail */}
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 24 }}>
              <span style={{ fontFamily: 'var(--display)', fontSize: 80, fontWeight: 800, letterSpacing: -3, lineHeight: 1, color: 'var(--accent)' }}>
                {String(active + 1).padStart(2, '0')}
              </span>
              <div>
                <div style={{ fontFamily: 'var(--display)', fontSize: 44, fontWeight: 700, letterSpacing: -1.2, lineHeight: 1 }}>{t.era}</div>
                <div style={{ marginTop: 6, fontFamily: 'var(--mono)', fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>{t.years}</div>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, marginBottom: 36 }}>
              <div>
                <div style={{ fontSize: 10, letterSpacing: 1.4, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', marginBottom: 12, fontFamily: 'var(--mono)' }}>Industry shift</div>
                <p style={{ fontSize: 16, lineHeight: 1.5, margin: 0 }}>{t.industry}</p>
              </div>
              <div>
                <div style={{ fontSize: 10, letterSpacing: 1.4, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', marginBottom: 12, fontFamily: 'var(--mono)' }}>The seat I was in</div>
                <p style={{ fontSize: 18, lineHeight: 1.4, margin: 0, fontWeight: 500 }}>{t.role}</p>
              </div>
            </div>

            <div style={{ padding: 24, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', borderLeft: '3px solid var(--accent)' }}>
              <div style={{ fontSize: 10, letterSpacing: 1.4, color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', marginBottom: 10, fontFamily: 'var(--mono)' }}>Signature win</div>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: 'rgba(255,255,255,0.85)', margin: 0 }}>{t.win}</p>
            </div>

            <div style={{ marginTop: 24, fontSize: 12, lineHeight: 1.7, color: 'rgba(255,255,255,0.55)', fontFamily: 'var(--mono)' }}>
              <span style={{ color: 'var(--accent)', letterSpacing: 0.8 }}>// vocabulary of the era · </span>
              {t.artifact}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Commit**

```bash
cd /home/akratiuk85/Bio-Page
git add components/Brands.tsx components/Timeline.tsx
git commit -m "feat: add Brands strip and Timeline section"
```

---

### Task 8: Avatar + Projects sections

**Files:**
- Create: `components/Avatar.tsx`
- Create: `components/Projects.tsx`

- [ ] **Step 1: Write Avatar.tsx**

```tsx
// components/Avatar.tsx
'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useFadeIn } from '@/hooks/useFadeIn';

interface Props { onTalk: () => void; }

const PROMPTS = [
  'tell me about JAX at Xero',
  'biggest deal you ever closed',
  'why founding GTM, why now?',
  'what made you start vibe-coding',
  "what's your weakness",
];

export default function Avatar({ onTalk }: Props) {
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const ref = useFadeIn();
  const total = 184;

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setTime(t => t >= total ? 0 : t + 1), 1000);
    return () => clearInterval(id);
  }, [playing]);

  const fmt = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  const pct = (time / total) * 100;

  return (
    <section id="demo" ref={ref as React.RefObject<HTMLElement>} style={{ maxWidth: 1320, margin: '0 auto', padding: '120px 56px' }}>
      {/* Eyebrow */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 14, borderBottom: '1px solid var(--rule)', marginBottom: 36, fontSize: 11, letterSpacing: 2.4, textTransform: 'uppercase', color: 'var(--muted)', fontFamily: 'var(--mono)' }}>
        <span><span style={{ color: 'var(--accent)' }}>§ 02</span> · The demo · HeyGen avatar + ElevenLabs voice</span>
        <span>A working work-sample</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'center' }}>
        {/* Copy */}
        <div>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 84, lineHeight: 0.95, letterSpacing: -3, margin: 0, fontWeight: 800 }}>
            Don&apos;t read<br />about me.<br /><span style={{ color: 'var(--accent)' }}>Talk to me.</span>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--body)', marginTop: 28, maxWidth: 480 }}>
            A HeyGen digital twin, speaking with my ElevenLabs voice clone, answering from
            twenty years of decks, deals, and the customer rooms I&apos;ve sat in.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--muted)', marginTop: 16, maxWidth: 480 }}>
            Ask about a deal cycle, a platform shift, a regret. Captions on, real eye contact.
            If you&apos;d rather hear me without seeing me, voice-only is one tap.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
            <button onClick={onTalk} style={{ padding: '16px 24px', background: 'var(--accent)', color: '#fff', border: 'none', borderRadius: 999, fontSize: 14, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10, boxShadow: '0 14px 36px rgba(44,95,255,0.32)' }}>
              <span style={{ width: 8, height: 8, borderRadius: 999, background: '#fff' }} />
              Start a live conversation
            </button>
            <button onClick={onTalk} style={{ padding: '16px 20px', background: 'transparent', color: 'var(--ink)', border: '1px solid var(--ink)', borderRadius: 999, fontSize: 14, fontWeight: 500, cursor: 'pointer' }}>
              🎧 Voice only →
            </button>
          </div>
          <div style={{ marginTop: 32, padding: '16px 20px', border: '1px solid var(--rule)', borderRadius: 8, fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--mono)', letterSpacing: 0.4, lineHeight: 1.7 }}>
            <span style={{ color: 'var(--accent)' }}>// stack · </span>
            HeyGen avatar v2 · ElevenLabs v3 · LiveKit transport · RAG over career corpus · 740ms p50
          </div>
        </div>

        {/* Video player card */}
        <div style={{ background: 'var(--bg-ink)', borderRadius: 16, overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,0,0,0.22)', border: '1px solid #0a0a0b' }}>
          {/* Header bar */}
          <div style={{ padding: '14px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'rgba(255,255,255,0.65)', fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: 0.6, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{ width: 8, height: 8, borderRadius: 999, background: '#FF3355', boxShadow: '0 0 0 4px rgba(255,51,85,0.18)' }} />
              <span>LIVE · adam.twin · session 0x8af3</span>
            </div>
            <div style={{ display: 'flex', gap: 14 }}>
              <span>en-US · captions on</span>
              <span style={{ color: '#7CFFB2' }}>● 740ms</span>
            </div>
          </div>

          {/* Avatar stage */}
          <div style={{ position: 'relative', aspectRatio: '16/10', background: '#0a0a0b' }}>
            <Image src="/adam-portrait.jpg" alt="Adam HeyGen twin" fill style={{ objectFit: 'cover', objectPosition: 'center 18%' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 60%, transparent 40%, rgba(0,0,0,0.6))' }} />

            {/* Waveform */}
            <div style={{ position: 'absolute', left: '50%', bottom: '22%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'flex-end', gap: 4, height: 28 }}>
              {Array.from({ length: 18 }).map((_, i) => {
                const h = 6 + Math.abs(Math.sin((time * 4 + i) * 0.6)) * 22;
                return <div key={i} style={{ width: 3, height: playing ? h : 4, background: 'var(--accent)', borderRadius: 1, boxShadow: '0 0 12px rgba(44,95,255,0.6)', transition: 'height .12s' }} />;
              })}
            </div>

            {/* Caption */}
            <div style={{ position: 'absolute', left: 24, right: 24, bottom: 24, textAlign: 'center' }}>
              <div style={{ display: 'inline-block', padding: '12px 20px', background: 'rgba(0,0,0,0.72)', color: '#fff', fontSize: 18, lineHeight: 1.4, fontWeight: 500, borderRadius: 6, backdropFilter: 'blur(6px)', maxWidth: '85%' }}>
                &ldquo;Voice isn&apos;t a product category anymore. It&apos;s a primitive.&rdquo;
              </div>
            </div>

            {/* Corner badges */}
            <div style={{ position: 'absolute', top: 16, left: 16, display: 'flex', gap: 8 }}>
              {['HEYGEN', '11LABS · V3'].map(label => (
                <div key={label} style={{ padding: '5px 10px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.16)', borderRadius: 4, fontFamily: 'var(--mono)', fontSize: 10, color: '#fff', letterSpacing: 1.2, backdropFilter: 'blur(8px)' }}>{label}</div>
              ))}
            </div>
            <div style={{ position: 'absolute', top: 16, right: 16, padding: '5px 10px', background: 'var(--accent)', color: '#fff', borderRadius: 4, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: 1.2 }}>SPEAKING</div>
          </div>

          {/* Controls */}
          <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 16, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <button onClick={() => setPlaying(p => !p)} style={{ width: 44, height: 44, borderRadius: 999, background: 'var(--accent)', color: '#fff', border: 'none', fontSize: 16, cursor: 'pointer', display: 'grid', placeItems: 'center' }}>
              {playing ? '❚❚' : '▶'}
            </button>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'rgba(255,255,255,0.7)', width: 70 }}>{fmt(time)} / {fmt(total)}</div>
            <div
              style={{ flex: 1, height: 4, background: 'rgba(255,255,255,0.12)', borderRadius: 999, position: 'relative', cursor: 'pointer' }}
              onClick={e => { const r = e.currentTarget.getBoundingClientRect(); setTime(Math.round((e.clientX - r.left) / r.width * total)); }}
            >
              <div style={{ width: `${pct}%`, height: '100%', background: 'var(--accent)', borderRadius: 999 }} />
              <div style={{ position: 'absolute', left: `${pct}%`, top: '50%', transform: 'translate(-50%,-50%)', width: 12, height: 12, borderRadius: 999, background: '#fff', boxShadow: '0 0 0 3px var(--accent)' }} />
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              {['CC', '🎤'].map(label => (
                <button key={label} style={{ width: 36, height: 36, borderRadius: 6, background: 'rgba(255,255,255,0.06)', color: '#fff', border: '1px solid rgba(255,255,255,0.12)', cursor: 'pointer', fontSize: 13 }}>{label}</button>
              ))}
              <button onClick={onTalk} style={{ padding: '0 14px', height: 36, borderRadius: 6, background: 'var(--accent)', color: '#fff', border: 'none', cursor: 'pointer', fontSize: 12, fontWeight: 600 }}>Take over →</button>
            </div>
          </div>

          {/* Prompt chips */}
          <div style={{ padding: '12px 20px 18px', display: 'flex', flexWrap: 'wrap', gap: 8, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(255,255,255,0.5)', letterSpacing: 0.6, marginRight: 4, alignSelf: 'center' }}>try →</div>
            {PROMPTS.map(p => (
              <button key={p} onClick={onTalk} style={{ padding: '7px 12px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 999, fontSize: 11, color: 'rgba(255,255,255,0.85)', fontFamily: 'var(--mono)', cursor: 'pointer' }}>
                &ldquo;{p}&rdquo;
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Write Projects.tsx**

```tsx
// components/Projects.tsx
'use client';
import { PROJECTS } from '@/lib/data';
import { useFadeIn } from '@/hooks/useFadeIn';

const CARD_THEMES = [
  { bg: '#E9EEFF', numColor: 'rgba(44,95,255,0.18)', tag: 'voice clone · personal', fg: '#1740C2' },
  { bg: '#0a0a0b', numColor: 'rgba(255,255,255,0.07)', tag: 'voice agent · enterprise', fg: 'rgba(255,255,255,0.5)' },
  { bg: '#f0ede8', numColor: 'rgba(10,10,11,0.08)', tag: 'sales tool · pipeline', fg: 'rgba(10,10,11,0.55)' },
  { bg: '#2C5FFF', numColor: 'rgba(255,255,255,0.12)', tag: 'ai twin · this site', fg: 'rgba(255,255,255,0.7)' },
];

export default function Projects() {
  const ref = useFadeIn();
  return (
    <section id="projects" ref={ref as React.RefObject<HTMLElement>} style={{ background: 'var(--bg-card)', borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '120px 56px' }}>
        {/* Eyebrow */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 14, borderBottom: '1px solid var(--rule)', marginBottom: 36, fontSize: 11, letterSpacing: 2.4, textTransform: 'uppercase', color: 'var(--muted)', fontFamily: 'var(--mono)' }}>
          <span><span style={{ color: 'var(--accent)' }}>§ 03</span> · The proof · I don&apos;t just sell it, I ship it</span>
          <span>Four projects · two live · two in beta</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'end', marginBottom: 56 }}>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 84, lineHeight: 0.95, letterSpacing: -3, margin: 0, fontWeight: 800 }}>
            Sellers who can ship<br />
            <span style={{ color: 'var(--muted)' }}>are different sellers.</span>
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--muted)', margin: 0, maxWidth: 380 }}>
            Four vibe-coded AI projects, built on nights and weekends. The point isn&apos;t the
            projects — it&apos;s the muscle. I can sit with your founders and not waste their time.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
          {PROJECTS.map((p, i) => {
            const th = CARD_THEMES[i];
            const live = p.status.startsWith('Live') || p.status.startsWith('You');
            return (
              <article key={p.name} className="projectCard" style={{ border: '1px solid var(--rule)', background: 'var(--bg)', overflow: 'hidden', position: 'relative' }}>
                {/* Card header */}
                <div style={{ background: th.bg, height: 200, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '20px 28px' }}>
                  <div style={{ position: 'absolute', right: -12, top: -24, fontFamily: 'var(--display)', fontSize: 168, fontWeight: 800, lineHeight: 1, letterSpacing: -8, color: th.numColor, userSelect: 'none', pointerEvents: 'none' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: 1.8, textTransform: 'uppercase', color: th.fg, zIndex: 1 }}>{th.tag}</div>
                </div>

                {/* Card body */}
                <div style={{ padding: 28 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 14 }}>
                    <div style={{ fontSize: 10, letterSpacing: 1.6, color: 'var(--muted)', fontFamily: 'var(--mono)' }}>
                      PROJECT {String(i + 1).padStart(2, '0')} · {p.stack.split(' · ')[0]}
                    </div>
                    <div style={{ padding: '4px 10px', background: live ? 'var(--accent-soft)' : 'rgba(0,0,0,0.05)', color: live ? 'var(--accent-ink)' : 'var(--muted)', borderRadius: 999, fontSize: 10, fontWeight: 700, letterSpacing: 0.8, fontFamily: 'var(--mono)' }}>
                      {p.status.toUpperCase()}
                    </div>
                  </div>
                  <h3 style={{ fontFamily: 'var(--display)', fontSize: 36, fontWeight: 700, letterSpacing: -1, margin: 0 }}>{p.name}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--body)', marginTop: 14, marginBottom: 0 }}>{p.blurb}</p>
                  <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--rule)', display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)' }}>
                    <span>{p.stack}</span>
                    <span style={{ color: 'var(--accent)', fontWeight: 600 }}>↗ open project</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Commit**

```bash
cd /home/akratiuk85/Bio-Page
git add components/Avatar.tsx components/Projects.tsx
git commit -m "feat: add Avatar demo and Projects sections"
```

---

### Task 9: Record + OnStage + OffTheClock

**Files:**
- Create: `components/Record.tsx`
- Create: `components/OnStage.tsx`
- Create: `components/OffTheClock.tsx`

- [ ] **Step 1: Write Record.tsx**

```tsx
// components/Record.tsx
'use client';
import { RECORD } from '@/lib/data';
import { useFadeIn } from '@/hooks/useFadeIn';

const WINS = [
  { era: 'CPaaS · Twilio · 2024', deal: 'Xero · closed net-new for the generative AI companion, JAX', val: 'net-new' },
  { era: 'CPaaS · Twilio · 2021', deal: 'OfficeHQ Flex Contact Centre · 250 agents · closed in 8 weeks', val: '250 seats' },
  { era: 'CCaaS · 8x8 · 2019', deal: 'SiteMinder · 250 agents, 500 users, multi-year ACV', val: '500 users' },
  { era: 'UC · Genesys · 2015', deal: 'Employsure · 500-agent contact centre · Global Mid-Market Rep of the Year', val: '500 agents' },
];

export default function Record() {
  const ref = useFadeIn();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} style={{ maxWidth: 1320, margin: '0 auto', padding: '120px 56px' }}>
      {/* Eyebrow */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 14, borderBottom: '1px solid var(--rule)', marginBottom: 36, fontSize: 11, letterSpacing: 2.4, textTransform: 'uppercase', color: 'var(--muted)', fontFamily: 'var(--mono)' }}>
        <span><span style={{ color: 'var(--accent)' }}>§ 04</span> · The receipts · track record, not résumé</span>
        <span>A PDF is on request — these are what hiring managers actually want</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'end', marginBottom: 56 }}>
        <h2 style={{ fontFamily: 'var(--display)', fontSize: 84, lineHeight: 0.95, letterSpacing: -3, margin: 0, fontWeight: 800 }}>
          Track record.<br /><span style={{ color: 'var(--muted)' }}>Not résumé.</span>
        </h2>
      </div>

      {/* Metrics grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', border: '1px solid var(--rule-hard)' }}>
        {RECORD.map((r, i) => (
          <div key={i} style={{ padding: '40px 32px', borderRight: (i + 1) % 3 !== 0 ? '1px solid var(--rule)' : 'none', borderBottom: i < 3 ? '1px solid var(--rule)' : 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ fontSize: 10, letterSpacing: 1.6, color: 'var(--muted)', fontFamily: 'var(--mono)' }}>METRIC · {String(i + 1).padStart(2, '0')}</div>
            <div style={{ fontFamily: 'var(--display)', fontSize: 64, fontWeight: 800, letterSpacing: -2.2, lineHeight: 1, color: r.tone === 'primary' ? 'var(--accent)' : 'var(--ink)' }}>{r.num}</div>
            <div style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.5 }}>{r.label}</div>
          </div>
        ))}
      </div>

      {/* Signature wins */}
      <div style={{ marginTop: 32, border: '1px solid var(--rule-hard)', padding: 32 }}>
        <div style={{ fontSize: 10, letterSpacing: 1.6, color: 'var(--muted)', fontFamily: 'var(--mono)', marginBottom: 20 }}>// SIGNATURE WINS · A SHORT LIST</div>
        {WINS.map((d, i) => (
          <div key={i} className="winRow" style={{ display: 'grid', gridTemplateColumns: '180px 1fr 160px', gap: 24, padding: '20px 12px', borderBottom: i < WINS.length - 1 ? '1px solid var(--rule)' : 'none', alignItems: 'center', borderRadius: 4 }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)', letterSpacing: 0.4 }}>{d.era}</span>
            <span style={{ fontSize: 16, color: 'var(--ink)', fontWeight: 500 }}>{d.deal}</span>
            <span style={{ fontFamily: 'var(--display)', fontSize: 24, color: 'var(--accent)', fontWeight: 700, textAlign: 'right', letterSpacing: -0.6 }}>{d.val}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Write OnStage.tsx**

```tsx
// components/OnStage.tsx
'use client';
import Image from 'next/image';
import { useFadeIn } from '@/hooks/useFadeIn';

const PRESENTATIONS = [
  { y: 'Twilio', v: 'Customer rooms · ANZ ISVs', p: 'Generative AI companion deployments, including JAX at Xero' },
  { y: '8x8', v: 'Partner stages · NSW / VIC', p: 'CCaaS positioning vs. on-prem Avaya / Genesys incumbents' },
  { y: 'Genesys', v: 'Mid-market customer panels', p: "Australia's largest contact centres on cloud migration" },
  { y: 'Avaya', v: 'Reseller enablement · APAC', p: 'Channel kickoffs across the region with 75+ partners' },
];

export default function OnStage() {
  const ref = useFadeIn();
  return (
    <section id="on-stage" ref={ref as React.RefObject<HTMLElement>} style={{ background: 'var(--bg-deep)', borderTop: '1px solid var(--rule)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '120px 56px' }}>
        {/* Eyebrow */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 14, borderBottom: '1px solid var(--rule)', marginBottom: 36, fontSize: 11, letterSpacing: 2.4, textTransform: 'uppercase', color: 'var(--muted)', fontFamily: 'var(--mono)' }}>
          <span><span style={{ color: 'var(--accent)' }}>§ 05</span> · In the room · customer rooms, partner stages, and the hallway after</span>
          <span>Twenty years of presenting where it counts</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 64, alignItems: 'center' }}>
          {/* Image */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
              <Image src="/adam-podium.jpg" alt="Adam on stage" fill style={{ objectFit: 'cover', objectPosition: 'center 22%', filter: 'grayscale(1) contrast(1.05)' }} />
            </div>
            <div style={{ position: 'absolute', left: 20, bottom: 20, padding: '8px 12px', background: 'rgba(0,0,0,0.78)', color: '#fff', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: 1.2, backdropFilter: 'blur(6px)' }}>
              FIG · CUSTOMER PRESENTATION · SYDNEY
            </div>
            <div style={{ position: 'absolute', top: -16, right: -16, padding: '5px 10px', background: 'var(--accent)', color: '#fff', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: 1.2 }}>PLATE II</div>
          </div>

          {/* Copy */}
          <div>
            <h2 style={{ fontFamily: 'var(--display)', fontSize: 72, lineHeight: 0.96, letterSpacing: -2.4, margin: 0, fontWeight: 800 }}>
              I close in<br /><span style={{ color: 'var(--accent)' }}>the room</span>, not the deck.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--body)', marginTop: 24, maxWidth: 460 }}>
              Twenty years of customer presentations, partner kickoffs, vendor enablement, and post‑discovery
              recap sessions. I&apos;m comfortable in front of a room — and even more comfortable in the hallway
              after, where the real questions get asked.
            </p>
            <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 0 }}>
              {PRESENTATIONS.map((t, i) => (
                <div key={i} className="stageRow" style={{ display: 'flex', gap: 24, alignItems: 'baseline', padding: '12px 8px', borderBottom: '1px solid var(--rule)', borderRadius: 4 }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)', width: 78, flexShrink: 0 }}>{t.y}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'var(--display)', fontSize: 20, fontWeight: 600, letterSpacing: -0.3 }}>{t.v}</div>
                    <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 2 }}>{t.p}</div>
                  </div>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--accent)' }}>↗ detail</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Write OffTheClock.tsx**

```tsx
// components/OffTheClock.tsx
'use client';
import Placeholder from './Placeholder';
import { useFadeIn } from '@/hooks/useFadeIn';

const HOBBIES = [
  { tag: 'Bender', title: 'Dog dad to a nine-year-old mini bulldog', body: 'Bender. 9. Australian mini bulldog. Senior management. Has opinions on the Cronulla cliff walk and on whether you\'re staying for dinner.', caption: 'fig · bender · cronulla · 4:5', dark: true },
  { tag: 'Bali', title: 'A second home in Canggu — better wifi than you\'d think', body: 'I spend weeks at a time working out of Bali. Different timezone, same pipeline. The shape of the day is just better when there\'s a wave at lunch.', caption: 'fig · canggu · golden hour', dark: false },
  { tag: 'Surf', title: 'The original voice technology — the ocean', body: 'Cronulla local. The board is the part of the week that doesn\'t require a stakeholder map.', caption: 'fig · cronulla point · 6am', dark: false },
  { tag: 'Snowboard', title: 'The other kind of carving', body: 'Japan when I can, Thredbo when I can\'t. Read the line, commit, recover from the bad ones.', caption: 'fig · niseko · white', dark: false },
  { tag: 'Golf', title: 'Working on the swing. And the patience.', body: 'Off the tee I\'m a long-cycle enterprise seller. On the green I\'m an SDR. The point of the round isn\'t the score — it\'s the four hours with mates.', caption: 'fig · the kingsway · saturday', dark: false },
  { tag: 'Vibe-code lab', title: 'Voice agents at the kitchen table', body: 'Most never ship. Son GPT 2.0 did — a clone of me my Mum can call. The practice is the point.', caption: 'fig · macbook · cronulla · late', dark: true },
];

export default function OffTheClock() {
  const ref = useFadeIn();
  return (
    <section id="off-the-clock" ref={ref as React.RefObject<HTMLElement>} style={{ background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '120px 56px' }}>
        {/* Eyebrow */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 14, borderBottom: '1px solid var(--rule)', marginBottom: 36, fontSize: 11, letterSpacing: 2.4, textTransform: 'uppercase', color: 'var(--muted)', fontFamily: 'var(--mono)' }}>
          <span><span style={{ color: 'var(--accent)' }}>§ 06</span> · Off the clock · the human behind the seller</span>
          <span>Six tiles · drop in real photos when ready</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'end', marginBottom: 64 }}>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 104, lineHeight: 0.94, letterSpacing: -4, margin: 0, fontWeight: 800 }}>
            And when<br />
            <span style={{ fontStyle: 'italic', fontWeight: 500 }}>I&apos;m not selling<span style={{ color: 'var(--accent)' }}>—</span></span>
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--body)', margin: 0, maxWidth: 380 }}>
            A short, honest accounting of the things that fill the other sixteen hours. The work
            is the work, but it&apos;s not the whole shape.
          </p>
        </div>

        {/* Magazine grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gridAutoRows: 'minmax(220px, auto)', gap: 20 }}>
          {/* Hero tile — Bender */}
          <div style={{ gridColumn: 'span 7', gridRow: 'span 2', background: 'var(--bg-ink)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
            <Placeholder caption={HOBBIES[0].caption} tone="dark" />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.8))', padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <div style={{ fontSize: 11, letterSpacing: 2, color: 'var(--accent)', fontFamily: 'var(--mono)', marginBottom: 12 }}>{HOBBIES[0].tag.toUpperCase()}</div>
              <h3 style={{ fontFamily: 'var(--display)', fontSize: 36, fontWeight: 700, letterSpacing: -1, margin: 0, lineHeight: 1.05, maxWidth: 480 }}>{HOBBIES[0].title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: 'rgba(255,255,255,0.75)', marginTop: 14, maxWidth: 460, marginBottom: 0 }}>{HOBBIES[0].body}</p>
            </div>
          </div>

          {/* Bali */}
          <div style={{ gridColumn: 'span 5', background: 'var(--bg-card)', border: '1px solid var(--rule)', padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: 2, color: 'var(--accent)', fontFamily: 'var(--mono)', marginBottom: 12 }}>{HOBBIES[1].tag.toUpperCase()}</div>
              <h3 style={{ fontFamily: 'var(--display)', fontSize: 30, fontWeight: 700, letterSpacing: -0.8, margin: 0, lineHeight: 1.05 }}>{HOBBIES[1].title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--body)', marginTop: 12, marginBottom: 0 }}>{HOBBIES[1].body}</p>
            </div>
            <div style={{ marginTop: 20, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', display: 'flex', justifyContent: 'space-between' }}>
              <span>base · cronulla</span><span>second base · canggu</span><span>tz · same shape</span>
            </div>
          </div>

          {/* Surf */}
          <div style={{ gridColumn: 'span 5', position: 'relative', overflow: 'hidden' }}>
            <Placeholder caption={HOBBIES[2].caption} tone="light" />
            <div style={{ position: 'absolute', inset: 0, padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', background: 'linear-gradient(180deg, transparent 50%, rgba(255,255,255,0.95))' }}>
              <div style={{ fontSize: 11, letterSpacing: 2, color: 'var(--accent)', fontFamily: 'var(--mono)', marginBottom: 8 }}>{HOBBIES[2].tag.toUpperCase()}</div>
              <h3 style={{ fontFamily: 'var(--display)', fontSize: 22, fontWeight: 700, letterSpacing: -0.5, margin: 0, lineHeight: 1.1, color: 'var(--ink)' }}>{HOBBIES[2].title}</h3>
            </div>
          </div>

          {/* Snowboard */}
          <div style={{ gridColumn: 'span 4', background: 'var(--bg-deep)', padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: 2, color: 'var(--accent)', fontFamily: 'var(--mono)', marginBottom: 12 }}>{HOBBIES[3].tag.toUpperCase()}</div>
              <h3 style={{ fontFamily: 'var(--display)', fontSize: 22, fontWeight: 700, letterSpacing: -0.5, margin: 0, lineHeight: 1.15 }}>{HOBBIES[3].title}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--body)', marginTop: 10, marginBottom: 0 }}>{HOBBIES[3].body}</p>
            </div>
            <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 4, height: 24 }}>
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} style={{ flex: 1, height: 6 + Math.abs(Math.sin(i * 0.7)) * 18, background: i < 10 ? 'var(--accent)' : 'var(--rule-hard)' }} />
              ))}
            </div>
          </div>

          {/* Golf */}
          <div style={{ gridColumn: 'span 4', background: 'var(--bg-card)', border: '1px solid var(--rule)', padding: 28 }}>
            <div style={{ fontSize: 11, letterSpacing: 2, color: 'var(--accent)', fontFamily: 'var(--mono)', marginBottom: 12 }}>{HOBBIES[4].tag.toUpperCase()}</div>
            <h3 style={{ fontFamily: 'var(--display)', fontSize: 22, fontWeight: 700, letterSpacing: -0.5, margin: 0, lineHeight: 1.15 }}>{HOBBIES[4].title}</h3>
            <p style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--body)', marginTop: 10 }}>{HOBBIES[4].body}</p>
            <ul style={{ margin: 0, marginTop: 14, padding: 0, listStyle: 'none', fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--mono)', lineHeight: 1.9 }}>
              <li>· home course · The Kingsway, Cronulla</li>
              <li>· best round · better than last time</li>
              <li>· partners · mates, always mates</li>
            </ul>
          </div>

          {/* Vibe-code lab */}
          <div style={{ gridColumn: 'span 4', position: 'relative', overflow: 'hidden', background: 'var(--bg-ink)', color: '#fff' }}>
            <Placeholder caption={HOBBIES[5].caption} tone="dark" />
            <div style={{ position: 'absolute', inset: 0, padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.78))' }}>
              <div style={{ fontSize: 11, letterSpacing: 2, color: 'var(--accent)', fontFamily: 'var(--mono)', marginBottom: 8 }}>{HOBBIES[5].tag.toUpperCase()}</div>
              <h3 style={{ fontFamily: 'var(--display)', fontSize: 22, fontWeight: 700, letterSpacing: -0.5, margin: 0, lineHeight: 1.15 }}>{HOBBIES[5].title}</h3>
              <p style={{ fontSize: 12, lineHeight: 1.55, color: 'rgba(255,255,255,0.7)', marginTop: 10, marginBottom: 0 }}>{HOBBIES[5].body}</p>
            </div>
          </div>
        </div>

        {/* Signed line */}
        <div style={{ marginTop: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 24, borderTop: '1px solid var(--rule)', fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: 1.2 }}>
          <span>↘ if you&apos;re still here, you&apos;re probably the right kind of reader.</span>
          <span>— A. K.</span>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Commit**

```bash
cd /home/akratiuk85/Bio-Page
git add components/Record.tsx components/OnStage.tsx components/OffTheClock.tsx
git commit -m "feat: add Record, OnStage, and OffTheClock sections"
```

---

### Task 10: Contact + Footer + main page assembly

**Files:**
- Create: `components/Contact.tsx`
- Create: `components/Footer.tsx`
- Modify: `app/page.tsx`

- [ ] **Step 1: Write Contact.tsx**

```tsx
// components/Contact.tsx
'use client';
import { useFadeIn } from '@/hooks/useFadeIn';

interface Props { onTalk: () => void; }

export default function Contact({ onTalk }: Props) {
  const ref = useFadeIn();
  return (
    <section id="contact" ref={ref as React.RefObject<HTMLElement>} style={{ background: 'var(--bg-ink)', color: '#fff' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '140px 56px', textAlign: 'center' }}>
        <div style={{ fontSize: 11, letterSpacing: 2.4, textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 32, fontFamily: 'var(--mono)' }}>
          <span style={{ color: 'var(--accent)' }}>§ 07</span> · The ask
        </div>
        <h2 style={{ fontFamily: 'var(--display)', fontSize: 144, lineHeight: 0.92, letterSpacing: -5.5, margin: 0, fontWeight: 800 }}>
          If you&apos;re building<br />
          <span style={{ color: 'var(--accent)' }}>Voice AI</span> for the<br />
          enterprise<span style={{ color: 'var(--accent)' }}>—</span>
        </h2>
        <p style={{ fontFamily: 'var(--display)', fontSize: 24, fontStyle: 'italic', fontWeight: 400, marginTop: 32, color: 'rgba(255,255,255,0.7)', maxWidth: 720, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.4 }}>
          Founding GTM. AE #1–5. First sales hire.<br />
          Your founders write code, your buyer runs a contact centre, and you need a seller
          who&apos;s lived every voice wave since the PBX. Let&apos;s talk.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 48, flexWrap: 'wrap' }}>
          <button onClick={onTalk} style={{ padding: '18px 28px', background: 'var(--accent)', color: '#fff', border: 'none', borderRadius: 999, fontSize: 15, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10, boxShadow: '0 14px 36px rgba(44,95,255,0.4)' }}>
            <span style={{ width: 8, height: 8, borderRadius: 999, background: '#fff' }} />
            Meet my AI twin
          </button>
          <a href="mailto:akratiuk85@gmail.com" style={{ padding: '18px 26px', background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 999, fontSize: 15, fontWeight: 500, display: 'inline-flex', alignItems: 'center' }}>
            akratiuk85@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/adam-kratiuk" target="_blank" rel="noopener noreferrer" style={{ padding: '18px 26px', background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 999, fontSize: 15, fontWeight: 500, display: 'inline-flex', alignItems: 'center' }}>
            linkedin.com/in/adam-kratiuk
          </a>
          <a href="mailto:akratiuk85@gmail.com" style={{ padding: '18px 26px', background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 999, fontSize: 15, fontWeight: 500, display: 'inline-flex', alignItems: 'center' }}>
            📅 Book 20 min →
          </a>
        </div>
        <div style={{ marginTop: 64, display: 'inline-flex', gap: 28, padding: '14px 24px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 999, fontFamily: 'var(--mono)', fontSize: 12, color: 'rgba(255,255,255,0.7)', letterSpacing: 0.4 }}>
          <span>cronulla, nsw · australia</span>
          <span>open to bay area / eu / remote</span>
          <span>replies under 24h, usually faster</span>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Write Footer.tsx**

```tsx
// components/Footer.tsx
export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--rule)' }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '44px 56px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12, color: 'var(--muted)', letterSpacing: 0.6, fontFamily: 'var(--mono)' }}>
        <span>© 2026 Adam Kratiuk · Cronulla, NSW · Set in Inter Tight & Inter</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 7, height: 7, borderRadius: 999, background: '#7CFFB2', display: 'inline-block' }} />
          AI twin live · ElevenLabs · HeyGen
        </span>
        <div style={{ display: 'flex', gap: 18 }}>
          <a href="https://www.linkedin.com/in/adam-kratiuk" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>LinkedIn</a>
          <span>X</span>
          <span>GitHub</span>
          <span>🐾 Bender</span>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Write app/page.tsx**

```tsx
// app/page.tsx
'use client';
import { useState } from 'react';
import TopBar from '@/components/TopBar';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import Brands from '@/components/Brands';
import Timeline from '@/components/Timeline';
import Avatar from '@/components/Avatar';
import Projects from '@/components/Projects';
import Record from '@/components/Record';
import OnStage from '@/components/OnStage';
import OffTheClock from '@/components/OffTheClock';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import VoiceCloneModal from '@/components/VoiceCloneModal';

export default function Page() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div style={{ background: 'var(--bg)', color: 'var(--ink)', fontFamily: 'var(--body-f)', position: 'relative' }}>
      <TopBar />
      <Nav onTalk={openModal} />
      <Hero onTalk={openModal} />
      <Brands />
      <Timeline />
      <Avatar onTalk={openModal} />
      <Projects />
      <Record />
      <OnStage />
      <OffTheClock />
      <Contact onTalk={openModal} />
      <Footer />
      <VoiceCloneModal open={modalOpen} onClose={closeModal} />
    </div>
  );
}
```

- [ ] **Step 4: Commit**

```bash
cd /home/akratiuk85/Bio-Page
git add components/Contact.tsx components/Footer.tsx app/page.tsx
git commit -m "feat: add Contact, Footer, assemble main page"
```

---

### Task 11: HeyGen API route + next.config

**Files:**
- Create: `app/api/heygen/route.ts`
- Modify: `next.config.ts`

- [ ] **Step 1: Write HeyGen API route**

```typescript
// app/api/heygen/route.ts
import { NextResponse } from 'next/server';

export async function POST() {
  const apiKey = process.env.HEYGEN_API_KEY;
  const agentId = process.env.HEYGEN_AGENT_ID;

  if (!apiKey || apiKey === 'your_heygen_api_key_here') {
    return NextResponse.json({ error: 'HeyGen API key not configured' }, { status: 503 });
  }

  try {
    const res = await fetch('https://api.heygen.com/v1/streaming.create_token', {
      method: 'POST',
      headers: { 'x-api-key': apiKey, 'Content-Type': 'application/json' },
      body: JSON.stringify({ agent_id: agentId }),
    });

    if (!res.ok) {
      const err = await res.text();
      return NextResponse.json({ error: err }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json({ token: data.data?.token, agentId });
  } catch (err) {
    return NextResponse.json({ error: 'Failed to create HeyGen session' }, { status: 500 });
  }
}
```

- [ ] **Step 2: Update next.config.ts to allow portrait/podium domain**

```typescript
// next.config.ts
import type { NextConfig } from 'next';

const config: NextConfig = {
  images: {
    unoptimized: false,
  },
};

export default config;
```

- [ ] **Step 3: Commit**

```bash
cd /home/akratiuk85/Bio-Page
git add app/api/heygen/route.ts next.config.ts
git commit -m "feat: add HeyGen streaming token API route"
```

---

### Task 12: Build verification

- [ ] **Step 1: Run TypeScript check**

```bash
cd /home/akratiuk85/Bio-Page && pnpm tsc --noEmit 2>&1
```

Expected: no errors (or only minor type warnings)

- [ ] **Step 2: Run production build**

```bash
cd /home/akratiuk85/Bio-Page && pnpm build 2>&1 | tail -20
```

Expected: `✓ Compiled successfully`

- [ ] **Step 3: Start and smoke-test**

```bash
cd /home/akratiuk85/Bio-Page && pnpm start &
sleep 3 && curl -s -o /dev/null -w "%{http_code}" http://localhost:3000
```

Expected: `200`

```bash
kill %1 2>/dev/null; true
```

- [ ] **Step 4: Final commit**

```bash
cd /home/akratiuk85/Bio-Page && git add -A && git commit -m "feat: production build verified — Adam Kratiuk bio site complete"
```
