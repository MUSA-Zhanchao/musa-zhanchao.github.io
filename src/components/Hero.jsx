import { useEffect, useState } from 'react'
import WorldMap from './WorldMap.jsx'
import { cities, profile } from '../data/content.js'

const TOUR_MS = 7000
const wide = () => window.matchMedia('(min-width: 900px)').matches

export default function Hero() {
  const [active, setActive] = useState(cities[0].id)
  const [touring, setTouring] = useState(
    () => !window.matchMedia?.('(prefers-reduced-motion: reduce)').matches,
  )
  const [isWide, setIsWide] = useState(wide)

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 900px)')
    const onChange = () => setIsWide(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  // Auto-tour through the featured cities until the visitor picks one.
  useEffect(() => {
    if (!touring) return
    const t = setInterval(() => {
      setActive((id) => cities[(cities.findIndex((c) => c.id === id) + 1) % cities.length].id)
    }, TOUR_MS)
    return () => clearInterval(t)
  }, [touring])

  const select = (id) => {
    setTouring(false)
    setActive(id)
  }
  const city = cities.find((c) => c.id === active)

  return (
    <section id="top" className="hero-map">
      <WorldMap active={active} onSelect={select} offset={isWide ? 0.2 : 0} />
      <div className="hero-fade" aria-hidden="true" />

      <div className="container hero-overlay">
        <div className="hero-copy">
          <p className="eyebrow">{profile.title}</p>
          <h1>{profile.name}</h1>
          <p className="affiliation">{profile.affiliation}</p>
          <p className="lead">{profile.summary}</p>
          <div className="cta">
            <a className="btn primary" href="#projects">View projects</a>
            <a className="btn" href={`mailto:${profile.email}`}>Get in touch</a>
            <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>

        <aside className="city-panel" aria-live="polite">
          <div className="city-tabs" role="tablist" aria-label="Featured cities">
            {cities.map((c) => (
              <button
                key={c.id}
                role="tab"
                aria-selected={c.id === active}
                className={c.id === active ? 'city-tab active' : 'city-tab'}
                onClick={() => select(c.id)}
              >
                {c.name}
              </button>
            ))}
          </div>
          <div className="city-body" key={city.id}>
            <p className="eyebrow small">{city.role}</p>
            <h3>{city.name}, {city.country}</h3>
            <p>{city.blurb}</p>
            {city.projects.length > 0 && (
              <ul className="city-projects">
                {city.projects.map((p) => (
                  <li key={p.title}>
                    <a href={p.link} target="_blank" rel="noreferrer">{p.title} →</a>
                  </li>
                ))}
              </ul>
            )}
            {touring && <div className="tour-bar" style={{ animationDuration: `${TOUR_MS}ms` }} />}
          </div>
        </aside>
      </div>
    </section>
  )
}
