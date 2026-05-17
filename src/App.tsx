import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechMarquee from './components/TechMarquee'
import Work from './components/Work'
import About from './components/About'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip" style={{ backgroundColor: 'var(--background)', color: 'var(--foreground)' }}>
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <Work />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
