import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck,
  Users,
  Building,
  MapPin,
  TrendingUp,
  Wallet,
  PiggyBank,
  ShieldAlert,
  ArrowRight,
  CheckCircle,
  HelpCircle,
  FileText,
  Award,
  PhoneCall
} from 'lucide-react';
import LoanSimulator from '../components/LoanSimulator';

export default function Home() {
  return (
    <div className="space-y-16 pb-12">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-[#004d2a] via-[#006838] to-[#01351d] text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Hero Text */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400 text-gray-950 font-bold text-xs uppercase tracking-wide shadow-sm">
                <Award size={16} className="text-gray-950" />
                1er Réseau de Microfinance au Bénin
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                Partenaire Financier de Premier Choix pour votre Développement
              </h1>

              <p className="text-lg sm:text-xl text-emerald-100 font-normal leading-relaxed max-w-2xl">
                Depuis plus de 45 ans, la FECECAM-BÉNIN soutient l'épargne, finance les projets agricoles, commerciaux et artisanaux, et transforme la vie de millions de citoyens.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  to="/produits-et-prets#simulateur"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-transparent text-base font-bold rounded-lg text-gray-950 bg-amber-400 hover:bg-amber-500 focus:outline-none focus:ring-4 focus:ring-amber-300 shadow-lg transition-all"
                >
                  Simuler mon Prêt
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/agences"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 border-2 border-white text-base font-bold rounded-lg text-white bg-transparent hover:bg-white/10 focus:outline-none focus:ring-4 focus:ring-emerald-300 transition-all"
                >
                  <MapPin size={20} />
                  Trouver une Agence CLCAM
                </Link>
              </div>

              {/* Key Trust Signals */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-emerald-700/80 text-emerald-100 text-xs sm:text-sm font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-amber-400 shrink-0" />
                  <span>Présence dans 77 communes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-amber-400 shrink-0" />
                  <span>Taux de satisfaction élevé</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-amber-400 shrink-0" />
                  <span>Épargne sécurisée (BCEAO)</span>
                </div>
              </div>

            </div>

            {/* Hero Director Message Card */}
            <div className="lg:col-span-5">
              <div className="bg-white text-gray-900 rounded-2xl shadow-2xl p-6 sm:p-8 border-4 border-amber-400 relative">
                <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200">
                  <div className="w-16 h-16 rounded-full bg-[#006838] text-amber-400 font-extrabold text-2xl flex items-center justify-center border-2 border-amber-400 shadow">
                    DG
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-[#006838]">Taïrou BASSABI AMADOU</h2>
                    <p className="text-sm text-gray-600 font-semibold">Directeur Général de la FECECAM-BÉNIN</p>
                  </div>
                </div>

                <blockquote className="text-gray-700 text-sm leading-relaxed italic mb-6">
                  « Notre mission est d’être toujours plus proche de vous pour mieux vous servir. Grâce à notre couverture nationale, nous accompagnons les populations à faible revenu, les femmes, les agriculteurs et les PME dans tous leurs défis financiers. »
                </blockquote>

                <div className="space-y-2 text-xs font-bold text-gray-800 bg-emerald-50 p-3.5 rounded-lg border border-emerald-200">
                  <div className="flex justify-between items-center">
                    <span>Délégations Régionales :</span>
                    <span className="text-[#006838]">8 Délégations</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Caisses Locales (CLCAM) :</span>
                    <span className="text-[#006838]">33 CLCAM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Guichets et Agences :</span>
                    <span className="text-[#006838]">Plus de 60 points de service</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* KEY METRICS STATS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-900 text-white rounded-2xl shadow-lg p-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-b-4 border-amber-400">
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-black text-amber-400">100%</div>
            <div className="text-lg font-bold text-white">Fiable & Sécurisé</div>
            <p className="text-xs text-emerald-200">Réglementé par les autorités monétaires régionales</p>
          </div>
          <div className="space-y-2 border-y md:border-y-0 md:border-x border-emerald-800 py-6 md:py-0">
            <div className="text-4xl md:text-5xl font-black text-amber-400">+90%</div>
            <div className="text-lg font-bold text-white">Membres Satisfaits</div>
            <p className="text-xs text-emerald-200">Des centaines de milliers de foyers et entreprises soutenus</p>
          </div>
          <div className="space-y-2">
            <div className="text-4xl md:text-5xl font-black text-amber-400">77 / 77</div>
            <div className="text-lg font-bold text-white">Communes Couvertes</div>
            <p className="text-xs text-emerald-200">Une présence réseau sur toute l'étendue du territoire national</p>
          </div>
        </div>
      </section>

      {/* MAIN SERVICES / PILLARS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#006838] bg-emerald-100 px-3 py-1 rounded-full">
            Nos Métiers & Offres
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Des Solutions Financières Adaptées à vos Besoins
          </h2>
          <p className="text-gray-600 text-base">
            Que vous soyez agriculteur, commerçant, artisan, salarié ou responsable d'entreprise, la FECECAM possède le produit financier qu'il vous faut.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Card 1: Microcrédit */}
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#006838] hover:shadow-xl transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 text-[#006838] flex items-center justify-center font-bold">
                <Wallet size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Microcrédit</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Prêts à taux adaptés pour financer vos fonds de roulement, équipements et investissements productifs.
              </p>
            </div>
            <Link to="/produits-et-prets" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#006838] hover:underline mt-6">
              Découvrir les crédits <ArrowRight size={16} />
            </Link>
          </div>

          {/* Card 2: Épargne */}
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-amber-500 hover:shadow-xl transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <PiggyBank size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Épargne & Dépôts</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Solutions d'épargne sûres, flexibles ou à terme pour constituer un capital et sécuriser votre avenir.
              </p>
            </div>
            <Link to="/produits-et-prets" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#006838] hover:underline mt-6">
              En savoir plus <ArrowRight size={16} />
            </Link>
          </div>

          {/* Card 3: Assurance */}
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-600 hover:shadow-xl transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                <ShieldAlert size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Micro-Assurance</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Protections accessibles contre les risques imprévus (santé, prévoyance, décès) pour préserver vos familles.
              </p>
            </div>
            <Link to="/produits-et-prets" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#006838] hover:underline mt-6">
              Voir nos garanties <ArrowRight size={16} />
            </Link>
          </div>

          {/* Card 4: Transfert */}
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[#006838] hover:shadow-xl transition-shadow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-emerald-100 text-[#006838] flex items-center justify-center font-bold">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Transfert d'Argent</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Services de transfert rapides et sécurisés pour expédier et recevoir des fonds partout sur le territoire.
              </p>
            </div>
            <Link to="/produits-et-prets" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#006838] hover:underline mt-6">
              Découvrir les canaux <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </section>

      {/* INTERACTIVE LOAN SIMULATOR SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LoanSimulator />
      </section>

      {/* WHY CHOOSE FECECAM & VALUES */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-extrabold text-gray-900">Pourquoi choisir la FECECAM ?</h2>
            <p className="text-gray-600">Trois valeurs fondamentales qui guident notre action quotidienne</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow border-l-4 border-[#006838] space-y-3">
              <div className="text-[#006838] font-bold text-xl flex items-center gap-2">
                <ShieldCheck size={24} />
                Solidarité
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Nous croyons en la force de l'entraide mutuelle et de la coopération pour favoriser le développement socio-économique durable des communautés.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow border-l-4 border-amber-500 space-y-3">
              <div className="text-amber-700 font-bold text-xl flex items-center gap-2">
                <MapPin size={24} />
                Proximité
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Implantée au cœur des zones rurales et urbaines, la FECECAM adapte ses services aux réalités locales de chaque commune du Bénin.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow border-l-4 border-blue-700 space-y-3">
              <div className="text-blue-800 font-bold text-xl flex items-center gap-2">
                <Award size={24} />
                Responsabilité
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                Nous agissons avec transparence et éthique dans toutes nos opérations pour garantir la sécurité absolue de vos économies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-gray-900">Foire Aux Questions (FAQ)</h2>
          <p className="text-gray-600">Réponses aux questions fréquemment posées par nos sociétaires</p>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "Qu'est-ce que la FECECAM BÉNIN ?",
              a: "La FECECAM (Faitière des Caisses d’Épargne et de Crédit Agricole Mutuel) est la plus grande institution de microfinance au Bénin. Elle regroupe un réseau de Caisses Locales (CLCAM) offrant des services d'épargne, de prêt, de transfert et de micro-assurance."
            },
            {
              q: "Comment ouvrir un compte à la FECECAM / CLCAM ?",
              a: "Pour ouvrir un compte, rendez-vous dans l'agence CLCAM la plus proche muni d'une pièce d'identité en cours de validité (Carte d'identité nationale, CIP ou Passeport), de deux photos d'identité et du montant du premier dépôt minimum."
            },
            {
              q: "Quels sont les avantages d'un prêt FECECAM par rapport à une banque classique ?",
              a: "La FECECAM offre des conditions plus souples, des taux d'intérêt compétitifs, une meilleure rapidité de traitement et un accompagnement personnalisé adapté aux agriculteurs, commerçants et PME."
            },
            {
              q: "Où puis-je trouver une agence CLCAM ?",
              a: "Nous disposons de plus de 60 points de service (CLCAM, agences et guichets) répartis dans les 77 communes du Bénin. Consultez notre page 'Nos Agences' pour trouver la plus proche."
            }
          ].map((item, index) => (
            <details key={index} className="group bg-white p-5 rounded-xl border border-gray-200 shadow-sm [&_summary::-webkit-details-marker]:none">
              <summary className="flex items-center justify-between font-bold text-gray-900 cursor-pointer text-lg group-open:text-[#006838]">
                <span className="flex items-center gap-3">
                  <HelpCircle size={20} className="text-amber-500 shrink-0" />
                  {item.q}
                </span>
                <span className="ml-2 font-black text-xl transition-transform group-open:rotate-180">+</span>
              </summary>
              <p className="mt-3 text-sm text-gray-700 leading-relaxed border-t border-gray-100 pt-3 pl-8">
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#006838] text-white rounded-2xl p-8 md:p-12 text-center space-y-6 shadow-xl border-t-8 border-amber-400">
          <h2 className="text-3xl md:text-4xl font-black">Besoin d'un Conseil ou d'un Financement ?</h2>
          <p className="text-emerald-100 text-base md:text-lg max-w-2xl mx-auto">
            Nos agents de crédit et conseillers financiers sont à votre disposition dans tout le Bénin pour vous accompagner.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-gray-950 font-bold px-6 py-3.5 rounded-lg text-base shadow"
            >
              <PhoneCall size={20} />
              Nous contacter
            </Link>
            <Link
              to="/agences"
              className="inline-flex items-center gap-2 bg-emerald-900 hover:bg-emerald-950 text-white font-bold px-6 py-3.5 rounded-lg text-base border border-emerald-700"
            >
              <MapPin size={20} />
              Localiser une agence
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
