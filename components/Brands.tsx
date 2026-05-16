const BRANDS = ['Avaya', 'Cisco', 'Mitel', 'Genesys', 'NICE', 'Five9', 'RingCentral', 'Twilio'];

export default function Brands() {
  return (
    <section style={{ borderTop: '1px solid var(--rule)', borderBottom: '1px solid var(--rule)', marginTop: 72 }}>
      <div style={{ maxWidth: 1320, margin: '0 auto', padding: '28px 56px', display: 'flex', alignItems: 'center', gap: 40 }}>
        <div style={{ fontSize: 11, letterSpacing: 2, textTransform: 'uppercase', color: 'var(--muted)', fontFamily: 'var(--mono)', whiteSpace: 'nowrap' }}>
          Sold for / against →
        </div>
        <div style={{ flex: 1, display: 'flex', justifyContent: 'space-between', gap: 24 }}>
          {BRANDS.map(b => (
            <span key={b} className="brandName" style={{ fontFamily: 'var(--display)', fontSize: 22, fontWeight: 600, letterSpacing: -0.4 }}>{b}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
