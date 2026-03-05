import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../media/MLogo.png';
import './Navbar.css';

const navItems = [
  { label: 'Home', labelAr: 'الرئيسية', to: '/' },
  { label: 'Email', labelAr: 'البريد', to: '#' },
  { label: 'About', labelAr: 'عن الشركة', to: '/about' },
  {
    label: 'Services', labelAr: 'الخدمات', to: '#',
    children: [
      { label: 'pre-construction', labelAr: 'ما قبل الانشاء', to: '/services/pre-construction' },
      { label: 'painting', labelAr: 'دهان', to: '/services/painting' },
      { label: 'plumbing', labelAr: 'اعمال السباكه', to: '/services/plumbing' },
      { label: 'general construction', labelAr: 'اعمال البناء العامه', to: '/services/general-construction' },
    ]
  },
  { label: 'Projects', labelAr: 'المشاريع', to: '/projects' },
  { label: 'Clients', labelAr: 'العملاء', to: '/clients' },
  { label: 'Contact', labelAr: 'اتصل بنا', to: '/contact' },
];

function Navbar({ lang, toggleLang }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const ar = lang === 'ar';

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        {/* Logo */}
        <Link to="/" className="navbar__logo" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Capital Lights Logo" />
        </Link>

        {/* Desktop Nav */}
        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {navItems.map((item) => (
            <li
              key={item.to}
              className={`navbar__item ${item.children ? 'navbar__item--dropdown' : ''}`}
              onMouseEnter={() => item.children && setActiveDropdown(item.to)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  'navbar__link' + (isActive ? ' navbar__link--active' : '')
                }
                onClick={() => setMenuOpen(false)}
              >
                {ar ? item.labelAr : item.label}
                {item.children && <span className="navbar__arrow">▾</span>}
              </NavLink>
              {item.children && (
                <ul className={`navbar__dropdown ${activeDropdown === item.to ? 'navbar__dropdown--open' : ''}`}>
                  {item.children.map((child) => (
                    <li key={child.to}>
                      <NavLink
                        to={child.to}
                        className="navbar__dropdown-link"
                        onClick={() => { setMenuOpen(false); setActiveDropdown(null); }}
                      >
                        {ar ? child.labelAr : child.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

          {/* Language Toggle */}
          <li className="navbar__item">
            <button className="navbar__lang-btn" onClick={toggleLang}>
              {ar ? 'EN' : 'عر'}
            </button>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
