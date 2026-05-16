'use client';
import React from 'react';
import Placeholder from './Placeholder';
import { useFadeIn } from '@/hooks/useFadeIn';

const HOBBIES = [
  { tag: 'Bender', title: 'Dog dad to a nine-year-old mini bulldog', body: "Bender. 9. Australian mini bulldog. Senior management. Has opinions on the Cronulla cliff walk and on whether you're staying for dinner.", caption: 'fig · bender · cronulla · 4:5', dark: true },
  { tag: 'Bali', title: 'A second home in Canggu — better wifi than you\'d think', body: "I spend weeks at a time working out of Bali. Different timezone, same pipeline. The shape of the day is just better when there's a wave at lunch.", caption: 'fig · canggu · golden hour', dark: false },
  { tag: 'Surf', title: 'The original voice technology — the ocean', body: "Cronulla local. The board is the part of the week that doesn't require a stakeholder map.", caption: 'fig · cronulla point · 6am', dark: false },
  { tag: 'Snowboard', title: 'The other kind of carving', body: "Japan when I can, Thredbo when I can't. Read the line, commit, recover from the bad ones.", caption: 'fig · niseko · white', dark: false },
  { tag: 'Golf', title: 'Working on the swing. And the patience.', body: "Off the tee I'm a long-cycle enterprise seller. On the green I'm an SDR. The point of the round isn't the score — it's the four hours with mates.", caption: 'fig · the kingsway · saturday', dark: false },
  { tag: 'Vibe-code lab', title: 'Voice agents at the kitchen table', body: 'Most never ship. Son GPT 2.0 did — a clone of me my Mum can call. The practice is the point.', caption: 'fig · macbook · cronulla · late', dark: true },
];

