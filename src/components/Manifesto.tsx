export default function Manifesto() {
  return (
    <>
      <section className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <div className="flex items-baseline justify-between border-b border-ink pb-4 font-mono text-[10px] uppercase tracking-[0.22em]">
          <span>§ A</span>
          <span>Manifesto</span>
          <span className="text-muted-foreground">— ✦ —</span>
        </div>
        <div className="mt-12 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-9 md:col-start-3">
            <div className="rule-b flex flex-wrap items-baseline justify-between gap-4 py-6 font-display text-3xl leading-tight md:text-6xl">
              <span>I build</span><span className="italic text-accent">resilient architectures.</span>
            </div>
            <div className="rule-b flex flex-wrap items-baseline justify-between gap-4 py-6 font-display text-3xl leading-tight md:text-6xl">
              <span>Scalable systems,</span><span className="italic text-accent">secure by default.</span>
            </div>
            <div className="rule-b flex flex-wrap items-baseline justify-between gap-4 py-6 font-display text-3xl leading-tight md:text-6xl">
              <span>Code built with</span><span className="italic text-accent">strict precision.</span>
            </div>
            <div className="rule-b flex flex-wrap items-baseline justify-between gap-4 py-6 font-display text-3xl leading-tight md:text-6xl">
              <span>Driven by endless</span><span className="italic text-accent">technical curiosity.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="rule-t rule-b bg-surface/60">
        <div className="mx-auto max-w-[1400px] px-5 py-8 md:px-10">
          <div className="grid grid-cols-12 items-center gap-6">
            <div className="col-span-12 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground md:col-span-2">
              Contents
            </div>
            <ul className="col-span-12 grid grid-cols-2 gap-x-6 gap-y-3 md:col-span-10 md:grid-cols-4">
              <li>
                <a href="#work" className="group flex items-baseline justify-between gap-3 border-b border-dashed border-ink/30 pb-2">
                  <span className="font-mono text-[11px] text-muted-foreground">I.</span>
                  <span className="flex-1 font-display text-xl group-hover:italic group-hover:text-accent">Selected Work</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100"><path d="M7 17L17 7M9 7h8v8" strokeLinecap="square"></path></svg>
                </a>
              </li>
              <li>
                <a href="#stack" className="group flex items-baseline justify-between gap-3 border-b border-dashed border-ink/30 pb-2">
                  <span className="font-mono text-[11px] text-muted-foreground">II.</span>
                  <span className="flex-1 font-display text-xl group-hover:italic group-hover:text-accent">Tools &amp; Stack</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100"><path d="M7 17L17 7M9 7h8v8" strokeLinecap="square"></path></svg>
                </a>
              </li>
              <li>
                <a href="#dossier" className="group flex items-baseline justify-between gap-3 border-b border-dashed border-ink/30 pb-2">
                  <span className="font-mono text-[11px] text-muted-foreground">III.</span>
                  <span className="flex-1 font-display text-xl group-hover:italic group-hover:text-accent">Dossier</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100"><path d="M7 17L17 7M9 7h8v8" strokeLinecap="square"></path></svg>
                </a>
              </li>
              <li>
                <a href="#contact" className="group flex items-baseline justify-between gap-3 border-b border-dashed border-ink/30 pb-2">
                  <span className="font-mono text-[11px] text-muted-foreground">IV.</span>
                  <span className="flex-1 font-display text-xl group-hover:italic group-hover:text-accent">Contact</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100"><path d="M7 17L17 7M9 7h8v8" strokeLinecap="square"></path></svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
