import React from 'react';
import { Zap, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <Zap className="h-8 w-8 text-yellow-400" />
              <span className="ml-2 text-xl font-bold">Electrica</span>
            </div>
            <p className="text-gray-400 mb-4">
              Encourager l'innovation étudiante en génie électrique à l'ENSAJ depuis 2022.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li><a href="#apropos" className="text-gray-400 hover:text-yellow-400 transition-colors">À Propos</a></li>
              <li><a href="#evenements" className="text-gray-400 hover:text-yellow-400 transition-colors">Événements</a></li>
              <li><a href="#galerie" className="text-gray-400 hover:text-yellow-400 transition-colors">Galerie</a></li>
              <li><a href="#actualites" className="text-gray-400 hover:text-yellow-400 transition-colors">Actualités</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-yellow-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Ressources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Archive des Projets</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Matériel d'Apprentissage</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Devenir Membre</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-400 transition-colors">Devenir Partenaire</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Nous Contacter</h3>
            <address className="not-italic text-gray-400 space-y-2">
              <p>École Nationale des Sciences Appliquées</p>
              <p>Route d'Azemmour, El Jadida, Maroc</p>
              <p>Email: <a href="mailto:electrica@ensaj.ma" className="hover:text-yellow-400 transition-colors">electrica@ensaj.ma</a></p>
            </address>
          </div>
        </div>

        <div className="py-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Club Electrica | App In Sciences ENSA - El Jadida
          </p>
          <button 
            onClick={scrollToTop}
            className="flex items-center text-gray-400 hover:text-yellow-400 transition-colors"
          >
            <span className="mr-2">Retour en Haut</span>
            <ChevronUp className="h-4 w-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;