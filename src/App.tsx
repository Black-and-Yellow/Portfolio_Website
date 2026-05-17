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
