export default function TeamMember({ m }) {
  const initials = m.name.split(' ').map((w) => w[0]).join('').slice(0, 2)
  return (
    <article className={'card member' + (m.placeholder ? ' ph' : '')}>
      {m.photo ? <img className="avatar" src={m.photo} alt={m.name} loading="lazy" /> : <div className="avatar" aria-hidden="true">{initials}</div>}
      <h3>{m.name}</h3><p className="role">{m.role}</p><p>{m.description}</p>
      {m.skills.length > 0 && <ul className="chips">{m.skills.map((s) => <li key={s}>{s}</li>)}</ul>}
      <div className="row links-s">
        {m.links.email && <a href={`mailto:${m.links.email}`}>Email</a>}
        {m.links.github && <a href={m.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>}
        {m.links.linkedin && <a href={m.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>}
      </div>
    </article>
  )
}
