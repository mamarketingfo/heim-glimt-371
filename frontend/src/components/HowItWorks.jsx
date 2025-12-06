import React from 'react';
import { Calendar, MapPin, Sparkles, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Calendar,
      title: 'Bóka online',
      description: 'Vel dag og tíð sum passar tær best. Fyll út einfalt bókingarform.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MapPin,
      title: 'Vit koma til tín',
      description: 'Okkara fagliga teymi kemur til tíns heima á avtaltu tíðini.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Sparkles,
      title: 'Professional reingerð',
      description: 'Vit gera títt heima grunduligt reint við professionellum útbúnaði.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: CheckCircle,
      title: 'Nøktað heima',
      description: 'Kom heim til eitt skinandi reint og nøktað heima. Njót tín frítíð!',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="hvordan" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Hvussu <span className="text-blue-600">virkar tað</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Bara 4 einføld stig til eitt skinandi reint heima.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div key={index} className="relative text-center group">
                <div className="relative">
                  <div className={`bg-gradient-to-r ${step.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-white text-gray-900 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg border-2 border-gray-100">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full">
                    <div className="h-px bg-gradient-to-r from-gray-300 to-transparent"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all hover:scale-105 shadow-lg">
            Byrja í dag
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;