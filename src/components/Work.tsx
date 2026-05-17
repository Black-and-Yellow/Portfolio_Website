import manualProjects from '../data/projects.json'
import generatedProjects from '../data/generated_projects.json'

export type Project = {
  name: string
  description: string
  github?: string
  live?: string
  techStack?: string[]
  category?: string
  date?: string
  featured?: boolean
}

function mergeProjects(manual: Project[], generated: Project[]): Project[] {
  const map = new Map<string, Project>()
  
  const validManual = Array.isArray(manual) ? manual : []
  const validGenerated = Array.isArray(generated) ? generated : []
  
  validManual.forEach((p) => map.set(p.name, p))
  validGenerated.forEach((p) => map.set(p.name, p))
  
  return Array.from(map.values()).filter((p) => p.featured)
}

export default function Work() {
  const projects = mergeProjects(
    manualProjects as Project[],
    generatedProjects as Project[]
  )

  return (
    <section id="work" className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
      <div className="flex items-baseline justify-between border-b border-ink pb-4 font-mono text-[10px] uppercase tracking-[0.22em]">
        <span>§ I</span>
        <span>Selected Work</span>
        <span className="text-muted-foreground">— ✦ —</span>
      </div>
      <h2 className="mt-6 font-display text-5xl leading-[0.95] md:text-8xl">
        Things I've <span className="italic text-accent">built.</span>
      </h2>
      
      <div className="mt-16 grid grid-cols-12 gap-6">
        {projects.length > 0 ? (
          projects.map((project, index) => {
            const projectUrl = project.live || project.github || '#'
            // Pad index to 2 digits
            const formattedNum = String(index + 1).padStart(2, '0')
            const totalNum = String(projects.length).padStart(2, '0')

            return (
              <a 
                key={project.name} 
                href={projectUrl} 
                target={projectUrl !== '#' ? "_blank" : "_self"} 
                rel="noreferrer" 
                className={`group relative col-span-12 md:col-span-6 ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden border border-ink bg-surface">
                  <div className="halftone absolute inset-0 opacity-[0.18] transition-opacity duration-700 group-hover:opacity-0"></div>
                  <div className="absolute inset-0 flex items-center justify-center bg-accent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="font-display text-7xl italic text-background md:text-9xl text-center px-4">
                      {project.name}
                    </span>
                  </div>
                  <div className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.22em] text-ink group-hover:text-background z-10 transition-colors duration-500">
                    Nº {formattedNum} / {totalNum}
                  </div>
                  <div className="absolute bottom-4 right-4 font-display text-6xl leading-none md:text-7xl group-hover:opacity-0 z-10 transition-opacity duration-500">
                    {project.name}
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-12 gap-3 border-t border-ink pt-3">
                  <div className="col-span-6 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    {project.category || 'Project'}
                  </div>
                  <div className="col-span-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    {project.date || '2024'}
                  </div>
                  <div className="col-span-3 flex items-center justify-end gap-2 font-mono text-[10px] uppercase tracking-[0.22em]">
                    View 
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      <path d="M7 17L17 7M9 7h8v8" strokeLinecap="square"></path>
                    </svg>
                  </div>
                  <p className="col-span-12 mt-3 font-serif text-lg leading-snug md:text-xl">
                    {project.description}
                  </p>
                  {project.techStack && project.techStack.length > 0 && (
                    <div className="col-span-12 mt-2 flex flex-wrap gap-x-3 gap-y-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {project.techStack.map((tech, i) => (
                        <span key={tech}>{tech}{i !== project.techStack!.length - 1 ? ' ·' : ''}</span>
                      ))}
                    </div>
                  )}
                </div>
              </a>
            )
          })
        ) : (
          <div className="col-span-12 py-32 text-center border border-dashed border-ink bg-surface/30">
            <h3 className="font-display text-4xl mb-4 text-muted-foreground">No projects found</h3>
            <p className="text-muted-foreground font-mono text-xs uppercase tracking-widest">
              Awaiting data from projects.json
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
