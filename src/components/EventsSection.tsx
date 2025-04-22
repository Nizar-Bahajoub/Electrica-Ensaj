import React from 'react';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';
// Import the images
import event1Image from '../assets/images/electiginius/Affiche.jpg';
import event2Image from '../assets/images/cours/Affiche.jpg';
import event3Image from '../assets/images/Matlab/Affiche.jpg';
import event4Image from '../assets/images/Matlab/Affiche-2.jpg';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

const EventsSection: React.FC = () => {
  const events: Event[] = [
    {
      id: 1,
      title: "ElectriGenius 1.0",
      date: "15 Avril 2025",
      time: "10h00 - Amphi 1",
      location: "ENSA El Jadida",
      description: "Découvrez l'avenir des systèmes énergétiques intelligents face qux catastrophes naturelles.",
      image: event1Image
    },
    {
      id: 2,
      title: "Atelier Robotique Arduino",
      date: "12 Mai 2025",
      time: "10h00 - 16h00",
      location: "Laboratoire de Robotique ENSAJ",
      description: "Formation pratique en robotique. Apprenez à concevoir, construire et programmer votre propre robot alimenté par Arduino.",
      image: event2Image
    },
    {
      id: 3,
      title: "ElectroHack 2.0",
      date: "15-16 Juin 2025",
      time: "Début à 09h00",
      location: "Hall Principal ENSAJ",
      description: "Un passionnant hackathon étudiant de 24 heures axé sur le génie électrique et les solutions IoT.",
      image: event3Image
    },
    {
      id: 4,
      title: "AI & Robotique : Le Futur de l'Automatisation",
      date: "20 Juillet 2025",
      time: "14h00 - 18h00",
      location: "Salle de Conférence ENSAJ",
      description: "Conférence interactive sur l'intégration de l'IA dans les systèmes robotiques modernes, suivie d'une démonstration pratique.",
      image: event4Image
    }
  ];

  const featuredEvent = events[0];

  return (
    <div id="evenements" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Événements à Venir</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Participez à nos ateliers, compétitions et conférences techniques qui enrichiront 
            vos connaissances et vous connecteront avec d'autres passionnés d'ingénierie.
          </p>
        </div>

        {/* Événement à la Une */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="bg-black rounded-xl overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredEvent.image} 
                  alt={featuredEvent.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
                <div className="bg-yellow-400 text-black text-sm font-bold px-3 py-1 rounded-full w-fit mb-4">
                  ÉVÉNEMENT À LA UNE
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">{featuredEvent.title}</h3>
                <div className="flex items-center text-gray-300 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{featuredEvent.date}</span>
                </div>
                <div className="flex items-center text-gray-300 mb-2">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{featuredEvent.time}</span>
                </div>
                <div className="flex items-center text-gray-300 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{featuredEvent.location}</span>
                </div>
                <p className="text-gray-300 mb-6">{featuredEvent.description}</p>
                <button className="bg-yellow-400 text-black font-medium px-6 py-3 rounded-md hover:bg-yellow-500 transition-colors flex items-center w-fit">
                  <span>S'inscrire Maintenant</span>
                  <ExternalLink className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Grille d'événements */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.slice(1, 4).map(event => (
            <div key={event.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                <div className="flex items-center text-gray-600 mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-2">
                  <Clock className="h-4 w-4 mr-2" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{event.location}</span>
                </div>
                <p className="text-gray-700 mb-4">{event.description}</p>
                <button className="text-yellow-600 font-medium hover:text-yellow-700 transition-colors flex items-center">
                  <span>Learn More</span>
                  <ExternalLink className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="bg-transparent text-gray-800 border border-gray-800 font-medium px-8 py-3 rounded-md hover:bg-gray-800 hover:text-white transition-colors">
            View All Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsSection;