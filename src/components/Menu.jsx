import { useState } from 'react'
import { MENU_ITEMS } from '../data/content'

function MenuCard({ name, desc, price, badge, bg, emoji, photo, alt }) {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <article className="menu-card">
      <div className="menu-card-img" style={{ background: bg }}>
        {!imgFailed ? (
          <img
            src={photo}
            alt={alt}
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className="menu-card-ph" style={{ display: 'flex' }}>{emoji}</div>
        )}
        {badge && <span className="badge">{badge}</span>}
      </div>

      <div className="menu-card-body">
        <h3 className="menu-card-name">{name}</h3>
        <p className="menu-card-desc">{desc}</p>
        <span className="menu-card-price">{price}</span>
      </div>
    </article>
  )
}

export default function Menu() {
  return (
    <section className="section" id="menu" aria-labelledby="menu-title">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">What We Bake</span>
          <h2 className="section-title" id="menu-title">Our <em>Favorites</em></h2>
          <p className="section-sub">
            Everything made fresh daily — from the first donut out of the fryer to the last pastry of the morning.
          </p>
        </div>

        <div className="menu-grid">
          {MENU_ITEMS.map(item => (
            <MenuCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
