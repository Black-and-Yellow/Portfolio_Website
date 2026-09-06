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
  
  const projects = Array.from(map.values()).filter((p) => p.featured)

  // Enforce specific order requested by user
  const order = [
    "CargoLink",
    "Meta-Agent Framework",
    "LS-FLSTSVM Imbalance Learning",
    "Tamil NLP Classification",
    "Parallel Vehicle & Traffic Analysis",
    "Kafka Chat Application",
    "SheetSnap"
  ]

  return projects.sort((a, b) => {
    const indexA = order.indexOf(a.name)
    const indexB = order.indexOf(b.name)
    
    // If both are in the order list, sort by their position
    if (indexA !== -1 && indexB !== -1) return indexA - indexB
    // If only one is in the list, put it first
    if (indexA !== -1) return -1
    if (indexB !== -1) return 1
    // Fallback to alphabetical for any others
    return a.name.localeCompare(b.name)
  })
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
              <div 
                key={project.name} 
                className={`group relative col-span-12 md:col-span-6 ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
              >
                <a href={projectUrl} target={projectUrl !== '#' ? "_blank" : "_self"} rel="noreferrer" className="block relative aspect-[4/3] overflow-hidden border border-ink bg-surface">
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
                </a>
                <div className="mt-4 grid grid-cols-12 gap-3 border-t border-ink pt-3">
                  <div className="col-span-6 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    {project.category || 'Project'} · {project.date || '2024'}
                  </div>
                  <div className="col-span-6 flex items-center justify-end gap-4 font-mono text-[10px] uppercase tracking-[0.22em]">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-accent transition-colors link-reveal">
                        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-3 w-3">
                          <path d="M12 .5a11.5 11.5 0 0 0-3.63 22.41c.57.1.78-.25.78-.55v-2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.3-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.6.23 2.77.11 3.07.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.26 5.69.41.36.78 1.07.78 2.16v3.2c0 .31.21.66.79.55A11.5 11.5 0 0 0 12 .5Z"></path>
                        </svg>
                        GitHub
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-accent transition-colors link-reveal">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-3 w-3">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="2" y1="12" x2="22" y2="12"></line>
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                        </svg>
                        Live
                      </a>
                    )}
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
              </div>
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
