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
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 14, borderBottom: '1px solid var(--rule)', marginBottom: 36, fontSize: 11, letterSpacing: 2.4, textTransform: 'uppercase', color: 'var(--muted)', fontFamily: 'var(--mono)' }}>
        <span><span style={{ color: 'var(--accent)' }}>§ 02</span> · The demo · HeyGen avatar + ElevenLabs voice</span>
        <span>A working work-sample</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'center' }}>
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

        <div style={{ background: 'var(--bg-ink)', borderRadius: 16, overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,0,0,0.22)', border: '1px solid #0a0a0b' }}>
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

          <div style={{ position: 'relative', aspectRatio: '16/10', background: '#0a0a0b' }}>
            <Image src="/adam-portrait.jpg" alt="Adam HeyGen twin" fill style={{ objectFit: 'cover', objectPosition: 'center 18%' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 60%, transparent 40%, rgba(0,0,0,0.6))' }} />

            <div style={{ position: 'absolute', left: '50%', bottom: '22%', transform: 'translateX(-50%)', display: 'flex', alignItems: 'flex-end', gap: 4, height: 28 }}>
              {Array.from({ length: 18 }).map((_, i) => {
                const h = 6 + Math.abs(Math.sin((time * 4 + i) * 0.6)) * 22;
                return <div key={i} style={{ width: 3, height: playing ? h : 4, background: 'var(--accent)', borderRadius: 1, boxShadow: '0 0 12px rgba(44,95,255,0.6)', transition: 'height .12s' }} />;
              })}
            </div>

            <div style={{ position: 'absolute', left: 24, right: 24, bottom: 24, textAlign: 'center' }}>
              <div style={{ display: 'inline-block', padding: '12px 20px', background: 'rgba(0,0,0,0.72)', color: '#fff', fontSize: 18, lineHeight: 1.4, fontWeight: 500, borderRadius: 6, backdropFilter: 'blur(6px)', maxWidth: '85%' }}>
                &ldquo;Voice isn&apos;t a product category anymore. It&apos;s a primitive.&rdquo;
              </div>
            </div>

            <div style={{ position: 'absolute', top: 16, left: 16, display: 'flex', gap: 8 }}>
              {['HEYGEN', '11LABS · V3'].map(label => (
                <div key={label} style={{ padding: '5px 10px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.16)', borderRadius: 4, fontFamily: 'var(--mono)', fontSize: 10, color: '#fff', letterSpacing: 1.2, backdropFilter: 'blur(8px)' }}>{label}</div>
              ))}
            </div>
            <div style={{ position: 'absolute', top: 16, right: 16, padding: '5px 10px', background: 'var(--accent)', color: '#fff', borderRadius: 4, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: 1.2 }}>SPEAKING</div>
          </div>

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
