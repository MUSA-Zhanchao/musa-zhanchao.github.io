import { useMemo, useState } from 'react'
import { categories, projects } from '../data/content.js'

export default function Projects() {
  const [active, setActive] = useState('all')
  const list = useMemo(
    () => (active === 'all' ? projects : projects.filter((p) => p.category.includes(active))),
    [active],
  )

  return (
    <section id="projects" className="section alt">
      <div className="container">
        <h2>Projects</h2>
        <p className="muted section-intro">
          Selected work from the MUSA program — click a card to open the live project.
        </p>
        <div className="filters" role="tablist">
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
        <div className="grid">
          {list.map((p) => <ProjectCard key={p.title} p={p} />)}
        </div>
      </div>
    </section>
  )
}

function ProjectCard({ p }) {
  return (
    <article className={p.featured ? 'card project featured' : 'card project'}>
      {p.featured && <span className="badge">Featured</span>}
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
