export default function Contact() {
  return (
    <section id="contact" className="rule-t relative overflow-hidden bg-accent text-accent-foreground">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <div className="flex items-baseline justify-between border-b border-accent-foreground/40 pb-4 font-mono text-[10px] uppercase tracking-[0.22em]">
          <span>§ IV</span>
          <span>Make contact</span>
          <span>Reply within 24h</span>
        </div>
        <h2 className="mt-10 font-display text-[16vw] leading-[0.85] tracking-[-0.04em] md:text-[12rem]">
          Let's <span className="italic">make</span><br/>something<span className="blink">.</span>
        </h2>
        <div className="mt-16 grid grid-cols-12 gap-6 border-t border-accent-foreground/40 pt-8">
          <div className="col-span-12 md:col-span-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-70">Email & Phone</div>
            <a href="mailto:muthuoffl6@gmail.com" className="link-reveal mt-2 block font-display text-2xl md:text-3xl w-fit">
              muthuoffl6@gmail.com
            </a>
            <a href="tel:+919360944839" className="link-reveal mt-2 block font-display text-2xl md:text-3xl w-fit">
              +91 93609 44839
            </a>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-70">Elsewhere</div>
            <div className="mt-2 flex flex-col gap-1 font-display text-2xl md:text-3xl items-start">
              <a href="https://github.com/Black-and-Yellow" target="_blank" rel="noreferrer" className="link-reveal italic">
                GitHub &rarr;
              </a>
              <a href="https://www.linkedin.com/in/muthuraja-s-6798b0314" target="_blank" rel="noreferrer" className="link-reveal italic">
                LinkedIn &rarr;
              </a>
            </div>
          </div>
          <div className="col-span-12 md:col-span-4">
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-70">Located</div>
            <div className="mt-2 font-display text-2xl md:text-3xl">
              Salem, TN<br/>India · GMT+5:30
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
