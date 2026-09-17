import React, { useState } from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar, CheckCircle, Upload, X, ArrowRight } from 'lucide-react';

export default function Careers() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const jobs = [
    {
      id: 1,
      title: "Agent de Crédit / Animateur de Caisse",
      type: "CDI",
      category: "Terrain & Commercial",
      location: "Multi-communes (Borgou, Zou, Atlantique)",
      deadline: "15 août 2026",
      desc: "Sous la responsabilité du Gérant de CLCAM, l'agent de crédit prospective, étudie les dossiers de prêt, réalise le suivi des remboursements et conseille les membres sociétaires.",
      requirements: [
        "BAC+2 / BAC+3 en Finance, Microfinance, Agro-économie ou Gestion",
        "Avoir au moins 1 à 2 ans d'expérience sur le terrain",
        "Excellente capacité de négociation et maîtrise des langues locales",
        "Aptitude à conduire une moto sur le terrain"
      ]
    },
    {
      id: 2,
      title: "Gérant de CLCAM (Caisse Locale d'Épargne et de Crédit)",
      type: "CDI",
      category: "Management & Direction",
      location: "Parakou / Lokossa",
      deadline: "30 août 2026",
      desc: "Supervise la gestion financière, administrative et commerciale de la Caisse Locale, veille au respect des normes prudentielles et au développement du portefeuille.",
      requirements: [
        "BAC+4 / BAC+5 en Finance, Banque, Audit ou Microfinance",
        "Minimum 3 ans d'expérience managériale en SFD ou banque",
        "Maîtrise de la réglementation BCEAO et de l'analyse financière"
      ]
    },
    {
      id: 3,
      title: "Stage Professionnel / Stagiaire en Informatique & Réseau",
      type: "Stage (6 mois)",
      category: "Système d'Information",
      location: "Siège Général - Abomey-Calavi",
      deadline: "20 juillet 2026",
      desc: "Assistance au support utilisateur, maintenance du parc informatique, gestion du réseau local et assistance à l'administration des bases de données.",
      requirements: [
        "BAC+2 ou Licence en Informatique, Réseaux ou Maintenance",
        "Rigueur, esprit d'équipe et réactivité",
        "Maîtrise des environnements Windows Server et matériel informatique"
      ]
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="space-y-12 pb-12">

      {/* HEADER BANNER */}
      <section className="bg-[#004d2a] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
            Rejoignez-nous
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Recrutement & Offres de Stages
          </h1>
          <p className="text-emerald-100 text-lg max-w-3xl mx-auto">
            Construisez votre carrière au sein du 1er réseau de microfinance du Bénin et participez activement au développement de nos communautés.
          </p>
        </div>
      </section>

      {/* JOBS LISTING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-extrabold text-gray-900">Nos Opportunités Actuelles</h2>
          <p className="text-gray-600">Postulez directement en ligne pour rejoindre nos équipes</p>
        </div>

        <div className="space-y-6">
          {jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl shadow-md border border-gray-200 p-6 md:p-8 flex flex-col lg:flex-row justify-between gap-6 hover:shadow-xl transition-shadow border-l-8 border-[#006838]"
            >
              <div className="space-y-4 lg:w-3/4">
                <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
                  <span className="px-3 py-1 rounded-full bg-emerald-100 text-[#006838] uppercase">
                    {job.type}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-800">
                    {job.category}
                  </span>
                  <span className="text-gray-500 flex items-center gap-1 ml-auto lg:ml-0">
                    <Calendar size={14} /> Date limite : {job.deadline}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900">{job.title}</h3>

                <p className="text-sm text-gray-600 flex items-center gap-1.5 font-medium">
                  <MapPin size={16} className="text-[#006838]" /> {job.location}
                </p>

                <p className="text-sm text-gray-700 leading-relaxed">
                  {job.desc}
                </p>

                <div className="pt-2 space-y-1">
                  <span className="text-xs font-bold text-gray-900 uppercase block">Profil recherché :</span>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-1.5 text-xs text-gray-600">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <CheckCircle size={14} className="text-[#006838] shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-center justify-end lg:w-1/4">
                <button
                  onClick={() => {
                    setSelectedJob(job);
                    setIsSubmitted(false);
                  }}
                  className="w-full lg:w-auto inline-flex items-center justify-center gap-2 bg-[#006838] hover:bg-[#004d2a] text-white font-bold px-6 py-3 rounded-lg text-sm shadow transition-colors"
                >
                  Postuler à cette offre <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* APPLICATION FORM MODAL */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 space-y-6 shadow-2xl relative border-4 border-[#006838]">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-900 bg-gray-100 rounded-full"
              aria-label="Fermer la fenêtre de candidature"
            >
              <X size={20} />
            </button>

            {isSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-[#006838] rounded-full mx-auto flex items-center justify-center font-bold text-2xl">
                  ✓
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Candidature transmise avec succès !</h3>
                <p className="text-sm text-gray-600">
                  Merci pour votre intérêt envers la FECECAM-BÉNIN. Notre équipe RH étudiera votre dossier et vous recontactera très prochainement.
                </p>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="px-6 py-2.5 bg-[#006838] text-white font-bold rounded-lg"
                >
                  Fermer
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-gray-200 pb-3">
                  <span className="text-xs font-bold text-[#006838] uppercase">Formulaire de candidature</span>
                  <h3 className="text-xl font-bold text-gray-900">{selectedJob.title}</h3>
                </div>

                <div>
                  <label htmlFor="job-fullname" className="block text-xs font-bold text-gray-900 mb-1">Nom et Prénom(s) *</label>
                  <input
                    type="text"
                    id="job-fullname"
                    required
                    className="w-full bg-gray-50 border border-gray-300 rounded px-3 py-2 text-sm text-gray-900 focus:border-[#006838]"
                    placeholder="Ex: Koffi SOSSOU"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="job-email" className="block text-xs font-bold text-gray-900 mb-1">Adresse Email *</label>
                    <input
                      type="email"
                      id="job-email"
                      required
                      className="w-full bg-gray-50 border border-gray-300 rounded px-3 py-2 text-sm text-gray-900 focus:border-[#006838]"
                      placeholder="koffi@exemple.bj"
                    />
                  </div>
                  <div>
                    <label htmlFor="job-phone" className="block text-xs font-bold text-gray-900 mb-1">Téléphone *</label>
                    <input
                      type="tel"
                      id="job-phone"
                      required
                      className="w-full bg-gray-50 border border-gray-300 rounded px-3 py-2 text-sm text-gray-900 focus:border-[#006838]"
                      placeholder="+229 97 00 00 00"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="job-cv" className="block text-xs font-bold text-gray-900 mb-1">Joindre votre CV (PDF) *</label>
                  <input
                    type="file"
                    id="job-cv"
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full text-xs text-gray-500 border border-gray-300 rounded p-2 bg-gray-50"
                  />
                </div>

                <div>
                  <label htmlFor="job-message" className="block text-xs font-bold text-gray-900 mb-1">Lettre de motivation ou Message</label>
                  <textarea
                    id="job-message"
                    rows="3"
                    className="w-full bg-gray-50 border border-gray-300 rounded px-3 py-2 text-sm text-gray-900 focus:border-[#006838]"
                    placeholder="Présentez brièvement vos motivations..."
                  ></textarea>
                </div>

                <div className="pt-3 flex justify-end gap-3 border-t border-gray-200">
                  <button
                    type="button"
                    onClick={() => setSelectedJob(null)}
                    className="px-4 py-2 border border-gray-300 text-gray-700 text-sm font-semibold rounded hover:bg-gray-100"
                  >
                    Annuler
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-[#006838] hover:bg-[#004d2a] text-white text-sm font-bold rounded shadow"
                  >
                    Envoyer ma candidature
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
