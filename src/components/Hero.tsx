import { useEffect, useRef } from 'react'
import { Sparkles, ArrowUpRight, Mail } from 'lucide-react'
import profile from '../data/profile.json'

const NAME_LETTERS = ['M', 'u', 't', 'h', 'u', 'r', 'a', 'j', 'a']

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
    <path d="M12 .5a11.5 11.5 0 0 0-3.63 22.41c.57.1.78-.25.78-.55v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.3-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.6.23 2.77.11 3.07.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.26 5.69.41.36.78 1.07.78 2.16v3.2c0 .31.21.66.79.55A11.5 11.5 0 0 0 12 .5Z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-5 w-5">
    <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9.5h4V21H3V9.5Zm7 0h3.8v1.57h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.07c0-1.21-.02-2.78-1.7-2.78-1.7 0-1.96 1.32-1.96 2.69V21h-4V9.5Z" />
  </svg>
)

export default function Hero() {
  const badgeRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Animate badge
    if (badgeRef.current) {
      badgeRef.current.style.opacity = '0'
      badgeRef.current.style.transform = 'translateY(10px)'
      setTimeout(() => {
        if (badgeRef.current) {
          badgeRef.current.style.transition = 'opacity 0.5s ease, transform 0.5s ease'
          badgeRef.current.style.opacity = '1'
          badgeRef.current.style.transform = 'translateY(0)'
        }
      }, 100)
    }

    // Animate content
    if (contentRef.current) {
      contentRef.current.style.opacity = '0'
      contentRef.current.style.transform = 'translateY(16px)'
      setTimeout(() => {
        if (contentRef.current) {
          contentRef.current.style.transition = 'opacity 0.6s ease, transform 0.6s ease'
          contentRef.current.style.opacity = '1'
          contentRef.current.style.transform = 'translateY(0)'
        }
      }, 600)
    }

    // Animate stats
    if (statsRef.current) {
      statsRef.current.style.opacity = '0'
      setTimeout(() => {
        if (statsRef.current) {
          statsRef.current.style.transition = 'opacity 0.8s ease'
          statsRef.current.style.opacity = '1'
        }
      }, 900)
    }
  }, [])

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="top" className="relative isolate min-h-screen pt-32 md:pt-40">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-lines opacity-40" />
        <div
          className="absolute left-1/2 top-1/3 -z-10 h-[480px] w-[480px] -translate-x-1/2 rounded-full blur-[140px]"
          style={{ backgroundColor: 'hsl(38 75% 60% / 0.15)' }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Badge */}
        <div
          ref={badgeRef}
          className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em]"
          style={{ color: 'var(--muted-foreground)' }}
        >
          <Sparkles
            className="h-3.5 w-3.5"
            style={{ color: 'var(--accent)' }}
            aria-hidden="true"
          />
          Portfolio · 2025
        </div>

        {/* Hero Heading — letter animation */}
        <h1 className="font-display text-[14vw] leading-[0.95] tracking-tight md:text-[9.5rem]">
          {NAME_LETTERS.map((letter, i) => (
            <span
              key={i}
              className="letter-animate inline-block"
              style={{ animationDelay: `${i * 0.05 + 0.2}s` }}
            >
              {letter}
            </span>
          ))}
          <span
            className="font-display italic"
            style={{
              color: 'var(--accent)',
              opacity: 0,
              animation: 'fadeInUp 0.5s ease forwards',
              animationDelay: '0.75s',
            }}
          >
            {' '}.S
          </span>
        </h1>

        {/* Content Grid */}
        <div ref={contentRef} className="mt-10 grid gap-10 md:grid-cols-12">
          {/* Tagline */}
          <p
            className="md:col-span-5 md:col-start-1 text-balance text-lg leading-relaxed"
            style={{ color: 'var(--muted-foreground)' }}
          >
            A Computer Science student at{' '}
            <span style={{ color: 'var(--foreground)' }}>IIIT Sri City</span> and
            full-stack developer crafting efficient, scalable web applications with
            a strong eye for design.
          </p>

          {/* CTAs + Social */}
          <div className="md:col-span-5 md:col-start-8 flex flex-col items-start gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#work"
                onClick={(e) => handleScroll(e, '#work')}
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-transform hover:scale-[1.02]"
                style={{
                  backgroundColor: 'var(--accent)',
                  color: 'var(--accent-foreground)',
                }}
              >
                View selected work
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden="true"
                />
              </a>
              <a
                href="#contact"
                onClick={(e) => handleScroll(e, '#contact')}
                className="inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition-colors hover:bg-white/5"
                style={{ borderColor: 'var(--border)' }}
              >
                Get in touch
              </a>
            </div>

            {/* Social Icons */}
            <div
              className="mt-2 flex items-center gap-5"
              style={{ color: 'var(--muted-foreground)' }}
            >
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon />
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div
          ref={statsRef}
          className="mt-24 grid grid-cols-2 gap-6 border-t pt-6 font-mono text-xs uppercase tracking-wider md:grid-cols-4"
          style={{
            borderColor: 'var(--border)',
            color: 'var(--muted-foreground)',
          }}
        >
          <div>
            <div style={{ color: 'var(--foreground)' }}>Based in</div>
            {profile.location}
          </div>
          <div>
            <div style={{ color: 'var(--foreground)' }}>Role</div>
            {profile.role}
          </div>
          <div>
            <div style={{ color: 'var(--foreground)' }}>Education</div>
            {profile.education}
          </div>
          <div>
            <div style={{ color: 'var(--foreground)' }}>Status</div>
            <span style={{ color: 'var(--accent)' }}>{profile.status}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
