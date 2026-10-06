import Logo from './Logo.jsx'
import { contact, nav } from '../data/site.js'
import { services } from '../data/services.js'
export default function Footer() {
  return (
    <footer className="footer"><div className="wrap fgrid">
      <div><Logo light /><p className="ftag">Connecting Technology to Empower Every Business</p>
        <p>A small digital solutions studio building practical websites, systems, AI applications and dashboards.</p></div>
      <nav aria-label="Footer"><h3>Explore</h3>{nav.map(([l, h]) => <a key={h} href={h}>{l}</a>)}</nav>
      <div><h3>Services</h3>{services.map((s) => <a key={s.id} href="#services">{s.title}</a>)}</div>
      <div><h3>Contact</h3><a href={`mailto:${contact.email}`}>{contact.email}</a>
        <a href={contact.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
    </div><div className="wrap copy">© {new Date().getFullYear()} APEND. All rights reserved.</div></footer>
  )
}
