# Handoff: Adam Kratiuk — Personal Bio & Portfolio Page

## Overview

A long-form personal bio/portfolio site for Adam Kratiuk — a Voice AI sales professional with 20+ years of experience across every wave of business voice technology (PBX → IP Telephony → UC → CCaaS → CPaaS → Voice AI). The site is his job application, demo environment, and work sample in one. It includes an interactive AI twin demo (HeyGen avatar + ElevenLabs voice), a career timeline, project showcase, track record, and personal "Off the Clock" section.

---

## About the Design Files

The files in this bundle are **HTML design references** — high-fidelity prototypes built in React/JSX showing the intended look, content, and interactive behaviour. They are **not production code to copy directly**.

The task is to **recreate these designs in whatever real environment Adam will deploy to** (a static site, Next.js, Webflow, etc.) using appropriate production patterns, performance optimisation, and real integrations (HeyGen, ElevenLabs, LiveKit, email links, Calendly). The HTML files are the source of truth for visual design; the developer should match them pixel-accurately.

---

## Fidelity

**High-fidelity.** Every colour, font, spacing value, layout proportion, and interaction in the reference files is intentional and should be reproduced accurately. Use the design tokens below as the source of truth for all values.

---

## Design Tokens

### Colours
| Token | Value | Usage |
|---|---|---|
| `bg` | `#ffffff` | Page background, card background |
| `bgCard` | `#ffffff` | Card backgrounds |
| `bgDeep` | `#f5f5f3` | Alternate section background (On Stage, Snowboard tile) |
| `bgInk` | `#0a0a0b` | Dark sections (Timeline, Contact, Footer, Avatar card) |
| `ink` | `#0a0a0b` | Primary text |
| `body` | `rgba(10,10,11,0.78)` | Body copy |
| `muted` | `rgba(10,10,11,0.55)` | Secondary text, captions |
| `faint` | `rgba(10,10,11,0.35)` | Very light text (brand names at rest) |
| `rule` | `rgba(10,10,11,0.12)` | Standard dividers / borders |
| `ruleHard` | `rgba(10,10,11,0.2)` | Stronger dividers |
| `accent` | `#2C5FFF` | Cobalt blue — primary accent, CTAs, active states |
| `accentSoft` | `#E9EEFF` | Light cobalt tint — live status badges, card 1 header |
| `accentInk` | `#1740C2` | Dark cobalt — text on accentSoft |

### Typography
| Role | Family | Fallback |
|---|---|---|
| Display / Headings | Inter Tight | Helvetica, Arial, sans-serif |
| Body | Inter | -apple-system, sans-serif |
| Mono / Labels | Geist Mono | JetBrains Mono, ui-monospace, monospace |

All three families are loaded from Google Fonts:
```
https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500;600;700&display=swap
```

### Spacing & Layout
- Max content width: **1320px**, centred, `margin: 0 auto`
- Horizontal page padding: **56px** (desktop)
- Section vertical padding: **120px top/bottom** (major sections), **140px** (Contact)
- Gap between grid columns: **56–64px** (content grids), **24px** (card grids)

### Borders & Radius
- Section borders use `rule` colour (`rgba(10,10,11,0.12)`)
- Most cards: `border-radius: 0` (square, editorial aesthetic)
- CTA buttons (pill): `border-radius: 999px`
- Avatar card: `border-radius: 16px`
- Status badges: `border-radius: 999px`

### Shadows
- Project card hover: `box-shadow: 0 12px 40px rgba(0,0,0,0.10)`
- "Meet my AI twin" CTA: `box-shadow: 0 14px 36px rgba(44,95,255,0.32)`
- Avatar card: `box-shadow: 0 40px 100px rgba(0,0,0,0.22)`

---

## Sections / Views

### 1. Top Bar
- Full-width dark bar (`bgInk` background)
- Two items in a flex row (max-width 1320px, 8px vertical padding, 56px horizontal):
  - Left: `"Cronulla, NSW · Australia"` — mono font, 11px, `rgba(255,255,255,0.7)`
  - Right: `"this site is the work sample"` — same style, `margin-left: auto`

