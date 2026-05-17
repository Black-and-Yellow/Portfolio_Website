import skills from '../data/skills.json'

const marqueeItems = [...skills.marquee, ...skills.marquee, ...skills.marquee]

export default function TechMarquee() {
  return (
    <section className="border-y border-border bg-background py-8 overflow-hidden flex flex-col gap-4">
      {/* Scroll Left */}
      <div className="marquee">
        {marqueeItems.map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-8 px-4 font-display text-4xl italic md:text-6xl text-muted-foreground transition-colors hover:text-foreground"
          >
            {tech}
            <span className="h-2 w-2 rounded-full bg-accent flex-shrink-0" />
          </div>
        ))}
      </div>
      
      {/* Scroll Right (Reverse) */}
      <div className="marquee" style={{ animationDirection: 'reverse', animationDuration: '45s' }}>
        {marqueeItems.reverse().map((tech, i) => (
          <div
            key={i}
            className="flex items-center gap-8 px-4 font-display text-4xl md:text-6xl text-muted-foreground transition-colors hover:text-foreground"
          >
            {tech}
            <span className="h-[2px] w-8 bg-border flex-shrink-0" />
          </div>
        ))}
      </div>
    </section>
  )
}
