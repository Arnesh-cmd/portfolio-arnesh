import { skills } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import './Skills.css'

export function Skills() {
  const { ref, visible } = useReveal()

  return (
    <section id="skills" className="section skills" ref={ref}>
      <div className={`container section-centered reveal ${visible ? 'visible' : ''}`}>
        <h2 className="section-title">Skills</h2>
        <p className="section-subtitle">
          Technologies and tools I'm currently working with.
        </p>

        <ul className="skills__list">
          {skills.map((skill) => (
            <li key={skill} className="skills__item">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
