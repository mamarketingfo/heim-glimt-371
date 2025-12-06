import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">
              Heima Reingerð
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#benefits" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Fyrimunir
              </a>
              <a href="#hvordan" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Hvussu virkar tað
              </a>
              <a href="#prisir" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors">
                Prisir
              </a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-colors">
                Byrja nú
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600 p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#benefits" className="block text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Fyrimunir
            </a>
            <a href="#hvordan" className="block text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Hvussu virkar tað
            </a>
            <a href="#prisir" className="block text-gray-600 hover:text-blue-600 px-3 py-2 text-sm font-medium">
              Prisir
            </a>
            <button className="w-full text-left bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg text-sm font-medium mt-2 transition-colors">
              Byrja nú
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;