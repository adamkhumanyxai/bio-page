'use client';
import { CSSProperties } from 'react';

interface Props {
  caption: string;
  tone?: 'light' | 'dark';
  style?: CSSProperties;
}

export default function Placeholder({ caption, tone = 'light', style }: Props) {
  const dark = tone === 'dark';
  const stripe1 = dark ? '#1a1a1c' : '#e8e6e0';
  const stripe2 = dark ? '#222226' : '#dcd9d2';
  const text = dark ? 'rgba(245,244,241,0.55)' : 'rgba(10,10,11,0.45)';
  return (
    <div style={{
      width: '100%', height: '100%', position: 'absolute', inset: 0,
      background: `repeating-linear-gradient(135deg, ${stripe1} 0 12px, ${stripe2} 12px 24px)`,
      display: 'grid', placeItems: 'center',
      ...style,
    }}>
      <div style={{
        fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: 0.4,
        color: text, textAlign: 'center', padding: 8,
        background: dark ? 'rgba(0,0,0,0.4)' : 'rgba(255,255,255,0.6)',
        backdropFilter: 'blur(6px)', borderRadius: 4,
      }}>
        [{caption}]
      </div>
    </div>
  );
}
