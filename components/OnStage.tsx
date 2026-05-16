'use client';
import React from 'react';
import Image from 'next/image';
import { useFadeIn } from '@/hooks/useFadeIn';

const PRESENTATIONS = [
  { y: 'Twilio', v: 'Customer rooms · ANZ ISVs', p: 'Generative AI companion deployments, including JAX at Xero' },
  { y: '8x8', v: 'Partner stages · NSW / VIC', p: 'CCaaS positioning vs. on-prem Avaya / Genesys incumbents' },
  { y: 'Genesys', v: 'Mid-market customer panels', p: "Australia's largest contact centres on cloud migration" },
  { y: 'Avaya', v: 'Reseller enablement · APAC', p: 'Channel kickoffs across the region with 75+ partners' },
];

export default function OnStage() {
  const ref = useFadeIn();
  return (
    <section id="on-stage" ref={ref as React.RefObject<HTMLElement>} style={{ background: 'var(--bg-deep)', borderTop: '1px solid var(--rule)' }}>
      <div style={{ maxWidth: 1520, margin: '0 auto', padding: '120px 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 14, borderBottom: '1px solid var(--rule)', marginBottom: 36, fontSize: 11, letterSpacing: 2.4, textTransform: 'uppercase', color: 'var(--muted)', fontFamily: 'var(--mono)' }}>
          <span><span style={{ color: 'var(--accent)' }}>§ 05</span> · In the room · customer rooms, partner stages, and the hallway after</span>
          <span>Twenty years of presenting where it counts</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 64, alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden' }}>
              <Image src="/adam-podium.jpg" alt="Adam on stage" fill style={{ objectFit: 'cover', objectPosition: 'center 22%', filter: 'grayscale(1) contrast(1.05)' }} />
            </div>
            <div style={{ position: 'absolute', left: 20, bottom: 20, padding: '8px 12px', background: 'rgba(0,0,0,0.78)', color: '#fff', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: 1.2, backdropFilter: 'blur(6px)' }}>
              FIG · CUSTOMER PRESENTATION · SYDNEY
            </div>
            <div style={{ position: 'absolute', top: -16, right: -16, padding: '5px 10px', background: 'var(--accent)', color: '#fff', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: 1.2 }}>PLATE II</div>
          </div>

          <div>
            <h2 style={{ fontFamily: 'var(--display)', fontSize: 72, lineHeight: 0.96, letterSpacing: -2.4, margin: 0, fontWeight: 800 }}>
              I close in<br /><span style={{ color: 'var(--accent)' }}>the room</span>, not the deck.
            </h2>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--body)', marginTop: 24, maxWidth: 460 }}>
              Twenty years of customer presentations, partner kickoffs, vendor enablement, and post&#8209;discovery
              recap sessions. I&apos;m comfortable in front of a room — and even more comfortable in the hallway
              after, where the real questions get asked.
            </p>
            <div style={{ marginTop: 28, display: 'flex', flexDirection: 'column', gap: 0 }}>
              {PRESENTATIONS.map((t, i) => (
                <div key={i} className="stageRow" style={{ display: 'flex', gap: 24, alignItems: 'baseline', padding: '12px 8px', borderBottom: '1px solid var(--rule)', borderRadius: 4 }}>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)', width: 78, flexShrink: 0 }}>{t.y}</span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'var(--display)', fontSize: 20, fontWeight: 600, letterSpacing: -0.3 }}>{t.v}</div>
                    <div style={{ fontSize: 13, color: 'var(--muted)', marginTop: 2 }}>{t.p}</div>
                  </div>
                  <span style={{ fontFamily: 'var(--mono)', fontSize: 11, color: 'var(--accent)' }}>↗ detail</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
