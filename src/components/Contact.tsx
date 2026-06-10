import { profile, socialLinks } from '../data/portfolio'
import { useReveal } from '../hooks/useReveal'
import './Contact.css'

export function Contact() {
  const { ref, visible } = useReveal()

  return (
    <section id="contact" className="section contact" ref={ref}>
      <div className={`container section-centered reveal ${visible ? 'visible' : ''}`}>
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">
          Feel free to reach out — I'd love to connect!
        </p>

        <a href={`mailto:${profile.email}`} className="btn btn-primary contact__email">
          {profile.email}
        </a>

        <div className="contact__links">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="contact__link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
