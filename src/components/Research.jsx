import { research } from '../data/content.js'

export default function Research() {
  return (
    <section id="research" className="section">
      <div className="container">
        <h2>Research</h2>
        {research.map((r) => (
          <article key={r.role} className="card research-card">
            <h3>{r.role}</h3>
            <p className="muted">
              {r.org} · Supervised by{' '}
              <a href={r.supervisorUrl} target="_blank" rel="noreferrer">{r.supervisor}</a>
            </p>
            <p>{r.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
