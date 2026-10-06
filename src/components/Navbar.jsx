import { useEffect, useState } from 'react'
import { nav } from '../data/site.js'
import Logo from './Logo.jsx'
export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('#home')
  useEffect(() => {
    const ids = nav.map((n) => n[1].slice(1))
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive('#' + e.target.id)), { rootMargin: '-45% 0px -50% 0px' })
    ids.forEach((id) => { const el = document.getElementById(id); el && io.observe(el) })
    return () => io.disconnect()
  }, [])
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a href="#home" aria-label="APEND home"><Logo /></a>
        <nav aria-label="Primary" className={'links' + (open ? ' open' : '')}>
          {nav.map(([l, h]) => <a key={h} href={h} aria-current={active === h ? 'true' : undefined} onClick={() => setOpen(false)}>{l}</a>)}
          <a className="btn btn-primary nav-cta-m" href="#contact" onClick={() => setOpen(false)}>Start a Project</a>
        </nav>
        <a className="btn btn-primary nav-cta" href="#contact">Start a Project</a>
        <button className="burger" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(!open)}><span /><span /></button>
      </div>
    </header>
  )
}
