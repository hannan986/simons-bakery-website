export default function Specials() {
  return (
    <section className="section section-alt" id="specials" aria-labelledby="specials-title">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">This Week</span>
          <h2 className="section-title" id="specials-title">Daily <em>Specials</em></h2>
          <p className="section-sub">Limited-time deals — come early, these go fast!</p>
        </div>

        <div className="specials-grid">
          {/* Today's Special */}
          <div className="special-card special-dark">
            <span className="special-tag">Today's Special</span>
            <h3 className="special-name">Dozen Donuts Deal</h3>
            <p className="special-desc">
              Mix and match any 12 donuts. Pick your favorites from our daily selection.
            </p>
            <div className="special-pricing">
              <span className="special-price">$12.99</span>
              <span className="special-was">$16.00</span>
            </div>
            <div className="special-deco" aria-hidden="true">🍩</div>
          </div>

          {/* Weekly Offer */}
          <div className="special-card special-light">
            <span className="special-tag">Weekly Offer</span>
            <h3 className="special-name">Lunch Combo</h3>
            <p className="special-desc">
              Any sandwich + cookie + drink. The perfect midday meal at an unbeatable price.
            </p>
            <div className="special-pricing">
              <span className="special-price">$9.99</span>
              <span className="special-was">$13.50</span>
            </div>
            <div className="special-deco" aria-hidden="true">🥪</div>
          </div>
        </div>
      </div>
    </section>
  )
}
