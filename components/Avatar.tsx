'use client';
import Image from 'next/image';
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
  const ref = useFadeIn();

  return (
    <section id="demo" className="sectionWrap" ref={ref as React.RefObject<HTMLElement>} style={{ maxWidth: 1520, margin: '0 auto', padding: '120px 40px' }}>
      <div className="sectionKicker" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 14, borderBottom: '1px solid var(--rule)', marginBottom: 36, fontSize: 11, letterSpacing: 2.4, textTransform: 'uppercase', color: 'var(--muted)', fontFamily: 'var(--mono)' }}>
        <span>Voice twin</span>
        <span>ElevenLabs · live conversation</span>
      </div>

      <div className="avatarGrid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'center' }}>
        <div>
          <h2 className="sectionTitle" style={{ fontFamily: 'var(--display)', fontSize: 84, lineHeight: 0.95, letterSpacing: -3, margin: 0, fontWeight: 800 }}>
            Don&apos;t read<br />about me.<br /><span style={{ color: 'var(--accent)' }}>Talk to me.</span>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--body)', marginTop: 28, maxWidth: 480 }}>
            A real conversation with my ElevenLabs voice clone — trained on twenty years of
            decks, deals, and the customer rooms I&apos;ve sat in. Voice only, no video.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--muted)', marginTop: 16, maxWidth: 480 }}>
            Ask about a deal cycle, a platform shift, or a regret. It&apos;s genuinely me — the
            voice, not a script.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
            <button onClick={onTalk} style={{ padding: '16px 24px', background: 'var(--accent)', color: '#fff', border: 'none', borderRadius: 999, fontSize: 14, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10, boxShadow: '0 14px 36px rgba(44,95,255,0.32)' }}>
              <span style={{ width: 8, height: 8, borderRadius: 999, background: '#fff' }} />
              Start a conversation
            </button>
          </div>
          <div style={{ marginTop: 32, padding: '16px 20px', border: '1px solid var(--rule)', borderRadius: 8, fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--mono)', letterSpacing: 0.4, lineHeight: 1.7 }}>
            <span style={{ color: 'var(--accent)' }}>{'// stack · '}</span>
            ElevenLabs Conversational AI · my real cloned voice · WebRTC
          </div>
        </div>

        <div style={{ background: 'var(--bg-ink)', borderRadius: 16, overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,0,0,0.22)', border: '1px solid #0a0a0b' }}>
          <div style={{ position: 'relative', aspectRatio: '16/10', background: '#0a0a0b' }}>
            <Image src="/adam-portrait.jpg" alt="Adam Kratiuk" fill style={{ objectFit: 'cover', objectPosition: 'center 18%' }} sizes="(max-width: 900px) 100vw, 58vw" />
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 60%, transparent 40%, rgba(0,0,0,0.6))' }} />
            <div style={{ position: 'absolute', left: 24, right: 24, bottom: 24, textAlign: 'center' }}>
              <div style={{ display: 'inline-block', padding: '12px 20px', background: 'rgba(0,0,0,0.72)', color: '#fff', fontSize: 18, lineHeight: 1.4, fontWeight: 500, borderRadius: 6, backdropFilter: 'blur(6px)', maxWidth: '85%' }}>
                &ldquo;Voice isn&apos;t a product category anymore. It&apos;s a primitive.&rdquo;
              </div>
            </div>
            <div style={{ position: 'absolute', top: 16, left: 16 }}>
              <div style={{ padding: '5px 10px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.16)', borderRadius: 4, fontFamily: 'var(--mono)', fontSize: 10, color: '#fff', letterSpacing: 1.2, backdropFilter: 'blur(8px)' }}>11LABS</div>
            </div>
          </div>

          <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
            <button onClick={onTalk} style={{ padding: '12px 22px', borderRadius: 999, background: 'var(--accent)', color: '#fff', border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 600 }}>
              Start a conversation →
            </button>
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
