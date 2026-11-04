export default function SectionHeader({ num, title, intro }) {
  return (
    <header className="section-header">
      <span className="section-num">{num}</span>
      <h2>{title}</h2>
      {intro && <p className="section-intro">{intro}</p>}
    </header>
  )
}
