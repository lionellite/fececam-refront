import React from 'react';
import { ShieldCheck, Target, History, Users, Award, Landmark, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <div className="space-y-16 pb-12">

      {/* HEADER BANNER */}
      <section className="bg-[#004d2a] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
            Qui sommes-nous ?
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            À Propos de la FECECAM-BÉNIN
          </h1>
          <p className="text-emerald-100 text-lg max-w-3xl mx-auto">
            La Faitière des Caisses d’Épargne et de Crédit Agricole Mutuel : premier réseau mutualiste d'inclusion financière au Bénin depuis 1978.
          </p>
        </div>
      </section>

      {/* OVERVIEW & MISSION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-extrabold text-gray-900 leading-tight">
              Un pilier stratégique du développement socio-économique du Bénin
            </h2>
            <p className="text-gray-700 text-base leading-relaxed">
              La **FECECAM-BÉNIN** regroupe un réseau dynamique de Caisses Locales d’Épargne et de Crédit Agricole Mutuel (CLCAM). Sa vocation fondamentale est la collecte de l’épargne des membres pour la transformer en crédits productifs destinés au financement de l'agriculture, du commerce, de l'artisanat et des PME.
            </p>
            <p className="text-gray-700 text-base leading-relaxed">
              Forte d'une couverture nationale dans les **77 communes du Bénin**, elle contribue activement à la réduction de la pauvreté et à l’autonomisation économique des femmes et des jeunes.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200">
              <div className="bg-emerald-50 p-4 rounded-lg border border-emerald-200">
                <span className="text-2xl font-black text-[#006838]">1978</span>
                <span className="block text-xs font-semibold text-gray-700">Année de création</span>
              </div>
              <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                <span className="text-2xl font-black text-amber-700">33 CLCAM</span>
                <span className="block text-xs font-semibold text-gray-700">Caisses Autonomes</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border-t-8 border-[#006838] space-y-6">
            <h3 className="text-2xl font-bold text-[#006838] flex items-center gap-3">
              <Target size={28} className="text-amber-500" />
              Notre Mission & Vision
            </h3>

            <div className="space-y-4 text-sm text-gray-700">
              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <strong className="text-gray-900 block text-base mb-1">Notre Mission :</strong>
                Proposer des services financiers et non financiers adaptés, fiables et pérennes aux populations rurales et urbaines exclues du système bancaire classique.
              </div>

              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                <strong className="text-gray-900 block text-base mb-1">Notre Vision :</strong>
                Être l'institution de microfinance de référence en Afrique de l'Ouest, reconnue pour sa gouvernance exemplaire, son innovation et son impact social positif.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HISTORY TIMELINE */}
      <section className="bg-gray-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-extrabold text-gray-900">Historique & Grandes Étapes</h2>
            <p className="text-gray-600">Plus de 4 décennies au service du peuple béninois</p>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                year: '1977 - 1978',
                title: 'Création des premières caisses locales (CLCAM)',
                desc: 'Lancement du mouvement mutualiste d’épargne et de crédit agricole sous l’impulsion des communautés rurales du Bénin.'
              },
              {
                year: '1993',
                title: 'Institution de la Faitière (FECECAM)',
                desc: 'Structuration en réseau avec la création de la Faitière pour assurer le contrôle, la supervision et l’assistance technique des caisses locales.'
              },
              {
                year: '2008 - 2015',
                title: 'Modernisation et diversification',
                desc: 'Informatisation du réseau, introduction du microcrédit aux groupements de femmes et diversification vers les prêts PME et scolaires.'
              },
              {
                year: 'Aujourd\'hui',
                title: 'Digitalisation & Extension Réseau',
                desc: 'Extension continue du réseau avec plus de 60 agences, simulateur de prêt interactif, et conformité totale aux normes BCEAO.'
              }
            ].map((step, idx) => (
              <div key={idx} className="flex gap-4 bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#006838]">
                <div className="shrink-0 bg-emerald-100 text-[#006838] font-bold px-3 py-1.5 rounded text-sm h-fit">
                  {step.year}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-700 mt-1">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP & GOVERNANCE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-gray-900">Notre Équipe de Direction</h2>
          <p className="text-gray-600">Une gouvernance expérimentée et engagée</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow border border-gray-200 text-center space-y-3">
            <div className="w-20 h-20 rounded-full bg-[#006838] text-amber-400 font-extrabold text-3xl mx-auto flex items-center justify-center border-2 border-amber-400">
              TB
            </div>
            <h3 className="text-xl font-bold text-gray-900">Taïrou BASSABI AMADOU</h3>
            <p className="text-sm font-semibold text-[#006838]">Directeur Général</p>
            <p className="text-xs text-gray-600">Supervision stratégique et développement opérationnel du réseau national.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border border-gray-200 text-center space-y-3">
            <div className="w-20 h-20 rounded-full bg-emerald-800 text-white font-extrabold text-3xl mx-auto flex items-center justify-center">
              DT
            </div>
            <h3 className="text-xl font-bold text-gray-900">Direction Technique</h3>
            <p className="text-sm font-semibold text-[#006838]">8 Délégations Régionales</p>
            <p className="text-xs text-gray-600">Encadrement de proximité des Caisses Locales et contrôle de gestion.</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow border border-gray-200 text-center space-y-3">
            <div className="w-20 h-20 rounded-full bg-amber-600 text-white font-extrabold text-3xl mx-auto flex items-center justify-center">
              CA
            </div>
            <h3 className="text-xl font-bold text-gray-900">Conseil d'Administration</h3>
            <p className="text-sm font-semibold text-[#006838]">Représentants des Sociétaires</p>
            <p className="text-xs text-gray-[#006838]">Orientation démocratique et contrôle des activités mutualistes.</p>
          </div>
        </div>
      </section>

    </div>
  );
}
