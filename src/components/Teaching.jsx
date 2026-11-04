import SectionHeader from './SectionHeader.jsx'
import { teaching } from '../data/content.js'

export default function Teaching() {
  return (
    <section id="teaching" className="section">
      <div className="container">
        <SectionHeader num="03" title="Talks & Teaching" />
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
