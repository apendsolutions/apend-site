import BrowserFrame from './BrowserFrame.jsx'
export function DemoButton({ p, big }) {
  const cls = 'btn btn-primary' + (big ? ' btn-lg' : '')
  const label = p.featured || big ? 'Explore Live Demo →' : 'Try Live Demo →'
  return p.demoUrl
    ? <a className={cls} href={p.demoUrl} target="_blank" rel="noopener noreferrer">{label}</a>
    : <button className={cls} disabled aria-label={`${p.name} live demo link coming soon`}>Demo link coming soon</button>
}
export default function ProjectCard({ p }) {
  return (
    <article className={'card project' + (p.featured ? ' featured' : '')}>
      <a className="preview" href={`#/project/${p.slug}`} aria-label={`View ${p.name} case study`}><BrowserFrame project={p} /></a>
      <div className="pbody">
        <p className="cat">{p.category}</p>
        <h3>{p.title}</h3>
        <p>{p.summary}</p>
        {p.features.length > 0 && <ul className="chips">{p.features.slice(0, p.featured ? 8 : 4).map((f) => <li key={f}>{f}</li>)}</ul>}
        <p className="tech">{p.tech.join(' · ')}</p>
        <div className="row">
          <DemoButton p={p} />
          {p.repoUrl && <a className="btn btn-ghost" href={p.repoUrl} target="_blank" rel="noopener noreferrer">GitHub</a>}
          <a className="btn btn-ghost" href={`#/project/${p.slug}`}>View Project →</a>
        </div>
      </div>
    </article>
  )
}
