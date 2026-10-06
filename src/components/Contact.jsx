import { useState } from 'react'
import { contact } from '../data/site.js'
const types = ['Business website', 'Management system', 'AI application', 'Dashboard / automation', 'Something else']
export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [errs, setErrs] = useState({})
  async function submit(e) {
    e.preventDefault()
    const d = Object.fromEntries(new FormData(e.target))
    const er = {}
    if (!d.name.trim()) er.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(d.email)) er.email = 'Enter a valid email address.'
    if (d.message.trim().length < 10) er.message = 'Tell us a little more (at least 10 characters).'
    setErrs(er); if (Object.keys(er).length) return
    setStatus('loading')
    try {
      if (contact.endpoint) {
        const r = await fetch(contact.endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(d) })
        if (!r.ok) throw new Error('failed')
      } else {
        const body = `Name: ${d.name}\nEmail: ${d.email}\nBusiness: ${d.company}\nProject type: ${d.type}\nBudget: ${d.budget}\n\n${d.message}`
        window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent('Project enquiry from ' + d.name)}&body=${encodeURIComponent(body)}`
      }
      setStatus('success'); e.target.reset()
    } catch { setStatus('error') }
  }
  const F = ({ id, label, req, children, hint }) => (
    <div className="field"><label htmlFor={id}>{label}{!req && <span> (optional)</span>}</label>{children}
      {errs[id] && <p className="err" id={id + '-e'} role="alert">{errs[id]}</p>}</div>)
  const a = (id) => ({ id, name: id, 'aria-invalid': !!errs[id], 'aria-describedby': errs[id] ? id + '-e' : undefined })
  return (
    <section id="contact" className="section dark"><div className="wrap contact">
      <div><h2>Have an Idea?</h2>
        <p className="lead">Tell us what you're looking to build. We'll discuss your idea and figure out the best way to turn it into a working digital solution.</p>
        <p className="direct">Prefer email? <a href={`mailto:${contact.email}`}>{contact.email}</a></p></div>
      <form onSubmit={submit} noValidate aria-busy={status === 'loading'}>
        <div className="two"><F id="name" label="Name" req><input {...a('name')} autoComplete="name" /></F>
          <F id="email" label="Email" req><input {...a('email')} type="email" autoComplete="email" /></F></div>
        <div className="two"><F id="company" label="Business / Company"><input {...a('company')} autoComplete="organization" /></F>
          <F id="type" label="Project type" req><select {...a('type')}>{types.map((t) => <option key={t}>{t}</option>)}</select></F></div>
        <F id="message" label="Message" req><textarea {...a('message')} rows="5" /></F>
        <F id="budget" label="Budget range"><input {...a('budget')} placeholder="e.g. ₹10,000 – ₹50,000" /></F>
        <button className="btn btn-primary btn-lg" disabled={status === 'loading'}>{status === 'loading' ? 'Sending…' : 'Start a Conversation →'}</button>
        <p role="status" className={'fmsg ' + status}>
          {status === 'success' && (contact.endpoint ? 'Thanks — your message is sent. We\'ll reply by email soon.' : 'Your email app should now open with the message ready to send.')}
          {status === 'error' && `Couldn't send your message. Please try again or email ${contact.email}.`}
        </p>
      </form>
    </div></section>
  )
}
