'use client';
import React from 'react';
import { useFadeIn } from '@/hooks/useFadeIn';

interface Props { onTalk: () => void; }

export default function Contact({ onTalk }: Props) {
  const ref = useFadeIn();
  return (
    <section id="contact" ref={ref as React.RefObject<HTMLElement>} style={{ background: 'var(--bg-ink)', color: '#fff' }}>
      <div style={{ maxWidth: 1520, margin: '0 auto', padding: '140px 40px', textAlign: 'center' }}>
        <div style={{ fontSize: 11, letterSpacing: 2.4, textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)', marginBottom: 32, fontFamily: 'var(--mono)' }}>
          <span style={{ color: 'var(--accent)' }}>§ 07</span> · The ask
        </div>
        <h2 style={{ fontFamily: 'var(--display)', fontSize: 144, lineHeight: 0.92, letterSpacing: -5.5, margin: 0, fontWeight: 800 }}>
          If you need someone<br />
          who&apos;s sold every<br />
          wave of voice<span style={{ color: 'var(--accent)' }}>—</span>
        </h2>
        <p style={{ fontFamily: 'var(--display)', fontSize: 24, fontStyle: 'italic', fontWeight: 400, marginTop: 32, color: 'rgba(255,255,255,0.7)', maxWidth: 720, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.4 }}>
          Founding GTM. AE #1–5. First sales hire.<br />
          Your buyers run contact centres, large enterprise teams, or developer platforms —
          and you need a seller who&apos;s been in the room for every shift since the PBX. Let&apos;s talk.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 48, flexWrap: 'wrap' }}>
          <button onClick={onTalk} style={{ padding: '18px 28px', background: 'var(--accent)', color: '#fff', border: 'none', borderRadius: 999, fontSize: 15, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10, boxShadow: '0 14px 36px rgba(44,95,255,0.4)' }}>
            <span style={{ width: 8, height: 8, borderRadius: 999, background: '#fff' }} />
            Meet my AI twin
          </button>
          <a href="mailto:akratiuk85@gmail.com" style={{ padding: '18px 26px', background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 999, fontSize: 15, fontWeight: 500, display: 'inline-flex', alignItems: 'center' }}>
            akratiuk85@gmail.com
          </a>
          <a href="https://www.linkedin.com/in/adam-kratiuk" target="_blank" rel="noopener noreferrer" style={{ padding: '18px 26px', background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 999, fontSize: 15, fontWeight: 500, display: 'inline-flex', alignItems: 'center' }}>
            linkedin.com/in/adam-kratiuk
          </a>
          <a href="mailto:akratiuk85@gmail.com" style={{ padding: '18px 26px', background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', borderRadius: 999, fontSize: 15, fontWeight: 500, display: 'inline-flex', alignItems: 'center' }}>
            📅 Book 20 min →
          </a>
        </div>
        <div style={{ marginTop: 64, display: 'inline-flex', gap: 28, padding: '14px 24px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 999, fontFamily: 'var(--mono)', fontSize: 12, color: 'rgba(255,255,255,0.7)', letterSpacing: 0.4 }}>
          <span>cronulla, nsw · australia</span>
          <span>open to bay area / eu / remote</span>
          <span>replies under 24h, usually faster</span>
        </div>
      </div>
    </section>
  );
}
