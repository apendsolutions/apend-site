import { services } from '../data/services.js'
import ServiceCard from './ServiceCard.jsx'
export default function Services() {
  return (
    <section id="services" className="section">
      <div className="wrap">
        <div className="head"><h2>Technology That Works for Your Business</h2><p>From websites to custom software, we build practical digital solutions around real business needs.</p></div>
        <div className="grid4">{services.map((s) => <ServiceCard key={s.id} s={s} />)}</div>
      </div>
    </section>
  )
}
