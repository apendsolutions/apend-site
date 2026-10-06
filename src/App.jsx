import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import ProjectDetailsPage from './pages/ProjectDetailsPage.jsx'

export default function App() {
  const [hash, setHash] = useState(window.location.hash)
  useEffect(() => {
    const on = () => setHash(window.location.hash)
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])
  const m = hash.match(/^#\/project\/([\w-]+)/)
  useEffect(() => {
    if (m) window.scrollTo(0, 0)
    else if (hash) document.querySelector(hash)?.scrollIntoView()
  }, [hash]) // eslint-disable-line
  return (<>
    <a className="skip" href="#main">Skip to content</a>
    <Navbar />
    <main id="main">{m ? <ProjectDetailsPage slug={m[1]} /> : <Home />}</main>
    <Footer />
  </>)
}
