import React from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Shield,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import logoWhiteImg from '../assets/fececam_white.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111827] text-gray-200 pt-12 pb-8 border-t-4 border-[#006838]" aria-label="Pied de page">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          {/* Brand & Overview Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logoWhiteImg}
                alt="FECECAM Bénin Logo Blanc"
                className="h-12 w-auto object-contain"
              />
              <span className="font-bold text-xl text-white tracking-tight">
                FECECAM <span className="text-amber-400">BÉNIN</span>
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              La Faitière des Caisses d’Épargne et de Crédit Agricole Mutuel du Bénin. Premier réseau de microfinance au service du développement socio-économique depuis 1978.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-amber-300 font-medium bg-gray-800/80 p-2.5 rounded border border-gray-700">
              <Shield size={16} className="text-amber-400 shrink-0" aria-hidden="true" />
              <span>SFD Agréé & Réglementé par la Banque Centrale (BCEAO)</span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-wider mb-4 pb-1 border-b-2 border-amber-500 inline-block">
              Navigation Rapide
            </h2>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Accueil', path: '/' },
                { label: 'À propos de nous', path: '/a-propos' },
                { label: 'Nos Crédits & Épargne', path: '/produits-et-prets' },
                { label: 'Simulateur de Prêt', path: '/produits-et-prets#simulateur' },
                { label: 'Réseau d\'Agences', path: '/agences' },
                { label: 'Actualités & Appels d\'Offres', path: '/actualites' },
                { label: 'Recrutement & Stages', path: '/recrutement' },
                { label: 'Contact', path: '/contact' },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    to={link.path}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-amber-400 rounded px-1"
                  >
                    <ChevronRight size={14} className="text-emerald-400" aria-hidden="true" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Column */}
          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-wider mb-4 pb-1 border-b-2 border-amber-500 inline-block">
              Nos Solutions
            </h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="p-2 bg-gray-800/50 rounded border border-gray-800">
                <span className="font-semibold text-white block">Microcrédit & Prêts</span>
                <span className="text-xs text-gray-400">Agricole, Commercial, PME, Consommation</span>
              </li>
              <li className="p-2 bg-gray-800/50 rounded border border-gray-800">
                <span className="font-semibold text-white block">Comptes d'Épargne</span>
                <span className="text-xs text-gray-400">Épargne simple, à terme et tontine</span>
              </li>
              <li className="p-2 bg-gray-800/50 rounded border border-gray-800">
                <span className="font-semibold text-white block">Micro-assurance & Transfert</span>
                <span className="text-xs text-gray-400">Protection familiale et envoi de fonds</span>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h2 className="text-white font-bold text-base uppercase tracking-wider mb-4 pb-1 border-b-2 border-amber-500 inline-block">
              Siège Social
            </h2>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2.5">
                <MapPin size={18} className="text-amber-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>Abomey-Calavi, Lot 77 biss Zoca, 08 BP 0843 Cotonou, Bénin</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={18} className="text-amber-400 shrink-0" aria-hidden="true" />
                <a href="tel:+22966361643" className="hover:text-white underline focus:ring-2 focus:ring-amber-400">
                  (+229) 66 36 16 43
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={18} className="text-amber-400 shrink-0" aria-hidden="true" />
                <a href="mailto:contact@fececam.org" className="hover:text-white underline focus:ring-2 focus:ring-amber-400">
                  contact@fececam.org
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://webmail.fececam.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-emerald-300 hover:text-white bg-emerald-950/80 px-3 py-1.5 rounded border border-emerald-800 transition-colors"
                >
                  <ExternalLink size={13} aria-hidden="true" />
                  Accès Webmail Personnel
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-800 text-xs text-gray-400 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {currentYear} FECECAM BÉNIN - Tous Droits Réservés. Conforme aux normes d'accessibilité WCAG 2.1 AA.</p>
          <div className="flex flex-wrap gap-4 text-gray-300">
            <Link to="/contact" className="hover:underline focus:ring-1 focus:ring-amber-400">Politique de confidentialité</Link>
            <span>•</span>
            <Link to="/contact" className="hover:underline focus:ring-1 focus:ring-amber-400">Mentions Légales</Link>
            <span>•</span>
            <Link to="/agences" className="hover:underline focus:ring-1 focus:ring-amber-400">Nos Agences</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
