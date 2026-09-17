import React, { useState, useMemo } from 'react';
import { Search, Filter, Calendar, Tag, FileText, ChevronRight, X, ArrowUpRight } from 'lucide-react';

export default function News() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [activeArticle, setActiveArticle] = useState(null);

  const newsItems = [
    {
      id: 1,
      title: "Avis d'Appel d'Offre Ouvert - Extension et Réhabilitation du Siège Général",
      category: "Appels d'offres",
      date: "12 juin 2026",
      summary: "La Faitière des Caisses d'Epargne et de Crédit Agricole Mutuel (FECECAM) lance un appel d'offres pour la sélection d'une entreprise en vue de la réalisation des travaux de Réhabilitation du bâtiment principal et la construction de l'annexe R+1.",
      content: `La Faitière des Caisses d'Epargne et de Crédit Agricole Mutuel (FECECAM-BÉNIN) lance un appel d'offres ouvert pour la sélection d'une entreprise de BTP en vue de la réalisation des travaux de réhabilitation du bâtiment principal et la construction d'une annexe de type R+1 au siège social d'Abomey-Calavi.\n\nLes entreprises intéressées peuvent retirer le dossier d'appel d'offres au secrétariat de la Direction Générale contre paiement d'une somme non remboursable. Les offres doivent être déposées au plus tard le 30 juillet à 10h00.`
    },
    {
      id: 2,
      title: "Lancement Officiel des Activités Exercice 2026 à la FECECAM-BÉNIN",
      category: "Actualités",
      date: "19 février 2026",
      summary: "La Direction Générale et l'ensemble des acteurs du réseau se sont réunis pour fixer les orientations stratégiques et les objectifs d'inclusion financière pour l'année 2026.",
      content: `Réunis au siège national d'Abomey-Calavi, la Direction Générale, les Directeurs de Délégation Technique Régionale et les Gérants de CLCAM ont procédé au lancement solennel des activités de l'exercice 2026.\n\nL'accent sera mis cette année sur la numérisation des parcours de souscription, le développement du crédit agricole structuré et le renforcement du confort d'accueil dans toutes nos agences.`
    },
    {
      id: 3,
      title: "AVIS D'APPEL D'OFFRES OUVERT - Acquisition d'équipements informatiques et matériels",
      category: "Appels d'offres",
      date: "8 juin 2026",
      summary: "Acquisition de matériels informatiques de pointe et serveurs réseau pour la modernisation du système d'information du réseau des CLCAM.",
      content: `La FECECAM-BÉNIN sollicite des offres sous pli fermé de la part de candidats éligibles et répondant aux qualifications requises pour la fourniture et l'installation d'équipements informatiques (serveurs, ordinateurs de bureau, onduleurs et équipements réseau).\n\nLes spécifications détaillées sont disponibles dans le cahier des charges disponible auprès du service des achats.`
    },
    {
      id: 4,
      title: "Financement de l'Entrepreneuriat Jeunesse en Afrique de l'Ouest",
      category: "Communiqués",
      date: "27 mars 2025",
      summary: "Mise en place de lignes de crédit bonifiées spécifiquement conçues pour soutenir les jeunes diplômés et agriculteurs innovants.",
      content: `Dans le cadre du partenariat avec les fonds de développement régional, la FECECAM met en place un guichet spécial dédié aux jeunes entrepreneurs de 18 à 35 ans.\n\nCe programme permet d'accéder à des prêts de démarrage sans garanties immobilières lourdes, assortis d'une formation préalable en gestion d'entreprise.`
    },
    {
      id: 5,
      title: "Gaani Édition 2024 à Nikki : La FECECAM aux côtés des Acteurs Culturels et Économiques",
      category: "Actualités",
      date: "18 septembre 2024",
      summary: "La FECECAM s'associe à la célébration de la fête traditionnelle de la Gaani à Nikki en apportant son soutien aux artisans et commerçants locaux.",
      content: `Fidèle à ses valeurs de proximité et de soutien aux communautés locales, la FECECAM-BÉNIN a activement participé aux festivités de la Gaani à Nikki.\n\nÀ cette occasion, la CLCAM de Nikki a ouvert un guichet mobile spécial pour faciliter les transactions financières des visiteurs et commerçants venus de toute la sous-région.`
    }
  ];

  const categories = ['ALL', 'Actualités', "Appels d'offres", 'Communiqués'];

  const filteredNews = useMemo(() => {
    return newsItems.filter(item => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'ALL' || item.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, newsItems]);

  return (
    <div className="space-y-12 pb-12">

      {/* HEADER BANNER */}
      <section className="bg-[#004d2a] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400 bg-emerald-950 px-3 py-1 rounded-full border border-emerald-800">
            Information & Transparence
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight">
            Actualités, Appels d'Offres & Communiqués
          </h1>
          <p className="text-emerald-100 text-lg max-w-3xl mx-auto">
            Restez informé des dernières avancées du réseau FECECAM, des opportunités d'affaires et des avis officiels.
          </p>
        </div>
      </section>

      {/* SEARCH AND CATEGORY FILTER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 flex flex-col md:flex-row gap-4 justify-between items-center">

          {/* Search bar */}
          <div className="w-full md:w-1/2 relative">
            <label htmlFor="search-news" className="sr-only">Rechercher une actualité</label>
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
              <Search size={20} aria-hidden="true" />
            </div>
            <input
              type="text"
              id="search-news"
              placeholder="Rechercher un mot-clé (ex: appel d'offre, prêt, travaux)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 font-medium focus:border-[#006838] focus:bg-white text-sm"
            />
          </div>

          {/* Category buttons */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#006838] text-white shadow'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {cat === 'ALL' ? 'Tous les articles' : cat}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredNews.length === 0 ? (
          <div className="bg-white p-8 rounded-xl text-center border border-gray-200 space-y-3">
            <FileText size={40} className="mx-auto text-gray-400" />
            <p className="font-bold text-gray-800 text-lg">Aucun article ne correspond à vos critères</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map((item) => (
              <article
                key={item.id}
                className="bg-white rounded-xl shadow-md border border-gray-200 p-6 flex flex-col justify-between hover:shadow-xl transition-shadow border-t-4 border-[#006838]"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold">
                    <span className="px-2.5 py-1 rounded bg-emerald-100 text-[#006838] uppercase">
                      {item.category}
                    </span>
                    <span className="text-gray-500 flex items-center gap-1">
                      <Calendar size={13} />
                      {item.date}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-gray-900 leading-snug hover:text-[#006838] transition-colors">
                    {item.title}
                  </h2>

                  <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
                    {item.summary}
                  </p>
                </div>

                <div className="pt-6">
                  <button
                    onClick={() => setActiveArticle(item)}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-gray-100 hover:bg-[#006838] hover:text-white text-[#006838] font-bold text-sm rounded-lg transition-colors"
                  >
                    Lire l'article complet <ChevronRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* ARTICLE DETAIL MODAL */}
      {activeArticle && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 space-y-6 shadow-2xl relative border-4 border-[#006838]">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-900 bg-gray-100 rounded-full"
              aria-label="Fermer la boîte de dialogue"
            >
              <X size={20} />
            </button>

            <div className="space-y-2">
              <span className="text-xs font-extrabold uppercase px-3 py-1 rounded bg-amber-100 text-amber-800">
                {activeArticle.category}
              </span>
              <h2 className="text-2xl font-black text-gray-900">{activeArticle.title}</h2>
              <p className="text-xs text-gray-500 font-semibold flex items-center gap-1">
                <Calendar size={14} /> Publié le {activeArticle.date} par Support FECECAM
              </p>
            </div>

            <div className="text-sm text-gray-700 leading-relaxed space-y-4 whitespace-pre-line border-t border-b border-gray-100 py-4">
              {activeArticle.content}
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2.5 bg-[#006838] text-white font-bold rounded-lg hover:bg-[#004d2a]"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
