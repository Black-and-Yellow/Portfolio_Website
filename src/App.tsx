import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Manifesto from './components/Manifesto'
import Work from './components/Work'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-clip text-foreground bg-background">
      <div aria-hidden="true" className="pointer-events-none fixed left-0 top-0 z-[60] hidden md:block" style={{ transform: 'translateX(952px) translateY(3px)' }}>
        <div className="-translate-x-1/2 -translate-y-1/2 rounded-full bg-accent" style={{ width: '10px', height: '10px' }}></div>
      </div>
      <Navbar />
      <Hero />
      <Manifesto />
      <Work />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}
