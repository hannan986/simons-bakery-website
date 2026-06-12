import { STATS } from '../data/content'

export default function Stats() {
  return (
    <div className="stats" role="region" aria-label="At a glance">
      <div className="stats-inner">
        {STATS.map(({ val, lbl }) => (
          <div className="stat" key={lbl}>
            <div className="stat-val">{val}</div>
            <div className="stat-lbl">{lbl}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
