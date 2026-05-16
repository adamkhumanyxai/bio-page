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
        <div style={{ padding: '20px 24px', borderBottom: `1px solid ${border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 10, height: 10, borderRadius: 999, background: state === 'idle' ? 'rgba(10,10,11,0.55)' : accent, boxShadow: state !== 'idle' ? `0 0 0 4px ${accent}22` : 'none', transition: 'all .3s' }} />
            <div style={{ fontSize: 13, letterSpacing: 0.4, textTransform: 'uppercase', fontWeight: 600 }}>Live with Adam&apos;s clone</div>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: '#0a0a0b', fontSize: 20, cursor: 'pointer', opacity: 0.6 }}>✕</button>
        </div>

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
