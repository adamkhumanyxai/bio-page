import Image from 'next/image';

const BRANDS = [
  { name: 'Avaya',                   src: '/logos/avaya.svg',                   w: 110 },
  { name: 'Alcatel',                  src: '/logos/alcatel.svg',                  w: 120 },
  { name: 'Cisco',                    src: '/logos/cisco.svg',                    w: 80  },
  { name: 'Jabra',                    src: '/logos/jabra.svg',                    w: 90  },
  { name: 'Plantronics',              src: '/logos/plantronics.svg',              w: 130 },
  { name: 'Twilio',                   src: '/logos/twilio.svg',                   w: 90  },
  { name: 'Interactive Intelligence', src: '/logos/interactive-intelligence.jpg', w: 130 },
  { name: 'Genesys',                  src: '/logos/genesys.svg',                  w: 110 },
  { name: '8x8',                      src: '/logos/8x8.svg',                      w: 60  },
  { name: 'Radvision',               src: '/logos/radvision.jpg',                w: 110 },
  { name: 'LifeSize',                 src: '/logos/lifesize.png',                 w: 100 },
];

export default function Brands() {
  return (
    <section style={{ borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)', marginTop: 72 }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '24px 56px', display: 'flex', alignItems: 'center', gap: 40 }}>
        <div style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--muted)', fontFamily: 'var(--mono)', whiteSpace: 'nowrap' }}>
          Sold for / against →
        </div>
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32, flexWrap: 'wrap' }}>
          {BRANDS.map(b => (
            <div key={b.name} style={{ position: 'relative', height: 32, width: b.w, flexShrink: 0, opacity: 0.75, transition: 'opacity 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '0.75')}
            >
              <Image
                src={b.src}
                alt={b.name}
                fill
                style={{ objectFit: 'contain', objectPosition: 'left center' }}
                sizes={`${b.w}px`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
