// Direction A v2 — "The Operator" pushed to world-class.
// Editorial b&w + cobalt. Real portraits. HeyGen avatar demo (not a voice bar).
// Adds On Stage + a magazine-style Off the Clock section.

const opv2 = {
  bg: "#ffffff",
  bgCard: "#ffffff",
  bgDeep: "#f5f5f3",
  bgInk: "#0a0a0b",
  ink: "#0a0a0b",
  body: "rgba(10,10,11,0.78)",
  muted: "rgba(10,10,11,0.55)",
  faint: "rgba(10,10,11,0.35)",
  rule: "rgba(10,10,11,0.12)",
  ruleHard: "rgba(10,10,11,0.2)",
  accent: "#2C5FFF",
  accentSoft: "#E9EEFF",
  accentInk: "#1740C2",
  display: "'Inter Tight', Helvetica, Arial, sans-serif",
  body_f: "'Inter', -apple-system, sans-serif",
  mono: "'Geist Mono', 'JetBrains Mono', ui-monospace, monospace"
};

const PORTRAIT = window.__resources.portrait;
const PODIUM = window.__resources.podium;

// Fade-in on scroll hook
function useFadeIn(delay = 0) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = '0';
    el.style.transform = 'translateY(28px)';
    el.style.transition = `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.style.opacity = '1'; el.style.transform = 'translateY(0)'; io.disconnect(); } },
      { threshold: 0.06 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

// reusable section eyebrow
function OpEyebrow({ no, label, right }) {
  return (
    <div style={{
      display: "flex", justifyContent: "space-between", alignItems: "center",
      paddingBottom: 14, borderBottom: `1px solid ${opv2.rule}`, marginBottom: 36,
      fontSize: 11, letterSpacing: 2.4, textTransform: "uppercase", color: opv2.muted,
      fontFamily: opv2.mono
    }}>
      <span><span style={{ color: opv2.accent }}>§ {no}</span> · {label}</span>
      {right && <span>{right}</span>}
    </div>);

}

function OpV2Top() {
  return (
    <div style={{ background: opv2.bgInk, color: "#fff" }}>
      <div style={{
        maxWidth: 1320, margin: "0 auto", padding: "8px 56px", display: "flex",
        gap: 28, fontFamily: opv2.mono, fontSize: 11, letterSpacing: 0.6,
        color: "rgba(255,255,255,0.7)"
      }}>
        <span>Cronulla, NSW · Australia</span>
        <span style={{ marginLeft: "auto" }}>this site is the work sample</span>
      </div>
    </div>);

}

function OpV2Nav({ onTalk }) {
  return (
    <div style={{
      position: "sticky", top: 0, zIndex: 50, background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(10px)", borderBottom: `1px solid ${opv2.rule}`
    }}>
      <div style={{
        maxWidth: 1320, margin: "0 auto", padding: "20px 56px",
        display: "flex", alignItems: "center", justifyContent: "space-between"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 32, height: 32, background: opv2.bgInk, color: opv2.bg, display: "grid", placeItems: "center", fontSize: 13, fontWeight: 700, fontFamily: opv2.display, letterSpacing: -0.4 }}>
            AK
          </div>
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
            <span style={{ fontFamily: opv2.display, fontSize: 16, fontWeight: 600, letterSpacing: -0.2 }}>Adam Kratiuk</span>
            <span style={{ fontFamily: opv2.mono, fontSize: 10, color: opv2.muted, letterSpacing: 0.6 }}>twenty years in voice</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: 32, fontSize: 14, color: opv2.ink, fontWeight: 500 }}>
          {[["Story","#story"],["Timeline","#timeline"],["Projects","#projects"],["On Stage","#on-stage"],["Off the Clock","#off-the-clock"],["Contact","#contact"]].map(([n, href]) =>
          <a key={n} href={href} style={{ color: "inherit", textDecoration: "none", opacity: 0.78, transition: "opacity .15s" }}
            onMouseEnter={e => e.currentTarget.style.opacity = 1}
            onMouseLeave={e => e.currentTarget.style.opacity = 0.78}>{n}</a>
          )}
        </div>
        <button onClick={onTalk} style={{
          padding: "11px 18px 11px 14px", background: opv2.ink, color: "#fff",
          border: "none", borderRadius: 999, fontSize: 13, fontWeight: 600, cursor: "pointer",
          display: "flex", alignItems: "center", gap: 10, letterSpacing: 0.2
        }}>
          <span style={{
            width: 7, height: 7, borderRadius: 999, background: opv2.accent,
            boxShadow: `0 0 0 4px ${opv2.accent}40`
          }}></span>
          Meet my AI twin
        </button>
      </div>
    </div>);

}

function OpV2Hero({ onTalk }) {
  const fadeRef = useFadeIn();
  return (
    <section id="story" ref={fadeRef} style={{ maxWidth: 1320, margin: "0 auto", padding: "72px 56px 0" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1.05fr 1fr", gap: 56, alignItems: "end" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 36, fontSize: 11, letterSpacing: 2.4, textTransform: "uppercase", color: opv2.muted, fontFamily: opv2.mono }}>
            <span style={{ width: 36, height: 1, background: opv2.ink }}></span>
            Vol. I · A bio in long form
          </div>
          <h1 style={{
            fontFamily: opv2.display, fontSize: 196, lineHeight: 0.88, letterSpacing: -8, margin: 0,
            fontWeight: 800
          }}>
            Hello<span style={{ color: opv2.accent }}>.</span>
          </h1>
          <div style={{ marginTop: 36, maxWidth: 520 }}>
            <p style={{
              fontFamily: opv2.display, fontSize: 30, lineHeight: 1.2, margin: 0, fontWeight: 500, letterSpacing: -0.6
            }}>
              Twenty years in voice.<br />
              Six platform shifts.{" "}
              <span style={{ color: opv2.muted, fontWeight: 400, fontStyle: "italic" }}>One that finally talks back.</span>
            </p>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: opv2.body, marginTop: 24 }}>
              I'm Adam. I've sold every wave of business voice since the PBX — most recently as an
              enterprise AE at Twilio. I'm now pivoting into a founding GTM seat at a Voice AI
              startup. This site is the conversation, the demo, and the first work sample.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
              <button onClick={onTalk} style={{
                padding: "15px 22px", background: opv2.ink, color: "#fff", border: "none",
                borderRadius: 0, fontSize: 13, letterSpacing: 1.5, textTransform: "uppercase",
                fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 10
              }}>
                <span style={{
                  width: 7, height: 7, borderRadius: 999, background: opv2.accent,
                  boxShadow: `0 0 0 4px ${opv2.accent}40`
                }}></span>
                Meet my AI twin
              </button>
              <a href="#timeline" style={{
                padding: "15px 22px", background: "transparent", color: opv2.ink,
                border: `1px solid ${opv2.ink}`, borderRadius: 0, fontSize: 13,
                letterSpacing: 1.5, textTransform: "uppercase", fontWeight: 600, cursor: "pointer",
                textDecoration: "none", display: "inline-flex", alignItems: "center"
              }}>Skip to timeline ↓</a>
            </div>
          </div>
        </div>

        {/* portrait */}
        <div style={{ position: "relative" }}>
          <div style={{
            position: "absolute", top: -32, right: -16, padding: "5px 10px",
            background: opv2.accent, color: "#fff", fontFamily: opv2.mono, fontSize: 10,
            letterSpacing: 1.2, zIndex: 2
          }}>FIG. 01 · THE OPERATOR</div>
          <div style={{ position: "relative", overflow: "hidden", aspectRatio: "4/5", maxHeight: 620 }}>
            <img src={PORTRAIT} alt="Adam Kratiuk" style={{
              width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%",
              filter: "grayscale(1) contrast(1.05)"
            }} />
            <div style={{
              position: "absolute", inset: 0, background: `linear-gradient(180deg, transparent 60%, ${opv2.accent}18 100%)`,
              mixBlendMode: "multiply"
            }}></div>
          </div>
          <div style={{
            marginTop: 14, display: "flex", justifyContent: "space-between",
            fontSize: 10, color: opv2.muted, letterSpacing: 1.4, textTransform: "uppercase", fontFamily: opv2.mono
          }}>
            <span>Adam Kratiuk</span>
            <span>shot · cronulla, nsw</span>
            <span>© 2026</span>
          </div>
        </div>
      </div>

      {/* stat strip */}
      <div style={{
        marginTop: 64, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0,
        border: `1px solid ${opv2.ruleHard}`, background: opv2.bgCard
      }}>
        {[
        { big: "20+", small: "Years in voice", note: "PBX → Voice AI", tone: false },
        { big: "4×", small: "President's Club", note: "Monaco · Costa Rica · Jamaica · Bahamas", tone: false },
        { big: "191%", small: "Quota, FY23 at Twilio", note: "331% in 2021 · 175% in 2022", tone: false },
        { big: "4", small: "AI projects shipped", note: "Nights & weekends", tone: true }].
        map((s, i) =>
        <div key={i} style={{
          padding: "32px 32px", borderRight: i < 3 ? `1px solid ${opv2.rule}` : "none",
          display: "flex", flexDirection: "column", gap: 10
        }}>
            <div style={{ fontSize: 10, letterSpacing: 1.6, color: opv2.muted, fontFamily: opv2.mono }}>
              ↗ {String(i + 1).padStart(2, "0")}
            </div>
            <div style={{
            fontFamily: opv2.display, fontSize: s.big.length >= 4 ? 46 : 64, fontWeight: 800, letterSpacing: -2, lineHeight: 1,
            color: s.tone ? opv2.accent : opv2.ink
          }}>{s.big}</div>
            <div>
              <div style={{ fontSize: 14, fontWeight: 600 }}>{s.small}</div>
              <div style={{ fontSize: 12, color: opv2.muted, marginTop: 2 }}>{s.note}</div>
            </div>
          </div>
        )}
      </div>

      {/* signed marginalia */}
      <div style={{
        marginTop: 40, display: "grid", gridTemplateColumns: "1fr 2fr 1fr", gap: 48, alignItems: "center"
      }}>
        <div style={{ fontFamily: opv2.mono, fontSize: 11, color: opv2.muted, letterSpacing: 1.4 }}>
          ↘ Reading time · 7 min<br />
          ↘ Listening time · as long as you'd like
        </div>
        <p style={{
          fontFamily: opv2.display, fontStyle: "italic", fontSize: 19, lineHeight: 1.45,
          color: opv2.body, margin: 0, textAlign: "center", maxWidth: 600, justifySelf: "center"
        }}>
          "If you've sold every version of a thing for twenty years — and you can still vibe-code
          one yourself on a Saturday — you can probably sell the next one."
        </p>
        <div style={{ fontFamily: opv2.mono, fontSize: 11, color: opv2.muted, letterSpacing: 1.4, textAlign: "right" }}>
          A. Kratiuk, 2026<br />
          Cronulla, NSW
        </div>
      </div>
    </section>);

}

function OpV2Brands() {
  const brands = ["Avaya", "Cisco", "Mitel", "Genesys", "NICE", "Five9", "RingCentral", "Twilio"];
  return (
    <section style={{ borderTop: `1px solid ${opv2.rule}`, borderBottom: `1px solid ${opv2.rule}`, marginTop: 72, background: opv2.bgCard }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "28px 56px", display: "flex", alignItems: "center", gap: 40 }}>
        <div style={{ fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: opv2.muted, fontFamily: opv2.mono, whiteSpace: "nowrap" }}>
          Sold for / against →
        </div>
        <div style={{ flex: 1, display: "flex", justifyContent: "space-between", gap: 24 }}>
          {brands.map((b) =>
          <span key={b}
            style={{ fontFamily: opv2.display, fontSize: 22, fontWeight: 600, letterSpacing: -0.4, color: opv2.faint, transition: "color .2s", cursor: "default" }}
            onMouseEnter={e => e.currentTarget.style.color = opv2.ink}
            onMouseLeave={e => e.currentTarget.style.color = opv2.faint}
          >{b}</span>
          )}
        </div>
      </div>
    </section>);

}

function OpV2Timeline() {
  const [active, setActive] = React.useState(5);
  const fadeRef = useFadeIn();
  const t = TIMELINE[active];
  // current era uses real podium image; others use placeholder w/ tagged context
  return (
    <section id="timeline" ref={fadeRef} style={{ background: opv2.bgInk, color: "#fff", padding: "120px 0 140px" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "0 56px" }}>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          paddingBottom: 14, borderBottom: `1px solid rgba(255,255,255,0.15)`, marginBottom: 56,
          fontSize: 11, letterSpacing: 2.4, textTransform: "uppercase", color: "rgba(255,255,255,0.5)",
          fontFamily: opv2.mono
        }}>
          <span><span style={{ color: opv2.accent }}>§ 01</span> · The spine</span>
          <span>Click any era · pictured: era {String(active + 1).padStart(2, "0")} of {String(TIMELINE.length).padStart(2, "0")}</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 64, alignItems: "end", marginBottom: 56 }}>
          <h2 style={{
            fontFamily: opv2.display, fontSize: 104, lineHeight: 0.94, letterSpacing: -4, margin: 0, fontWeight: 800
          }}>
            Every wave of voice,<br />
            <span style={{ color: "rgba(255,255,255,0.55)" }}>in the seat where it happened.</span>
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: "rgba(255,255,255,0.65)", margin: 0, maxWidth: 380 }}>
            Six platform shifts. Six product categories born and matured. I was selling
            into all six — not commenting on them. Each row is a wave the industry
            made and the seat I was in when it broke.
          </p>
        </div>

        {/* era selector */}
        <div style={{
          display: "grid", gridTemplateColumns: `repeat(${TIMELINE.length}, 1fr)`,
          borderTop: "1px solid rgba(255,255,255,0.15)",
          borderBottom: "1px solid rgba(255,255,255,0.15)"
        }}>
          {TIMELINE.map((row, i) =>
          <button key={i} onClick={() => setActive(i)} style={{
            padding: "22px 14px", background: active === i ? "rgba(44,95,255,0.18)" : "transparent",
            color: "#fff", border: "none",
            borderRight: i < TIMELINE.length - 1 ? "1px solid rgba(255,255,255,0.15)" : "none",
            borderBottom: active === i ? `2px solid ${opv2.accent}` : "2px solid transparent",
            borderTop: active === i ? `2px solid ${opv2.accent}` : "2px solid transparent",
            marginTop: -1, marginBottom: -1,
            textAlign: "left", cursor: "pointer", transition: "all .2s"
          }}>
              <div style={{ fontSize: 10, letterSpacing: 1.4, color: "rgba(255,255,255,0.5)", marginBottom: 8, fontFamily: opv2.mono }}>
                {row.years}
              </div>
              <div style={{ fontFamily: opv2.display, fontSize: 20, fontWeight: 600, letterSpacing: -0.4 }}>
                {row.era}
                {row.current &&
              <span style={{
                marginLeft: 8, fontSize: 9, padding: "2px 6px", background: opv2.accent,
                borderRadius: 2, letterSpacing: 1, verticalAlign: 3, fontFamily: opv2.mono, fontWeight: 600
              }}>NOW</span>
              }
              </div>
            </button>
          )}
        </div>

        {/* active era detail w/ image */}
        <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "1.1fr 1.4fr", gap: 56, alignItems: "start" }}>
          {/* era image */}
          <div>
            <div style={{ position: "relative", aspectRatio: "4/3", overflow: "hidden", background: "#15171b" }}>
              {t.current ?
              <img src={PODIUM} alt="Adam on stage" style={{
                width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 25%",
                filter: "grayscale(1) contrast(1.1) brightness(1.05)"
              }} /> :

              <Placeholder w="100%" h="100%" tone="dark" caption={`era ${String(active + 1).padStart(2, "0")} · adam · ${t.era.toLowerCase()} · candid`} />
              }
              <div style={{
                position: "absolute", left: 16, bottom: 16, padding: "6px 10px",
                background: "rgba(0,0,0,0.7)", color: "#fff", fontFamily: opv2.mono, fontSize: 10,
                letterSpacing: 1.2, backdropFilter: "blur(4px)"
              }}>FIG · {t.era} · {t.years.split(" – ")[0]}</div>
            </div>
            <div style={{
              marginTop: 14, fontFamily: opv2.mono, fontSize: 11, color: "rgba(255,255,255,0.55)",
              letterSpacing: 0.6
            }}>
              {t.current ?
              "Pictured · keynoting an internal Twilio summit, 2024." :
              "Pictured · placeholder · drop in an era-appropriate photo."}
            </div>
          </div>

          {/* era detail */}
          <div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 16, marginBottom: 24 }}>
              <span style={{ fontFamily: opv2.display, fontSize: 80, fontWeight: 800, letterSpacing: -3, lineHeight: 1, color: opv2.accent }}>
                {String(active + 1).padStart(2, "0")}
              </span>
              <div>
                <div style={{ fontFamily: opv2.display, fontSize: 44, fontWeight: 700, letterSpacing: -1.2, lineHeight: 1 }}>
                  {t.era}
                </div>
                <div style={{ marginTop: 6, fontFamily: opv2.mono, fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
                  {t.years}
                </div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 36, marginBottom: 36 }}>
              <div>
                <div style={{ fontSize: 10, letterSpacing: 1.4, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", marginBottom: 12, fontFamily: opv2.mono }}>
                  Industry shift
                </div>
                <p style={{ fontSize: 16, lineHeight: 1.5, margin: 0 }}>{t.industry}</p>
              </div>
              <div>
                <div style={{ fontSize: 10, letterSpacing: 1.4, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", marginBottom: 12, fontFamily: opv2.mono }}>
                  The seat I was in
                </div>
                <p style={{ fontSize: 18, lineHeight: 1.4, margin: 0, fontWeight: 500 }}>{t.role}</p>
              </div>
            </div>

            <div style={{
              padding: 24, background: "rgba(255,255,255,0.04)", border: `1px solid rgba(255,255,255,0.1)`,
              borderLeft: `3px solid ${opv2.accent}`
            }}>
              <div style={{ fontSize: 10, letterSpacing: 1.4, color: "rgba(255,255,255,0.5)", textTransform: "uppercase", marginBottom: 10, fontFamily: opv2.mono }}>
                Signature win
              </div>
              <p style={{ fontSize: 16, lineHeight: 1.6, color: "rgba(255,255,255,0.85)", margin: 0 }}>
                {t.win}
              </p>
            </div>

            <div style={{ marginTop: 24, fontSize: 12, lineHeight: 1.7, color: "rgba(255,255,255,0.55)", fontFamily: opv2.mono }}>
              <span style={{ color: opv2.accent, letterSpacing: 0.8 }}>// vocabulary of the era · </span>
              {t.artifact}
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function OpV2Avatar({ onTalk }) {
  const [playing, setPlaying] = React.useState(false);
  const [time, setTime] = React.useState(0);
  const fadeRef = useFadeIn();
  const total = 184; // 3:04
  React.useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setTime((t) => t >= total ? 0 : t + 1), 1000);
    return () => clearInterval(id);
  }, [playing]);
  const fmt = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  const pct = time / total * 100;

  return (
    <section id="demo" ref={fadeRef} style={{ maxWidth: 1320, margin: "0 auto", padding: "120px 56px" }}>
      <OpEyebrow no="02" label="The demo · HeyGen avatar + ElevenLabs voice" right="A working work-sample" />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "center" }}>
        {/* copy */}
        <div>
          <h2 style={{
            fontFamily: opv2.display, fontSize: 84, lineHeight: 0.95, letterSpacing: -3, margin: 0, fontWeight: 800
          }}>
            Don't read<br />about me.<br /><span style={{ color: opv2.accent }}>Talk to me.</span>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: opv2.body, marginTop: 28, maxWidth: 480 }}>
            A HeyGen digital twin, speaking with my ElevenLabs voice clone, answering from
            twenty years of decks, deals, and the customer rooms I've sat in.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: opv2.muted, marginTop: 16, maxWidth: 480 }}>
            Ask about a deal cycle, a platform shift, a regret. Captions on, real eye contact.
            If you'd rather hear me without seeing me, voice-only is one tap.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 32 }}>
            <button onClick={onTalk} style={{
              padding: "16px 24px", background: opv2.accent, color: "#fff", border: "none",
              borderRadius: 999, fontSize: 14, fontWeight: 600, letterSpacing: 0.3, cursor: "pointer",
              display: "flex", alignItems: "center", gap: 10, boxShadow: "0 14px 36px rgba(44,95,255,0.32)"
            }}>
              <span style={{ width: 8, height: 8, borderRadius: 999, background: "#fff" }}></span>
              Start a live conversation
            </button>
            <button onClick={onTalk} style={{
              padding: "16px 20px", background: "transparent", color: opv2.ink,
              border: `1px solid ${opv2.ink}`, borderRadius: 999, fontSize: 14, fontWeight: 500, cursor: "pointer"
            }}>🎧 Voice only →</button>
          </div>

          <div style={{
            marginTop: 32, padding: "16px 20px", background: opv2.bgCard,
            border: `1px solid ${opv2.rule}`, borderRadius: 8, fontSize: 12, color: opv2.muted,
            fontFamily: opv2.mono, letterSpacing: 0.4, lineHeight: 1.7
          }}>
            <span style={{ color: opv2.accent }}>// stack · </span>
            HeyGen avatar v2 · ElevenLabs v3 · LiveKit transport · RAG over career corpus · 740ms p50
          </div>
        </div>

        {/* video player — HeyGen twin */}
        <div style={{
          background: opv2.bgInk, borderRadius: 16, overflow: "hidden",
          boxShadow: "0 40px 100px rgba(0,0,0,0.22)", border: `1px solid ${opv2.bgInk}`
        }}>
          {/* header bar */}
          <div style={{
            padding: "14px 20px", display: "flex", justifyContent: "space-between", alignItems: "center",
            color: "rgba(255,255,255,0.65)", fontFamily: opv2.mono, fontSize: 11, letterSpacing: 0.6,
            borderBottom: "1px solid rgba(255,255,255,0.08)"
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 8, height: 8, borderRadius: 999, background: "#FF3355", boxShadow: "0 0 0 4px rgba(255,51,85,0.18)" }}></span>
              <span>LIVE · adam.twin · session 0x8af3</span>
            </div>
            <div style={{ display: "flex", gap: 14 }}>
              <span>en-US · captions on</span>
              <span style={{ color: "#7CFFB2" }}>● 740ms</span>
            </div>
          </div>

          {/* avatar stage */}
          <div style={{ position: "relative", aspectRatio: "16/10", background: "#0a0a0b" }}>
            <img src={PORTRAIT} alt="Adam HeyGen twin" style={{
              position: "absolute", inset: 0, width: "100%", height: "100%",
              objectFit: "cover", objectPosition: "center 18%"
            }} />
            {/* vignette */}
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 60%, transparent 40%, rgba(0,0,0,0.6))" }}></div>

            {/* speaking indicator on chin */}
            <div style={{
              position: "absolute", left: "50%", bottom: "22%", transform: "translateX(-50%)",
              display: "flex", alignItems: "flex-end", gap: 4, height: 28
            }}>
              {Array.from({ length: 18 }).map((_, i) => {
                const h = 6 + Math.abs(Math.sin((time * 4 + i) * 0.6)) * 22;
                return <div key={i} style={{
                  width: 3, height: playing ? h : 4, background: opv2.accent, borderRadius: 1,
                  boxShadow: `0 0 12px ${opv2.accent}99`, transition: "height .12s"
                }}></div>;
              })}
            </div>

            {/* captions */}
            <div style={{
              position: "absolute", left: 24, right: 24, bottom: 24, textAlign: "center"
            }}>
              <div style={{
                display: "inline-block", padding: "12px 20px", background: "rgba(0,0,0,0.72)",
                color: "#fff", fontSize: 18, lineHeight: 1.4, fontWeight: 500, borderRadius: 6,
                backdropFilter: "blur(6px)", letterSpacing: -0.1, maxWidth: "85%"
              }}>
                "Voice isn't a product category anymore. <br />It's a primitive."
              </div>
            </div>

            {/* corner badges */}
            <div style={{ position: "absolute", top: 16, left: 16, display: "flex", gap: 8 }}>
              <div style={{ padding: "5px 10px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.16)", borderRadius: 4, fontFamily: opv2.mono, fontSize: 10, color: "#fff", letterSpacing: 1.2, backdropFilter: "blur(8px)" }}>
                HEYGEN
              </div>
              <div style={{ padding: "5px 10px", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.16)", borderRadius: 4, fontFamily: opv2.mono, fontSize: 10, color: "#fff", letterSpacing: 1.2, backdropFilter: "blur(8px)" }}>
                11LABS · V3
              </div>
            </div>
            <div style={{ position: "absolute", top: 16, right: 16, padding: "5px 10px", background: opv2.accent, color: "#fff", borderRadius: 4, fontFamily: opv2.mono, fontSize: 10, letterSpacing: 1.2 }}>
              SPEAKING
            </div>
          </div>

          {/* controls */}
          <div style={{ padding: "16px 20px", display: "flex", alignItems: "center", gap: 16, borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <button onClick={() => setPlaying((p) => !p)} style={{
              width: 44, height: 44, borderRadius: 999, background: opv2.accent, color: "#fff",
              border: "none", fontSize: 16, cursor: "pointer", display: "grid", placeItems: "center"
            }}>{playing ? "❚❚" : "▶"}</button>
            <div style={{ fontFamily: opv2.mono, fontSize: 11, color: "rgba(255,255,255,0.7)", width: 70 }}>
              {fmt(time)} / {fmt(total)}
            </div>
            <div style={{ flex: 1, height: 4, background: "rgba(255,255,255,0.12)", borderRadius: 999, position: "relative", cursor: "pointer" }}
            onClick={(e) => {
              const r = e.currentTarget.getBoundingClientRect();
              setTime(Math.round((e.clientX - r.left) / r.width * total));
            }}>
              <div style={{ width: `${pct}%`, height: "100%", background: opv2.accent, borderRadius: 999 }}></div>
              <div style={{ position: "absolute", left: `${pct}%`, top: "50%", transform: "translate(-50%,-50%)", width: 12, height: 12, borderRadius: 999, background: "#fff", boxShadow: `0 0 0 3px ${opv2.accent}` }}></div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <button style={{ width: 36, height: 36, borderRadius: 6, background: "rgba(255,255,255,0.06)", color: "#fff", border: "1px solid rgba(255,255,255,0.12)", cursor: "pointer", fontSize: 13 }} title="Captions">CC</button>
              <button style={{ width: 36, height: 36, borderRadius: 6, background: "rgba(255,255,255,0.06)", color: "#fff", border: "1px solid rgba(255,255,255,0.12)", cursor: "pointer", fontSize: 13 }} title="Mic">🎤</button>
              <button onClick={onTalk} style={{ padding: "0 14px", height: 36, borderRadius: 6, background: opv2.accent, color: "#fff", border: "none", cursor: "pointer", fontSize: 12, fontWeight: 600, letterSpacing: 0.3 }}>
                Take over →
              </button>
            </div>
          </div>

          {/* prompt chips */}
          <div style={{ padding: "12px 20px 18px", display: "flex", flexWrap: "wrap", gap: 8, borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <div style={{ fontFamily: opv2.mono, fontSize: 10, color: "rgba(255,255,255,0.5)", letterSpacing: 0.6, marginRight: 4, alignSelf: "center" }}>
              try →
            </div>
            {[
            "tell me about JAX at Xero",
            "biggest deal you ever closed",
            "why founding GTM, why now?",
            "what made you start vibe-coding",
            "what's your weakness"].
            map((p) =>
            <button onClick={onTalk} key={p} style={{
              padding: "7px 12px", background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)", borderRadius: 999,
              fontSize: 11, color: "rgba(255,255,255,0.85)", fontFamily: opv2.mono, cursor: "pointer"
            }}>"{p}"</button>
            )}
          </div>
        </div>
      </div>
    </section>);

}

function OpV2Projects() {
  const fadeRef = useFadeIn();
  return (
    <section id="projects" ref={fadeRef} style={{ background: opv2.bgCard, borderTop: `1px solid ${opv2.rule}`, borderBottom: `1px solid ${opv2.rule}` }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "120px 56px" }}>
        <OpEyebrow no="03" label="The proof · I don't just sell it, I ship it" right="Four projects · two live · two in beta" />
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, alignItems: "end", marginBottom: 56 }}>
          <h2 style={{
            fontFamily: opv2.display, fontSize: 84, lineHeight: 0.95, letterSpacing: -3, margin: 0, fontWeight: 800
          }}>
            Sellers who can ship<br />
            <span style={{ color: opv2.muted }}>are different sellers.</span>
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: opv2.muted, margin: 0, maxWidth: 380 }}>
            Four vibe-coded AI projects, built on nights and weekends. The point isn't the
            projects — it's the muscle. I can sit with your founders and not waste their time.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
          {PROJECTS.map((p, i) => {
            const live = p.status.startsWith("Live") || p.status.startsWith("You");
            const cardThemes = [
              { bg: opv2.accentSoft, numColor: "rgba(44,95,255,0.18)", tag: "voice clone · personal", fg: opv2.accentInk },
              { bg: opv2.bgInk, numColor: "rgba(255,255,255,0.07)", tag: "voice agent · enterprise", fg: "rgba(255,255,255,0.5)" },
              { bg: "#f0ede8", numColor: "rgba(10,10,11,0.08)", tag: "sales tool · pipeline", fg: opv2.muted },
              { bg: opv2.accent, numColor: "rgba(255,255,255,0.12)", tag: "ai twin · this site", fg: "rgba(255,255,255,0.7)" },
            ];
            const th = cardThemes[i];
            return (
              <article key={p.name}
                style={{
                  border: `1px solid ${opv2.rule}`, background: opv2.bg, padding: 0,
                  position: "relative", overflow: "hidden",
                  transition: "box-shadow .2s, transform .2s", cursor: "default"
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.10)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ background: th.bg, height: 200, position: "relative", overflow: "hidden", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "20px 28px" }}>
                  <div style={{
                    position: "absolute", right: -12, top: -24,
                    fontFamily: opv2.display, fontSize: 168, fontWeight: 800, lineHeight: 1,
                    letterSpacing: -8, color: th.numColor, userSelect: "none", pointerEvents: "none"
                  }}>{String(i + 1).padStart(2, "0")}</div>
                  <div style={{ fontFamily: opv2.mono, fontSize: 10, letterSpacing: 1.8, textTransform: "uppercase", color: th.fg, zIndex: 1 }}>{th.tag}</div>
                </div>
                <div style={{ padding: 28 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 14 }}>
                    <div style={{ fontSize: 10, letterSpacing: 1.6, color: opv2.muted, fontFamily: opv2.mono }}>
                      PROJECT {String(i + 1).padStart(2, "0")} · {p.stack.split(" · ")[0]}
                    </div>
                    <div style={{
                      padding: "4px 10px", background: live ? opv2.accentSoft : "rgba(0,0,0,0.05)",
                      color: live ? opv2.accentInk : opv2.muted, borderRadius: 999,
                      fontSize: 10, fontWeight: 700, letterSpacing: 0.8, fontFamily: opv2.mono
                    }}>{p.status.toUpperCase()}</div>
                  </div>
                  <h3 style={{
                    fontFamily: opv2.display, fontSize: 36, fontWeight: 700, letterSpacing: -1, margin: 0
                  }}>
                    {p.name}
                  </h3>
                  <p style={{ fontSize: 15, lineHeight: 1.6, color: opv2.body, marginTop: 14, marginBottom: 0 }}>
                    {p.blurb}
                  </p>
                  <div style={{
                    marginTop: 20, paddingTop: 16, borderTop: `1px solid ${opv2.rule}`,
                    display: "flex", justifyContent: "space-between", fontFamily: opv2.mono, fontSize: 11, color: opv2.muted
                  }}>
                    <span>{p.stack}</span>
                    <span style={{ color: opv2.accent, fontWeight: 600 }}>↗ open project</span>
                  </div>
                </div>
              </article>);

          })}
        </div>
      </div>
    </section>);

}

function OpV2Record() {
  const fadeRef = useFadeIn();
  // Real signature wins from the resume — dollar values intentionally omitted per Adam's call (qualitative > fake numbers)
  const log = [
  { era: "CPaaS · Twilio · 2024", deal: "Xero · closed net-new for the generative AI companion, JAX", val: "net-new" },
  { era: "CPaaS · Twilio · 2021", deal: "OfficeHQ Flex Contact Centre · 250 agents · closed in 8 weeks", val: "250 seats" },
  { era: "CCaaS · 8x8 · 2019", deal: "SiteMinder · 250 agents, 500 users, multi-year ACV", val: "500 users" },
  { era: "UC · Genesys · 2015", deal: "Employsure · 500-agent contact centre · Global Mid-Market Rep of the Year", val: "500 agents" }];

  return (
    <section ref={fadeRef} style={{ maxWidth: 1320, margin: "0 auto", padding: "120px 56px" }}>
      <OpEyebrow no="04" label="The receipts · track record, not résumé" right="A PDF is on request — these are what hiring managers actually want" />

      <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, alignItems: "end", marginBottom: 56 }}>
        <h2 style={{
          fontFamily: opv2.display, fontSize: 84, lineHeight: 0.95, letterSpacing: -3, margin: 0, fontWeight: 800
        }}>
          Track record.<br />
          <span style={{ color: opv2.muted }}>Not résumé.</span>
        </h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", border: `1px solid ${opv2.ruleHard}`, background: opv2.bgCard }}>
        {RECORD.map((r, i) =>
        <div key={i} style={{
          padding: "40px 32px",
          borderRight: (i + 1) % 3 !== 0 ? `1px solid ${opv2.rule}` : "none",
          borderBottom: i < 3 ? `1px solid ${opv2.rule}` : "none",
          display: "flex", flexDirection: "column", gap: 14
        }}>
            <div style={{ fontSize: 10, letterSpacing: 1.6, color: opv2.muted, fontFamily: opv2.mono }}>
              METRIC · {String(i + 1).padStart(2, "0")}
            </div>
            <div style={{
            fontFamily: opv2.display, fontSize: 64, fontWeight: 800, letterSpacing: -2.2, lineHeight: 1,
            color: r.tone === "primary" ? opv2.accent : opv2.ink
          }}>{r.num}</div>
            <div style={{ fontSize: 14, color: opv2.body, lineHeight: 1.5 }}>
              {r.label}
            </div>
          </div>
        )}
      </div>

      {/* signature wins log */}
      <div style={{
        marginTop: 32, background: opv2.bgCard, border: `1px solid ${opv2.ruleHard}`, padding: 32
      }}>
        <div style={{ fontSize: 10, letterSpacing: 1.6, color: opv2.muted, fontFamily: opv2.mono, marginBottom: 20 }}>
          // SIGNATURE WINS · A SHORT LIST
        </div>
        {log.map((d, i) =>
        <div key={i}
          style={{
            display: "grid", gridTemplateColumns: "180px 1fr 160px", gap: 24, padding: "20px 12px",
            borderBottom: i < log.length - 1 ? `1px solid ${opv2.rule}` : "none", alignItems: "center",
            transition: "background .15s", borderRadius: 4, cursor: "default"
          }}
          onMouseEnter={e => e.currentTarget.style.background = opv2.bgDeep}
          onMouseLeave={e => e.currentTarget.style.background = "transparent"}
        >
            <span style={{ fontFamily: opv2.mono, fontSize: 12, color: opv2.muted, letterSpacing: 0.4 }}>{d.era}</span>
            <span style={{ fontSize: 16, color: opv2.ink, fontWeight: 500 }}>{d.deal}</span>
            <span style={{ fontFamily: opv2.display, fontSize: 24, color: opv2.accent, fontWeight: 700, textAlign: "right", letterSpacing: -0.6 }}>{d.val}</span>
          </div>
        )}
      </div>
    </section>);

}

function OpV2OnStage() {
  const fadeRef = useFadeIn();
  return (
    <section id="on-stage" ref={fadeRef} style={{ background: opv2.bgDeep, borderTop: `1px solid ${opv2.rule}` }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "120px 56px" }}>
        <OpEyebrow no="05" label="In the room · customer rooms, partner stages, and the hallway after" right="Twenty years of presenting where it counts" />

        <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 64, alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <img src={PODIUM} alt="Adam on stage" style={{
              width: "100%", aspectRatio: "4/3", objectFit: "cover", objectPosition: "center 22%",
              filter: "grayscale(1) contrast(1.05)"
            }} />
            <div style={{
              position: "absolute", left: 20, bottom: 20, padding: "8px 12px",
              background: "rgba(0,0,0,0.78)", color: "#fff", fontFamily: opv2.mono, fontSize: 10,
              letterSpacing: 1.2, backdropFilter: "blur(6px)"
            }}>
              FIG · CUSTOMER PRESENTATION · SYDNEY
            </div>
            <div style={{
              position: "absolute", top: -16, right: -16, padding: "5px 10px",
              background: opv2.accent, color: "#fff", fontFamily: opv2.mono, fontSize: 10, letterSpacing: 1.2
            }}>PLATE II</div>
          </div>

          <div>
            <h2 style={{
              fontFamily: opv2.display, fontSize: 72, lineHeight: 0.96, letterSpacing: -2.4, margin: 0, fontWeight: 800
            }}>
              I close in<br /><span style={{ color: opv2.accent }}>the room</span><span>, not the deck.</span>
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: opv2.body, marginTop: 24, maxWidth: 460 }}>
              Twenty years of customer presentations, partner kickoffs, vendor enablement, and post‑discovery
              recap sessions. I'm comfortable in front of a room — and even more comfortable in the hallway
              after, where the real questions get asked.
            </p>

            <div style={{ marginTop: 28, display: "flex", flexDirection: "column", gap: 16 }}>
          {[
              { y: "Twilio", v: "Customer rooms · ANZ ISVs", p: "Generative AI companion deployments, including JAX at Xero" },
              { y: "8x8", v: "Partner stages · NSW / VIC", p: "CCaaS positioning vs. on-prem Avaya / Genesys incumbents" },
              { y: "Genesys", v: "Mid-market customer panels", p: "Australia's largest contact centres on cloud migration" },
              { y: "Avaya", v: "Reseller enablement · APAC", p: "Channel kickoffs across the region with 75+ partners" }].
              map((t, i) =>
              <div key={i}
                style={{ display: "flex", gap: 24, alignItems: "baseline", paddingBottom: 16, borderBottom: `1px solid ${opv2.rule}`, transition: "background .15s", padding: "12px 8px 12px", borderRadius: 4, cursor: "default" }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(10,10,11,0.04)"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}
              >
                  <span style={{ fontFamily: opv2.mono, fontSize: 12, color: opv2.muted, width: 78 }}>{t.y}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: opv2.display, fontSize: 20, fontWeight: 600, letterSpacing: -0.3 }}>{t.v}</div>
                    <div style={{ fontSize: 13, color: opv2.muted, marginTop: 2 }}>{t.p}</div>
                  </div>
                  <span style={{ fontFamily: opv2.mono, fontSize: 11, color: opv2.accent }}>↗ detail</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

}

function OpV2OffTheClock() {
  const fadeRef = useFadeIn();
  // Magazine-style asymmetric grid w/ multiple hobby cards
  // Adam's actual life — Bender, Bali, surf, snowboard, golf, vibe-code lab.
  const hobbies = [
  { tag: "Bender", title: "Dog dad to a nine-year-old mini bulldog", body: "Bender. 9. Australian mini bulldog. Senior management. Has opinions on the Cronulla cliff walk and on whether you're staying for dinner.", caption: "fig · bender · cronulla · 4:5" },
  { tag: "Bali", title: "A second home in Canggu — better wifi than you'd think", body: "I spend weeks at a time working out of Bali. Different timezone, same pipeline. The shape of the day is just better when there's a wave at lunch.", caption: "fig · canggu · golden hour" },
  { tag: "Surf", title: "The original voice technology — the ocean", body: "Cronulla local. The board is the part of the week that doesn't require a stakeholder map. The patience translates back.", caption: "fig · cronulla point · 6am" },
  { tag: "Snowboard", title: "The other kind of carving", body: "Japan when I can, Thredbo when I can't. The transferable skill is the same: read the line, commit, recover from the bad ones.", caption: "fig · niseko · white" },
  { tag: "Golf", title: "Working on the swing. And the patience.", body: "Off the tee I'm a long-cycle enterprise seller. On the green I'm an SDR. The point of the round isn't the score — it's the four hours with mates.", caption: "fig · the kingsway · saturday" },
  { tag: "Vibe-code lab", title: "Voice agents at the kitchen table", body: "Most never ship. Son GPT 2.0 did — a clone of me my Mum can call. The practice is the point; one of them turned into the thing I now want to do for a living.", caption: "fig · macbook · cronulla · late" }];


  return (
    <section id="off-the-clock" ref={fadeRef} style={{ background: opv2.bg }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "120px 56px" }}>
        <OpEyebrow no="06" label="Off the clock · the human behind the seller" right="Six tiles · drop in real photos when ready" />

        <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 64, alignItems: "end", marginBottom: 64 }}>
          <h2 style={{
            fontFamily: opv2.display, fontSize: 104, lineHeight: 0.94, letterSpacing: -4, margin: 0, fontWeight: 800
          }}>
            And when<br />
            <span style={{ fontStyle: "italic", fontWeight: 500 }}>I'm not selling<span style={{ color: opv2.accent }}>—</span></span>
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: opv2.body, margin: 0, maxWidth: 380 }}>
            A short, honest accounting of the things that fill the other sixteen hours. The work
            is the work, but it's not the whole shape.
          </p>
        </div>

        {/* magazine grid: 12-col, mixed spans */}
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(12, 1fr)", gridAutoRows: "minmax(220px, auto)", gap: 20
        }}>
          {/* Big hero tile — Family */}
          <div style={{ gridColumn: "span 7", gridRow: "span 2", background: opv2.bgInk, color: "#fff", position: "relative", overflow: "hidden" }}>
            <Placeholder w="100%" h="100%" caption={hobbies[0].caption} tone="dark" />
            <div style={{
              position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.8))",
              padding: 32, display: "flex", flexDirection: "column", justifyContent: "flex-end"
            }}>
              <div style={{ fontSize: 11, letterSpacing: 2, color: opv2.accent, fontFamily: opv2.mono, marginBottom: 12 }}>
                {hobbies[0].tag.toUpperCase()}
              </div>
              <h3 style={{ fontFamily: opv2.display, fontSize: 36, fontWeight: 700, letterSpacing: -1, margin: 0, lineHeight: 1.05, maxWidth: 480 }}>
                {hobbies[0].title}
              </h3>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: "rgba(255,255,255,0.75)", marginTop: 14, maxWidth: 460, marginBottom: 0 }}>
                {hobbies[0].body}
              </p>
            </div>
          </div>

          {/* Bali — the lifestyle flex */}
          <div style={{ gridColumn: "span 5", background: opv2.bgCard, border: `1px solid ${opv2.rule}`, padding: 28, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: 2, color: opv2.accent, fontFamily: opv2.mono, marginBottom: 12 }}>
                {hobbies[1].tag.toUpperCase()}
              </div>
              <h3 style={{ fontFamily: opv2.display, fontSize: 30, fontWeight: 700, letterSpacing: -0.8, margin: 0, lineHeight: 1.05 }}>
                {hobbies[1].title}
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.55, color: opv2.body, marginTop: 12, marginBottom: 0 }}>
                {hobbies[1].body}
              </p>
            </div>
            <div style={{ marginTop: 20, fontFamily: opv2.mono, fontSize: 11, color: opv2.muted, display: "flex", justifyContent: "space-between" }}>
              <span>base · cronulla</span>
              <span>second base · canggu</span>
              <span>tz · same shape</span>
            </div>
          </div>

          {/* Surf — image-led */}
          <div style={{ gridColumn: "span 5", position: "relative", overflow: "hidden" }}>
            <Placeholder w="100%" h="100%" caption={hobbies[2].caption} />
            <div style={{
              position: "absolute", inset: 0, padding: 24, display: "flex", flexDirection: "column", justifyContent: "flex-end",
              background: "linear-gradient(180deg, transparent 50%, rgba(255,255,255,0.95))"
            }}>
              <div style={{ fontSize: 11, letterSpacing: 2, color: opv2.accent, fontFamily: opv2.mono, marginBottom: 8 }}>
                {hobbies[2].tag.toUpperCase()}
              </div>
              <h3 style={{ fontFamily: opv2.display, fontSize: 22, fontWeight: 700, letterSpacing: -0.5, margin: 0, lineHeight: 1.1, color: opv2.ink }}>
                {hobbies[2].title}
              </h3>
            </div>
          </div>

          {/* Snowboard — text panel with accent bars (kept the visual rhythm of the synth tile) */}
          <div style={{ gridColumn: "span 4", background: opv2.bgDeep, padding: 28, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: 2, color: opv2.accent, fontFamily: opv2.mono, marginBottom: 12 }}>
                {hobbies[3].tag.toUpperCase()}
              </div>
              <h3 style={{ fontFamily: opv2.display, fontSize: 22, fontWeight: 700, letterSpacing: -0.5, margin: 0, lineHeight: 1.15 }}>
                {hobbies[3].title}
              </h3>
              <p style={{ fontSize: 13, lineHeight: 1.55, color: opv2.body, marginTop: 10, marginBottom: 0 }}>
                {hobbies[3].body}
              </p>
            </div>
            <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 4, height: 24 }}>
              {Array.from({ length: 24 }).map((_, i) =>
              <div key={i} style={{
                flex: 1, height: 6 + Math.abs(Math.sin(i * 0.7)) * 18,
                background: i < 10 ? opv2.accent : opv2.ruleHard
              }}></div>
              )}
            </div>
          </div>

          {/* Golf — list panel */}
          <div style={{ gridColumn: "span 4", background: opv2.bgCard, border: `1px solid ${opv2.rule}`, padding: 28 }}>
            <div style={{ fontSize: 11, letterSpacing: 2, color: opv2.accent, fontFamily: opv2.mono, marginBottom: 12 }}>
              {hobbies[4].tag.toUpperCase()}
            </div>
            <h3 style={{ fontFamily: opv2.display, fontSize: 22, fontWeight: 700, letterSpacing: -0.5, margin: 0, lineHeight: 1.15 }}>
              {hobbies[4].title}
            </h3>
            <p style={{ fontSize: 13, lineHeight: 1.55, color: opv2.body, marginTop: 10 }}>
              {hobbies[4].body}
            </p>
            <ul style={{ margin: 0, marginTop: 14, padding: 0, listStyle: "none", fontSize: 12, color: opv2.muted, fontFamily: opv2.mono, lineHeight: 1.9 }}>
              <li>· home course · The Kingsway, Cronulla</li>
              <li>· best round · better than last time</li>
              <li>· partners · mates, always mates</li>
            </ul>
          </div>

          {/* Vibe-code lab — image-led, dark, ties back to projects section */}
          <div style={{ gridColumn: "span 4", position: "relative", overflow: "hidden", background: opv2.bgInk, color: "#fff" }}>
            <Placeholder w="100%" h="100%" caption={hobbies[5].caption} tone="dark" />
            <div style={{
              position: "absolute", inset: 0, padding: 24, display: "flex", flexDirection: "column", justifyContent: "flex-end",
              background: "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.78))"
            }}>
              <div style={{ fontSize: 11, letterSpacing: 2, color: opv2.accent, fontFamily: opv2.mono, marginBottom: 8 }}>
                {hobbies[5].tag.toUpperCase()}
              </div>
              <h3 style={{ fontFamily: opv2.display, fontSize: 22, fontWeight: 700, letterSpacing: -0.5, margin: 0, lineHeight: 1.15 }}>
                {hobbies[5].title}
              </h3>
              <p style={{ fontSize: 12, lineHeight: 1.55, color: "rgba(255,255,255,0.7)", marginTop: 10, marginBottom: 0 }}>
                {hobbies[5].body}
              </p>
            </div>
          </div>
        </div>

        {/* signed line */}
        <div style={{
          marginTop: 56, display: "flex", justifyContent: "space-between", alignItems: "center",
          paddingTop: 24, borderTop: `1px solid ${opv2.rule}`,
          fontFamily: opv2.mono, fontSize: 11, color: opv2.muted, letterSpacing: 1.2
        }}>
          <span>↘ if you're still here, you're probably the right kind of reader.</span>
          <span>— A. K.</span>
        </div>
      </div>
    </section>);

}

function OpV2Contact({ onTalk }) {
  const fadeRef = useFadeIn();
  return (
    <section id="contact" ref={fadeRef} style={{ background: opv2.bgInk, color: "#fff" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", padding: "140px 56px", textAlign: "center", fontFamily: "Inter" }}>
        <div style={{ fontSize: 11, letterSpacing: 2.4, textTransform: "uppercase", color: "rgba(255,255,255,0.5)", marginBottom: 32, fontFamily: opv2.mono }}>
          <span style={{ color: opv2.accent }}>§ 07</span> · The ask
        </div>
        <h2 style={{
          fontFamily: opv2.display, fontSize: 144, lineHeight: 0.92, letterSpacing: -5.5, margin: 0, fontWeight: 800
        }}>
          If you're building<br />
          <span style={{ color: opv2.accent }}>Voice AI</span> for the<br />
          enterprise<span style={{ color: opv2.accent }}>—</span>
        </h2>
        <p style={{
          fontFamily: opv2.display, fontSize: 24, fontStyle: "italic", fontWeight: 400,
          marginTop: 32, color: "rgba(255,255,255,0.7)", maxWidth: 720, marginLeft: "auto", marginRight: "auto", lineHeight: 1.4
        }}>
          Founding GTM. AE #1–5. First sales hire.<br />
          Your founders write code, your buyer runs a contact centre, and you need a seller
          who's lived every voice wave since the PBX. Let's talk.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", marginTop: 48 }}>
          <button onClick={onTalk} style={{
            padding: "18px 28px", background: opv2.accent, color: "#fff", border: "none", borderRadius: 999,
            fontSize: 15, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 10,
            boxShadow: "0 14px 36px rgba(44,95,255,0.4)"
          }}>
            <span style={{ width: 8, height: 8, borderRadius: 999, background: "#fff" }}></span>
            Meet my AI twin
          </button>
          <a href="mailto:akratiuk85@gmail.com" style={{
            padding: "18px 26px", background: "transparent", color: "#fff",
            border: "1px solid rgba(255,255,255,0.3)", borderRadius: 999, fontSize: 15, fontWeight: 500,
            textDecoration: "none", display: "inline-flex", alignItems: "center"
          }}>akratiuk85@gmail.com</a>
          <a href="https://www.linkedin.com/in/adam-kratiuk" target="_blank" rel="noopener" style={{
            padding: "18px 26px", background: "transparent", color: "#fff",
            border: "1px solid rgba(255,255,255,0.3)", borderRadius: 999, fontSize: 15, fontWeight: 500,
            textDecoration: "none", display: "inline-flex", alignItems: "center"
          }}>linkedin.com/in/adam-kratiuk</a>
          <a href="mailto:akratiuk85@gmail.com" style={{
            padding: "18px 26px", background: "transparent", color: "#fff",
            border: "1px solid rgba(255,255,255,0.3)", borderRadius: 999, fontSize: 15, fontWeight: 500,
            textDecoration: "none", display: "inline-flex", alignItems: "center"
          }}>📅 Book 20 min →</a>
        </div>

        <div style={{
          marginTop: 64, display: "inline-flex", gap: 28, padding: "14px 24px",
          background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 999,
          fontFamily: opv2.mono, fontSize: 12, color: "rgba(255,255,255,0.7)", letterSpacing: 0.4
        }}>
          <span>cronulla, nsw · australia</span>
          <span>open to bay area / eu / remote</span>
          <span>replies under 24h, usually faster</span>
        </div>
      </div>
    </section>);

}

function OpV2Footer() {
  return (
    <footer style={{ background: opv2.bg, borderTop: `1px solid ${opv2.rule}` }}>
      <div style={{
        maxWidth: 1320, margin: "0 auto", padding: "44px 56px",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        fontSize: 12, color: opv2.muted, letterSpacing: 0.6, fontFamily: opv2.mono
      }}>
        <span>© 2026 Adam Kratiuk · Cronulla, NSW · Set in Inter Tight & Inter</span>
        <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span style={{ width: 7, height: 7, borderRadius: 999, background: "#7CFFB2" }}></span>
          AI twin live · ElevenLabs · HeyGen
        </span>
        <div style={{ display: "flex", gap: 18 }}>
          <span>LinkedIn</span><span>X</span><span>GitHub</span><span>🐾 Bender</span>
        </div>
      </div>
    </footer>);

}

function DirectionAv2() {
  const [modalOpen, setModalOpen] = React.useState(false);
  React.useEffect(() => { document.documentElement.style.scrollBehavior = 'smooth'; }, []);
  return (
    <div style={{
      background: opv2.bg, color: opv2.ink,
      fontFamily: opv2.body_f, position: "relative"
    }}>
      <OpV2Top />
      <OpV2Nav onTalk={() => setModalOpen(true)} />
      <OpV2Hero onTalk={() => setModalOpen(true)} />
      <OpV2Brands />
      <OpV2Timeline />
      <OpV2Avatar onTalk={() => setModalOpen(true)} />
      <OpV2Projects />
      <OpV2Record />
      <OpV2OnStage />
      <OpV2OffTheClock />
      <OpV2Contact onTalk={() => setModalOpen(true)} />
      <OpV2Footer />
      <VoiceCloneModal open={modalOpen} onClose={() => setModalOpen(false)} theme="light" accent={opv2.accent} brand="Adam" />
    </div>);

}

window.DirectionAv2 = DirectionAv2;