import { NAV_LINKS } from '../data/content'

function scrollTo(href) {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">

        {/* Brand */}
        <div>
          <div className="footer-logo">Simon's <span>Bakery</span></div>
          <address className="footer-addr">
            582 Cranbrook Rd<br />
            Cockeysville, MD 21030<br />
            <a href="tel:4106679832">(410) 667-9832</a>
          </address>
        </div>

        {/* Quick links */}
        <div>
          <div className="footer-col-head">Quick Links</div>
          <ul className="footer-links" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="footer-link"
                  onClick={e => { e.preventDefault(); scrollTo(href) }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Connect */}
        <div>
          <div className="footer-col-head">Connect</div>
          <ul className="footer-links" role="list">
            <li>
              <a
                href="https://www.facebook.com/search/top?q=simon%27s%20bakery%20cockeysville"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                📘 Facebook
              </a>
            </li>
            <li>
              <a
                href="https://maps.google.com/?q=582+Cranbrook+Rd,+Cockeysville,+MD+21030"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link"
              >
                🗺️ Google Maps
              </a>
            </li>
            <li>
              <a href="tel:4106679832" className="footer-link">📞 (410) 667-9832</a>
            </li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 Simon's Bakery · Made with ❤️ in Cockeysville
      </div>
    </footer>
  )
}
