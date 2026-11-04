import SectionHeader from './SectionHeader.jsx'
import { profile, research } from '../data/content.js'

export default function Research() {
  return (
    <section id="research" className="section">
      <div className="container">
        <SectionHeader num="01" title="Research" />
        <div className="research-grid">
          <div>
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
          <div>
            <p className="eyebrow small">Research interests</p>
            <ul className="chips">
              {profile.interests.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
