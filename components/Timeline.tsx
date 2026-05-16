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
      <div style={{ maxWidth: 1520, margin: '0 auto', padding: '0 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 14, borderBottom: '1px solid rgba(255,255,255,0.15)', marginBottom: 56, fontSize: 11, letterSpacing: 2.4, textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--mono)' }}>
          <span><span style={{ color: 'var(--accent)' }}>§ 01</span> · The spine</span>
          <span>Click any era · pictured: era {String(active + 1).padStart(2, '0')} of {String(TIMELINE.length).padStart(2, '0')}</span>
        </div>

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

        <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: '1.1fr 1.4fr', gap: 56, alignItems: 'start' }}>
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
