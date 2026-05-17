import { useScrollAnimation } from '../hooks/useScrollAnimation'
import profile from '../data/profile.json'

export default function About() {
  const ref1 = useScrollAnimation<HTMLDivElement>()
  const ref2 = useScrollAnimation<HTMLDivElement>()

  return (
    <section id="about" className="relative py-24 md:py-32 px-6 md:px-10 bg-secondary/30 border-y border-border">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-[1fr_1.5fr] items-start">
          
          {/* Left Column - Image & Abstract Info */}
          <div ref={ref1} className="reveal relative">
            <div className="aspect-[3/4] w-full max-w-md mx-auto md:mx-0 overflow-hidden relative group">
              <div className="absolute inset-0 bg-accent/20 mix-blend-overlay z-10 transition-opacity duration-500 group-hover:opacity-0" />
              <img 
                src="/profile-photo.jpg" 
                alt={profile.name}
                className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                  (e.target as HTMLImageElement).parentElement!.classList.add('bg-muted');
                }}
              />
              {/* Fallback abstract pattern if no image */}
              <div className="absolute inset-0 -z-10 flex items-center justify-center font-display text-[10rem] text-muted-foreground/10 select-none">
                M
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-6">
              <div>
                <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-1">Based in</span>
                <span className="font-serif italic text-lg text-foreground">{profile.location}</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-widest text-muted-foreground mb-1">Focus</span>
                <span className="font-serif italic text-lg text-foreground">Engineering</span>
              </div>
            </div>
          </div>

          {/* Right Column - Typography Content */}
          <div ref={ref2} className="reveal flex flex-col justify-center">
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none mb-10">
              Behind the <span className="text-accent italic">Code</span>
            </h2>
            
            <div className="space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
              <p className="first-letter:font-display first-letter:text-6xl first-letter:float-left first-letter:mr-3 first-letter:leading-[0.8] first-letter:text-foreground">
                {profile.bio}
              </p>
              <p>
                My approach to software engineering bridges the gap between deep technical implementation and refined user experiences. I believe that performance and aesthetics are not mutually exclusive.
              </p>
            </div>

            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-10">
              <div className="flex flex-col gap-2">
                <span className="font-display text-5xl">2+</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Years Dev</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-display text-5xl">15+</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Projects</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-display text-5xl">1</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Degree</span>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-display text-5xl">∞</span>
                <span className="text-xs uppercase tracking-widest text-muted-foreground">Passion</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
