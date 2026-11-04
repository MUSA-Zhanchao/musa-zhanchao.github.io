import { cities, coursework, projects, teaching } from '../data/content.js'

const stats = [
  [projects.length, 'Projects'],
  [cities.length, 'Cities'],
  [teaching.length, 'Talks & lectures'],
  [coursework.length, 'MUSA courses'],
]

export default function Stats() {
  return (
    <div className="stats">
      <div className="container stats-inner">
        {stats.map(([n, label]) => (
          <div key={label} className="stat">
            <span className="stat-num">{n}</span>
            <span className="stat-label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
