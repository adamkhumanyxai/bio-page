import Image from 'next/image';

const BRANDS = [
  { name: 'Avaya',       src: '/logos/avaya.svg',       w: 110 },
  { name: 'Alcatel',     src: '/logos/alcatel.svg',     w: 120 },
  { name: 'Cisco',       src: '/logos/cisco.svg',       w: 80  },
  { name: 'Jabra',       src: '/logos/jabra.svg',       w: 90  },
  { name: 'Plantronics', src: '/logos/plantronics.svg', w: 130 },
  { name: 'Twilio',      src: '/logos/twilio.svg',      w: 90  },
  { name: 'Genesys',     src: '/logos/genesys.svg',     w: 110 },
  { name: '8x8',         src: '/logos/8x8.svg',         w: 60  },
  { name: 'Radvision',   src: '/logos/radvision.jpg',   w: 110 },
  { name: 'LifeSize',    src: '/logos/lifesize.png',    w: 100 },
  { name: 'ElevenLabs',  src: '/logos/elevenlabs.svg',  w: 120 },
  { name: 'Telnyx',      src: '/logos/telnyx.svg',      w: 100 },
];

const GAP = 96;

function Track() {
  return (
    <div className="brandTrack" style={{ display: 'flex', alignItems: 'center', gap: GAP, flexShrink: 0, paddingRight: GAP }} aria-hidden="true">
      {BRANDS.map(b => (
        <div
          key={b.name}
          style={{ position: 'relative', height: 36, width: b.w, flexShrink: 0, opacity: 0.65, transition: 'opacity 0.2s' }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '1')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '0.65')}
        >
          <Image
            src={b.src}
            alt={b.name}
            fill
            style={{ objectFit: 'contain', objectPosition: 'center' }}
            sizes={`${b.w}px`}
          />
        </div>
      ))}
    </div>
  );
}

export default function Brands() {
  return (
    <section style={{ borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)', marginTop: 72, padding: '28px 0', overflow: 'hidden' }}>
      <div className="brandTicker" style={{ display: 'flex', width: 'max-content' }}>
        <Track />
        <Track />
      </div>
    </section>
  );
}