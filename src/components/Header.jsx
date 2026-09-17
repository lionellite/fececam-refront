import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import {
  Phone,
  Mail,
  Menu,
  X,
  Calculator,
  Clock
} from 'lucide-react';
import logoImg from '../assets/fececam_logo.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'À propos', path: '/a-propos' },
    { name: 'Produits & Prêts', path: '/produits-et-prets' },
    { name: 'Nos Agences', path: '/agences' },
    { name: 'Actualités & Offres', path: '/actualites' },
    { name: 'Recrutement', path: '/recrutement' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>

      {/* Top Bar */}
      <div className="bg-[#004d2a] text-white text-sm py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm">
            <a
              href="tel:+22966361643"
              className="flex items-center gap-1.5 hover:underline focus:outline-none focus:ring-2 focus:ring-amber-400 rounded px-1 py-0.5"
              aria-label="Appelez-nous au +229 66 36 16 43"
            >
              <Phone size={14} className="text-amber-400" aria-hidden="true" />
              <span>(+229) 66 36 16 43</span>
            </a>
            <a
              href="mailto:contact@fececam.org"
              className="flex items-center gap-1.5 hover:underline focus:outline-none focus:ring-2 focus:ring-amber-400 rounded px-1 py-0.5"
              aria-label="Envoyez-nous un email à contact@fececam.org"
            >
              <Mail size={14} className="text-amber-400" aria-hidden="true" />
              <span>contact@fececam.org</span>
            </a>
            <span className="hidden md:flex items-center gap-1.5 text-emerald-100">
              <Clock size={14} className="text-amber-400" aria-hidden="true" />
              <span>Lun - Ven: 08h00 - 17h00</span>
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs sm:text-sm">
            <Link
              to="/produits-et-prets#simulateur"
              className="inline-flex items-center gap-1 bg-amber-500 hover:bg-amber-600 text-gray-950 font-semibold px-2.5 py-1 rounded text-xs transition-colors focus:ring-2 focus:ring-white"
            >
              <Calculator size={13} aria-hidden="true" />
              <span>Simulateur de prêt</span>
            </Link>
            <a
              href="https://webmail.fececam.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-100 hover:text-white hover:underline hidden sm:inline-block focus:outline-none focus:ring-2 focus:ring-amber-400 rounded px-1"
            >
              Webmail
            </a>
          </div>
        </div>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-[#006838] rounded p-1"
          aria-label="FECECAM Bénin - Page d'accueil"
        >
          <img
            src={logoImg}
            alt="Logo officiel FECECAM Bénin"
            className="w-12 h-auto object-contain"
          />
          <div>
            <span className="block font-bold text-xl sm:text-2xl text-[#006838] leading-none tracking-tight">
              FECECAM <span className="text-amber-600">BÉNIN</span>
            </span>
            <span className="block text-[10px] sm:text-xs font-medium text-gray-700 tracking-normal mt-0.5">
              Microfinance & Développement Socio-Économique
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center space-x-1" aria-label="Navigation principale">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-md font-semibold text-sm transition-colors relative ${
                  isActive
                    ? 'text-[#006838] bg-emerald-50 border-b-2 border-[#006838]'
                    : 'text-gray-800 hover:text-[#006838] hover:bg-gray-100'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-transparent font-semibold rounded-md shadow-sm text-sm text-white bg-[#006838] hover:bg-[#004d2a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#006838] transition-colors"
          >
            Nous contacter
          </Link>

          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-[#006838] hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-[#006838]"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {isMenuOpen ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div id="mobile-menu" className="lg:hidden bg-white border-b border-gray-200 px-4 pt-2 pb-6 space-y-1">
          <nav aria-label="Navigation mobile">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block px-3 py-2.5 rounded-md font-medium text-base ${
                    isActive
                      ? 'text-[#006838] bg-emerald-50 font-bold border-l-4 border-[#006838]'
                      : 'text-gray-800 hover:text-[#006838] hover:bg-gray-50'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
