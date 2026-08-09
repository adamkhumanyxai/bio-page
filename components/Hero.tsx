'use client';
import Image from 'next/image';
import { useFadeIn } from '@/hooks/useFadeIn';
import { useCountUp } from '@/hooks/useCountUp';

interface Props { onTalk: () => void; }

const STATS = [
  { num: 20, suffix: '+', small: 'Years in voice', note: 'PBX → Voice AI', accent: false },
  { num: 4, suffix: '×', small: "President's Club", note: 'Monaco · Costa Rica · Jamaica · Bahamas', accent: false },
  { num: 180, suffix: '%', small: 'Avg quota · 5 yrs at Twilio', note: '331% → 175% → 191% → 120% → 81%', accent: false },
  { num: 4, suffix: '', small: 'AI projects shipped', note: 'Nights & weekends', accent: true },
];

function StatCell({ num, suffix, small, note, accent, index, hasBorder }: {
  num: number; suffix: string; small: string; note: string; accent: boolean; index: number; hasBorder: boolean;
}) {
  const { ref, count } = useCountUp(num);
  const finalBig = `${num}${suffix}`;
  return (
    <div ref={ref} style={{ padding: '32px', borderRight: hasBorder ? '1px solid var(--rule)' : 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ fontSize: 10, letterSpacing: 1.6, color: 'var(--muted)', fontFamily: 'var(--mono)' }}>↗ {String(index + 1).padStart(2, '0')}</div>
      <div style={{ fontFamily: 'var(--display)', fontSize: finalBig.length >= 4 ? 46 : 64, fontWeight: 800, letterSpacing: -2, lineHeight: 1, color: accent ? 'var(--accent)' : 'var(--ink)' }}>
        {count}{suffix}
      </div>
      <div>
        <div style={{ fontSize: 14, fontWeight: 600 }}>{small}</div>
        <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{note}</div>
      </div>
    </div>
  );
}

export default function Hero({ onTalk }: Props) {
  const ref = useFadeIn();
  return (
    <section id="story" className="heroSection" ref={ref as React.RefObject<HTMLElement>} style={{ maxWidth: 1520, margin: '0 auto', padding: '72px 40px 0' }}>
      <div className="heroGrid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.05fr', gap: 56, alignItems: 'end' }}>
        <div style={{ position: 'relative' }}>
          <div style={{ position: 'relative', overflow: 'hidden', aspectRatio: '4/5', maxHeight: 620 }}>
            <Image src="/adam-portrait.jpg" alt="Adam Kratiuk" fill style={{ objectFit: 'cover', objectPosition: 'center 30%', filter: 'grayscale(1) contrast(1.05)' }} sizes="(max-width: 900px) 100vw, 46vw" priority />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 60%, rgba(44,95,255,0.09) 100%)', mixBlendMode: 'multiply' }} />
          </div>
        </div>

        <div>
          <h1 className="heroTitle" style={{ fontFamily: 'var(--display)', fontSize: 196, lineHeight: 0.88, letterSpacing: -8, margin: 0, fontWeight: 800 }}>
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
              enterprise AE at Twilio. I&apos;m now looking for my next seat: founding GTM or senior AE
              at a company building the next wave of voice. This site is the work sample.
            </p>

            <div className="heroActions" style={{ display: 'flex', gap: 12, marginTop: 32 }}>
              <button onClick={onTalk} style={{ padding: '15px 22px', background: 'var(--bg-ink)', color: '#fff', border: 'none', borderRadius: 0, fontSize: 13, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ width: 7, height: 7, borderRadius: 999, background: 'var(--accent)', boxShadow: '0 0 0 4px rgba(44,95,255,0.25)' }} />
                Talk to my voice twin
              </button>
              <a href="/adam-kratiuk-cv.pdf" download style={{ padding: '15px 24px', background: 'var(--accent)', color: '#fff', border: 'none', borderRadius: 0, fontSize: 13, letterSpacing: 1.5, textTransform: 'uppercase', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: 10, boxShadow: '0 16px 40px rgba(44,95,255,0.35)', cursor: 'pointer' }}>
                Download my CV ↓
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="heroStats" style={{ marginTop: 64, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', border: '1px solid var(--rule-hard)' }}>
        {STATS.map((s, i) => (
          <StatCell key={i} {...s} index={i} hasBorder={i < 3} />
        ))}
      </div>

      <div className="heroNoteGrid" style={{ marginTop: 40, display: 'flex', justifyContent: 'center' }}>
        <p style={{ fontFamily: 'var(--display)', fontStyle: 'italic', fontSize: 19, lineHeight: 1.45, color: 'var(--body)', margin: 0, textAlign: 'center', maxWidth: 600 }}>
          &ldquo;If you&apos;ve sold every version of a thing for twenty years — and you can still vibe-code
          one yourself on a Saturday — you can probably sell the next one.&rdquo;
        </p>
      </div>
    </section>
  );
}
