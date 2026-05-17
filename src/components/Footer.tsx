import { Mail } from 'lucide-react'
import profile from '../data/profile.json'

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
    <path d="M12 .5a11.5 11.5 0 0 0-3.63 22.41c.57.1.78-.25.78-.55v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.3-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.6.23 2.77.11 3.07.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.26 5.69.41.36.78 1.07.78 2.16v3.2c0 .31.21.66.79.55A11.5 11.5 0 0 0 12 .5Z" />
  </svg>
)

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
    <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9.5h4V21H3V9.5Zm7 0h3.8v1.57h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.07c0-1.21-.02-2.78-1.7-2.78-1.7 0-1.96 1.32-1.96 2.69V21h-4V9.5Z" />
  </svg>
)

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      className="border-t py-10"
      style={{ borderColor: 'var(--border)' }}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 px-6 md:flex-row md:items-center md:px-10">
        <div
          className="font-mono text-xs"
          style={{ color: 'var(--muted-foreground)' }}
        >
          © {year} Muthuraja S — Crafted with intent.
        </div>

        <div
          className="flex items-center gap-5"
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
            <Mail className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
