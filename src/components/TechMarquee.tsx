import skills from '../data/skills.json'

// Double the array so it scrolls seamlessly
const marqueeItems = [...skills.marquee, ...skills.marquee]

export default function TechMarquee() {
  return (
    <section
      aria-hidden="true"
      className="border-y py-6 overflow-hidden"
      style={{
        borderColor: 'var(--border)',
        backgroundColor: 'rgba(17,17,17,0.4)',
      }}
    >
      <div className="marquee">
        {marqueeItems.map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-12 px-6 font-display text-3xl md:text-5xl"
            style={{ color: 'var(--muted-foreground)' }}
          >
            {tech}
            <span
              className="h-1 w-1 rounded-full flex-shrink-0"
              style={{ backgroundColor: 'var(--accent)' }}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