export default function OffTheClock() {
  const ref = useFadeIn();
  return (
    <section id="off-the-clock" ref={ref as React.RefObject<HTMLElement>} style={{ background: 'var(--bg)' }}>
      <div style={{ maxWidth: 1520, margin: '0 auto', padding: '120px 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 14, borderBottom: '1px solid var(--rule)', marginBottom: 36, fontSize: 11, letterSpacing: 2.4, textTransform: 'uppercase', color: 'var(--muted)', fontFamily: 'var(--mono)' }}>
          <span><span style={{ color: 'var(--accent)' }}>§ 06</span> · Off the clock · the human behind the seller</span>
          <span>Six tiles · drop in real photos when ready</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 64, alignItems: 'end', marginBottom: 64 }}>
          <h2 style={{ fontFamily: 'var(--display)', fontSize: 104, lineHeight: 0.94, letterSpacing: -4, margin: 0, fontWeight: 800 }}>
            And when<br />
            <span style={{ fontStyle: 'italic', fontWeight: 500 }}>I&apos;m not selling<span style={{ color: 'var(--accent)' }}>—</span></span>
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--body)', margin: 0, maxWidth: 380 }}>
            A short, honest accounting of the things that fill the other sixteen hours. The work
            is the work, but it&apos;s not the whole shape.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gridAutoRows: 'minmax(220px, auto)', gap: 20 }}>
          {/* Hero tile — Bender */}
          <div style={{ gridColumn: 'span 7', gridRow: 'span 2', background: 'var(--bg-ink)', color: '#fff', position: 'relative', overflow: 'hidden' }}>
            <Placeholder caption={HOBBIES[0].caption} tone="dark" />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.8))', padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <div style={{ fontSize: 11, letterSpacing: 2, color: 'var(--accent)', fontFamily: 'var(--mono)', marginBottom: 12 }}>{HOBBIES[0].tag.toUpperCase()}</div>
              <h3 style={{ fontFamily: 'var(--display)', fontSize: 36, fontWeight: 700, letterSpacing: -1, margin: 0, lineHeight: 1.05, maxWidth: 480 }}>{HOBBIES[0].title}</h3>
              <p style={{ fontSize: 15, lineHeight: 1.55, color: 'rgba(255,255,255,0.75)', marginTop: 14, maxWidth: 460, marginBottom: 0 }}>{HOBBIES[0].body}</p>
            </div>
          </div>

          {/* Bali */}
          <div style={{ gridColumn: 'span 5', background: 'var(--bg-card)', border: '1px solid var(--rule)', padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: 2, color: 'var(--accent)', fontFamily: 'var(--mono)', marginBottom: 12 }}>{HOBBIES[1].tag.toUpperCase()}</div>
              <h3 style={{ fontFamily: 'var(--display)', fontSize: 30, fontWeight: 700, letterSpacing: -0.8, margin: 0, lineHeight: 1.05 }}>{HOBBIES[1].title}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--body)', marginTop: 12, marginBottom: 0 }}>{HOBBIES[1].body}</p>
            </div>
            <div style={{ marginTop: 20, fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', display: 'flex', justifyContent: 'space-between' }}>
              <span>base · cronulla</span><span>second base · canggu</span><span>tz · same shape</span>
            </div>
          </div>

          {/* Surf */}
          <div style={{ gridColumn: 'span 5', position: 'relative', overflow: 'hidden' }}>
            <Placeholder caption={HOBBIES[2].caption} tone="light" />
            <div style={{ position: 'absolute', inset: 0, padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', background: 'linear-gradient(180deg, transparent 50%, rgba(255,255,255,0.95))' }}>
              <div style={{ fontSize: 11, letterSpacing: 2, color: 'var(--accent)', fontFamily: 'var(--mono)', marginBottom: 8 }}>{HOBBIES[2].tag.toUpperCase()}</div>
              <h3 style={{ fontFamily: 'var(--display)', fontSize: 22, fontWeight: 700, letterSpacing: -0.5, margin: 0, lineHeight: 1.1, color: 'var(--ink)' }}>{HOBBIES[2].title}</h3>
            </div>
          </div>

          {/* Snowboard */}
          <div style={{ gridColumn: 'span 4', background: 'var(--bg-deep)', padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: 2, color: 'var(--accent)', fontFamily: 'var(--mono)', marginBottom: 12 }}>{HOBBIES[3].tag.toUpperCase()}</div>
              <h3 style={{ fontFamily: 'var(--display)', fontSize: 22, fontWeight: 700, letterSpacing: -0.5, margin: 0, lineHeight: 1.15 }}>{HOBBIES[3].title}</h3>
              <p style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--body)', marginTop: 10, marginBottom: 0 }}>{HOBBIES[3].body}</p>
            </div>
            <div style={{ marginTop: 16, display: 'flex', alignItems: 'center', gap: 4, height: 24 }}>
              {Array.from({ length: 24 }).map((_, i) => (
                <div key={i} style={{ flex: 1, height: 6 + Math.abs(Math.sin(i * 0.7)) * 18, background: i < 10 ? 'var(--accent)' : 'var(--rule-hard)' }} />
              ))}
            </div>
          </div>

          {/* Golf */}
          <div style={{ gridColumn: 'span 4', background: 'var(--bg-card)', border: '1px solid var(--rule)', padding: 28 }}>
            <div style={{ fontSize: 11, letterSpacing: 2, color: 'var(--accent)', fontFamily: 'var(--mono)', marginBottom: 12 }}>{HOBBIES[4].tag.toUpperCase()}</div>
            <h3 style={{ fontFamily: 'var(--display)', fontSize: 22, fontWeight: 700, letterSpacing: -0.5, margin: 0, lineHeight: 1.15 }}>{HOBBIES[4].title}</h3>
            <p style={{ fontSize: 13, lineHeight: 1.55, color: 'var(--body)', marginTop: 10 }}>{HOBBIES[4].body}</p>
            <ul style={{ margin: 0, marginTop: 14, padding: 0, listStyle: 'none', fontSize: 12, color: 'var(--muted)', fontFamily: 'var(--mono)', lineHeight: 1.9 }}>
              <li>· home course · The Kingsway, Cronulla</li>
              <li>· best round · better than last time</li>
              <li>· partners · mates, always mates</li>
            </ul>
          </div>

          {/* Vibe-code lab */}
          <div style={{ gridColumn: 'span 4', position: 'relative', overflow: 'hidden', background: 'var(--bg-ink)', color: '#fff' }}>
            <Placeholder caption={HOBBIES[5].caption} tone="dark" />
            <div style={{ position: 'absolute', inset: 0, padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', background: 'linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.78))' }}>
              <div style={{ fontSize: 11, letterSpacing: 2, color: 'var(--accent)', fontFamily: 'var(--mono)', marginBottom: 8 }}>{HOBBIES[5].tag.toUpperCase()}</div>
              <h3 style={{ fontFamily: 'var(--display)', fontSize: 22, fontWeight: 700, letterSpacing: -0.5, margin: 0, lineHeight: 1.15 }}>{HOBBIES[5].title}</h3>
              <p style={{ fontSize: 12, lineHeight: 1.55, color: 'rgba(255,255,255,0.7)', marginTop: 10, marginBottom: 0 }}>{HOBBIES[5].body}</p>
            </div>
          </div>
        </div>

        <div style={{ marginTop: 56, display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 24, borderTop: '1px solid var(--rule)', fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--muted)', letterSpacing: 1.2 }}>
          <span>↘ if you&apos;re still here, you&apos;re probably the right kind of reader.</span>
          <span>— A. K.</span>
        </div>
      </div>
    </section>
  );
}
