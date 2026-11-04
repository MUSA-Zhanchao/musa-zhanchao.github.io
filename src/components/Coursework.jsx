import { coursework } from '../data/content.js'

export default function Coursework() {
  return (
    <section id="coursework" className="section alt">
      <div className="container">
        <h2>Coursework</h2>
        <p className="muted section-intro">
          Master of Urban Spatial Analytics, University of Pennsylvania
        </p>
        <ul className="courses">
          {coursework.map((c) => (
            <li key={c.code}><span className="code">{c.code}</span>{c.name}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
