import { useScrollAnimation } from '../hooks/useScrollAnimation'
import profile from '../data/profile.json'
import skills from '../data/skills.json'

const BASE = import.meta.env.BASE_URL

export default function About() {
  const headerRef = useScrollAnimation()
  const photoRef = useScrollAnimation()
  const bioRef = useScrollAnimation()

  return (
    <section
      id="about"
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
              02
            </span>
            <h2 className="font-display text-4xl md:text-6xl">About</h2>
          </div>
          <span
            className="hidden text-sm md:block"
            style={{ color: 'var(--muted-foreground)' }}
          >
            The short version.
          </span>
        </div>

        <div className="mt-16 grid gap-16 md:grid-cols-12">
          {/* Photo */}
          <div ref={photoRef} className="md:col-span-5">
            <div className="relative">
              <div
                className="absolute -inset-4 rounded-2xl blur-2xl"
                style={{ backgroundColor: 'hsl(38 75% 60% / 0.15)' }}
              />
              <img
                src={`${BASE}img/Profile.jpg`}
                alt="Muthuraja S"
                className="relative aspect-[4/5] w-full rounded-2xl object-cover ring-1 grayscale transition-all duration-700 hover:grayscale-0"
                style={{ ringColor: 'var(--border)' }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Bio + Skills */}
          <div ref={bioRef} className="md:col-span-7 md:pt-8">
            <p className="font-display text-3xl leading-snug md:text-4xl text-balance">
              {profile.bio}
            </p>

            <p
              className="mt-6 text-base leading-relaxed"
              style={{ color: 'var(--muted-foreground)' }}
            >
              Currently serving as{' '}
              <span style={{ color: 'var(--foreground)' }}>WebDev Lead</span> and{' '}
              <span style={{ color: 'var(--foreground)' }}>Design Team Core</span>{' '}
              at Nexsync, IIIT Sri City — shipping web projects, mentoring
              developers, and crafting visual content for events.
            </p>

            {/* Stats */}
            <div
              className="mt-12 grid grid-cols-3 gap-6 border-t pt-8"
              style={{ borderColor: 'var(--border)' }}
            >
              {profile.stats.map((stat) => (
                <div key={stat.label}>
                  <div
                    className="font-display text-5xl"
                    style={{ color: 'var(--accent)' }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="mt-2 font-mono text-[11px] uppercase tracking-wider"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Skill Groups */}
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              {skills.groups.map((group) => (
                <div key={group.label}>
                  <div
                    className="font-mono text-[11px] uppercase tracking-wider"
                    style={{ color: 'var(--muted-foreground)' }}
                  >
                    {group.label}
                  </div>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-md border px-2.5 py-1 text-xs"
                        style={{
                          borderColor: 'var(--border)',
                          backgroundColor: 'rgba(17,17,17,0.6)',
                        }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
