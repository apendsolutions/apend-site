const nodes = [['Restaurant', -90], ['Retail', -38], ['Healthcare', 14], ['Startup', 64], ['Services', 116], ['Analytics', 168], ['AI', 218]]
function Visual() {
  return (
    <svg viewBox="0 0 440 440" role="img" aria-label="APEND at the centre, connected to restaurants, retail, healthcare, startups, service businesses, analytics and AI" className="hero-art">
      <circle cx="220" cy="220" r="110" className="ring" /><circle cx="220" cy="220" r="170" className="ring faint" />
      {nodes.map(([l, a]) => {
        const r = 170, x = 220 + r * Math.cos((a * Math.PI) / 180), y = 220 + r * Math.sin((a * Math.PI) / 180)
        const w = l.length * 7.4 + 26
        return (<g key={l}><line x1="220" y1="220" x2={x} y2={y} className="spoke" />
          <rect x={x - w / 2} y={y - 14} width={w} height="28" rx="14" className="pill" /><text x={x} y={y + 4.5} textAnchor="middle" className="pill-t">{l}</text></g>)
      })}
      <circle cx="220" cy="220" r="46" className="core" /><text x="220" y="225" textAnchor="middle" className="core-t">APEND</text>
    </svg>
  )
}
export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="wrap hero-in">
        <div>
          <p className="eyebrow">APEND — Digital Solutions</p>
          <h1>Connecting Technology to Empower Every Business</h1>
          <p className="lead">We build modern websites, business systems, AI-powered applications and custom digital solutions that help businesses turn ideas into practical digital products.</p>
          <div className="row">
            <a className="btn btn-primary" href="#contact">Start a Project</a>
            <a className="btn btn-ghost" href="#catalog">Explore Our Builds</a>
          </div>
          <p className="avail"><span className="dot" aria-hidden="true" />Available for new projects</p>
        </div>
        <Visual />
      </div>
    </section>
  )
}
