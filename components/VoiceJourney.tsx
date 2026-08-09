'use client';
import { useState, useMemo } from 'react';
import React from 'react';
import { TIMELINE } from '@/lib/data';
import { useFadeIn } from '@/hooks/useFadeIn';

const SHORT = ['PBX', 'IP TEL', 'UC', 'CCaaS', 'CPaaS', 'VOICE AI'];
const VW = 1400;
const VH = 240;
const CY = VH / 2;
const SEG = VW / TIMELINE.length;

function sinePath(x0: number, amp: number, freq: number, phase: number): string {
  const pts: string[] = [];
  for (let i = 0; i <= SEG; i++) {
    const x = x0 + i;
    const y = CY + amp * Math.sin((i / SEG) * Math.PI * 2 * freq + phase);
    pts.push(`${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return pts.join(' ');
}

function squarePath(x0: number, amp: number, periods: number): string {
  const pw = SEG / periods;
  const hi = (CY - amp).toFixed(1);
  const lo = (CY + amp).toFixed(1);
  const pts: string[] = [`M${x0.toFixed(1)},${hi}`];
  for (let i = 0; i < periods; i++) {
    const x = x0 + i * pw;
    pts.push(`L${(x + pw * 0.5).toFixed(1)},${hi}`);
    pts.push(`L${(x + pw * 0.5).toFixed(1)},${lo}`);
    pts.push(`L${(x + pw).toFixed(1)},${lo}`);
    if (i < periods - 1) pts.push(`L${(x + pw).toFixed(1)},${hi}`);
  }
  return pts.join(' ');
}

type WP = { d: string; op: number; sw: number };

function buildWaves(idx: number): WP[] {
  const x0 = idx * SEG;
  switch (idx) {
    case 0:
      return [{ d: squarePath(x0, 52, 5), op: 0.9, sw: 1.6 }];
    case 1:
      return [{ d: sinePath(x0, 55, 4, 0), op: 0.9, sw: 1.6 }];
    case 2:
      return [0, 1, 2].map(j => ({
        d: sinePath(x0, 46 + j * 9, 4, j * Math.PI * 0.45),
        op: 0.6 - j * 0.1, sw: 1.3 - j * 0.1,
      }));
    case 3:
      return [0, 1, 2, 3, 4].map(j => ({
        d: sinePath(x0, 28 + j * 10, 3.5 + j * 0.3, j * Math.PI * 0.38),
        op: 0.52 - j * 0.07, sw: 1.2 - j * 0.06,
      }));
    case 4:
      return Array.from({ length: 8 }, (_, j) => ({
        d: sinePath(x0, 18 + j * 7, 4 + j * 0.2, j * Math.PI * 0.3),
        op: Math.max(0.08, 0.42 - j * 0.04), sw: 0.9,
      }));
    case 5:
      return Array.from({ length: 12 }, (_, j) => ({
        d: sinePath(x0, 6 + j * 9, 2.8 + (j % 4) * 0.4, j * Math.PI * 0.24),
        op: Math.max(0.06, 0.32 - j * 0.02), sw: 0.75,
      }));
    default:
      return [];
  }
}

export default function VoiceJourney() {
  const [active, setActive] = useState(5);
  const ref = useFadeIn();
  const t = TIMELINE[active];
  const waves = useMemo(() => TIMELINE.map((_, i) => buildWaves(i)), []);

  return (
    <section
      id="timeline"
      ref={ref as React.RefObject<HTMLElement>}
      style={{ background: 'var(--bg-ink)', color: '#fff', padding: '120px 0 140px' }}
    >
      {/* Header + headline */}
      <div style={{ maxWidth: 1520, margin: '0 auto', padding: '0 40px', marginBottom: 64 }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          paddingBottom: 14, borderBottom: '1px solid rgba(255,255,255,0.15)',
          marginBottom: 56, fontSize: 11, letterSpacing: 2.4,
          textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--mono)',
        }}>
          <span>Career timeline</span>
          <span>Hover any era · {TIMELINE.length} waves · every seat</span>
        </div>
        <h2 style={{
          fontFamily: 'var(--display)', fontSize: 104, lineHeight: 0.94,
          letterSpacing: -4, margin: 0, fontWeight: 800,
        }}>
          Twenty years in voice.<br />
          <span style={{ color: 'rgba(255,255,255,0.45)' }}>Six waves. Every seat.</span>
        </h2>
      </div>

      {/* Full-bleed SVG waveform */}
      <svg
        viewBox={`0 0 ${VW} ${VH}`}
        preserveAspectRatio="none"
        style={{ width: '100%', height: 220, display: 'block' }}
        aria-hidden="true"
      >
        <defs>
          <filter id="vglow" x="-20%" y="-40%" width="140%" height="180%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Era divider lines */}
        {TIMELINE.map((_, i) =>
          i > 0 ? (
            <line
              key={i}
              x1={i * SEG} y1={0} x2={i * SEG} y2={VH}
              stroke="rgba(255,255,255,0.07)" strokeWidth={1}
            />
          ) : null
        )}

        {/* Waveform paths */}
        {waves.map((eraPaths, eraIdx) =>
          eraPaths.map((wp, wi) => (
            <path
              key={`${eraIdx}-${wi}`}
              d={wp.d}
              fill="none"
              style={{
                stroke: eraIdx === active ? '#2C5FFF' : 'rgba(255,255,255,0.5)',
                strokeWidth: wp.sw,
                opacity: eraIdx === active ? Math.min(wp.op * 1.4, 1) : wp.op * 0.75,
                transition: 'stroke 0.35s ease, opacity 0.35s ease',
                ...(eraIdx === active && eraIdx === 5 ? { filter: 'url(#vglow)' } : {}),
              }}
            />
          ))
        )}

        {/* Invisible hover/click hit areas */}
        {TIMELINE.map((_, i) => (
          <rect
            key={i}
            x={i * SEG} y={0} width={SEG} height={VH}
            fill="transparent"
            style={{ cursor: 'pointer' }}
            onMouseEnter={() => setActive(i)}
            onClick={() => setActive(i)}
          />
        ))}
      </svg>

      {/* Era tabs + detail panel */}
      <div style={{ maxWidth: 1520, margin: '0 auto', padding: '0 40px' }}>

        {/* Era selector */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${TIMELINE.length}, 1fr)`,
          borderTop: '1px solid rgba(255,255,255,0.15)',
          borderBottom: '1px solid rgba(255,255,255,0.15)',
        }}>
          {TIMELINE.map((row, i) => (
            <button
              key={i}
              onMouseEnter={() => setActive(i)}
              onClick={() => setActive(i)}
              style={{
                padding: '20px 14px',
                background: active === i ? 'rgba(44,95,255,0.15)' : 'transparent',
                color: '#fff', border: 'none',
                borderRight: i < TIMELINE.length - 1 ? '1px solid rgba(255,255,255,0.12)' : 'none',
                borderBottom: `2px solid ${active === i ? 'var(--accent)' : 'transparent'}`,
                borderTop: `2px solid ${active === i ? 'var(--accent)' : 'transparent'}`,
                marginTop: -1, marginBottom: -1,
                textAlign: 'left', cursor: 'pointer', transition: 'all .2s',
              }}
            >
              <div style={{ fontSize: 10, letterSpacing: 1.4, color: 'rgba(255,255,255,0.5)', marginBottom: 6, fontFamily: 'var(--mono)' }}>
                {row.years}
              </div>
              <div style={{ fontFamily: 'var(--display)', fontSize: 18, fontWeight: 600, letterSpacing: -0.3, display: 'flex', alignItems: 'center', gap: 8 }}>
                {SHORT[i]}
                {row.current && (
                  <span style={{ fontSize: 9, padding: '2px 6px', background: 'var(--accent)', borderRadius: 2, letterSpacing: 1, fontFamily: 'var(--mono)', fontWeight: 600 }}>NOW</span>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Detail panel */}
        <div style={{ marginTop: 48 }}>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 32 }}>
            <span style={{
              fontFamily: 'var(--display)', fontSize: 80, fontWeight: 800,
              letterSpacing: -3, lineHeight: 1, color: 'var(--accent)',
            }}>
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
              <p style={{ fontSize: 16, lineHeight: 1.55, margin: 0 }}>{t.industry}</p>
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
            <span style={{ color: 'var(--accent)', letterSpacing: 0.8 }}>{'// vocabulary of the era · '}</span>
            {t.artifact}
          </div>
        </div>
      </div>
    </section>
  );
}