### 2. Sticky Navigation
- Sticky, `top: 0`, `z-index: 50`
- Background: `rgba(255,255,255,0.92)` with `backdrop-filter: blur(10px)`
- Bottom border: 1px `rule` colour
- Layout: three columns — logo mark, nav links, CTA button
- **Logo mark**: 32×32px black square with "AK" in Inter Tight 700, 13px. Right of it: "Adam Kratiuk" (16px, 600 weight) + "twenty years in voice" (10px mono, muted)
- **Nav links**: Story · Timeline · Projects · On Stage · Off the Clock · Contact. 14px Inter 500. Opacity 0.78 at rest → 1 on hover (0.15s transition). Each links to its section anchor (`#story`, `#timeline`, `#projects`, `#on-stage`, `#off-the-clock`, `#contact`)
- **CTA**: pill button, `bgInk` background, white text, 13px 600 weight. Has a 7px cobalt dot with `box-shadow: 0 0 0 4px rgba(44,95,255,0.25)` before the label "Meet my AI twin". Opens voice clone modal on click.

### 3. Hero
- `id="story"`, max-width 1320px, 72px top padding
- **Left column** (1.05fr):
  - Eyebrow: `"Vol. I · A bio in long form"` — 11px mono, 2.4 letter-spacing, uppercase, muted. Preceded by a 36×1px ink rule line.
  - H1: `"Hello."` — Inter Tight 800, **196px**, line-height 0.88, letter-spacing -8px. The period `"."` is in accent cobalt.
  - Subheading (30px Inter Tight 500, -0.6 letter-spacing): `"Twenty years in voice. / Six platform shifts."` + italic muted `"One that finally talks back."`
  - Body copy (16px, 1.65 line-height): `"I'm Adam. I've sold every wave of business voice since the PBX — most recently as an enterprise AE at Twilio. I'm now pivoting into a founding GTM seat at a Voice AI startup. This site is the conversation, the demo, and the first work sample."`
  - Two buttons: (a) `"Meet my AI twin"` — square `borderRadius: 0`, `bgInk`, white, 13px 600 uppercase 1.5 letter-spacing, with cobalt dot. (b) `"Skip to timeline ↓"` — transparent, ink border, same sizing. Links to `#timeline`.
- **Right column** (1fr): Portrait photo
  - Blue label top-right: `"FIG. 01 · THE OPERATOR"` in cobalt, mono 10px
  - Image: `assets/adam-portrait.png`, aspect ratio 4/5, max-height 620px, `object-position: center 30%`, `filter: grayscale(1) contrast(1.05)`
  - Subtle gradient overlay: `linear-gradient(180deg, transparent 60%, rgba(44,95,255,0.09) 100%)` with `mix-blend-mode: multiply`
  - Caption below: "Adam Kratiuk · shot · cronulla, nsw · © 2026" — 10px mono, muted, uppercase, space-between flex row

- **Stat strip** (below the two-column grid, `marginTop: 64px`):
  - 4-column grid, full border in `ruleHard`, no gap
  - Each cell: 32px padding, flex column, 10px gap
  - Number: Inter Tight 800, **64px** (or **46px** if 4+ characters like `"191%"`), letter-spacing -2, line-height 1
  - Stats: `20+` Years in voice (PBX → Voice AI) | `4×` President's Club (Monaco · Costa Rica · Jamaica · Bahamas) | `191%` Quota FY23 at Twilio (331% in 2021 · 175% in 2022) | `4` AI projects shipped (accent cobalt colour, "Nights & weekends")
  - Cell index label: "↗ 01" etc., 10px mono, muted, 1.6 letter-spacing

- **Pull quote** (marginalia row, `marginTop: 40px`):
  - 3-column grid (1fr 2fr 1fr), 48px gap
  - Left: reading/listening time in mono 11px muted
  - Centre: italic Inter Tight 19px quote: `"If you've sold every version of a thing for twenty years — and you can still vibe-code one yourself on a Saturday — you can probably sell the next one."`
  - Right: "A. Kratiuk, 2026 / Cronulla, NSW" — mono 11px muted, right-aligned

### 4. Brand Strip
- Full-width, top/bottom `rule` borders, `marginTop: 72px`, `bgCard` background
- Flex row: "Sold for / against →" label (mono 11px, uppercase, muted) + 8 brand names spaced evenly
- Brands: Avaya · Cisco · Mitel · Genesys · NICE · Five9 · RingCentral · Twilio
- Brand names: Inter Tight 22px 600, `faint` colour at rest → `ink` on hover, 0.2s transition

