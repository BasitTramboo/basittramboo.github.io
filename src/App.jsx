import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Nav from './components/Nav'

function App() {
  return (
    <>
      <a href="#about" className="skip-link">
        Skip to content
      </a>
      <div className="main-container">
        <Nav />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
