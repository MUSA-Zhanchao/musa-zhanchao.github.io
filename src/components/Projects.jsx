import { useMemo, useState } from 'react'
import SectionHeader from './SectionHeader.jsx'
import { categories, projects } from '../data/content.js'

const featured = projects.filter((p) => p.featured)
const others = projects.filter((p) => !p.featured)

export default function Projects() {
  const [active, setActive] = useState('all')
  const list = useMemo(
    () => (active === 'all' ? others : others.filter((p) => p.category.includes(active))),
    [active],
  )

  return (
    <section id="projects" className="section alt">
      <div className="container">
        <SectionHeader
          num="02"
          title="Selected Projects"
          intro="Highlights from the MUSA program: transit, street-level AI, and spatial policy analytics."
        />
        <div className="featured-grid">
          {featured.map((p, i) => <FeaturedCard key={p.title} p={p} index={i} />)}
        </div>

        <div className="subhead">
          <h3>More work</h3>
          <div className="filters" role="tablist" aria-label="Filter projects">
            {categories.map((c) => (
              <button
                key={c.key}
                role="tab"
                aria-selected={active === c.key}
                className={active === c.key ? 'filter active' : 'filter'}
                onClick={() => setActive(c.key)}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>
        <div className="grid">
          {list.map((p) => <ProjectCard key={p.title} p={p} />)}
          {list.length === 0 && <p className="muted">Nothing else in this category yet — see the featured projects above.</p>}
        </div>
      </div>
    </section>
  )
}

function FeaturedCard({ p, index }) {
  return (
    <article className={`card featured-card line-${(index % 4) + 1}`}>
      <span className="featured-index">{String(index + 1).padStart(2, '0')}</span>
      <p className="eyebrow small">{p.subtitle}</p>
      <h3>{p.link ? <a href={p.link} target="_blank" rel="noreferrer">{p.title}</a> : p.title}</h3>
      <p>{p.description}</p>
      {p.collaborators && <p className="muted small">{p.collaborators}</p>}
      <ul className="tags">{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
      <div className="card-links">
        {p.link && <a href={p.link} target="_blank" rel="noreferrer">Live site →</a>}
        {p.repo && <a href={p.repo} target="_blank" rel="noreferrer">Code</a>}
      </div>
    </article>
  )
}

function ProjectCard({ p }) {
  return (
    <article className="card project">
      <p className="eyebrow small">{p.subtitle}</p>
      <h4>{p.link ? <a href={p.link} target="_blank" rel="noreferrer">{p.title}</a> : p.title}</h4>
      <p>{p.description}</p>
      <div className="card-links">
        {p.link && <a href={p.link} target="_blank" rel="noreferrer">Live →</a>}
        {p.repo && <a href={p.repo} target="_blank" rel="noreferrer">Code</a>}
      </div>
    </article>
  )
}
