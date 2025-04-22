import React, { useState } from 'react';
import { X, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Import all images from Electrigenius folder
import comp1 from '../assets/images/electiginius/1.jpg';
import comp2 from '../assets/images/electiginius/2.jpg';
import comp3 from '../assets/images/electiginius/3.jpg';
import comp4 from '../assets/images/electiginius/4.jpg';
import comp5 from '../assets/images/electiginius/5.jpg';
import comp6 from '../assets/images/electiginius/6.jpg';
import comp7 from '../assets/images/electiginius/7.jpg';
import comp8 from '../assets/images/electiginius/8.jpg';
import comp9 from '../assets/images/electiginius/9.jpg';
import comp10 from '../assets/images/electiginius/10.jpg';
import comp11 from '../assets/images/electiginius/11.jpg';
import comp12 from '../assets/images/electiginius/12.jpg';
import comp13 from '../assets/images/electiginius/13.jpg';
import comp14 from '../assets/images/electiginius/14.jpg';
import comp15 from '../assets/images/electiginius/15.jpg';
import comp16 from '../assets/images/electiginius/16.jpg';
import comp17 from '../assets/images/electiginius/17.jpg';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigate = useNavigate();

  const images = [
    {
      src: comp1,
      alt: "Séance d'Introduction ElectriGenius",
      category: "Events"
    },
    {
      src: comp2,
      alt: "Première Réunion du Club",
      category: "Events"
    },
    {
      src: comp3,
      alt: "Workshop Arduino Débutant",
      category: "Workshops"
    },
    {
      src: comp4,
      alt: "Préparation des Projets",
      category: "Projects"
    },
    {
      src: comp5,
      alt: "Formation PCB Design",
      category: "Workshops"
    },
    {
      src: comp6,
      alt: "Compétition ElectriGenius - Phase 1",
      category: "Competitions"
    },
    {
      src: comp7,
      alt: "Atelier IoT Avancé",
      category: "Workshops"
    },
    {
      src: comp8,
      alt: "Présentation des Prototypes",
      category: "Projects"
    },
    {
      src: comp9,
      alt: "Session de Brainstorming",
      category: "Events"
    },
    {
      src: comp10,
      alt: "Démonstration des Robots",
      category: "Competitions"
    },
    {
      src: comp11,
      alt: "Phase Finale ElectriGenius",
      category: "Competitions"
    },
    {
      src: comp12,
      alt: "Remise des Prix",
      category: "Events"
    },
    {
      src: comp13,
      alt: "Workshop Capteurs IoT",
      category: "Workshops"
    },
    {
      src: comp14,
      alt: "Projet Smart Home",
      category: "Projects"
    },
    {
      src: comp15,
      alt: "Hackathon ElectroHack",
      category: "Competitions"
    },
    {
      src: comp16,
      alt: "Cérémonie de Clôture",
      category: "Events"
    },
    {
      src: comp17,
      alt: "Photo de Groupe Finale",
      category: "Events"
    }
  ];

  const [filter, setFilter] = useState<string>('All');
  const categories = ['All', ...Array.from(new Set(images.map(img => img.category)))];

  const filteredImages = filter === 'All' 
    ? images 
    : images.filter(img => img.category === filter);

  const openLightbox = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative pt-20 pb-12 bg-black">
        <div className="container mx-auto px-4 pt-12">
          <button 
            onClick={() => navigate('/')}
            className="flex items-center text-yellow-400 hover:text-yellow-500 transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour à l'Accueil
          </button>
          <h1 className="text-4xl font-bold text-white mb-4">Galerie ElectriGenius</h1>
          <p className="text-gray-300 max-w-2xl">
            Découvrez les moments forts de nos ateliers, compétitions et événements qui 
            témoignent de l'esprit d'innovation des membres du Club Electrica.
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                filter === category
                  ? 'bg-yellow-400 text-black'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-lg"
              onClick={() => openLightbox(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center">
                <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity text-center p-4">
                  {image.alt}
                </p>
              </div>
              <div className="absolute top-4 right-4">
                <span className="bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors"
            onClick={closeLightbox}
          >
            <X className="h-8 w-8" />
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged gallery image"
            className="max-w-full max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;