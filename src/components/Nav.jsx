import { useState, useEffect, useCallback } from 'react'
import { NAV_LINKS } from '../data/content'

function scrollTo(href) {
  const el = document.querySelector(href)
  el?.scrollIntoView({ behavior: 'smooth' })
}

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close drawer when clicking outside
  useEffect(() => {
    if (!menuOpen) return
    const handler = (e) => {
      if (!e.target.closest('.nav') && !e.target.closest('.nav-mobile')) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [menuOpen])

  const handleLink = useCallback((e, href) => {
    e.preventDefault()
    setMenuOpen(false)
    scrollTo(href)
  }, [])

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="nav-inner">
          <a href="#" className="nav-logo" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}>
            Simon's <span>Bakery</span>
          </a>

          <ul className="nav-links" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="nav-link" onClick={e => handleLink(e, href)}>{label}</a>
              </li>
            ))}
          </ul>

          <a href="tel:4106679832" className="nav-cta">Order by Phone</a>

          <button
            className={`hamburger${menuOpen ? ' open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div className={`nav-mobile${menuOpen ? ' open' : ''}`} role="navigation" aria-label="Mobile navigation">
        {NAV_LINKS.map(({ label, href }) => (
          <a key={href} href={href} className="nav-link" onClick={e => handleLink(e, href)}>{label}</a>
        ))}
        <a href="tel:4106679832" className="nav-cta" onClick={() => setMenuOpen(false)}>📞 Order by Phone</a>
      </div>
    </>
  )
}
