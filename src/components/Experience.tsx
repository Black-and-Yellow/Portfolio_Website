import { useScrollAnimation } from '../hooks/useScrollAnimation'
import experienceData from '../data/experience.json'

interface ExperienceEntry {
  id: string
  period: string
  role: string
  org: string
  bullets: string[]
}

const experience = experienceData as ExperienceEntry[]

function ExperienceRow({ entry }: { entry: ExperienceEntry }) {
  const ref = useScrollAnimation()

  return (
    <div
      ref={ref}
      className="group grid gap-4 p-8 transition-colors md:grid-cols-12 md:items-center md:p-10"
      style={{ backgroundColor: 'var(--background)' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--surface)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = 'var(--background)'
      }}
    >
      {/* Period */}
      <div
        className="md:col-span-3 font-mono text-xs uppercase tracking-wider"
        style={{ color: 'var(--muted-foreground)' }}
      >
        {entry.period}
      </div>

      {/* Role + Org */}
      <div className="md:col-span-4">
        <div className="font-display text-3xl">{entry.role}</div>
        <div
          className="mt-1 text-sm"
          style={{ color: 'var(--muted-foreground)' }}
        >
          {entry.org}
        </div>
      </div>

      {/* Bullets */}
      <ul className="md:col-span-5 space-y-1.5 text-sm" style={{ color: 'var(--muted-foreground)' }}>
        {entry.bullets.map((bullet, i) => (
          <li key={i} className="flex gap-3">
            <span
              className="mt-2 h-1 w-1 shrink-0 rounded-full"
              style={{ backgroundColor: 'var(--accent)' }}
            />
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Experience() {
  const headerRef = useScrollAnimation()

  return (
    <section
      id="experience"
      className="relative border-t py-32 md:py-44"
      style={{ borderColor: 'var(--border)' }}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="flex items-end justify-between gap-6 border-b pb-6"
          style={{ borderColor: 'var(--border)' }}
        >
          <div className="flex items-baseline gap-6">
            <span
              className="font-mono text-xs uppercase tracking-wider"
              style={{ color: 'var(--accent)' }}
            >
              03
            </span>
            <h2 className="font-display text-4xl md:text-6xl">Experience</h2>
          </div>
          <span
            className="hidden text-sm md:block"
            style={{ color: 'var(--muted-foreground)' }}
          >
            What I've been working on.
          </span>
        </div>

        {/* Experience Table */}
        <div
          className="mt-16 grid gap-px overflow-hidden rounded-2xl border"
          style={{
            borderColor: 'var(--border)',
            backgroundColor: 'var(--border)',
          }}
        >
          {experience.map((entry) => (
            <ExperienceRow key={entry.id} entry={entry} />
          ))}
        </div>
      </div>
    </section>
  )
}
