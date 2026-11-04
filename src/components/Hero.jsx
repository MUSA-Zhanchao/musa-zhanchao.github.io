import { profile } from '../data/content.js'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div>
          <p className="eyebrow">{profile.title}</p>
          <h1>{profile.name}</h1>
          <p className="affiliation">{profile.affiliation}</p>
          <p className="lead">{profile.summary}</p>
          <ul className="chips">
            {profile.interests.map((i) => <li key={i}>{i}</li>)}
          </ul>
          <div className="cta">
            <a className="btn primary" href="#projects">View projects</a>
            <a className="btn" href={`mailto:${profile.email}`}>Get in touch</a>
            <a className="btn" href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
        <NetworkGraphic />
      </div>
    </section>
  )
}

// Decorative transit-map style graphic
function NetworkGraphic() {
  return (
    <svg className="hero-art" viewBox="0 0 300 300" aria-hidden="true">
      <g fill="none" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 240 L110 150 L110 60 L200 60" stroke="var(--line-1)" />
        <path d="M30 110 L110 150 L230 150 L280 200" stroke="var(--line-2)" />
        <path d="M200 20 L200 60 L230 150 L230 280" stroke="var(--line-3)" />
        <path d="M60 280 L150 200 L230 150" stroke="var(--line-4)" />
      </g>
      <g fill="var(--bg)" stroke="var(--text)" strokeWidth="3">
        {[[110,150],[110,60],[200,60],[230,150],[150,200],[20,240],[30,110],[280,200],[230,280],[60,280],[200,20]].map(([x,y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={x===110&&y===150||x===230&&y===150 ? 10 : 6} />
        ))}
      </g>
    </svg>
  )
}
