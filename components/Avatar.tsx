'use client';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import { ConversationProvider, useConversation } from '@elevenlabs/react';
import { useFadeIn } from '@/hooks/useFadeIn';

const PROMPTS = [
  'tell me about JAX at Xero',
  'biggest deal you ever closed',
  'why founding GTM, why now?',
  'what made you start vibe-coding',
  "what's your weakness",
];

const AGENT_ID = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID;

type Line = { who: 'you' | 'adam'; text: string };

function VoiceSurface() {
  const [transcript, setTranscript] = useState<Line[]>([]);
  const [muted, setMuted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const conversation = useConversation({
    onMessage: ({ message, role }) => {
      setTranscript(t => [...t, { who: role === 'user' ? 'you' : 'adam', text: message }]);
    },
    onError: (message) => {
      setErrorMsg(typeof message === 'string' ? message : 'Something went wrong connecting the voice twin.');
    },
  });

  const { status, isSpeaking, startSession, endSession, setMuted: setConversationMuted } = conversation;

  const connected = status === 'connected';
  const connecting = status === 'connecting';
  const speaking = connected && !!isSpeaking;
  const listening = connected && !speaking;
  const idle = !connected && !connecting;
  const latest = transcript[transcript.length - 1];

  const start = useCallback(async () => {
    if (!AGENT_ID) {
      setErrorMsg('Voice agent isn\u2019t configured yet \u2014 missing NEXT_PUBLIC_ELEVENLABS_AGENT_ID.');
      return;
    }
    setErrorMsg(null);
    setTranscript([]);
    try {
      await startSession({ agentId: AGENT_ID, connectionType: 'webrtc' });
    } catch {
      setErrorMsg('Couldn\u2019t connect \u2014 check mic permissions and try again.');
    }
  }, [startSession]);

  const stop = useCallback(() => {
    endSession();
    setMuted(false);
  }, [endSession]);

  const toggleMute = useCallback(() => {
    setMuted(m => {
      setConversationMuted(!m);
      return !m;
    });
  }, [setConversationMuted]);

  return (
    <div style={{ background: 'var(--bg-ink)', borderRadius: 16, overflow: 'hidden', boxShadow: '0 40px 100px rgba(0,0,0,0.22)', border: '1px solid #0a0a0b' }}>
      <div style={{ position: 'relative', aspectRatio: '16/10', background: '#0a0a0b' }}>
        <Image src="/adam-portrait.jpg" alt="Adam Kratiuk" fill style={{ objectFit: 'cover', objectPosition: 'center 18%' }} sizes="(max-width: 900px) 100vw, 58vw" priority />

        <div style={{
          position: 'absolute', inset: 0,
          background: connected
            ? 'linear-gradient(180deg, transparent 30%, rgba(0,0,0,0.85))'
            : 'radial-gradient(circle at 50% 60%, transparent 40%, rgba(0,0,0,0.6))',
          transition: 'background 400ms ease',
        }} />

        <div style={{ position: 'absolute', top: 16, left: 16, display: 'flex', gap: 8, alignItems: 'center' }}>
          <div style={{ padding: '5px 10px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.16)', borderRadius: 4, fontFamily: 'var(--mono)', fontSize: 10, color: '#fff', letterSpacing: 1.2, backdropFilter: 'blur(8px)' }}>11LABS</div>
          {(connected || connecting) && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '5px 10px', background: connecting ? 'rgba(255,255,255,0.06)' : 'rgba(44,95,255,0.18)', border: `1px solid ${connecting ? 'rgba(255,255,255,0.16)' : 'rgba(44,95,255,0.4)'}`, borderRadius: 4, backdropFilter: 'blur(8px)' }}>
              <span style={{ width: 6, height: 6, borderRadius: 999, background: connecting ? 'rgba(255,255,255,0.6)' : speaking ? '#3DFF86' : 'var(--accent)', boxShadow: (speaking || listening) ? `0 0 0 4px ${speaking ? 'rgba(61,255,134,0.22)' : 'rgba(44,95,255,0.22)'}` : 'none', animation: speaking ? 'voicepulse 1s ease-in-out infinite' : 'none' }} />
              <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: '#fff', letterSpacing: 1.2, textTransform: 'uppercase' }}>{connecting ? 'connecting' : speaking ? 'speaking' : 'listening'}</span>
            </div>
          )}
        </div>

        {listening && (
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', display: 'grid', placeItems: 'center' }}>
            {[0, 1, 2].map(i => (
              <div key={i} style={{
                position: 'absolute', borderRadius: '50%',
                border: '1px solid rgba(44,95,255,0.5)',
                width: 220 + i * 110, height: 220 + i * 110,
                opacity: 0.35 - i * 0.1,
                animation: `voicering 2.4s ${i * 0.3}s ease-out infinite`,
              }} />
            ))}
          </div>
        )}

        <div style={{ position: 'absolute', left: 24, right: 24, bottom: 24 }}>
          {connected && latest ? (
            <div style={{ display: 'inline-block', maxWidth: '90%', padding: '12px 16px', background: 'rgba(0,0,0,0.72)', borderRadius: 6, backdropFilter: 'blur(6px)' }}>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: 1.2, textTransform: 'uppercase', color: latest.who === 'you' ? 'rgba(255,255,255,0.5)' : 'var(--accent)', marginBottom: 6 }}>
                {latest.who === 'you' ? 'You' : 'Adam'}
              </div>
              <div style={{ fontSize: 17, lineHeight: 1.45, color: '#fff' }}>{latest.text}</div>
            </div>
          ) : idle ? (
            <div style={{ display: 'inline-block', padding: '12px 20px', background: 'rgba(0,0,0,0.72)', color: '#fff', fontSize: 18, lineHeight: 1.4, fontWeight: 500, borderRadius: 6, backdropFilter: 'blur(6px)', maxWidth: '85%' }}>
              &ldquo;Voice isn&rsquo;t a product category anymore. It&rsquo;s a primitive.&rdquo;
            </div>
          ) : null}
          {errorMsg && (
            <div style={{ marginTop: 8, display: 'inline-block', padding: '10px 14px', background: 'rgba(196,50,44,0.92)', color: '#fff', fontSize: 13, borderRadius: 6, maxWidth: '90%' }}>
              {errorMsg}
            </div>
          )}
        </div>
      </div>

      <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 10, borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <button
          onClick={connected ? stop : start}
          disabled={connecting}
          style={{
            flex: 1, padding: '13px 22px', borderRadius: 999,
            background: connecting ? 'rgba(255,255,255,0.1)' : connected ? '#0a0a0b' : 'var(--accent)',
            color: '#fff', border: connected ? '1px solid rgba(255,255,255,0.2)' : 'none',
            cursor: connecting ? 'wait' : 'pointer',
            fontSize: 14, fontWeight: 600,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
            transition: 'all .2s',
          }}
        >
          <span style={{ width: 8, height: 8, borderRadius: 999, background: connected ? '#FF5C5C' : '#fff' }} />
          {connecting ? 'Connecting\u2026' : connected ? 'End conversation' : 'Start a conversation'}
        </button>
        {connected && (
          <button
            onClick={toggleMute}
            aria-label={muted ? 'Unmute mic' : 'Mute mic'}
            style={{
              padding: '13px 16px', borderRadius: 999,
              background: 'transparent', color: '#fff',
              border: '1px solid rgba(255,255,255,0.16)',
              cursor: 'pointer', fontSize: 16,
            }}
          >{muted ? '\u{1F507}' : '\u{1F3A4}'}</button>
        )}
      </div>

      <div style={{ padding: '12px 20px 18px', display: 'flex', flexWrap: 'wrap', gap: 8, borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'rgba(255,255,255,0.5)', letterSpacing: 0.6, marginRight: 4, alignSelf: 'center' }}>try →</div>
        {PROMPTS.map(p => (
          <button key={p} onClick={start} style={{ padding: '7px 12px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 999, fontSize: 11, color: 'rgba(255,255,255,0.85)', fontFamily: 'var(--mono)', cursor: 'pointer' }}>
            &ldquo;{p}&rdquo;
          </button>
        ))}
      </div>
    </div>
  );
}

export default function Avatar() {
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
            Don&rsquo;t read<br />about me.<br /><span style={{ color: 'var(--accent)' }}>Talk to me.</span>
          </h2>
          <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--body)', marginTop: 28, maxWidth: 480 }}>
            A real conversation with my ElevenLabs voice clone — trained on twenty years of
            decks, deals, and the customer rooms I&rsquo;ve sat in. Voice only, no video.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--muted)', marginTop: 16, maxWidth: 480 }}>
            Ask about a deal cycle, a platform shift, or a regret. It&rsquo;s genuinely me — the
            voice, not a script.
          </p>
          <div style={{ marginTop: 32, padding: '16px 20px', border: '1px solid var(--rule)', borderRadius: 8, fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--mono)', letterSpacing: 0.4, lineHeight: 1.7 }}>
            <span style={{ color: 'var(--accent)' }}>{'// stack · '}</span>
            ElevenLabs Conversational AI · my real cloned voice · WebRTC
          </div>
        </div>

        <ConversationProvider>
          <VoiceSurface />
        </ConversationProvider>
      </div>
    </section>
  );
}