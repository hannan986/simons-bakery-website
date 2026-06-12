import { HERO_BG } from '../data/content'

const CATEGORIES = [
  { icon: '🍩', name: 'Donuts',       hint: 'Fresh every morning' },
  { icon: '🎂', name: 'Custom Cakes', hint: 'Order 24 hr ahead'   },
  { icon: '🥐', name: 'Pastries',     hint: 'Baked daily'         },
  { icon: '🥪', name: 'Sandwiches',   hint: 'Made to order'       },
]

export default function Hero() {
  return (
    <section className="hero" aria-label="Welcome to Simon's Bakery">
      {/* Background image layer */}
      <div className="hero-bg">
        <img
          src={HERO_BG}
          alt=""
          aria-hidden="true"
          onError={e => { e.currentTarget.style.display = 'none' }}
        />
      </div>
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-inner">
        {/* Left: copy */}
        <div className="hero-content">
          <p className="hero-eyebrow">Fresh · Handmade · Cockeysville, MD</p>

          <h1 className="hero-title">
            Baked with <em>love</em><br />since day one.
          </h1>

          <p className="hero-sub">
            Donuts, pastries, cakes, cookies — and sandwiches to make your lunch just right.
          </p>

          <div className="hero-actions">
            <a
              href="#menu"
              className="btn btn-amber"
              onClick={e => { e.preventDefault(); document.querySelector('#menu')?.scrollIntoView({ behavior:'smooth' }) }}
            >
              See Our Menu
            </a>
            <a
              href="https://maps.google.com/?q=582+Cranbrook+Rd,+Cockeysville,+MD+21030"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              Get Directions
            </a>
          </div>
        </div>

        {/* Right: category cards */}
        <div className="hero-cards" role="list">
          {CATEGORIES.map(({ icon, name, hint }) => (
            <div key={name} className="hero-card" role="listitem">
              <span className="hero-card-icon">{icon}</span>
              <div className="hero-card-name">{name}</div>
              <div className="hero-card-hint">{hint}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
