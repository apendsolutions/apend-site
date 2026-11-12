import { packages, addons, notes } from '../data/pricing.js'

export default function Pricing() {
  return (
    <section id="pricing" className="section alt"><div className="wrap">
      <div className="head"><h2>Website Packages</h2>
        <p>Introductory starting prices for website projects. Apps, management systems and dashboards are quoted per project.</p></div>
      <div className="plans">
        {packages.map((p) => (
          <article key={p.name} className={'plan' + (p.recommended ? ' rec' : '')}>
            {p.recommended && <span className="badge">Recommended</span>}
            <h3>{p.name}</h3>
            <p className="price"><small>from</small> {p.price}</p>
            <p className="best">Best for: {p.best}</p>
            <p>{p.text}</p>
            <ul className="ticks">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
            <a className={'btn ' + (p.recommended ? 'btn-primary' : 'btn-ghost')} href="#contact">Get a quote</a>
          </article>
        ))}
      </div>
      <details className="addons">
        <summary>Optional add-ons</summary>
        <dl>{addons.map(([s, pr]) => <div key={s}><dt>{s}</dt><dd>from {pr}</dd></div>)}</dl>
      </details>
      <ul className="pnotes">{notes.map((n) => <li key={n}>{n}</li>)}</ul>
      <a className="btn btn-ghost" href="/APEND_Website_Pricing_Guide.pdf" target="_blank" rel="noopener noreferrer">Download pricing guide (PDF)</a>
    </div></section>
  )
}
