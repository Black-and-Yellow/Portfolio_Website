export default function Hero() {
  return (
    <>
      <section id="top" className="relative isolate">
        <div className="mx-auto max-w-[1400px] px-5 pt-10 pb-16 md:px-10 md:pt-16 md:pb-28">
          <div className="rule-b grid grid-cols-12 gap-4 pb-4 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
            <div className="col-span-6 md:col-span-3">№ 01 — Folio</div>
            <div className="col-span-6 md:col-span-3">Sricity · 13.5552°N</div>
            <div className="hidden md:col-span-3 md:block">Edition · Spring 2025</div>
            <div className="hidden md:col-span-3 md:block text-right">A portfolio in print</div>
          </div>
          <div className="mt-6 grid grid-cols-12 gap-6 md:mt-10">
            <div className="col-span-12 md:col-span-3">
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">Subject</div>
              <p className="mt-3 font-display text-2xl leading-[1.05] md:text-3xl">Computer Science student &amp; full-stack craftsman.</p>
              <div className="mt-8 rule-t pt-4 font-mono text-[10px] uppercase tracking-[0.22em]">
                <div className="text-muted-foreground">Established</div>
                <div>2023 · IIIT Sri City</div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h1 className="font-display font-light text-balance">
                <span className="block text-[18vw] leading-[0.82] tracking-[-0.04em] md:text-[13rem]">
                  <span className="inline-block">M</span>
                  <span className="inline-block">u</span>
                  <span className="inline-block">t</span>
                  <span className="inline-block">h</span>
                  <span className="inline-block italic text-accent">u</span>
                  <span className="inline-block">r</span>
                  <span className="inline-block">a</span>
                  <span className="inline-block">j</span>
                  <span className="inline-block">a</span>
                </span>
                <span className="mt-2 flex items-end justify-between gap-4 text-[18vw] leading-[0.82] tracking-[-0.04em] md:text-[13rem]">
                  <span className="stencil-outline">S.</span>
                  <span className="hidden font-sans text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground md:block md:pb-10">&rarr; Scroll</span>
                </span>
              </h1>
              <div className="mt-8 grid grid-cols-12 gap-6 rule-t pt-6">
                <p className="col-span-12 font-serif text-2xl leading-[1.25] text-balance md:col-span-7 md:text-3xl">
                  <span className="italic">A portfolio</span> of web applications, design systems, and small experiments — built with care, shipped with intent.
                </p>
                <div className="col-span-12 flex flex-col gap-4 md:col-span-5 md:items-end">
                  <div className="flex flex-wrap gap-3">
                    <a href="#work" className="group inline-flex items-center gap-2 bg-ink px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] text-background">
                      Selected work 
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        <path d="M7 17L17 7M9 7h8v8" strokeLinecap="square"></path>
                      </svg>
                    </a>
                    <a href="#contact" className="inline-flex items-center gap-2 border border-ink px-5 py-3 font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-ink hover:text-background">
                      Make contact
                    </a>
                  </div>
                  <div className="flex items-center gap-5">
                    <a href="https://github.com/Black-and-Yellow" target="_blank" rel="noreferrer" className="link-reveal">
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                        <path d="M12 .5a11.5 11.5 0 0 0-3.63 22.41c.57.1.78-.25.78-.55v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.3-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.6.23 2.77.11 3.07.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.26 5.69.41.36.78 1.07.78 2.16v3.2c0 .31.21.66.79.55A11.5 11.5 0 0 0 12 .5Z"></path>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/in/muthuraja-s-6798b0314" target="_blank" rel="noreferrer" className="link-reveal">
                      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
                        <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9.5h4V21H3V9.5Zm7 0h3.8v1.57h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.07c0-1.21-.02-2.78-1.7-2.78-1.7 0-1.96 1.32-1.96 2.69V21h-4V9.5Z"></path>
                      </svg>
                    </a>
                    <a href="mailto:muthuoffl6@gmail.com" className="link-reveal font-mono text-[11px]">muthuoffl6@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute right-6 top-32 hidden md:block md:right-12 md:top-40">
            <div className="relative h-28 w-28">
              <svg viewBox="0 0 100 100" className="animate-spin-slow absolute inset-0 h-full w-full">
                <defs>
                  <path id="circ" d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"></path>
                </defs>
                <text className="fill-current font-mono text-[9px] tracking-[4px]">
                  <textPath href="#circ">• PORTFOLIO • 2025 • MUTHURAJA S • IIIT SRI CITY </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-12 w-12 rounded-full bg-accent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-hidden="true" className="rule-t rule-b overflow-hidden bg-ink py-4 text-background">
        <div className="marquee flex whitespace-nowrap">
          <div className="flex shrink-0 items-center gap-10 pr-10 font-display text-4xl md:text-6xl">
            <span className="flex items-center gap-10"><span>FULL-STACK</span><span className="text-2xl">✦</span></span>
            <span className="flex items-center gap-10"><span className="italic text-accent">DEVELOPER</span><span className="text-2xl">✦</span></span>
            <span className="flex items-center gap-10"><span>DESIGNER</span><span className="text-2xl">✦</span></span>
            <span className="flex items-center gap-10"><span className="italic text-accent">BUILDER</span><span className="text-2xl">✦</span></span>
            <span className="flex items-center gap-10"><span>STUDENT</span><span className="text-2xl">✦</span></span>
            <span className="flex items-center gap-10"><span className="italic text-accent">TINKERER</span><span className="text-2xl">✦</span></span>
          </div>
          <div className="flex shrink-0 items-center gap-10 pr-10 font-display text-4xl md:text-6xl">
            <span className="flex items-center gap-10"><span>FULL-STACK</span><span className="text-2xl">✦</span></span>
            <span className="flex items-center gap-10"><span className="italic text-accent">DEVELOPER</span><span className="text-2xl">✦</span></span>
            <span className="flex items-center gap-10"><span>DESIGNER</span><span className="text-2xl">✦</span></span>
            <span className="flex items-center gap-10"><span className="italic text-accent">BUILDER</span><span className="text-2xl">✦</span></span>
            <span className="flex items-center gap-10"><span>STUDENT</span><span className="text-2xl">✦</span></span>
            <span className="flex items-center gap-10"><span className="italic text-accent">TINKERER</span><span className="text-2xl">✦</span></span>
          </div>
        </div>
      </section>
    </>
  )
}
