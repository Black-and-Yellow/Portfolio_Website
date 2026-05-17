import { useScrollAnimation } from '../hooks/useScrollAnimation'
import ProjectCard, { type Project } from './ProjectCard'
import manualProjects from '../data/projects.json'
import generatedProjects from '../data/generated_projects.json'

// Merge: generated projects take priority if same name exists; deduplicate by name
function mergeProjects(manual: Project[], generated: Project[]): Project[] {
  const map = new Map<string, Project>()
  manual.forEach((p) => map.set(p.name, p))
  generated.forEach((p) => map.set(p.name, p)) // generated overrides
  return Array.from(map.values()).filter((p) => p.featured)
}

const projects = mergeProjects(
  manualProjects as Project[],
  generatedProjects as Project[]
)

export default function Work() {
  const headerRef = useScrollAnimation()

  return (
    <section id="work" className="relative py-32 md:py-44">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="flex items-end justify-between gap-6 border-b pb-6"
          style={{ borderColor: 'var(--border)' }}
        >
          <div className="flex items-baseline gap-6">
            <span
              className="font-mono text-xs uppercase tracking-wider"
              style={{ color: 'var(--accent)' }}
            >
              01
            </span>
            <h2 className="font-display text-4xl md:text-6xl">Selected Work</h2>
          </div>
          <span
            className="hidden text-sm md:block"
            style={{ color: 'var(--muted-foreground)' }}
          >
            A handful of projects that taught me the most.
          </span>
        </div>

        {/* Project Grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.name} project={project} delay={i * 100} />
          ))}
        </div>
      </div>
    </section>
  )
}
