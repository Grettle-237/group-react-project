import { useState } from 'react';
import './Header.css';
import Logo from '../Logo/Logo.jsx';
import { navLinks } from '../../data/siteData.js';

export default function Header() {
  const [active, setActive] = useState('Home');
  const [open, setOpen] = useState(false);

  const handleClick = (label) => {
    setActive(label);
    setOpen(false);
  };

  return (
    <header className="header">
      <div className="header__inner">
        <a className="header__brand" href="#home" onClick={() => handleClick('Home')}>
          <Logo size={44} />
          <span className="header__name">
            MamaNutri
            <br />
            Guide
          </span>
        </a>

        <button
          className="header__toggle"
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`header__nav ${open ? 'header__nav--open' : ''}`} aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={active === link.label ? 'header__link header__link--active' : 'header__link'}
              aria-current={active === link.label ? 'page' : undefined}
              onClick={() => handleClick(link.label)}
            >
              {link.label}
            </a>
          ))}
          <a className="header__cta" href="#get-started" onClick={() => setOpen(false)}>
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}
