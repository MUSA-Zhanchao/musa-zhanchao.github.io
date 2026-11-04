import { teaching } from '../data/content.js'

export default function Teaching() {
  return (
    <section id="teaching" className="section">
      <div className="container">
        <h2>Talks &amp; Teaching</h2>
        <ol className="timeline">
          {teaching.map((t) => (
            <li key={t.title}>
              <span className="date">{t.date}</span>
              <div>
                <h3><a href={t.link} target="_blank" rel="noreferrer">{t.title}</a></h3>
                <p className="muted">{t.venue}</p>
                <p>{t.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
