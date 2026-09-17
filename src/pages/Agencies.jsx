import React, { useState, useMemo } from 'react';
import { MapPin, Phone, Clock, Search, Filter, Building2, ExternalLink } from 'lucide-react';

export default function Agencies() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('ALL');

  // FECECAM CLCAM & Agency Network data covering 77 communes of Benin
  const agencies = [
    {
      id: 1,
      name: 'CLCAM Abomey-Calavi (Siège Faitière)',
      department: 'Atlantique',
      commune: 'Abomey-Calavi',
      type: 'Siège & CLCAM Principale',
      address: 'Lot 77 biss Zoca, Abomey-Calavi',
      phone: '+229 66 36 16 43',
      email: 'calavi@fececam.org',
      hours: 'Lun - Ven: 08h00 - 17h00 | Sam: 08h30 - 12h30'
    },
    {
      id: 2,
      name: 'CLCAM Cotonou Akpakpa',
      department: 'Littoral',
      commune: 'Cotonou',
      type: 'CLCAM & Agence',
      address: 'Quartier Akpakpa Midombo, Face station Oryx',
      phone: '+229 21 33 20 15',
      email: 'cotonou.akpakpa@fececam.org',
      hours: 'Lun - Ven: 08h00 - 17h00 | Sam: 08h30 - 12h30'
    },
    {
      id: 3,
      name: 'CLCAM Cotonou Étoile / Saint-Michel',
      department: 'Littoral',
      commune: 'Cotonou',
      type: 'Agence Principale',
      address: 'Avenue Clozel, près du Marché Saint-Michel',
      phone: '+229 21 31 10 40',
      email: 'cotonou.etoile@fececam.org',
      hours: 'Lun - Ven: 08h00 - 17h00 | Sam: 08h30 - 12h30'
    },
    {
      id: 4,
      name: 'CLCAM Porto-Novo',
      department: 'Ouémé',
      commune: 'Porto-Novo',
      type: 'Délégation Technique Régionale & CLCAM',
      address: 'Quartier Attakè, Carrefour Cathédrale, Porto-Novo',
      phone: '+229 20 21 28 04',
      email: 'portonovo@fececam.org',
      hours: 'Lun - Ven: 08h00 - 17h00 | Sam: 08h30 - 12h30'
    },
    {
      id: 5,
      name: 'CLCAM Parakou',
      department: 'Borgou',
      commune: 'Parakou',
      type: 'Délégation Technique Régionale du Borgou',
      address: 'Quartier Zongo, Route Nationale N°2, Parakou',
      phone: '+229 23 61 02 18',
      email: 'parakou@fececam.org',
      hours: 'Lun - Ven: 08h00 - 17h00 | Sam: 08h30 - 12h30'
    },
    {
      id: 6,
      name: 'CLCAM Bohicon',
      department: 'Zou',
      commune: 'Bohicon',
      type: 'Délégation Régionale Zou-Collines',
      address: 'Face au Marché Central de Bohicon',
      phone: '+229 22 51 01 22',
      email: 'bohicon@fececam.org',
      hours: 'Lun - Ven: 08h00 - 17h00 | Sam: 08h30 - 12h30'
    },
    {
      id: 7,
      name: 'CLCAM Natitingou',
      department: 'Atacora',
      commune: 'Natitingou',
      type: 'Délégation Régionale Atacora-Donga',
      address: 'Avenue de l\'Indépendance, Natitingou',
      phone: '+229 23 82 11 05',
      email: 'natitingou@fececam.org',
      hours: 'Lun - Ven: 08h00 - 17h00 | Sam: 08h30 - 12h30'
    },
    {
      id: 8,
      name: 'CLCAM Lokossa',
      department: 'Mono',
      commune: 'Lokossa',
      type: 'Délégation Régionale Mono-Couffo',
      address: 'Quartier Agamè, Rue de la Préfecture, Lokossa',
      phone: '+229 22 41 12 30',
      email: 'lokossa@fececam.org',
      hours: 'Lun - Ven: 08h00 - 17h00 | Sam: 08h30 - 12h30'
    },
    {
      id: 9,
      name: 'CLCAM Kandi',
      department: 'Alibori',
      commune: 'Kandi',
      type: 'CLCAM & Guichet Principal',
      address: 'Quartier Baidou, Kandi',
      phone: '+229 23 63 00 12',
      email: 'kandi@fececam.org',
      hours: 'Lun - Ven: 08h00 - 17h00 | Sam: 08h30 - 12h30'
    },
    {
      id: 10,
      name: 'CLCAM Djougou',
      department: 'Donga',
      commune: 'Djougou',
      type: 'CLCAM',
      address: 'Grand Marché de Djougou, Route de Parakou',
      phone: '+229 23 80 01 44',
      email: 'djougou@fececam.org',
      hours: 'Lun - Ven: 08h00 - 17h00 | Sam: 08h30 - 12h30'
    },
    {
      id: 11,
      name: 'CLCAM Allada',
      department: 'Atlantique',
      commune: 'Allada',
      type: 'CLCAM',
      address: 'Centre-ville Allada, près du Tribunal',
      phone: '+229 21 36 00 88',
      email: 'allada@fececam.org',
      hours: 'Lun - Ven: 08h00 - 17h00'
    },
    {
      id: 12,
      name: 'CLCAM Ouidah',
      department: 'Atlantique',
      commune: 'Ouidah',
      type: 'CLCAM',
      address: 'Quartier Zomaï, Ouidah',
      phone: '+229 21 34 11 02',
      email: 'ouidah@fececam.org',
      hours: 'Lun - Ven: 08h00 - 17h00'
    },
    {
      id: 13,
      name: 'CLCAM Malanville',
      department: 'Alibori',
      commune: 'Malanville',
      type: 'CLCAM & Guichet Frontalier',
      address: 'Près du Marché International de Malanville',
      phone: '+229 23 67 01 05',
      email: 'malanville@fececam.org',
      hours: 'Lun - Ven: 08h00 - 17h00'
    },
    {
      id: 14,
      name: 'CLCAM Dassa-Zoumè',
      department: 'Collines',
      commune: 'Dassa-Zoumè',
      type: 'CLCAM',
      address: 'Carrefour 49, Dassa-Zoumè',
      phone: '+229 22 53 02 10',
      email: 'dassa@fececam.org',
      hours: 'Lun - Ven: 08h00 - 17h00'
    },
    {
      id: 15,
      name: 'CLCAM Nikki',
      department: 'Borgou',
      commune: 'Nikki',
      type: 'CLCAM',
      address: 'Quartier Danri, Nikki',
      phone: '+229 23 65 00 45',
      email: 'nikki@fececam.org',
      hours: 'Lun - Ven: 08h00 - 17h00'
    }
  ];

  const departments = useMemo(() => {
    return ['ALL', ...Array.from(new Set(agencies.map(a => a.department)))];
  }, [agencies]);

  const filteredAgencies = useMemo(() => {
    return agencies.filter(agency => {
      const matchesSearch =
        agency.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agency.commune.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agency.address.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDepartment = selectedDepartment === 'ALL' || agency.department === selectedDepartment;

      return matchesSearch && matchesDepartment;
    });
  }, [searchTerm, selectedDepartment, agencies]);

  return (
    <div className="space-y-12 pb-12">

      {/* HEADER BANNER */}
      <section className="bg-[#004d2a] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
            Couverture Nationale
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Réseau des Agences & CLCAM
          </h1>
          <p className="text-emerald-100 text-lg max-w-3xl mx-auto">
            Retrouvez la Caisse Locale d’Épargne et de Crédit Agricole Mutuel la plus proche de chez vous parmi nos 33 CLCAM et 60+ agences.
          </p>
        </div>
      </section>

      {/* SEARCH AND FILTER BAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">

          <div className="md:col-span-7 relative">
            <label htmlFor="search-agency" className="sr-only">Rechercher une agence ou une ville</label>
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
              <Search size={20} aria-hidden="true" />
            </div>
            <input
              type="text"
              id="search-agency"
              placeholder="Rechercher par nom d'agence, commune ou quartier (ex: Calavi, Parakou, Akpakpa)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 font-medium focus:border-[#006838] focus:bg-white text-sm"
            />
          </div>

          <div className="md:col-span-5 flex items-center gap-2">
            <Filter size={20} className="text-[#006838] shrink-0" aria-hidden="true" />
            <label htmlFor="select-department" className="sr-only">Filtrer par Département</label>
            <select
              id="select-department"
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="w-full py-3 px-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 font-semibold focus:border-[#006838] focus:bg-white text-sm"
            >
              <option value="ALL">Tous les Départements du Bénin</option>
              {departments.filter(d => d !== 'ALL').map((dept) => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
          </div>

        </div>

        {/* RESULTS COUNT SUMMARY */}
        <div className="mt-4 flex justify-between items-center text-sm font-semibold text-gray-700 px-2">
          <span>{filteredAgencies.length} agence(s) ou guichet(s) trouvé(s)</span>
          {selectedDepartment !== 'ALL' && (
            <button
              onClick={() => setSelectedDepartment('ALL')}
              className="text-[#006838] hover:underline text-xs"
            >
              Réinitialiser le filtre département
            </button>
          )}
        </div>
      </section>

      {/* AGENCY LIST AND INTERACTIVE MAP GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

        {/* Agencies Cards List */}
        <div className="lg:col-span-7 space-y-4">
          {filteredAgencies.length === 0 ? (
            <div className="bg-white p-8 rounded-xl text-center border border-gray-200 space-y-3">
              <Building2 size={40} className="mx-auto text-gray-400" />
              <p className="font-bold text-gray-800 text-lg">Aucune agence ne correspond à votre recherche</p>
              <p className="text-sm text-gray-600">Essayez de modifier votre terme de recherche ou le filtre de département.</p>
            </div>
          ) : (
            filteredAgencies.map((agency) => (
              <div
                key={agency.id}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-[#006838] hover:shadow-md transition-all space-y-3"
              >
                <div className="flex justify-between items-start gap-2">
                  <div>
                    <span className="text-xs font-extrabold uppercase px-2.5 py-0.5 rounded bg-emerald-100 text-[#006838]">
                      {agency.department} - {agency.commune}
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mt-1">{agency.name}</h3>
                    <p className="text-xs font-semibold text-amber-700">{agency.type}</p>
                  </div>
                </div>

                <div className="space-y-2 text-sm text-gray-700 pt-1">
                  <p className="flex items-start gap-2">
                    <MapPin size={18} className="text-[#006838] shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{agency.address}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone size={18} className="text-[#006838] shrink-0" aria-hidden="true" />
                    <a href={`tel:${agency.phone}`} className="hover:underline font-semibold text-gray-900">
                      {agency.phone}
                    </a>
                  </p>
                  <p className="flex items-center gap-2 text-xs text-gray-600">
                    <Clock size={16} className="text-amber-600 shrink-0" aria-hidden="true" />
                    <span>{agency.hours}</span>
                  </p>
                </div>

                <div className="pt-2 border-t border-gray-100 flex justify-end">
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(agency.name + ' ' + agency.address + ' Benin')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#006838] hover:underline"
                  >
                    Itinéraire sur Google Maps <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            ))
          )}
        </div>

        {/* EMBEDDED MAP VIEW */}
        <div className="lg:col-span-5 sticky top-24">
          <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-200 space-y-3">
            <h2 className="font-bold text-gray-900 text-lg flex items-center gap-2 border-b border-gray-100 pb-2">
              <MapPin className="text-[#006838]" size={20} />
              Carte des Implantation FECECAM
            </h2>
            <div className="w-full h-[480px] rounded-xl overflow-hidden border border-gray-300">
              <iframe
                title="Carte des Agences FECECAM Bénin"
                src="https://www.google.com/maps/d/u/0/embed?mid=1qjLYjcCuBay5QBpHJ0RvmjXmKa-p5_U&ehbc=2E312F"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <p className="text-xs text-gray-500 text-center">
              Carte interactive officielle couvrant le réseau national des Caisses Locales d'Épargne et de Crédit Agricole Mutuel.
            </p>
          </div>
        </div>

      </section>

    </div>
  );
}
