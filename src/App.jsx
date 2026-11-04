import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Research from './components/Research.jsx'
import Projects from './components/Projects.jsx'
import Teaching from './components/Teaching.jsx'
import Coursework from './components/Coursework.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Research />
        <Projects />
        <Teaching />
        <Coursework />
      </main>
      <Footer />
    </>
  )
}
