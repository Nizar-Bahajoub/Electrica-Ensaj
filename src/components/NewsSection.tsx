import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  summary: string;
  category: string;
}

const NewsSection: React.FC = () => {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: "Electrica Remporte le Défi Innovation Inter-Clubs !",
      date: "1 Avril 2025",
      summary: "Notre équipe a présenté un modèle de mini-réseau solaire qui a remporté la première place lors du concours d'innovation annuel interuniversitaire.",
      category: "Réussite"
    },
    {
      id: 2,
      title: "Nouveau Matériel de Laboratoire Financé par nos Partenaires",
      date: "25 Mars 2025",
      summary: "Grâce aux généreuses donations de nos partenaires industriels, nous avons désormais accès à des kits matériels de pointe pour le prototypage de projets avancés.",
      category: "Annonce"
    },
    {
      id: 3,
      title: "Inscriptions Ouvertes pour la Série de Bootcamps d'Été",
      date: "15 Mars 2025",
      summary: "Rejoignez notre programme intensif d'été couvrant les microcontrôleurs, la conception de PCB et le développement d'applications IoT sur six weekends.",
      category: "Événement"
    }
  ];

  return (
    <div id="actualites" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Actualités Récentes</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Restez informés des dernières réussites, annonces et 
            opportunités du Club Electrica.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {newsItems.map((item) => (
            <div key={item.id} className="mb-8 bg-white p-6 rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-center mb-3">
                <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2.5 py-0.5 rounded">
                  {item.category}
                </span>
                <div className="flex items-center text-gray-500 text-sm ml-4">
                  <Calendar className="h-3.5 w-3.5 mr-1" />
                  <span>{item.date}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-700 mb-4">{item.summary}</p>
              <button className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors flex items-center">
                <span>Lire la Suite</span>
                <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="bg-transparent text-gray-800 border border-gray-800 font-medium px-8 py-3 rounded-md hover:bg-gray-800 hover:text-white transition-colors">
            Voir Toutes les Actualités
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;