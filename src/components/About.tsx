import { aboutText } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import './About.css'

export function About() {
  const { ref, visible } = useReveal()

  return (
    <section id="about" className="section about" ref={ref}>
      <div className={`container section-centered reveal ${visible ? 'visible' : ''}`}>
        <h2 className="section-title">About Me</h2>
        <p className="about__text">{aboutText}</p>
      </div>
    </section>
  )
}
