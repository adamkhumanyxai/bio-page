export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg)', borderTop: '1px solid var(--rule)' }}>
      <div className="footerInner" style={{ maxWidth: 1520, margin: '0 auto', padding: '44px 40px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12, color: 'var(--muted)', letterSpacing: 0.6, fontFamily: 'var(--mono)' }}>
        <span>© 2026 Adam Kratiuk · Cronulla, NSW · Set in Inter Tight & Inter</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ width: 7, height: 7, borderRadius: 999, background: '#7CFFB2', display: 'inline-block' }} />
          Voice twin live · ElevenLabs
        </span>
        <div style={{ display: 'flex', gap: 18 }}>
          <a href="https://www.linkedin.com/in/adam-kratiuk" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
