import { projects } from '../data/projects.js'
import ProjectDetails from '../components/ProjectDetails.jsx'
export default function ProjectDetailsPage({ slug }) {
  const p = projects.find((x) => x.slug === slug)
  if (!p) return <section className="section"><div className="wrap"><h1>Project not found</h1><a className="btn btn-ghost" href="#catalog">Back to Build Catalog</a></div></section>
  return <ProjectDetails project={p} />
}
