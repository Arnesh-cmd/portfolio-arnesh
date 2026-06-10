import { profile } from '../data/portfolio'
import './Footer.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          &copy; {year} {profile.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
