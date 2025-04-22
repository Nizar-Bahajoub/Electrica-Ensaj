import React from 'react';
import ucdLogo from '../assets/images/ucd.png';
import aisLogo from '../assets/images/ais.png';
import aeiLogo from '../assets/images/aei.png';
import ensajLogo from '../assets/images/logo_ensaj_upscaled.png';

const SponsorsSection: React.FC = () => {
  const sponsors = [
    { name: "UCD", logo: ucdLogo },
    { name: "ENSAJ", logo: ensajLogo },
    { name: "App In Sciences", logo: aisLogo },
    { name: "AEI", logo: aeiLogo },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Nos Partenaires</h2>
          <p className="text-gray-600">Soutenus par nos précieux partenaires académiques</p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="transition-all duration-300">
              <img 
                src={sponsor.logo} 
                alt={sponsor.name}
                className="h-24 md:h-32 object-contain" // Increased size for better visibility
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SponsorsSection;