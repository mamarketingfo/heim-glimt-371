import React from 'react';
import { Clock, Shield, Smile, Zap, Heart, Award } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Spar tíð',
      description: 'Meira tíð til familju og áhugamál. Vit taka okkum av allari reingerð.'
    },
    {
      icon: Shield,
      title: 'Tryggað arbeiði',
      description: 'Fullt tryggjarabræv og professionell reingerð hvørja ferð.'
    },
    {
      icon: Smile,
      title: 'Nøgd viðskifti',
      description: '98% av okkara viðskiftum eru fullkomlega nøgd við okkara arbeiði.'
    },
    {
      icon: Zap,
      title: 'Skjót bóking',
      description: 'Bóka í 2 minutum og fá reingerð í næstu viku.'
    },
    {
      icon: Heart,
      title: 'Umhvørvisvinarligt',
      description: 'Vit brúka bert umhvørvisvinarlig og tryggi reingerðarvørur.'
    },
    {
      icon: Award,
      title: 'Faglig kvalitetur',
      description: 'Útbúgvin og royndin starvsólk við yrkismenntaskap.'
    }
  ];

  return (
    <section id="benefits" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Hví velja <span className="text-blue-600">Heima Reingerð</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vit gera títt lív einfaldari og geva tær meira tíð til tað sum betýðir mest.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon;
            return (
              <div 
                key={index} 
                className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-white/30"
              >
                <div className="bg-gradient-to-r from-blue-500 to-green-500 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Benefits;