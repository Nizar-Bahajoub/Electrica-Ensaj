import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import EventsSection from '../components/EventsSection';
import GallerySection from '../components/GallerySection';
import NewsSection from '../components/NewsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import SponsorsSection from '../components/SponsorsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <div className="font-[Poppins], sans-serif">
      <Navbar />
      <div id="accueil"><HeroSection /></div>
      <div id="apropos"><AboutSection /></div>
      <div id="evenements"><EventsSection /></div>
      <div id="galerie"><GallerySection /></div>
      <div id="actualites"><NewsSection /></div>
      <div id="testimonials"><TestimonialsSection /></div>
      <div id="sponsors"><SponsorsSection /></div>
      <div id="contact"><ContactSection /></div>
      <Footer />
    </div>
  );
};

export default Home;