import React from 'react';
import { Sparkles, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            Faroe Islands #1 Reingerðarúrtak
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 leading-tight mb-6">
            <span className="text-blue-600">Professional</span> reingerð<br />
            fyri títt <span className="text-green-600">heima</span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Vit gera títt heima reint og nøktað við professionellum reingerðarteimum. 
            Spar tíð og orku - lat okkum umhugsa reingerðina meðan tú nýtur tín frítíð.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg">
              Fá frítt tilboð
            </button>
            <button className="border-2 border-gray-300 hover:border-blue-600 text-gray-700 hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-colors">
              Hygg okkara arbeiði
            </button>
          </div>
          
          <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
            <div className="flex items-center">
              <div className="flex text-yellow-400 mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span>4.9/5 frá 200+ viðskiftum</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-300"></div>
            <div>Tryggað og viðurskikað</div>
          </div>
        </div>
        
        <div className="mt-16 relative">
          <div className="bg-white/30 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                <div className="text-gray-600">Nøgd viðskifti</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-gray-600">Viðskiftatrygd</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600">Kundarúmsorga</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;