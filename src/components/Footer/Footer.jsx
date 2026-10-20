import './Footer.css';
import Logo from '../Logo/Logo.jsx';
import { FacebookIcon, InstagramIcon, YouTubeIcon, MotherIcon } from '../Icons/Icons.jsx';
import { brand, navLinks, socialLinks, message, copyright } from '../../data/footerData.js';

const socialIcons = {
  facebook: <FacebookIcon />,
  instagram: <InstagramIcon />,
  youtube: <YouTubeIcon />,
};

export default function Footer() {
  return (
    <footer className="footer">
      <svg
        className="footer__wave"
        viewBox="0 0 1440 70"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path d="M0 70V34C220-6 470-8 720 28s520 38 720-14v56z" fill="currentColor" />
      </svg>

      <div className="footer__body">
        <div className="footer__content">
          <div className="footer__left">
            <div className="footer__brand">
              <Logo />
              <div>
                <p className="footer__name">{brand.name}</p>
                <p className="footer__tagline">{brand.tagline}</p>
              </div>
            </div>

            <nav className="footer__nav" aria-label="Footer">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  {link.label}
                </a>
              ))}
            </nav>

            <ul className="footer__social">
              {socialLinks.map((s) => (
                <li key={s.id}>
                  <a href={s.href} aria-label={s.label} target="_blank" rel="noreferrer">
                    {socialIcons[s.id]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__right">
            <span className="footer__icon">
              <MotherIcon />
            </span>
            <p className="footer__message">{message}</p>
          </div>
        </div>

        <p className="footer__copy">{copyright}</p>
      </div>
    </footer>
  );
}
