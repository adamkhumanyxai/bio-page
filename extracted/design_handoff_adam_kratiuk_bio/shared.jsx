// Shared data + helpers for all 3 directions — ADAM KRATIUK personalised build.
// Every string in this file is grounded in Adam's actual career history.

// =============================================================
// TIMELINE — Adam's REAL career arc, every era, every seat.
// Mapped from the resume: IPL → Infiniti → Distribution Central →
// Arrow Voice & Data → Genesys/Interactive Intelligence → 8x8 → Twilio.
// =============================================================
const TIMELINE = [
  {
    era: "PBX · The copper years",
    years: "2004 – 2008",
    industry: "On-prem PBX, copper PSTN, beige racks bolted to the wall. IT owned the closet, the install was the product, and every quote was a fax away.",
    role: "Junior admin → Sales Support → Channel Manager · IPL Communications · Sydney",
    win: "Started as a junior admin clerk shadowing senior sales leaders. Promoted to Channel Manager supporting 75+ Avaya and Alcatel resellers across NSW. Front and centre for the cutover from TDM to IP.",
    artifact: "Avaya. Alcatel. Punch-down blocks. Quote sheets in triplicate. The first time I sat behind a sales leader and took notes.",
  },
  {
    era: "IP Telephony & UC",
    years: "2008 – 2013",
    industry: "SIP eats TDM. The reseller channel learns to sell IP. Video conferencing arrives. The phone becomes software.",
    role: "Communications Consultant → National Channel Manager · Infiniti / Distribution Central (Arrow ECS) / Arrow Voice & Data",
    win: "Grew the Vivid Systems distribution book from $2.9M to $5.1M as National Channel Manager. Productised Avaya/Radvision video conferencing. First international travel — working across APAC with Avaya and a regional reseller base.",
    artifact: "QoS arguments. SIP trunks. The first time a CFO asked me what a codec was. Trade-show booths from Singapore to KL.",
  },
  {
    era: "Contact Centre · The vendor years",
    years: "2014 – 2018",
    industry: "Cloud contact centre becomes a real category. PureCloud / PureEngage land. CX moves from a cost centre to a P&L line.",
    role: "Market Territory Manager → Mid-Market Sales Manager · Genesys / Interactive Intelligence · Sydney",
    win: "Closed Employsure — 500 agents, multi-year. Global Mid-Market Rep of the Year, 2015. 186% of target. President's Club, Costa Rica. Then led a team of four through 152% personal / 106% team target. President's Club, Jamaica. The crossing from channel into pure vendor.",
    artifact: "WFM. Speech analytics. PureCloud. The realisation that voice is a data stream, not a feature.",
  },
  {
    era: "CCaaS · The cloud wave",
    years: "2018 – 2020",
    industry: "CCaaS leaders take share from on-prem. The buyer changes — it's CX now, not IT. Multi-tenant becomes the default.",
    role: "Account Executive · 8x8 · Sydney (NSW / VIC)",
    win: "Closed SiteMinder — 250 agents, 500 users, multi-year. President's Club, Monaco, at 108% of target. Sold a full UCaaS + CCaaS stack against legacy incumbents in the most competitive segment of my career.",
    artifact: "Multi-tenant SaaS pricing. SLA wars. The death of the appliance refresh.",
  },
  {
    era: "CPaaS · APIs eat the appliance",
    years: "2021 – 2024",
    industry: "Developers, not IT, buy voice. APIs replace boxes. Twilio defines the era. 'Build, not buy' becomes the buyer's default.",
    role: "Mid-Market AE → Strategic AE → New Business AE · ISVs ANZ · Twilio · Sydney",
    win: "331% of quota in 2021. 175% software / 119% revenue in 2022. President's Club, Bahamas. Closed OfficeHQ Flex — 250 agents — in 8 weeks. Then 191% in FY23, 120% in FY24. The buyer became the developer, and I learned to read API docs the way I used to read RFPs.",
    artifact: "Webhooks. SDKs. Studio flows. The first time I wrote a line of working code instead of speccing one.",
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

// =============================================================
// PROJECTS — Adam's real vibe-coded apps.
// Son GPT 2.0 leads as the emotional centerpiece.
// =============================================================
const PROJECTS = [
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

// =============================================================
// RECORD — numbers Adam will stand behind. All from the resume.
// No invented dollar figures — qualitative > fake.
// =============================================================
const RECORD = [
  { num: "4×", label: "President's Club — Monaco · Costa Rica · Jamaica · Bahamas", tone: "primary" },
  { num: "191%", label: "of quota — FY23 at Twilio. 331% in 2021. 175% software / 119% revenue in 2022." },
  { num: "2015", label: "Global Mid-Market Rep of the Year — Genesys / Interactive Intelligence" },
  { num: "20 yrs", label: "In voice — every wave from PBX to Voice AI" },
  { num: "3 seats", label: "Reseller · distributor · vendor — every layer of the supply chain" },
  { num: "4", label: "AI side projects shipped — Son GPT 2.0 was the first" },
];

const NAV = ["About", "Timeline", "Projects", "Writing", "Contact"];

// Voice-clone modal — shared across all 3 directions, theme-able via CSS vars
function VoiceCloneModal({ open, onClose, theme = "light", accent = "#2C5FFF", brand = "Adam" }) {
  const [state, setState] = React.useState("idle"); // idle | listening | thinking | speaking
  const [transcript, setTranscript] = React.useState([]);
  const [muted, setMuted] = React.useState(false);
  const timerRef = React.useRef(null);

  React.useEffect(() => {
    if (!open) {
      setState("idle");
      setTranscript([]);
      if (timerRef.current) clearTimeout(timerRef.current);
    }
  }, [open]);

  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape" && open) onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const press = () => {
    if (state !== "idle") return;
    setState("listening");
    timerRef.current = setTimeout(() => {
      setTranscript(t => [...t, { who: "you", text: "Tell me about your time at Twilio." }]);
      setState("thinking");
      timerRef.current = setTimeout(() => {
        setState("speaking");
        setTranscript(t => [...t, {
          who: "adam",
          text: "Twilio was where I stopped selling phone systems and started selling infrastructure. The buyer changed — it was the developer now, not the CIO. So I learned to read API docs the way I used to read RFPs. Closed Xero's JAX as net-new, hit 191% in FY23, President's Club in the Bahamas. The real win, though, was what it taught me: voice isn't a product category anymore — it's a primitive. That's why I'm coming for the next seat.",
        }]);
        timerRef.current = setTimeout(() => setState("idle"), 4200);
      }, 900);
    }, 1600);
  };

  const dark = theme === "dark";
  const bg = dark ? "#0a0a0b" : "#ffffff";
  const fg = dark ? "#f5f4f1" : "#0a0a0b";
  const muted2 = dark ? "rgba(245,244,241,0.55)" : "rgba(10,10,11,0.55)";
  const border = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";

  return (
    <div style={{
      position: "absolute", inset: 0, background: dark ? "rgba(0,0,0,0.7)" : "rgba(15,15,20,0.45)",
      backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center",
      zIndex: 100, padding: 40,
    }} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} style={{
        width: 560, maxWidth: "100%", background: bg, color: fg,
        borderRadius: 20, border: `1px solid ${border}`,
        boxShadow: "0 30px 80px rgba(0,0,0,0.35)", overflow: "hidden",
      }}>
        {/* header */}
        <div style={{
          padding: "20px 24px", borderBottom: `1px solid ${border}`,
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <div style={{
              width: 10, height: 10, borderRadius: 999,
              background: state === "idle" ? muted2 : accent,
              boxShadow: state !== "idle" ? `0 0 0 4px ${accent}22` : "none",
              transition: "all .3s",
            }}></div>
            <div style={{ fontSize: 13, letterSpacing: 0.4, textTransform: "uppercase", fontWeight: 600 }}>
              Live with {brand}'s clone
            </div>
          </div>
          <button onClick={onClose} style={{
            background: "none", border: "none", color: fg, fontSize: 20, cursor: "pointer", opacity: 0.6,
          }}>✕</button>
        </div>

        {/* orb */}
        <div style={{ padding: "44px 24px 28px", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ position: "relative", width: 180, height: 180, display: "grid", placeItems: "center" }}>
            {[0, 1, 2].map(i => (
              <div key={i} style={{
                position: "absolute", inset: 0, borderRadius: 999, border: `1px solid ${accent}`,
                opacity: state === "speaking" ? 0.4 - i * 0.1 : state === "listening" ? 0.25 : 0.08,
                transform: `scale(${state === "speaking" ? 1 + i * 0.18 : 1 + i * 0.06})`,
                transition: "all .9s cubic-bezier(.3,.7,.3,1)",
                animation: state === "speaking" ? `pulse-${i} 1.4s ease-in-out infinite` : "none",
              }}></div>
            ))}
            <div style={{
              width: 88, height: 88, borderRadius: 999,
              background: `radial-gradient(circle at 35% 35%, ${accent}, ${accent}aa 60%, ${accent}66)`,
              boxShadow: `0 0 60px ${accent}66, inset 0 0 30px rgba(255,255,255,0.2)`,
              transform: state === "listening" ? "scale(0.92)" : state === "speaking" ? "scale(1.08)" : "scale(1)",
              transition: "transform .4s",
            }}></div>
          </div>
          <div style={{ marginTop: 24, fontSize: 14, color: muted2, minHeight: 20, fontVariantNumeric: "tabular-nums" }}>
            {state === "idle" && "Press to start — ask me about any era, any deal, or about Bender."}
            {state === "listening" && "Listening…"}
            {state === "thinking" && "Thinking…"}
            {state === "speaking" && "Speaking — tap orb to interrupt."}
          </div>
        </div>

        {/* transcript */}
        {transcript.length > 0 && (
          <div style={{ padding: "0 24px 12px", maxHeight: 200, overflowY: "auto" }}>
            {transcript.map((t, i) => (
              <div key={i} style={{ marginBottom: 14 }}>
                <div style={{
                  fontSize: 11, letterSpacing: 0.6, textTransform: "uppercase",
                  color: t.who === "you" ? muted2 : accent, fontWeight: 700, marginBottom: 4,
                }}>{t.who === "you" ? "You" : brand}</div>
                <div style={{ fontSize: 15, lineHeight: 1.5 }}>{t.text}</div>
              </div>
            ))}
          </div>
        )}

        {/* controls */}
        <div style={{ padding: 20, borderTop: `1px solid ${border}`, display: "flex", gap: 10 }}>
          <button onClick={press} disabled={state !== "idle"} style={{
            flex: 1, padding: "14px 18px", background: state === "idle" ? accent : `${accent}40`,
            color: state === "idle" ? "#fff" : muted2, border: "none", borderRadius: 10,
            fontSize: 14, fontWeight: 600, letterSpacing: 0.3, cursor: state === "idle" ? "pointer" : "default",
            transition: "all .2s",
          }}>
            {state === "idle" ? "● Press to talk" : state === "listening" ? "Listening…" : state === "thinking" ? "Thinking…" : "Speaking…"}
          </button>
          <button onClick={() => setMuted(m => !m)} style={{
            padding: "14px 16px", background: "transparent", color: fg, border: `1px solid ${border}`,
            borderRadius: 10, cursor: "pointer", fontSize: 14,
          }}>{muted ? "🔇" : "🎤"}</button>
          <button style={{
            padding: "14px 16px", background: "transparent", color: fg, border: `1px solid ${border}`,
            borderRadius: 10, cursor: "pointer", fontSize: 13,
          }}>Switch to video twin →</button>
        </div>

        <div style={{ padding: "10px 24px 16px", fontSize: 11, color: muted2, letterSpacing: 0.4 }}>
          Voice: ElevenLabs (my real clone) · Video: HeyGen · Avg. response 740ms · Demo loop
        </div>
      </div>
      <style>{`
        @keyframes pulse-0 { 0%,100%{transform:scale(1);opacity:.4} 50%{transform:scale(1.05);opacity:.15} }
        @keyframes pulse-1 { 0%,100%{transform:scale(1.18);opacity:.3} 50%{transform:scale(1.25);opacity:.08} }
        @keyframes pulse-2 { 0%,100%{transform:scale(1.36);opacity:.2} 50%{transform:scale(1.45);opacity:.05} }
      `}</style>
    </div>
  );
}

// Image placeholder — striped SVG with monospace caption
function Placeholder({ w, h, caption, tone = "light", radius = 0, style = {} }) {
  const dark = tone === "dark";
  const stripe1 = dark ? "#1a1a1c" : "#e8e6e0";
  const stripe2 = dark ? "#222226" : "#dcd9d2";
  const text = dark ? "rgba(245,244,241,0.55)" : "rgba(10,10,11,0.45)";
  return (
    <div style={{
      width: w, height: h, borderRadius: radius, position: "relative", overflow: "hidden",
      background: `repeating-linear-gradient(135deg, ${stripe1} 0 12px, ${stripe2} 12px 24px)`,
      display: "grid", placeItems: "center",
      ...style,
    }}>
      <div style={{
        fontFamily: "ui-monospace, 'JetBrains Mono', SFMono-Regular, Menlo, monospace",
        fontSize: 11, letterSpacing: 0.4, color: text, textAlign: "center", padding: 8,
        background: dark ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.6)",
        backdropFilter: "blur(6px)", borderRadius: 4,
      }}>
        [{caption}]
      </div>
    </div>
  );
}

Object.assign(window, { TIMELINE, PROJECTS, RECORD, NAV, VoiceCloneModal, Placeholder });
