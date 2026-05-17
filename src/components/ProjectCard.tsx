import { ArrowUpRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export interface Project {
  name: string
  description: string
  github: string
  live: string
  techStack: string[]
  images: string[]
  category: string
  status: string
  date: string
  featured: boolean
  gradient?: string
}

interface ProjectCardProps {
  project: Project
  delay?: number
}

export default function ProjectCard({ project, delay = 0 }: ProjectCardProps) {
  const ref = useScrollAnimation<HTMLAnchorElement>()

  const href = project.live || project.github || '#'
  const isExternal = href !== '#'

  return (
    <a
      ref={ref}
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className="group relative flex flex-col overflow-hidden rounded-2xl border p-8 transition-all"
      style={{
        borderColor: 'var(--border)',
        backgroundColor: 'rgba(17,17,17,0.4)',
        transitionDelay: `${delay}ms`,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'hsl(38 75% 60% / 0.4)'
        e.currentTarget.style.backgroundColor = 'rgba(17,17,17,1)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'var(--border)'
        e.currentTarget.style.backgroundColor = 'rgba(17,17,17,0.4)'
      }}
    >
      {/* Hover glow */}
      <div
        className={`pointer-events-none absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100 ${project.gradient ?? 'from-amber-500/20 to-orange-600/5'}`}
      />

      {/* Header */}
      <div
        className="flex items-start justify-between font-mono text-xs uppercase tracking-wider"
        style={{ color: 'var(--muted-foreground)' }}
      >
        <span>{project.category}</span>
        <span>{project.date}</span>
      </div>

      {/* Name */}
      <h3 className="mt-6 font-display text-5xl leading-none md:text-6xl">
        {project.name}
      </h3>

      {/* Description */}
      <p
        className="mt-4 max-w-md text-sm leading-relaxed"
        style={{ color: 'var(--muted-foreground)' }}
      >
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="mt-8 flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="rounded-full border px-3 py-1 text-xs"
            style={{
              borderColor: 'var(--border)',
              color: 'var(--muted-foreground)',
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-8 flex items-center gap-2 text-sm" style={{ color: 'var(--foreground)' }}>
        {project.live ? 'View live' : 'View on GitHub'}
        <ArrowUpRight
          className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </div>
    </a>
  )
}
