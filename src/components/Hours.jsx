import { useMemo } from 'react'
import { HOURS } from '../data/content'

export default function Hours() {
  const today = useMemo(() => new Date().getDay(), [])

  return (
    <section className="section" id="hours" aria-labelledby="hours-title">
      <div className="container">
        <div className="section-head">
          <span className="eyebrow">Plan Your Visit</span>
          <h2 className="section-title" id="hours-title">Hours &amp; <em>Location</em></h2>
        </div>

        <div className="hours-grid">

          {/* Hours card */}
          <div className="hours-card">
            <div className="card-title">🕐 Store Hours</div>
            <table className="hours-table" aria-label="Store hours by day">
              <tbody>
                {HOURS.map(({ dayNum, day, hours, closed }) => {
                  const isToday = dayNum === today
                  return (
                    <tr
                      key={dayNum}
                      className={`${closed ? 'closed' : ''}${isToday ? ' today' : ''}`}
                    >
                      <td>
                        {day}
                        {isToday && <span className="today-pill">Today</span>}
                      </td>
                      <td>{hours}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {/* Location card */}
          <div className="loc-card" id="contact">
            <div className="card-title">📍 Find Us</div>
            <p className="loc-addr">
              Simon's Bakery<br />
              Cranbrook Shopping Center<br />
              582 Cranbrook Rd<br />
              Cockeysville, MD 21030
            </p>
            <a href="tel:4106679832" className="loc-phone">📞 (410) 667-9832</a>
            <a
              href="https://maps.google.com/?q=582+Cranbrook+Rd,+Cockeysville,+MD+21030"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-amber"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              Get Directions
            </a>
          </div>

        </div>

        {/* Embedded map */}
        <div className="map-wrap">
          <iframe
            src="https://maps.google.com/maps?q=582+Cranbrook+Rd+Cockeysville+MD+21030&output=embed"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Simon's Bakery — 582 Cranbrook Rd, Cockeysville MD"
            aria-label="Google Maps showing Simon's Bakery location"
          />
        </div>

      </div>
    </section>
  )
}