### 5. Timeline (dark section)
- `id="timeline"`, `bgInk` background, 120px/140px padding, white text
- **Section header**: eyebrow row with `"§ 01 · The spine"` left, era counter right
- **Intro grid** (1.3fr 1fr): large H2 "Every wave of voice, / in the seat where it happened." (104px Inter Tight 800, -4 letter-spacing) + explanatory body copy
- **Era selector tabs**: 6-column grid, one button per era. Active era: `rgba(44,95,255,0.18)` background, 2px cobalt top+bottom border. "NOW" badge on current era.
  - Eras: PBX · The copper years (2004–2008) | IP Telephony & UC (2008–2013) | Contact Centre · The vendor years (2014–2018) | CCaaS · The cloud wave (2018–2020) | CPaaS · APIs eat the appliance (2021–2024) | Voice AI · The agent answers (2024→now)
- **Active era detail** (1.1fr 1.4fr grid):
  - Left: era photo (4:3 aspect). Current era shows `assets/adam-podium.png` (`filter: grayscale(1) contrast(1.1) brightness(1.05)`). Other eras show a placeholder with a descriptive caption. Bottom-left overlay label in glassmorphism style.
  - Right: large cobalt era number (80px), era name (44px 700), year range (12px mono). Two-column info grid: Industry Shift + The Seat I Was In. Signature win in a left-bordered panel (`borderLeft: 3px solid accent`). "// vocabulary of the era ·" note in mono.

### 6. AI Twin Demo (Avatar section)
- `id="demo"`, max-width 1320px, 120px padding, white background
- **Left column** (1fr): copy + CTAs
  - H2: "Don't read / about me. / Talk to me." — 84px Inter Tight 800
  - Two body paragraphs about the HeyGen/ElevenLabs setup
  - Two CTA buttons: "Start a live conversation" (accent pill, white text, cobalt glow shadow) + "🎧 Voice only →" (transparent, ink border, pill)
  - Tech stack chip: mono 12px, cobalt "// stack ·" label + stack string
- **Right column** (1.4fr): Simulated video player card
  - `bgInk` background, `borderRadius: 16px`, `boxShadow: 0 40px 100px rgba(0,0,0,0.22)`
  - Header bar: session info + latency indicator (`● 740ms` in `#7CFFB2`)
  - Avatar stage: portrait photo as background, vignette overlay, animated waveform bars (18 bars, 3px wide, cobalt colour, animated when "playing"), caption overlay
  - Controls: play/pause button (cobalt, 44px circle), time display (mono), scrubable progress bar, CC/mic buttons, "Take over →" CTA
  - Prompt chips at bottom: 5 suggested questions users can click

> **Note for implementation**: The avatar and voice functionality are powered by HeyGen + ElevenLabs + LiveKit. The video player in the reference is a prototype simulation. Production implementation requires integrating these APIs directly.

### 7. Projects (§ 03)
- `id="projects"`, `bgCard` background with top/bottom `rule` borders
- Section header + intro grid matching the pattern above
- **2×2 card grid**, 24px gap. Cards lift 3px on hover with `box-shadow: 0 12px 40px rgba(0,0,0,0.10)`, transition 0.2s.
- Each card has a **200px header panel** with distinct background:
  - Card 1 (Son GPT 2.0): `#E9EEFF` cobalt tint, large faint `"01"` ghost number, tag "voice clone · personal"
  - Card 2 (AI Voice Agent Builder): `#0a0a0b` dark ink, faint white ghost `"02"`, tag "voice agent · enterprise"
  - Card 3 (ICP Tool): `#f0ede8` warm cream, muted ghost `"03"`, tag "sales tool · pipeline"
  - Card 4 (Twin): `#2C5FFF` cobalt solid, white ghost `"04"`, tag "ai twin · this site"
  - Ghost numbers: Inter Tight 800, 168px, letter-spacing -8px, `position: absolute`, top-right
- Card body (28px padding): project index + primary stack tech (mono 10px muted) | live badge (cobalt soft tint) or status badge | H3 project name (36px 700, -1 letter-spacing) | blurb (15px 1.6) | footer row with stack string + "↗ open project" (accent)

**Projects data:**
1. **Son GPT 2.0** — "My first vibe-coded app. A voice clone of me that my Mum can call…" — ElevenLabs · GPT-4 · Twilio · Next.js — Live
2. **AI Voice Agent Builder** — "A drag-and-drop builder for outbound voice agents…" — ElevenLabs · OpenAI · Twilio · Next.js — Live
3. **ICP Tool** — "An AE's nightmare: a list of 'leads' with no fit signal…" — OpenAI · Clearbit · Vercel — In production
4. **Twin** — "The agent on this site — my ElevenLabs voice clone, plugged into a HeyGen avatar…" — ElevenLabs · HeyGen · LiveKit — You're using it

