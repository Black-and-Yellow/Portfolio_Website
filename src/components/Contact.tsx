import { Mail, Phone, MapPin } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import profile from '../data/profile.json'

function ContactCard({
  href,
  icon: Icon,
  label,
  value,
  delay = 0,
}: {
  href?: string
  icon: React.ElementType
  label: string
  value: string
  delay?: number
}) {
  const ref = useScrollAnimation()

  const inner = (
    <>
      <Icon
        className="h-5 w-5"
        style={{ color: 'var(--accent)' }}
        aria-hidden="true"
      />
      <div
        className="mt-6 font-mono text-[11px] uppercase tracking-wider"
        style={{ color: 'var(--muted-foreground)' }}
      >
        {label}
      </div>
      <div className="mt-1 text-base">{value}</div>
    </>
  )

  const baseStyle: React.CSSProperties = {
    borderColor: 'var(--border)',
    backgroundColor: 'rgba(17,17,17,0.4)',
    transitionDelay: `${delay}ms`,
  }

  const commonClass =
    'block rounded-2xl border p-6 transition-all hover:bg-[rgba(17,17,17,1)]'

  return (
    <div ref={ref}>
      {href ? (
        <a
          href={href}
          className={commonClass}
          style={baseStyle}
          onMouseEnter={(e) =>
            (e.currentTarget.style.borderColor = 'hsl(38 75% 60% / 0.4)')
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.borderColor = 'var(--border)')
          }
        >
          {inner}
        </a>
      ) : (
        <div
          className={commonClass}
          style={baseStyle}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLDivElement).style.borderColor =
              'hsl(38 75% 60% / 0.4)')
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLDivElement).style.borderColor =
              'var(--border)')
          }
        >
          {inner}
        </div>
      )}
    </div>
  )
}

export default function Contact() {
  const headerRef = useScrollAnimation()
  const ctaRef = useScrollAnimation()

  return (
    <section
      id="contact"
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
              04
            </span>
            <h2 className="font-display text-4xl md:text-6xl">Get in touch</h2>
          </div>
          <span
            className="hidden text-sm md:block"
            style={{ color: 'var(--muted-foreground)' }}
          >
            Let's build something good.
          </span>
        </div>

        {/* Big CTA Heading */}
        <div ref={ctaRef}>
          <h3 className="mt-16 font-display text-[10vw] leading-[0.95] tracking-tight md:text-[7rem] text-balance">
            Have an idea?{' '}
            <a
              href={`mailto:${profile.email}`}
              className="italic underline decoration-1 underline-offset-[12px] hover:decoration-2 transition-all"
              style={{ color: 'var(--accent)' }}
            >
              Say hello →
            </a>
          </h3>
        </div>

        {/* Contact Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <ContactCard
            href={`mailto:${profile.email}`}
            icon={Mail}
            label="Email"
            value={profile.email}
            delay={0}
          />
          <ContactCard
            href={`tel:${profile.phone.replace(/\s/g, '')}`}
            icon={Phone}
            label="Phone"
            value={profile.phone}
            delay={100}
          />
          <ContactCard
            icon={MapPin}
            label="Location"
            value={profile.address}
            delay={200}
          />
        </div>
      </div>
    </section>
  )
}
