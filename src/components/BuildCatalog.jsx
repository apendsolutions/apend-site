import { useState } from 'react'
import { projects, filters } from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'
export default function BuildCatalog() {
  const [f, setF] = useState('All')
  const list = projects.filter((p) => f === 'All' || p.filter.includes(f))
  const feat = list.filter((p) => p.featured), rest = list.filter((p) => !p.featured)
  return (
    <section id="catalog" className="section dark">
      <div className="wrap">
        <div className="head"><h2>Build Catalog</h2><p>Real projects. Real solutions. Explore what we've built.</p></div>
        <div className="filters" role="group" aria-label="Filter projects">
          {filters.map((x) => <button key={x} aria-pressed={f === x} onClick={() => setF(x)}>{x}</button>)}
        </div>
        {feat.map((p) => <ProjectCard key={p.slug} p={p} />)}
        <div className="grid3">{rest.map((p) => <ProjectCard key={p.slug} p={p} />)}</div>
      </div>
    </section>
  )
}