### 8. Track Record (§ 04)
- Max-width 1320px section, 120px padding
- Intro: H2 "Track record. / Not résumé." (84px 800)
- **3×2 metrics grid** with `ruleHard` outer border, `rule` inner dividers:
  - `4×` President's Club — Monaco · Costa Rica · Jamaica · Bahamas (accent cobalt)
  - `191%` of quota — FY23 at Twilio. 331% in 2021. 175% software/119% revenue in 2022.
  - `2015` Global Mid-Market Rep of the Year — Genesys / Interactive Intelligence
  - `20 yrs` In voice — every wave from PBX to Voice AI
  - `3 seats` Reseller · distributor · vendor — every layer of the supply chain
  - `4` AI side projects shipped — Son GPT 2.0 was the first
  - Numbers: Inter Tight 800, 64px, -2.2 letter-spacing. First metric in accent cobalt, rest in ink.
- **Signature Wins log** (below the grid, `bgCard` with `ruleHard` border, 32px padding):
  - 3-column grid: era (mono 12px muted, 180px) | deal description (16px 500) | value (Inter Tight 24px accent 700, right-aligned)
  - Rows highlight `bgDeep` on hover, 0.15s transition
  - 4 wins: Xero/JAX · OfficeHQ · SiteMinder · Employsure

### 9. On Stage (§ 05)
- `id="on-stage"`, `bgDeep` background, top `rule` border
- 1.3fr 1fr grid, 64px gap
- Left: `assets/adam-podium.png`, 4:3 aspect, `grayscale(1) contrast(1.05)`, with caption overlay and "PLATE II" cobalt label top-right (offset -16px)
- Right: H2 "I close in / the room, not the deck." (72px 800, accent cobalt for "the room")
- Body copy + 4 presentation rows (Twilio / 8x8 / Genesys / Avaya). Rows: company (mono 12px muted, 78px wide) | venue/description | "↗ detail" (accent 11px mono). Rows have soft ink hover tint.

### 10. Off the Clock (§ 06)
- `id="off-the-clock"`, white background
- Intro: H2 "And when / I'm not selling—" (104px 800, em-dash in accent)
- **Magazine 12-column grid**, `gridAutoRows: minmax(220px, auto)`, 20px gap:
  - Bender (dog): span 7 col × 2 row — dark hero tile, gradient overlay, large H3 + body
  - Bali: span 5 col — white card with border, text content + footer metadata
  - Surf: span 5 col — placeholder image with gradient fade to white at bottom
  - Snowboard: span 4 col — `bgDeep` text panel with decorative waveform bars
  - Golf: span 4 col — white card with border, list items in mono
  - Vibe-code lab: span 4 col — dark tile, image placeholder with gradient overlay
- Each tile: cobalt accent tag (mono 11px 2 letter-spacing), H3 title (22–36px 700), body copy
- Footer row: "↘ if you're still here, you're probably the right kind of reader." + "— A. K."

> **Note**: All 6 tiles currently show placeholder content. Adam will supply real photos for each.

### 11. Contact (§ 07)
- `id="contact"`, `bgInk` background, white text, centred layout, 140px padding
- Eyebrow: "§ 07 · The ask" (mono, muted white)
- H2: "If you're building / Voice AI for the / enterprise—" — Inter Tight 800, **144px**, -5.5 letter-spacing. "Voice AI" in accent cobalt.
- Italic subheading (Inter Tight 24px italic): founding GTM / AE #1–5 pitch
- 4 pill buttons in a flex row:
  - "Meet my AI twin" — accent cobalt, cobalt glow shadow, opens modal
  - `akratiuk85@gmail.com` — `mailto:akratiuk85@gmail.com` link
  - `linkedin.com/in/adam-kratiuk` — opens LinkedIn in new tab
  - "📅 Book 20 min →" — `mailto:` link (replace with Calendly URL in production)
- Location/availability pill: "cronulla, nsw · australia · open to bay area / eu / remote · replies under 24h"

### 12. Footer
- White background, top `rule` border, 44px padding
- Three-column flex row: copyright + attribution | AI twin status indicator (green dot `#7CFFB2`) | social links (LinkedIn · X · GitHub · 🐾 Bender)
- All text: mono 12px, muted, 0.6 letter-spacing

---

## Interactions & Behaviour

