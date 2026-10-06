export default function ServiceCard({ s }) {
  return (
    <article className="card service">
      <h3>{s.title}</h3><p>{s.text}</p>
      <ul className="ticks">{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
    </article>
  )
}
