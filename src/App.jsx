import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Nav from './components/Nav'

function App() {
  return (
    <div className="main-container">
      <Nav />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}


export default App