### Scroll-Triggered Fade-Ins
Every major section (Hero, Timeline, Avatar, Projects, Record, On Stage, Off the Clock, Contact) fades in from `opacity: 0; transform: translateY(28px)` to `opacity: 1; transform: translateY(0)` using `IntersectionObserver` with `threshold: 0.06`. Transition: `0.7s ease`. Fires once per section then disconnects.

### Sticky Nav + Smooth Scroll
- Nav is `position: sticky; top: 0` with glass blur background
- `document.documentElement.style.scrollBehavior = 'smooth'` applied on mount
- All nav links use `href="#anchor-id"` scroll targeting

### Voice Clone Modal
- Opens on any "Meet my AI twin" CTA click
- Full-screen overlay: `position: absolute; inset: 0`, dark backdrop with `backdrop-filter: blur(8px)`
- 560px modal card with: session header (status dot + title + close ×), animated orb (3 concentric rings that pulse when speaking), state machine (`idle → listening → thinking → speaking`), transcript display, press-to-talk button, mute toggle, "Switch to video twin" option
- Dismiss: click backdrop, Esc key, or × button
- **Production**: connect to real ElevenLabs + HeyGen + LiveKit streaming; the reference uses a simulated demo loop

### Brand Bar Hover
- Brand names: `color: faint` → `color: ink` on hover, `transition: color 0.2s`

### Project Card Hover
- `box-shadow: 0 12px 40px rgba(0,0,0,0.10)` + `transform: translateY(-3px)`, `transition: 0.2s`

### Signature Wins Row Hover
- Row background: `transparent` → `bgDeep` on hover, `transition: background 0.15s`

### On Stage Row Hover
- Row background: `transparent` → `rgba(10,10,11,0.04)` on hover, `transition: background 0.15s`

### Timeline Era Selector
- Clicking any era tab updates the displayed era content (image + details) instantly
- Active tab: `rgba(44,95,255,0.18)` background, `2px solid accent` top/bottom borders

---

## Assets

| File | Description |
|---|---|
| `assets/adam-portrait.png` | Adam's headshot — used in Hero (4:5 crop, grayscale) and Avatar section |
| `assets/adam-podium.png` | Adam presenting — used in Timeline (current era) and On Stage section |

Both images are rendered in `filter: grayscale(1) contrast(1.05)` throughout the site.

**Placeholder images needed from Adam** (Off the Clock section):
- Bender (dog) — portrait format preferred
- Bali / Canggu lifestyle shot
- Cronulla surf shot
- Niseko/Thredbo snowboard shot
- Golf at The Kingsway
- Late-night laptop / vibe-code setup

---

## State Management

- `modalOpen: boolean` — controls voice clone modal visibility (root component)
- `active: number (0–5)` — controls active timeline era (Timeline component)
- `playing: boolean` — controls avatar video playback simulation (Avatar component)
- `time: number` — playback position in seconds, 0–184 (Avatar component)
- `state: 'idle' | 'listening' | 'thinking' | 'speaking'` — voice clone conversation state (Modal component)
- `transcript: Array<{who: string, text: string}>` — conversation transcript (Modal component)

---

## Files in This Bundle

| File | Purpose |
|---|---|
| `Adam Kratiuk - Bio.html` | **Primary reference** — fully self-contained bundled prototype with all assets inlined. Open in any browser. |
| `Bio Site - standalone-source.html` | Source HTML entry point (loads the JSX files below) |
| `direction-a-v2-standalone.jsx` | All React components for the bio page |
| `shared.jsx` | Shared data (TIMELINE, PROJECTS, RECORD), VoiceCloneModal component, Placeholder component |
| `tweaks-panel.jsx` | In-design tweak controls (not needed in production) |

**To view the design**: open `Adam Kratiuk - Bio.html` in a browser — no server required.

---

## Production Notes

1. **HeyGen + ElevenLabs integration**: The voice clone modal and avatar section are simulated in the prototype. Production requires real API integration with HeyGen (video avatar), ElevenLabs (voice clone), and LiveKit (real-time transport).
2. **Calendly**: Replace the `mailto:` fallback on "Book 20 min" with Adam's actual Calendly URL.
3. **Placeholder photos**: The Off the Clock section has 6 tiles awaiting real photography from Adam.
4. **Era photos**: Timeline eras 1–5 show striped placeholders — Adam to supply era-appropriate photos.
5. **Fraunces font**: Imported in the source but not actively used — can be removed from production.
6. **Responsive design**: The prototype is desktop-only (1320px max-width). Mobile breakpoints have not been designed; implement with the same design tokens at appropriate scales.
