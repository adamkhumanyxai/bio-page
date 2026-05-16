'use client';

interface Props { onTalk: () => void; }

const NAV_LINKS = [
  ['Story', '#story'], ['Timeline', '#timeline'], ['Projects', '#projects'],
  ['On Stage', '#on-stage'], ['Off the Clock', '#off-the-clock'], ['Contact', '#contact'],
] as const;

export default function Nav({ onTalk }: Props) {
  return (
    <div style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(10px)', borderBottom: '1px solid var(--rule)' }}>
      <div style={{ maxWidth: 1520, margin: '0 auto', padding: '20px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{ width: 32, height: 32, background: 'var(--bg-ink)', color: '#fff', display: 'grid', placeItems: 'center', fontSize: 13, fontWeight: 700, fontFamily: 'var(--display)', letterSpacing: -0.4 }}>
            AK
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
            <span style={{ fontFamily: 'var(--display)', fontSize: 16, fontWeight: 600, letterSpacing: -0.2 }}>Adam Kratiuk</span>
            <span style={{ fontFamily: 'var(--mono)', fontSize: 10, color: 'var(--muted)', letterSpacing: 0.6 }}>twenty years in voice</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 32, fontSize: 14, fontWeight: 500 }}>
          {NAV_LINKS.map(([label, href]) => (
            <a key={label} href={href} className="navLink" style={{ textDecoration: 'none' }}>{label}</a>
          ))}
        </div>

        <button onClick={onTalk} style={{ padding: '11px 18px 11px 14px', background: 'var(--bg-ink)', color: '#fff', border: 'none', borderRadius: 999, fontSize: 13, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 7, height: 7, borderRadius: 999, background: 'var(--accent)', boxShadow: '0 0 0 4px rgba(44,95,255,0.25)' }} />
          Meet my AI twin
        </button>
      </div>
    </div>
  );
}
