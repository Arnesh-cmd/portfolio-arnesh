import { profile } from '../data/portfolio'
import './Hero.css'

export function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__content">
        <p className="hero__greeting">Hi, I'm</p>
        <h1 className="hero__name">Arnesh</h1>
        <p className="hero__title">{profile.title}</p>
        <p className="hero__intro">{profile.intro}</p>

        <div className="hero__actions">
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <a href="#contact" className="btn btn-outline">
            Contact Me
          </a>
        </div>
      </div>
    </section>
  )
}
