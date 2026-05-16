'use client';
import React from 'react';
import { RECORD } from '@/lib/data';
import { useFadeIn } from '@/hooks/useFadeIn';

const WINS = [
  { era: 'CPaaS · Twilio · 2024', deal: 'Xero · closed net-new for the generative AI companion, JAX', val: 'net-new' },
  { era: 'CPaaS · Twilio · 2021', deal: 'OfficeHQ Flex Contact Centre · 250 agents · closed in 8 weeks', val: '250 seats' },
  { era: 'CCaaS · 8x8 · 2019', deal: 'SiteMinder · 250 agents, 500 users, multi-year ACV', val: '500 users' },
  { era: 'UC · Genesys · 2015', deal: 'Employsure · 500-agent contact centre · Global Mid-Market Rep of the Year', val: '500 agents' },
];

export default function Record() {
  const ref = useFadeIn();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} style={{ maxWidth: 1520, margin: '0 auto', padding: '120px 40px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 14, borderBottom: '1px solid var(--rule)', marginBottom: 36, fontSize: 11, letterSpacing: 2.4, textTransform: 'uppercase', color: 'var(--muted)', fontFamily: 'var(--mono)' }}>
        <span><span style={{ color: 'var(--accent)' }}>§ 04</span> · The receipts · track record, not résumé</span>
        <span>A PDF is on request — these are what hiring managers actually want</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 64, alignItems: 'end', marginBottom: 56 }}>
        <h2 style={{ fontFamily: 'var(--display)', fontSize: 84, lineHeight: 0.95, letterSpacing: -3, margin: 0, fontWeight: 800 }}>
          Track record.<br /><span style={{ color: 'var(--muted)' }}>Not résumé.</span>
        </h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', border: '1px solid var(--rule-hard)' }}>
        {RECORD.map((r, i) => (
          <div key={i} style={{ padding: '40px 32px', borderRight: (i + 1) % 3 !== 0 ? '1px solid var(--rule)' : 'none', borderBottom: i < 3 ? '1px solid var(--rule)' : 'none', display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ fontSize: 10, letterSpacing: 1.6, color: 'var(--muted)', fontFamily: 'var(--mono)' }}>METRIC · {String(i + 1).padStart(2, '0')}</div>
            <div style={{ fontFamily: 'var(--display)', fontSize: 64, fontWeight: 800, letterSpacing: -2.2, lineHeight: 1, color: r.tone === 'primary' ? 'var(--accent)' : 'var(--ink)' }}>{r.num}</div>
            <div style={{ fontSize: 14, color: 'var(--body)', lineHeight: 1.5 }}>{r.label}</div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: 32, border: '1px solid var(--rule-hard)', padding: 32 }}>
        <div style={{ fontSize: 10, letterSpacing: 1.6, color: 'var(--muted)', fontFamily: 'var(--mono)', marginBottom: 20 }}>// SIGNATURE WINS · A SHORT LIST</div>
        {WINS.map((d, i) => (
          <div key={i} className="winRow" style={{ display: 'grid', gridTemplateColumns: '180px 1fr 160px', gap: 24, padding: '20px 12px', borderBottom: i < WINS.length - 1 ? '1px solid var(--rule)' : 'none', alignItems: 'center', borderRadius: 4 }}>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 12, color: 'var(--muted)', letterSpacing: 0.4 }}>{d.era}</span>
            <span style={{ fontSize: 16, color: 'var(--ink)', fontWeight: 500 }}>{d.deal}</span>
            <span style={{ fontFamily: 'var(--display)', fontSize: 24, color: 'var(--accent)', fontWeight: 700, textAlign: 'right', letterSpacing: -0.6 }}>{d.val}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
