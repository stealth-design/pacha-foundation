import { useState } from 'react'
import './Navbar.css'

const engLogo = '/eng-logo.png'

export default function Navbar() {
  const [lang, setLang] = useState('ENG')
  const [langOpen, setLangOpen] = useState(false)

  const languages = ['ENG', 'ESP']

  return (
    <nav className={`navbar${langOpen ? ' navbar--lang-open' : ''}`}>

      {/* Left — Menu */}
      <button className="navbar__menu" aria-label="Open menu">
        <span className="navbar__menu-label">MENU</span>
        <span className="navbar__icon-circle">
          <svg className="navbar__hamburger" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <line x1="3" y1="9"  x2="21" y2="9"  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            <line x1="3" y1="15" x2="21" y2="15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </span>
      </button>

      {/* Center — Logo */}
      <a href="/" className="navbar__logo-link">
        <img src={engLogo} alt="Pacha Foundation" className="navbar__logo" />
      </a>

      {/* Right — Language switcher */}
      <div className={`navbar__lang${langOpen ? ' navbar__lang--open' : ''}`}>
        <button
          className={`navbar__lang-btn${langOpen ? ' navbar__lang-btn--open' : ''}`}
          onClick={() => setLangOpen(o => !o)}
          aria-expanded={langOpen}
          aria-haspopup="listbox"
        >
          <span className="navbar__lang-label">{lang}</span>
          <span className="navbar__icon-circle">
            <svg className="navbar__chevron" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <polyline points="6 9 12 15 18 9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>

        <ul className={`navbar__lang-dropdown${langOpen ? ' navbar__lang-dropdown--open' : ''}`} role="listbox">
          {languages.filter(l => l !== lang).map(l => (
            <li key={l} role="option">
              <button
                className="navbar__lang-option"
                onClick={() => { setLang(l); setLangOpen(false) }}
              >
                {l}
              </button>
            </li>
          ))}
        </ul>
      </div>

    </nav>
  )
}
