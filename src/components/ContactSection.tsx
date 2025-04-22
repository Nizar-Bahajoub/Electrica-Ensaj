import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Send, Instagram, Linkedin, Mail } from 'lucide-react';

const ContactSection: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSubmitting(true);
    
    emailjs.sendForm(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      form.current,
      'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
    )
      .then(() => {
        setSubmitStatus({
          type: 'success',
          message: 'Message envoyé avec succès!'
        });
        if (form.current) form.current.reset();
      })
      .catch(() => {
        setSubmitStatus({
          type: 'error',
          message: "Une erreur s'est produite. Veuillez réessayer."
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Contactez-Nous</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Vous avez des questions ou souhaitez rejoindre le Club Electrica ? 
            Nous serions ravis de vous entendre ! Remplissez le formulaire ci-dessous 
            ou connectez-vous avec nous sur les réseaux sociaux.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form 
                ref={form} 
                onSubmit={sendEmail}
                className="max-w-lg mx-auto"
              >
                <div className="mb-4">
                  <label htmlFor="user_name" className="block text-sm font-medium text-gray-700 mb-1">
                    Votre Nom
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    id="user_name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="user_email" className="block text-sm font-medium text-gray-700 mb-1">
                    Adresse Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    id="user_email"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Votre Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-yellow-500 focus:border-yellow-500"
                  />
                </div>

                {submitStatus.type && (
                  <div className={`mb-4 p-3 rounded ${
                    submitStatus.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                  }`}>
                    {submitStatus.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-yellow-400 text-black font-medium px-6 py-3 rounded-md hover:bg-yellow-500 transition-colors flex items-center justify-center disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Envoi en cours...</span>
                  ) : (
                    <>
                      <span>Envoyer le Message</span>
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Informations du Club</h3>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Lieu de Réunion</h4>
                  <p className="text-gray-700">
                    Salle du Club ENSAJ #204<br />
                    École Nationale des Sciences Appliquées<br />
                    Route d'Azemmour, El Jadida, Maroc
                  </p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-2">Horaires des Réunions</h4>
                  <p className="text-gray-700">
                    Réunions Générales: Mercredi, 17h00 - 19h00<br />
                    Ateliers Ouverts: Samedi, 10h00 - 16h00
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2">Rejoignez-nous sur</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.instagram.com/electrica_ensaj/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-100 p-3 rounded-full hover:bg-yellow-100 transition-colors"
                    >
                      <Instagram className="h-5 w-5 text-gray-700" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/electrica-ensaj-858a8b328/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-gray-100 p-3 rounded-full hover:bg-yellow-100 transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-gray-700" />
                    </a>
                    <a 
                      href="mailto:electrica@ensaj.ma" 
                      className="bg-gray-100 p-3 rounded-full hover:bg-yellow-100 transition-colors"
                    >
                      <Mail className="h-5 w-5 text-gray-700" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Join Electrica Section - Full Width */}
          <div className="mt-12 bg-black text-white p-8 rounded-lg w-full">
            <h3 className="text-2xl font-bold mb-4 text-yellow-400">Rejoignez le Club Electrica</h3>
            <p className="mb-4">
              Nous recherchons toujours des étudiants passionnés par le génie électrique, 
              la robotique et l'innovation technologique.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ul className="list-disc pl-5 mb-4 text-gray-300">
                <li>Développez des compétences pratiques</li>
                <li>Travaillez sur des projets passionnants</li>
                <li>Connectez-vous avec des professionnels</li>
                <li>Construisez votre portfolio professionnel</li>
              </ul>
              <div className="text-gray-300">
                <p className="mb-4">
                  L'adhésion est ouverte à tous les étudiants de l'ENSAJ, 
                  quelle que soit leur filière ou leur année d'études.
                </p>
                <button className="bg-yellow-400 text-black font-medium px-8 py-3 rounded-md hover:bg-yellow-500 transition-colors">
                  Postuler Maintenant
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;