import { useEffect, useState } from 'react'

export default function Navbar() {
  const [time, setTime] = useState<string>('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        timeZone: 'Asia/Kolkata'
      }) + ' IST')
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-ink/80 bg-background/85 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-3 md:px-10">
        <a href="#top" className="flex items-baseline font-display text-xl leading-none tracking-tight">
          <span className="italic">M</span>uthuraja<span className="text-accent">.</span>
        </a>
        <div className="hidden font-mono text-[10px] uppercase tracking-[0.18em] md:flex md:gap-6">
          <span className="text-muted-foreground">Vol. 01</span>
          <span className="text-muted-foreground">Iss. MMXXV</span>
          <span>{time}</span>
        </div>
        <a href="#contact" className="group flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em]">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-75"></span>
            <span className="relative h-1.5 w-1.5 rounded-full bg-accent"></span>
          </span>
          Open for work &rarr;
        </a>
      </div>
    </header>
  )
}
