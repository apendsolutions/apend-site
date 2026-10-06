import { useEffect, useRef } from 'react'
import { why, steps, stack } from '../data/site.js'
export function WhyApend() {
  return (
    <section className="section" id="why"><div className="wrap">
      <div className="head"><h2>Why Businesses Choose Practical Technology</h2></div>
      <dl className="why">{why.map(([t, d]) => <div key={t}><dt>{t}</dt><dd>{d}</dd></div>)}</dl>
    </div></section>
  )
}
export function Process() {
  const ref = useRef(null)
  useEffect(() => {
    const els = ref.current.querySelectorAll('li')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return els.forEach((e) => e.classList.add('in'))
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add('in'), io.unobserve(e.target))), { threshold: 0.3 })
    els.forEach((e) => io.observe(e)); return () => io.disconnect()
  }, [])
  return (
    <section className="section alt" id="process"><div className="wrap">
      <div className="head"><h2>From Idea to Working Product</h2></div>
      <ol className="steps" ref={ref}>{steps.map(([t, d], i) => <li key={t}><span className="num">{String(i + 1).padStart(2, '0')}</span><h3>{t}</h3><p>{d}</p></li>)}</ol>
    </div></section>
  )
}
export function About() {
  return (
    <section className="section" id="about"><div className="wrap narrow">
      <h2>About APEND</h2>
      <p className="lead">APEND is a small digital solutions studio focused on making useful technology accessible to businesses of every size.</p>
      <p>We combine modern web development, AI, cloud, databases and data technologies to build practical digital products — from business websites and management systems to AI-powered applications and dashboards.</p>
    </div></section>
  )
}
export function TechStack() {
  return (
    <section className="section alt" id="technology"><div className="wrap">
      <div className="head"><h2>Technology We Build With</h2></div>
      <div className="stack">{stack.map(([t, items]) => <div key={t}><h3>{t}</h3><ul className="chips">{items.map((i) => <li key={i}>{i}</li>)}</ul></div>)}</div>
    </div></section>
  )
}
