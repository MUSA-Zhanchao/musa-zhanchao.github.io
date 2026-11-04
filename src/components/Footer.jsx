import { profile } from '../data/content.js'

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <h2>Contact</h2>
        <p>Interested in research collaboration on transportation, land use, or spatial policy analysis?</p>
        <p className="contact-links">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub · MUSA-Zhanchao</a>
        </p>
        <p className="muted small">© {new Date().getFullYear()} {profile.name} · Built with React + Vite</p>
      </div>
    </footer>
  )
}
