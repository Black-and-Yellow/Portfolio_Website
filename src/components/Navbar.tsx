import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setMenuOpen(false)
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500"
      style={{
        borderBottom: scrolled
          ? '1px solid rgba(255,255,255,0.08)'
          : '1px solid transparent',
        backgroundColor: scrolled ? 'rgba(10,10,10,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        {/* Logo */}
        <a
          href="#top"
          onClick={(e) => handleNav(e, '#top')}
          className="flex items-center gap-2 font-mono text-sm tracking-tight"
        >
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{ backgroundColor: 'var(--accent)' }}
          />
          muthuraja
          <span style={{ color: 'var(--muted-foreground)' }}>.tech</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="underline-grow text-sm transition-colors hover:text-white"
              style={{ color: 'var(--muted-foreground)' }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Available for work badge */}
        <a
          href="#contact"
          onClick={(e) => handleNav(e, '#contact')}
          className="hidden md:inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium backdrop-blur transition-colors hover:bg-white/5"
          style={{
            borderColor: 'var(--border)',
            backgroundColor: 'rgba(17,17,17,0.6)',
          }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span
              className="absolute inset-0 animate-ping rounded-full opacity-75"
              style={{ backgroundColor: 'var(--accent)' }}
            />
            <span
              className="relative h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: 'var(--accent)' }}
            />
          </span>
          Available for work
        </a>

        {/* Mobile menu button */}
        <button
          className="flex md:hidden flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className="block h-0.5 w-5 transition-all duration-300"
            style={{
              backgroundColor: 'var(--foreground)',
              transform: menuOpen ? 'rotate(45deg) translateY(8px)' : 'none',
            }}
          />
          <span
            className="block h-0.5 w-5 transition-all duration-300"
            style={{
              backgroundColor: 'var(--foreground)',
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block h-0.5 w-5 transition-all duration-300"
            style={{
              backgroundColor: 'var(--foreground)',
              transform: menuOpen ? 'rotate(-45deg) translateY(-8px)' : 'none',
            }}
          />
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? '300px' : '0',
          borderTop: menuOpen ? '1px solid rgba(255,255,255,0.08)' : 'none',
        }}
      >
        <nav className="flex flex-col px-6 py-4 gap-4" style={{ backgroundColor: 'rgba(10,10,10,0.95)' }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNav(e, link.href)}
              className="text-sm font-medium transition-colors hover:text-white"
              style={{ color: 'var(--muted-foreground)' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNav(e, '#contact')}
            className="inline-flex items-center gap-2 text-xs font-medium mt-2"
            style={{ color: 'var(--accent)' }}
          >
            <span className="relative flex h-1.5 w-1.5">
              <span
                className="absolute inset-0 animate-ping rounded-full opacity-75"
                style={{ backgroundColor: 'var(--accent)' }}
              />
              <span
                className="relative h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: 'var(--accent)' }}
              />
            </span>
            Available for work
          </a>
        </nav>
      </div>
    </header>
  )
}
