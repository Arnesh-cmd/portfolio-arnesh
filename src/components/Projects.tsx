import { projects } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import './Projects.css'

export function Projects() {
  const { ref, visible } = useReveal()

  return (
    <section id="projects" className="section projects" ref={ref}>
      <div className={`container section-centered reveal ${visible ? 'visible' : ''}`}>
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          A few things I've built while learning and practicing.
        </p>

        <div className="projects__grid">
          {projects.map((project) => (
            <article key={project.title} className="project-card">
              <h3 className="project-card__title">{project.title}</h3>
              <p className="project-card__desc">{project.description}</p>
              <div className="project-card__tech">
                {project.tech.map((item) => (
                  <span key={item} className="project-card__tag">
                    {item}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
