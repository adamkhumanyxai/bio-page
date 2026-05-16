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
      <div style={{ maxWidth: 1520, margin: '0 auto', padding: '120px 40px' }}>
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
                <div style={{ background: th.bg, height: 200, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '20px 28px' }}>
                  <div style={{ position: 'absolute', right: -12, top: -24, fontFamily: 'var(--display)', fontSize: 168, fontWeight: 800, lineHeight: 1, letterSpacing: -8, color: th.numColor, userSelect: 'none', pointerEvents: 'none' }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: 1.8, textTransform: 'uppercase', color: th.fg, zIndex: 1 }}>{th.tag}</div>
                </div>

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
