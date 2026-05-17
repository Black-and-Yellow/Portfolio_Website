import skillsData from '../data/skills.json'

export default function Skills() {
  const { groups } = skillsData
  const totalGroups = String(groups.length).padStart(2, '0')

  return (
    <section id="stack" className="rule-t bg-ink text-background">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <div className="flex items-baseline justify-between border-b border-background/30 pb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-background/60">
          <span>§ II</span>
          <span>Tools &amp; Stack</span>
          <span>{totalGroups} / {totalGroups}</span>
        </div>
        <h2 className="mt-8 font-display text-5xl leading-[0.95] md:text-8xl">
          A modest <span className="italic text-accent">toolkit.</span>
        </h2>
        <div className="mt-16 grid grid-cols-12 gap-x-6 gap-y-10">
          {groups.map((group, idx) => (
            <div key={idx} className="col-span-6 md:col-span-4 lg:col-span-2 border-t border-background/30 pt-4">
              <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-background/60">
                {group.label}
              </div>
              <ul className="space-y-2 font-display text-2xl leading-tight md:text-3xl">
                {group.items.map((item) => (
                  <li key={item} className="link-reveal">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
