import { useEffect, useState } from 'react'
import { profile } from '../data/content.js'

const links = [
  ['#research', 'Research'],
  ['#projects', 'Projects'],
  ['#teaching', 'Talks'],
  ['#coursework', 'Coursework'],
  ['#contact', 'Contact'],
]

function getInitialTheme() {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // storage unavailable (private mode); fall back to system preference
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export default function Nav() {
  const [theme, setTheme] = useState(getInitialTheme)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('theme', theme) } catch { /* storage unavailable */ }
  }, [theme])

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#top" className="brand">{profile.name}</a>
        <button className="menu-btn" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          ☰
        </button>
        <nav className={open ? 'nav-links open' : 'nav-links'}>
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
          <button
            className="theme-btn"
            aria-label="Toggle dark mode"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>
        </nav>
      </div>
    </header>
  )
}
