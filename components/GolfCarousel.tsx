'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const PHOTOS = [
  '/golf/IMG-20250706-WA0016.jpg',
];

const ROTATION_MS = 3000;

export default function GolfCarousel() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    if (paused || PHOTOS.length <= 1) return;
    const t = setTimeout(() => setIdx(i => (i + 1) % PHOTOS.length), ROTATION_MS);
    return () => clearTimeout(t);
  }, [idx, paused]);

  const go = (n: number) => setIdx(() => (n + PHOTOS.length) % PHOTOS.length);

  const showNav = PHOTOS.length > 1;

  return (
    <div
      style={{ position: 'absolute', inset: 0, background: 'var(--bg-ink)' }}
      onMouseEnter={() => { setPaused(true); setHovered(true); }}
      onMouseLeave={() => { setPaused(false); setHovered(false); }}
    >
      {PHOTOS.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={i === 0 ? 'Adam on the golf course' : ''}
          fill
          priority={i === 0}
          sizes="(max-width: 900px) 100vw, 33vw"
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: i === idx ? 1 : 0,
            transition: 'opacity 900ms ease',
          }}
        />
      ))}

      {showNav && (
        <>
          <button
            type="button"
            onClick={() => go(idx - 1)}
            aria-label="Previous photo"
            style={{
              position: 'absolute', left: 0, top: 0, bottom: 0, width: 48,
              background: 'linear-gradient(90deg, rgba(0,0,0,0.5), transparent)',
              border: 'none', color: '#fff', fontSize: 26, cursor: 'pointer',
              opacity: hovered ? 1 : 0, transition: 'opacity 220ms ease',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--display)', fontWeight: 400, lineHeight: 1,
            }}
          >&#8249;</button>
          <button
            type="button"
            onClick={() => go(idx + 1)}
            aria-label="Next photo"
            style={{
              position: 'absolute', right: 0, top: 0, bottom: 0, width: 48,
              background: 'linear-gradient(270deg, rgba(0,0,0,0.5), transparent)',
              border: 'none', color: '#fff', fontSize: 26, cursor: 'pointer',
              opacity: hovered ? 1 : 0, transition: 'opacity 220ms ease',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--display)', fontWeight: 400, lineHeight: 1,
            }}
          >&#8250;</button>

          <div style={{
            position: 'absolute', top: 12, right: 12,
            display: 'flex', gap: 6, padding: '5px 8px',
            background: 'rgba(0,0,0,0.32)', borderRadius: 999,
            backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)',
          }}>
            {PHOTOS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setIdx(i)}
                aria-label={`Photo ${i + 1}`}
                style={{
                  width: 5, height: 5, borderRadius: '50%',
                  background: i === idx ? '#fff' : 'rgba(255,255,255,0.4)',
                  border: 'none', padding: 0, cursor: 'pointer',
                  transition: 'background 200ms ease',
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}