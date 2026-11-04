import SectionHeader from './SectionHeader.jsx'
import { coursework } from '../data/content.js'

export default function Coursework() {
  return (
    <section id="coursework" className="section alt">
      <div className="container">
        <SectionHeader num="04" title="Coursework" intro="Master of Urban Spatial Analytics, University of Pennsylvania" />
        <ul className="courses">
          {coursework.map((c) => (
            <li key={c.code}><span className="code">{c.code}</span>{c.name}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
