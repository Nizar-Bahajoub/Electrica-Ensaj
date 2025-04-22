import React from 'react';
import { Lightbulb, Users, Zap } from 'lucide-react';
import logo from '../assets/images/1.png';

const AboutSection: React.FC = () => {
  return (
    <div id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Top section with logo and about text */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mx-10 md:mx-20">
          {/* About Text Section - Left Side */}
          <div className="w-full md:w-2/3">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold mb-6">Qui Sommes-Nous</h2>
              <p className="text-lg text-gray-700">
                Electrica est un club d'ingénierie dirigé par des étudiants à l'ENSAJ, 
                dédié au génie électrique, à la robotique et à l'innovation IoT. Nous relions 
                la théorie des cours aux projets pratiques, favorisant la créativité et 
                l'excellence technique chez les futurs ingénieurs.
              </p>
            </div>
          </div>

          {/* Logo Section - Right Side */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end">
            <img 
              src={logo} 
              alt="Logo Electrica" 
              className="h-64 w-64 md:h-80 md:w-80 object-contain" // Increased from h-48/w-48 and h-56/w-56
            />
          </div>
        </div>

        {/* Values/Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
            <div className="mb-4 p-3 bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center">
              <Lightbulb className="h-6 w-6 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p className="text-gray-700">
              Encourager les solutions d'ingénierie créatives à travers des projets 
              pratiques et des compétitions qui poussent les étudiants à penser différemment.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
            <div className="mb-4 p-3 bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center">
              <Users className="h-6 w-6 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Collaboration</h3>
            <p className="text-gray-700">
              Construire une communauté d'ingénieurs partageant les mêmes idées qui 
              travaillent ensemble pour résoudre des problèmes complexes.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
            <div className="mb-4 p-3 bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center">
              <Zap className="h-6 w-6 text-yellow-500" />
            </div>
            <h3 className="text-xl font-bold mb-2">Développement des Compétences</h3>
            <p className="text-gray-700">
              Proposer des ateliers, des formations et des expériences pratiques qui 
              améliorent les compétences techniques et préparent aux exigences de l'industrie.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;