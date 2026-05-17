export default function Footer() {
  return (
    <footer className="bg-ink text-background">
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-4 px-5 py-8 font-mono text-[10px] uppercase tracking-[0.22em] md:px-10">
        <div className="col-span-6 md:col-span-3 opacity-70">
          © {new Date().getFullYear()} Muthuraja S
        </div>
        <div className="col-span-6 md:col-span-3 opacity-70">
          Set in Fraunces &amp; JetBrains Mono
        </div>
        <div className="hidden md:col-span-3 md:block opacity-70">
          Built with React &amp; Tailwind
        </div>
        <div className="col-span-12 md:col-span-3 md:text-right w-fit md:w-auto mt-4 md:mt-0">
          <a href="#top" className="link-reveal">
            &uarr; Back to top
          </a>
        </div>
      </div>
    </footer>
  )
}
