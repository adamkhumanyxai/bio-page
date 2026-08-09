'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import { ConversationProvider, useConversation } from '@elevenlabs/react';

interface Props {
  open: boolean;
  onClose: () => void;
}

const AGENT_ID = process.env.NEXT_PUBLIC_ELEVENLABS_AGENT_ID;
const accent = '#2C5FFF';
const border = 'rgba(0,0,0,0.08)';

type Line = { who: 'you' | 'adam'; text: string };

function ModalBody({ onClose }: { onClose: () => void }) {
  const [transcript, setTranscript] = useState<Line[]>([]);
  const [muted, setMuted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const startedRef = useRef(false);

  const conversation = useConversation({
    onMessage: ({ message, role }) => {
      setTranscript(t => [...t, { who: role === 'user' ? 'you' : 'adam', text: message }]);
    },
    onError: (message) => {
      setErrorMsg(typeof message === 'string' ? message : 'Something went wrong connecting the voice twin.');
    },
    onDisconnect: () => {
      startedRef.current = false;
    },
  });

  const { status, mode, isSpeaking, startSession, endSession, setMuted: setConversationMuted } = conversation;

  const resetConversation = useCallback(() => {
    if (status === 'connected' || status === 'connecting') endSession();
    setTranscript([]);
    setErrorMsg(null);
    startedRef.current = false;
  }, [status, endSession]);

  const handleClose = useCallback(() => {
    resetConversation();
    onClose();
  }, [onClose, resetConversation]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') handleClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [handleClose]);

  const press = async () => {
    if (!AGENT_ID) {
      setErrorMsg('Voice agent isn’t configured yet — missing NEXT_PUBLIC_ELEVENLABS_AGENT_ID.');
      return;
    }
    setErrorMsg(null);
    try {
      startedRef.current = true;
      await startSession({ agentId: AGENT_ID, connectionType: 'webrtc' });
    } catch {
      setErrorMsg('Couldn’t connect — check mic permissions and try again.');
      startedRef.current = false;
    }
  };

  const toggleMute = () => {
    setMuted(m => {
      setConversationMuted(!m);
      return !m;
    });
  };

  const connected = status === 'connected';
  const connecting = status === 'connecting';
  const speaking = connected && (isSpeaking || mode === 'speaking');
  const listening = connected && !speaking;

  const stateLabel = errorMsg
    ? 'Try again'
    : connecting
      ? 'Connecting…'
      : speaking
        ? 'Speaking…'
        : listening
          ? 'Listening…'
          : '● Press to talk';

  return (
    <div
      style={{ position: 'fixed', inset: 0, background: 'rgba(15,15,20,0.45)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 100, padding: 40 }}
      onClick={handleClose}
    >
      <div onClick={e => e.stopPropagation()} style={{ width: 560, maxWidth: '100%', background: '#fff', color: '#0a0a0b', borderRadius: 20, border: `1px solid ${border}`, boxShadow: '0 30px 80px rgba(0,0,0,0.35)', overflow: 'hidden' }}>
        <div style={{ padding: '20px 24px', borderBottom: `1px solid ${border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <div style={{ width: 10, height: 10, borderRadius: 999, background: connected ? accent : 'rgba(10,10,11,0.55)', boxShadow: connected ? `0 0 0 4px ${accent}22` : 'none', transition: 'all .3s' }} />
            <div style={{ fontSize: 13, letterSpacing: 0.4, textTransform: 'uppercase', fontWeight: 600 }}>Adam&apos;s voice twin</div>
          </div>
          <button onClick={handleClose} style={{ background: 'none', border: 'none', color: '#0a0a0b', fontSize: 20, cursor: 'pointer', opacity: 0.6 }}>✕</button>
        </div>

        <div style={{ padding: '44px 24px 28px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ position: 'relative', width: 180, height: 180, display: 'grid', placeItems: 'center' }}>
            {[0, 1, 2].map(i => (
              <div key={i} style={{
                position: 'absolute', inset: 0, borderRadius: 999, border: `1px solid ${accent}`,
                opacity: speaking ? 0.4 - i * 0.1 : listening ? 0.25 : 0.08,
                transform: `scale(${speaking ? 1 + i * 0.18 : 1 + i * 0.06})`,
                transition: 'all .9s cubic-bezier(.3,.7,.3,1)',
              }} />
            ))}
            <div style={{
              width: 88, height: 88, borderRadius: 999,
              background: `radial-gradient(circle at 35% 35%, ${accent}, ${accent}aa 60%, ${accent}66)`,
              boxShadow: `0 0 60px ${accent}66, inset 0 0 30px rgba(255,255,255,0.2)`,
              transform: listening ? 'scale(0.92)' : speaking ? 'scale(1.08)' : 'scale(1)',
              transition: 'transform .4s',
            }} />
          </div>
          <div style={{ marginTop: 24, fontSize: 14, color: errorMsg ? '#C4322C' : 'rgba(10,10,11,0.55)', minHeight: 20, textAlign: 'center', maxWidth: 420 }}>
            {errorMsg
              ? errorMsg
              : connected
                ? (speaking ? 'Speaking — this is a live, real conversation.' : 'Listening… go ahead and ask something.')
                : connecting
                  ? 'Connecting to the voice twin…'
                  : 'Press to start — ask about any era, any deal, or about Bender. This is a real live conversation with my ElevenLabs voice clone.'}
          </div>
        </div>

        {transcript.length > 0 && (
          <div style={{ padding: '0 24px 12px', maxHeight: 220, overflowY: 'auto' }}>
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
          <button
            onClick={connected || connecting ? endSession : press}
            style={{ flex: 1, padding: '14px 18px', background: connected ? '#0a0a0b' : accent, color: '#fff', border: 'none', borderRadius: 10, fontSize: 14, fontWeight: 600, cursor: 'pointer', transition: 'all .2s' }}
          >
            {connected ? 'End conversation' : connecting ? 'Connecting…' : stateLabel}
          </button>
          {connected && (
            <button onClick={toggleMute} style={{ padding: '14px 16px', background: 'transparent', color: '#0a0a0b', border: `1px solid ${border}`, borderRadius: 10, cursor: 'pointer', fontSize: 14 }}>
              {muted ? '🔇' : '🎤'}
            </button>
          )}
        </div>

        <div style={{ padding: '10px 24px 16px', fontSize: 11, color: 'rgba(10,10,11,0.55)', letterSpacing: 0.4 }}>
          Voice: ElevenLabs — my real cloned voice · Voice only, no video
        </div>
      </div>
    </div>
  );
}

export default function VoiceCloneModal({ open, onClose }: Props) {
  if (!open) return null;
  return (
    <ConversationProvider>
      <ModalBody onClose={onClose} />
    </ConversationProvider>
  );
}
