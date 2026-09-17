import React from 'react';
import {
  Wallet,
  PiggyBank,
  ShieldAlert,
  TrendingUp,
  CheckCircle,
  ChevronRight,
  Building2,
  Users,
  GraduationCap,
  Briefcase
} from 'lucide-react';
import LoanSimulator from '../components/LoanSimulator';

export default function Products() {
  const creditsList = [
    {
      title: 'Crédit Agricole / Pêche / Élevage',
      icon: TrendingUp,
      color: 'border-[#006838]',
      desc: 'Financement des activités agricoles relatives à la production, la transformation, l’élevage, la pêche et le stockage de récoltes.',
      target: 'Agriculteurs, coopératives agricoles, éleveurs, pêcheurs.',
      rate: 'Taux préférentiel à partir de 10% / an'
    },
    {
      title: 'Crédit Commercial & Artisanat',
      icon: Briefcase,
      color: 'border-amber-500',
      desc: 'Financement du fonds de roulement, achat de marchandises et équipements pour activités commerciales.',
      target: 'Commerçants, artisans, prestataires de services.',
      rate: 'Taux compétitif à partir de 12% / an'
    },
    {
      title: 'Crédit aux Groupements & Associations',
      icon: Users,
      color: 'border-blue-600',
      desc: 'Destiné aux groupements d’entraide et associations de femmes exerçant des activités génératrices de revenus.',
      target: 'Groupements féminins, tontines structurées, associations de village.',
      rate: 'Procédure allégée et caution solidaire'
    },
    {
      title: 'Crédit PME / PMI',
      icon: Building2,
      color: 'border-[#006838]',
      desc: 'Financement stratégique des Petites et Moyennes Entreprises pour investissements et développement d’activité.',
      target: 'Entreprises enregistrées, PME/PMI, très petites entreprises.',
      rate: 'Accompagnement et conseils spécialisés'
    },
    {
      title: 'Crédit à la Consommation',
      icon: Wallet,
      color: 'border-purple-600',
      desc: 'Prêt personnel destiné aux agents permanents de l’État et salariés du secteur privé sous contrat.',
      target: 'Fonctionnaires, salariés sous contrat.',
      rate: 'Remboursement direct par retenue à la source'
    },
    {
      title: 'Crédit Scolaire & Éducation',
      icon: GraduationCap,
      color: 'border-amber-600',
      desc: 'Financement dédié aux parents d’élèves pour faire face sereinement aux frais de scolarité, réinscription et fournitures.',
      target: 'Parents d’élèves et étudiants sociétaires.',
      rate: 'Période de grâce adaptée à la rentrée'
    }
  ];

  return (
    <div className="space-y-16 pb-12">

      {/* HEADER BANNER */}
      <section className="bg-[#004d2a] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
            Offre Financière
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Produits, Services & Prêts FECECAM
          </h1>
          <p className="text-emerald-100 text-lg max-w-3xl mx-auto">
            Une gamme complète de crédits, d'épargne et de micro-assurance pour concrétiser tous vos projets personnels et professionnels.
          </p>
        </div>
      </section>

      {/* INTERACTIVE LOAN SIMULATOR INTEGRATION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LoanSimulator />
      </section>

      {/* DETAILED CREDITS CATALOG */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-gray-900">Nos Solutions de Crédit</h2>
          <p className="text-gray-600">Choisissez la formule adaptée à votre secteur d'activité</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {creditsList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className={`bg-white rounded-xl shadow-md border-t-4 ${item.color} p-6 flex flex-col justify-between hover:shadow-xl transition-shadow`}>
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-emerald-50 text-[#006838] flex items-center justify-center">
                    <Icon size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>

                  <div className="pt-2 border-t border-gray-100 text-xs space-y-1 text-gray-700">
                    <p><strong className="text-gray-900">Cible :</strong> {item.target}</p>
                    <p className="text-[#006838] font-semibold">{item.rate}</p>
                  </div>
                </div>

                <div className="pt-6">
                  <a
                    href="#simulateur"
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#006838] hover:bg-[#004d2a] text-white text-sm font-bold rounded transition-colors"
                  >
                    Simuler ce prêt <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SAVINGS & DEPOSITS SECTION */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-extrabold text-gray-900">Comptes d'Épargne & Sécurité Dépôt</h2>
            <p className="text-gray-600">Faites fructifier vos économies en toute tranquillité</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow border border-gray-200 space-y-3">
              <div className="w-12 h-12 rounded bg-amber-100 text-amber-800 flex items-center justify-center font-bold">
                <PiggyBank size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Épargne Libre</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Compte sur livret souple sans frais de tenue abusifs. Dépôts et retraits libres dans tout le réseau de la FECECAM.
              </p>
              <ul className="text-xs text-gray-600 space-y-1.5 pt-2">
                <li className="flex items-center gap-1"><CheckCircle size={14} className="text-[#006838]" /> Intérêts créditeurs annuels</li>
                <li className="flex items-center gap-1"><CheckCircle size={14} className="text-[#006838]" /> Accès prioritaire aux demandes de crédit</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow border border-gray-200 space-y-3">
              <div className="w-12 h-12 rounded bg-emerald-100 text-[#006838] flex items-center justify-center font-bold">
                <Wallet size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Dépôt à Terme (DAT)</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Bloquez une somme pendant 3, 6, 12 mois ou plus et bénéficiez d'un taux de rémunération avantageux garanti.
              </p>
              <ul className="text-xs text-gray-600 space-y-1.5 pt-2">
                <li className="flex items-center gap-1"><CheckCircle size={14} className="text-[#006838]" /> Taux négocié très performant</li>
                <li className="flex items-center gap-1"><CheckCircle size={14} className="text-[#006838]" /> Idéal pour les projets à moyen terme</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow border border-gray-200 space-y-3">
              <div className="w-12 h-12 rounded bg-blue-100 text-blue-800 flex items-center justify-center font-bold">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Épargne Tontine</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Service de collecte journalière à domicile ou sur les marchés pour sécuriser les recettes quotidiennes des commerçants.
              </p>
              <ul className="text-xs text-gray-600 space-y-1.5 pt-2">
                <li className="flex items-center gap-1"><CheckCircle size={14} className="text-[#006838]" /> Collecteurs agréés et sécurisés</li>
                <li className="flex items-center gap-1"><CheckCircle size={14} className="text-[#006838]" /> Zéro déplacement nécessaire</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
