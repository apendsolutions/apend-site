export default function ServiceCard({ s }) {
  return (
    <article className="flip" tabIndex={0}>
      <div className="flip-front">
        <h3>{s.title}</h3>
        <p>{s.text}</p>
        <span className="hint">See what's included</span>
      </div>
      <div className="flip-back">
        <h3>{s.title}</h3>
        <ul className="ticks">{s.items.map((i) => <li key={i}>{i}</li>)}</ul>
      </div>
    </article>
  )
}