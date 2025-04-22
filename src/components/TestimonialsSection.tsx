import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import directorImage from '../assets/images/directeur.jpg';
import professorImage from '../assets/images/professeur.jpg';
import presidentImage from '../assets/images/president.jpg';

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  image: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "ElectriGenius représente parfaitement l'esprit d'innovation que nous cultivons à l'ENSAJ. C'est une fierté de voir nos étudiants organiser un événement d'une telle envergure.",
      name: "Pr. Abdelwahed Hajjaji",
      role: "Directeur de l'ENSAJ",
      image: directorImage
    },
    {
      id: 2,
      quote: "La qualité des projets présentés et l'engagement des participants démontrent le niveau d'excellence atteint par ElectriGenius. C'est un exemple parfait de l'apprentissage par la pratique.",
      name: "Pr. Abderahim Boutaher",
      role: "Responsable de l'Organisation",
      image: professorImage
    },
    {
      id: 3,
      quote: "En tant que président du club, je suis fier de voir comment ElectriGenius a rassemblé les étudiants autour de projets innovants et créé une véritable communauté d'apprentissage.",
      name: "Salah Eddine El Bahri",
      role: "Président du Club Electrica",
      image: presidentImage
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToPrevious = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
    }
  };

  const goToNext = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentIndex]);

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 6000);
    
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Témoignages</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Découvrez ce que nos membres et enseignants disent de leurs expériences 
            avec le Club Electrica.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-900 rounded-xl p-8 md:p-10 relative">
                    <Quote className="absolute top-6 left-6 h-10 w-10 text-yellow-400 opacity-20" />
                    <div className="flex flex-col md:flex-row items-center">
                      <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-24 h-24 rounded-full object-cover border-2 border-yellow-400"
                        />
                      </div>
                      <div className="md:w-3/4 md:pl-6">
                        <p className="text-lg mb-6 italic text-gray-300">"{testimonial.quote}"</p>
                        <div>
                          <h4 className="font-bold text-yellow-400">{testimonial.name}</h4>
                          <p className="text-gray-400">{testimonial.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button 
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-yellow-400 text-black rounded-full p-2 opacity-75 hover:opacity-100 transition-opacity"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button 
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-yellow-400 text-black rounded-full p-2 opacity-75 hover:opacity-100 transition-opacity"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Indicators */}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 w-2 rounded-full mx-1 transition-all ${
                  currentIndex === index ? 'bg-yellow-400 w-8' : 'bg-gray-600'
                }`}
                aria-label={`Aller à la diapositive ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;