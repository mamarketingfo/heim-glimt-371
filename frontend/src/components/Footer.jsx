import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold text-blue-400 mb-4">
              Heima Reingerð
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Professional reingerðartænasta fyri Føroyar. Vit gera títt heima skinandi reint og geva tær meira tíð til tað sum betýðir mest.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Tænastur</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Grundleggjandi reingerð</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Djúpreingerð</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vindeyga reingerð</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Flyting reingerð</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Skrivstovu tænasta</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Stuðul</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Kundarúmsorga</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Javnan spurd spurningar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bóking hjálp</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Avlýsing & endurskipan</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trygging info</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Samband</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-400">+298 12 34 56</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-blue-400 mr-3" />
                <span className="text-gray-400">info@heimareingerd.fo</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                <span className="text-gray-400">
                  Niels Finsens gøta 12<br />
                  100 Tórshavn<br />
                  Føroyar
                </span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 Heima Reingerð. Øll rættindi fyrivariðin.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privatpolitikkur</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Treytir & viðurskifti</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;