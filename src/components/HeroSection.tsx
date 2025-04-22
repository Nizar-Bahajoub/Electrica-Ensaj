import React from 'react';
import { ChevronDown } from 'lucide-react';
import BackgroundImage from '../assets/images/Back.jpg'; // Add this import

const HeroSection: React.FC = () => {
  return (
    <div id="home" className="relative h-screen flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60"></div>
        <img
          src={BackgroundImage}
          alt="Electrica Club Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center pt-32 md:pt-40"> {/* Added padding-top */}
        <div className="transform transition-all duration-700 translate-y-0 opacity-100">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 px-4"> {/* Added horizontal padding and increased bottom margin */}
            <span className="text-yellow-400">Electrica</span> ENSAJ
          </h1>
          <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto px-4"> {/* Added horizontal padding and increased bottom margin */}
            Alimenter la Créativité & l'Innovation à l'ENSAJ
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 px-4"> {/* Added horizontal padding and increased gap */}
            <button 
              onClick={() => {
                const contactSection = document.querySelector('#contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-yellow-400 text-black font-medium px-8 py-3 rounded-md hover:bg-yellow-500 transition-colors"
            >
              Nous Rejoindre
            </button>
            <button 
              onClick={() => {
                const eventsSection = document.querySelector('#evenements');
                eventsSection?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-transparent text-white border border-white font-medium px-8 py-3 rounded-md hover:bg-white/10 transition-colors"
            >
              Voir Nos Événements
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-8 w-8 text-white" />
      </div>
    </div>
  );
};

export default HeroSection;