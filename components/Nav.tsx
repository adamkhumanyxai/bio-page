'use client';
import { useEffect, useState } from 'react';

interface Props { onTalk: () => void; }

const NAV_LINKS = [
  ['Story', '#story'], ['Timeline', '#timeline'], ['Projects', '#projects'],
  ['On Stage', '#on-stage'], ['Off the Clock', '#off-the-clock'], ['Contact', '#contact'],
] as const;

const SECTION_IDS = ['story', 'timeline', 'projects', 'on-stage', 'off-the-clock', 'contact'];

export default function Nav({ onTalk }: Props) {
  const [active, setActive] = useState('story');

  useEffect(() => {
    const getActive = () => {
      const threshold = window.innerHeight * 0.25;
      const candidates = SECTION_IDS.map(id => {
        const el = document.getElementById(id);
        if (!el) return null;
        return { id, top: el.getBoundingClientRect().top };
      }).filter(Boolean) as { id: string; top: number }[];
      const passed = candidates.filter(c => c.top <= threshold);
      return passed.length > 0 ? passed[passed.length - 1].id : (candidates[0]?.id ?? '');
    };
    const handleScroll = () => setActive(getActive());
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

        <div style={{ display: 'flex', gap: 32, fontSize: 14 }}>
          {NAV_LINKS.map(([label, href]) => {
            const isActive = active === href.slice(1);
            return (
              <a
                key={label}
                href={href}
                className="navLink"
                style={{
                  textDecoration: 'none',
                  ...(isActive ? { color: 'var(--accent)', opacity: 1, fontWeight: 600 } : { fontWeight: 500 }),
                }}
              >
                {label}
              </a>
            );
          })}
        </div>

        <button onClick={onTalk} style={{ padding: '11px 18px 11px 14px', background: 'var(--bg-ink)', color: '#fff', border: 'none', borderRadius: 999, fontSize: 13, fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10 }}>
          <span style={{ width: 7, height: 7, borderRadius: 999, background: 'var(--accent)', boxShadow: '0 0 0 4px rgba(44,95,255,0.25)' }} />
          Meet my AI twin
        </button>
      </div>
    </div>
  );
}
