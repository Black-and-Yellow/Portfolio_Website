import { ArrowUpRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export interface Project {
  name: string
  description: string
  github: string
  live: string
  techStack: string[]
  images: string[]
  category: string
  status: string
  date: string
  featured: boolean
  thumbnail?: string
}

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useScrollAnimation<HTMLDivElement>()
  const href = project.live || project.github || '#'
  
  // Asymmetrical layout: even items translate down slightly on desktop
  const isEven = index % 2 === 0
  
  return (
    <div 
      ref={ref} 
      className={`reveal flex flex-col gap-6 ${isEven ? 'md:mt-24' : ''}`}
    >
      <a 
        href={href}
        target="_blank"
        rel="noreferrer"
        className="group relative block aspect-[4/5] w-full overflow-hidden bg-muted"
      >
        {project.thumbnail ? (
          <img 
            src={project.thumbnail} 
            alt={project.name}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
            loading="lazy"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center font-display text-4xl text-muted-foreground opacity-20">
            {project.name}
          </div>
        )}
        
        {/* Overlay Hover Effect */}
        <div className="absolute inset-0 bg-background/20 opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100 flex items-center justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-accent-foreground scale-50 opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
            <ArrowUpRight className="h-6 w-6" />
          </div>
        </div>
      </a>

      {/* Meta */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between text-xs font-mono text-muted-foreground uppercase tracking-widest border-b border-border pb-3">
          <span>{project.category}</span>
          <span>{project.date}</span>
        </div>
        
        <a href={href} target="_blank" rel="noreferrer" className="group/title inline-block">
          <h3 className="font-display text-4xl md:text-5xl transition-colors group-hover/title:text-accent">
            {project.name}
          </h3>
        </a>
        
        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
          {project.description}
        </p>

        <div className="mt-2 flex flex-wrap gap-2">
          {project.techStack.map(tech => (
            <span key={tech} className="text-xs text-muted-foreground bg-secondary px-2.5 py-1 rounded-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
