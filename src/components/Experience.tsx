import experienceData from '../data/experience.json'

export default function Experience() {
  return (
    <section id="dossier" className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
      <div className="flex items-baseline justify-between border-b border-ink pb-4 font-mono text-[10px] uppercase tracking-[0.22em]">
        <span>§ III</span>
        <span>Dossier</span>
        <span className="text-muted-foreground">— ✦ —</span>
      </div>
      <div className="mt-6 grid grid-cols-12 gap-8">
        <div className="col-span-12 md:col-span-5">
          <h2 className="font-display text-5xl leading-[0.95] md:text-7xl">
            The <span className="italic text-accent">paper</span> trail.
          </h2>
          <p className="mt-8 font-serif text-xl leading-snug md:text-2xl">
            I write code, ship interfaces, mentor peers, and occasionally design a poster. Below, the chronological record.
          </p>
          <div className="mt-10 grid grid-cols-3 gap-4 rule-t pt-6">
            <div>
              <div className="font-display text-5xl text-accent">2+</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Years building</div>
            </div>
            <div>
              <div className="font-display text-5xl text-accent">3+</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Roles held</div>
            </div>
            <div>
              <div className="font-display text-5xl text-accent">2+</div>
              <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Hackathons</div>
            </div>
          </div>
        </div>
        <ol className="col-span-12 md:col-span-7">
          {experienceData.map((item, index) => {
            const num = String(index + 1).padStart(2, '0')
            // Join bullets into a single paragraph for the compact layout
            const description = item.bullets.join('; ')
            
            return (
              <li key={item.id} className="grid grid-cols-12 gap-4 border-t border-ink py-6 first:border-t-2">
                <div className="col-span-12 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground md:col-span-3">
                  {item.period}
                </div>
                <div className="col-span-12 md:col-span-9">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display text-3xl leading-tight md:text-4xl">{item.role}</h3>
                    <span className="font-mono text-[10px] uppercase tracking-[0.18em]">№ {num}</span>
                  </div>
                  <div className="mt-1 font-serif italic text-muted-foreground">{item.org}</div>
                  <p className="mt-3 max-w-prose text-sm leading-relaxed text-foreground/80">
                    {description}
                  </p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
