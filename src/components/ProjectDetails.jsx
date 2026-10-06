import BrowserFrame from './BrowserFrame.jsx'
import { DemoButton } from './ProjectCard.jsx'
const Block = ({ t, children }) => children ? <section className="dblock"><h2>{t}</h2>{children}</section> : null
export default function ProjectDetails({ project: p }) {
  return (
    <article className="section detail">
      <div className="wrap narrow">
        <a className="back" href="#catalog">← Back to Build Catalog</a>
        <p className="cat">{p.category}</p><h1>{p.title}</h1><p className="lead">{p.summary}</p>
        <div className="row"><DemoButton p={p} big /></div>
        <BrowserFrame project={p} large />
        <Block t="Overview"><p>{p.summary}</p></Block>
        <Block t="The Challenge">{p.challenge && <p>{p.challenge}</p>}</Block>
        <Block t="The Solution">{p.solution && <p>{p.solution}</p>}</Block>
        <Block t="Key Features">{p.features.length > 0 && <ul className="ticks cols">{p.features.map((f) => <li key={f}>{f}</li>)}</ul>}</Block>
        <Block t="Technology"><ul className="chips">{p.tech.map((t) => <li key={t}>{t}</li>)}</ul></Block>
        <Block t="Project Role">{p.role && <p>{p.role}</p>}</Block>
        {p.repoUrl && <Block t="Source Code"><a className="btn btn-ghost" href={p.repoUrl} target="_blank" rel="noopener noreferrer">View on GitHub</a></Block>}
      </div>
    </article>
  )
}
