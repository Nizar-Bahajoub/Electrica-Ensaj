import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Import images from Electrigenius folder
import gallery1 from '../assets/images/electiginius/1.jpg';
import gallery2 from '../assets/images/electiginius/2.jpg';
import gallery3 from '../assets/images/electiginius/3.jpg';
import gallery4 from '../assets/images/electiginius/4.jpg';
import gallery5 from '../assets/images/electiginius/5.jpg';
import gallery6 from '../assets/images/electiginius/6.jpg';
import gallery7 from '../assets/images/electiginius/7.jpg';
import gallery8 from '../assets/images/electiginius/10.jpg';
import gallery9 from '../assets/images/electiginius/9.jpg';

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const navigate = useNavigate();

  const images = [
    {
      src: gallery1,
      alt: "Atelier ElectriGenius - Conception de PCB"
    },
    {
      src: gallery2,
      alt: "Compétition de Robotique ElectriGenius"
    },
    {
      src: gallery3,
      alt: "Présentation des Projets ElectriGenius"
    },
    {
      src: gallery4,
      alt: "Activité de Team Building ElectriGenius"
    },
    {
      src: gallery5,
      alt: "Projet IoT ElectriGenius"
    },
    {
      src: gallery6,
      alt: "Hackathon ElectriGenius"
    },
    {
      src: gallery7,
      alt: "Projet IoT ElectriGenius"
    },,
    {
      src: gallery8,
      alt: "Projet IoT ElectriGenius"
    },,
    {
      src: gallery9,
      alt: "Projet IoT ElectriGenius"
    }
  ];

  const openLightbox = (src: string) => {
    setSelectedImage(src);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <div id="galerie" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Notre Parcours en Images</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Découvrez les moments forts de nos ateliers, compétitions et événements 
            communautaires qui illustrent notre passion pour le génie électrique et l'innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="overflow-hidden rounded-lg shadow-md cursor-pointer transition-transform hover:-translate-y-1 hover:shadow-lg"
              onClick={() => openLightbox(image.src)}
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button 
            onClick={() => navigate('/galerie')}
            className="bg-transparent text-gray-800 border border-gray-800 font-medium px-8 py-3 rounded-md hover:bg-gray-800 hover:text-white transition-colors"
          >
            View Full Gallery
          </button>
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4" onClick={closeLightbox}>
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
      </div>
    </div>
  );
};

export default GallerySection;