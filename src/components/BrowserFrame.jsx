export default function BrowserFrame({ project, large }) {
  return (
    <div className={'frame' + (large ? ' frame-lg' : '')}>
      <div className="frame-bar" aria-hidden="true"><i /><i /><i /></div>
      <div className="frame-body">
        {project.image
          ? <img src={project.image} alt={`${project.name} screenshot`} loading="lazy" />
          : <div className="mock" role="img" aria-label={`${project.name} preview placeholder`}>
              <b /><span /><span /><span /><em />
              <strong>{project.name}</strong>
            </div>}
      </div>
    </div>
  )
}
