import React, { useState, useId } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function Contact() {
  const nameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const subjectId = useId();
  const messageId = useId();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Renseignement Général',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="space-y-12 pb-12">

      {/* HEADER BANNER */}
      <section className="bg-[#004d2a] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
            Toujours plus proche de vous
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Contactez la FECECAM-BÉNIN
          </h1>
          <p className="text-emerald-100 text-lg max-w-3xl mx-auto">
            Une question sur nos crédits, un compte d'épargne ou une demande de partenariat ? Nos équipes vous répondent avec bienveillance.
          </p>
        </div>
      </section>

      {/* CONTACT INFO CARDS & FORM GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* Contact Info Sidebar */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-md border border-gray-200 space-y-6 border-t-8 border-[#006838]">
            <h2 className="text-2xl font-bold text-gray-900 border-b border-gray-100 pb-3">
              Coordonnées du Siège Social
            </h2>

            <ul className="space-y-5 text-sm text-gray-700">
              <li className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-emerald-100 text-[#006838] shrink-0">
                  <MapPin size={22} aria-hidden="true" />
                </div>
                <div>
                  <strong className="block text-gray-900 font-bold">Adresse Géographique</strong>
                  <span>Abomey-Calavi, Lot 77 biss Zoca, 08 BP 0843 Cotonou, République du Bénin</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-amber-100 text-amber-800 shrink-0">
                  <Phone size={22} aria-hidden="true" />
                </div>
                <div>
                  <strong className="block text-gray-900 font-bold">Téléphones</strong>
                  <a href="tel:+22966361643" className="hover:underline font-semibold text-gray-900 block">
                    (+229) 66 36 16 43
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-blue-100 text-blue-800 shrink-0">
                  <Mail size={22} aria-hidden="true" />
                </div>
                <div>
                  <strong className="block text-gray-900 font-bold">Adresses Électroniques</strong>
                  <a href="mailto:contact@fececam.org" className="hover:underline font-semibold text-gray-900 block">
                    contact@fececam.org
                  </a>
                  <a href="mailto:fececam@yahoo.fr" className="hover:underline text-gray-600 text-xs block">
                    fececam@yahoo.fr
                  </a>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="p-2.5 rounded-lg bg-emerald-100 text-[#006838] shrink-0">
                  <Clock size={22} aria-hidden="true" />
                </div>
                <div>
                  <strong className="block text-gray-900 font-bold">Heures d'Ouverture</strong>
                  <span>Lundi au Vendredi : 08h00 - 17h00</span>
                  <span className="block text-xs text-gray-500">Permanence guichets le samedi matin dans certaines agences</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-amber-500 text-gray-950 p-6 rounded-2xl shadow border border-amber-600 flex items-center gap-4">
            <ShieldAlert size={32} className="shrink-0 text-gray-950" />
            <div className="text-xs sm:text-sm font-medium">
              <strong className="block text-base font-bold text-gray-950">Urgence ou Signalement ?</strong>
              Pour toute perte de carnet, problème de carte ou besoin d'assistance immédiate, appelez directement votre gérant de Caisse CLCAM habituel.
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Envoyez-nous un message</h2>
          <p className="text-sm text-gray-600 mb-6">
            Remplissez le formulaire ci-dessous. Les champs marqués d'une astérisque (*) sont obligatoires.
          </p>

          {formSubmitted ? (
            <div className="bg-emerald-50 border-2 border-[#006838] p-8 rounded-xl text-center space-y-4">
              <CheckCircle2 size={48} className="mx-auto text-[#006838]" />
              <h3 className="text-2xl font-bold text-gray-900">Message envoyé avec succès !</h3>
              <p className="text-sm text-gray-700 max-w-md mx-auto">
                Merci <strong>{formData.name}</strong>. Votre message concernant "<strong>{formData.subject}</strong>" a bien été transmis à nos équipes. Nous vous recontacterons très rapidement.
              </p>
              <button
                onClick={() => {
                  setFormSubmitted(false);
                  setFormData({ name: '', email: '', phone: '', subject: 'Renseignement Général', message: '' });
                }}
                className="mt-4 px-6 py-2.5 bg-[#006838] hover:bg-[#004d2a] text-white font-bold rounded-lg text-sm transition-colors"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">

              <div>
                <label htmlFor={nameId} className="block text-sm font-bold text-gray-900 mb-1">
                  Nom et Prénom(s) *
                </label>
                <input
                  type="text"
                  id={nameId}
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 font-medium focus:border-[#006838] focus:bg-white"
                  placeholder="Ex: Akpovi MÉNONTIN"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor={emailId} className="block text-sm font-bold text-gray-900 mb-1">
                    Adresse Email *
                  </label>
                  <input
                    type="email"
                    id={emailId}
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 font-medium focus:border-[#006838] focus:bg-white"
                    placeholder="votre.email@exemple.bj"
                  />
                </div>

                <div>
                  <label htmlFor={phoneId} className="block text-sm font-bold text-gray-900 mb-1">
                    Téléphone (WhatsApp de préférence) *
                  </label>
                  <input
                    type="tel"
                    id={phoneId}
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 font-medium focus:border-[#006838] focus:bg-white"
                    placeholder="+229 60 00 00 00"
                  />
                </div>
              </div>

              <div>
                <label htmlFor={subjectId} className="block text-sm font-bold text-gray-900 mb-1">
                  Sujet de votre demande *
                </label>
                <select
                  id={subjectId}
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 font-semibold focus:border-[#006838] focus:bg-white"
                >
                  <option value="Renseignement Général">Renseignement Général</option>
                  <option value="Demande de Prêt / Crédit">Demande de Prêt / Crédit</option>
                  <option value="Ouverture de compte Épargne">Ouverture de compte Épargne</option>
                  <option value="Partenariat / Institutionnel">Partenariat / Institutionnel</option>
                  <option value="Réclamation / Support">Réclamation / Support</option>
                </select>
              </div>

              <div>
                <label htmlFor={messageId} className="block text-sm font-bold text-gray-900 mb-1">
                  Votre Message *
                </label>
                <textarea
                  id={messageId}
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-3 text-sm text-gray-900 font-medium focus:border-[#006838] focus:bg-white"
                  placeholder="Détaillez votre besoin ou votre question..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-[#006838] hover:bg-[#004d2a] text-white font-bold px-6 py-3.5 rounded-lg text-base shadow-lg transition-colors focus:ring-4 focus:ring-emerald-300"
              >
                <Send size={18} aria-hidden="true" />
                Envoyer le message
              </button>

            </form>
          )}
        </div>

      </section>

    </div>
  );
}
