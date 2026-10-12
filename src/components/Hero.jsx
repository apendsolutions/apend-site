const nodes = ['Restaurant', 'Retail', 'Healthcare', 'Startup', 'Services', 'Analytics', 'AI']

function Visual() {
  return (
    <div className="stage" role="img"
      aria-label="APEND at the centre, connected to restaurants, retail, healthcare, startups, service businesses, analytics and AI">
      <div className="scene" aria-hidden="true">
        <span className="orbit o1" />
        <span className="orbit o2" />
        {nodes.map((label, i) => (
          <div key={label} className="arm"
            style={{ '--a': `${i * (360 / nodes.length) - 90}deg`, '--h': `${[0, 26, 10][i % 3]}px` }}>
            <span className="beam" />
            <span className="node"><span className="tag">{label}</span></span>
          </div>
        ))}
        <div className="hub"><span className="orb">APEND</span></div>
      </div>
    </div>
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
