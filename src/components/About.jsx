import { FACTS } from '../data/content'

export default function About() {
  return (
    <section className="section" id="about" aria-labelledby="about-title">
      <div className="container">
        <div className="about-grid">

          {/* Story */}
          <div className="about-text">
            <span className="eyebrow">Our Story</span>
            <h2 className="section-title" id="about-title">A <em>neighborhood</em> bakery</h2>

            <p>
              Simon's Bakery has been a beloved corner of Cranbrook Shopping Center in Cockeysville,
              Maryland. The Simon family has been baking in Baltimore for over 140 years — from
              downtown locations to the current Cranbrook home.
            </p>
            <p>
              We believe in keeping things simple: quality ingredients, handmade with care, at prices
              that won't break the bank. From early birds grabbing a fresh pastry on the way to work,
              to families ordering birthday cakes — we're here for every moment that deserves
              something sweet.
            </p>
            <p>
              Follow us on Facebook to catch our daily specials, seasonal treats, and whatever comes
              fresh out of the oven!
            </p>

            <a
              href="https://www.facebook.com/search/top?q=simon%27s%20bakery%20cockeysville"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-fb"
            >
              📘 Follow us on Facebook
            </a>
          </div>

          {/* Fact cards */}
          <div className="facts">
            {FACTS.map(({ icon, label, sub, link }) => (
              <div className="fact" key={label}>
                <div className="fact-icon" aria-hidden="true">{icon}</div>
                <div>
                  <div className="fact-label">
                    {link ? <a href={link} style={{ color: 'inherit' }}>{label}</a> : label}
                  </div>
                  <div className="fact-sub">{sub}</div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
