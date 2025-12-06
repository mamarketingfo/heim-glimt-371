import React from 'react';
import { Check, Star } from 'lucide-react';

const PricingTable = () => {
  const plans = [
    {
      name: 'Grundleggjandi',
      price: '899',
      description: 'Perfect fyri smá heimini og íbúðir',
      features: [
        'Upp til 80m² yvirlit',
        'Baðrúm og køkur reingerð',
        'Støvsúging og mopping',
        'Vindeyga reingerð (innan fyri)',
        '2-3 tímar arbeiði'
      ],
      popular: false
    },
    {
      name: 'Standard',
      price: '1299',
      description: 'Mest valdi møguleikin fyri familjar',
      features: [
        'Upp til 150m² yvirlit',
        'Allar rúm og baðrúm',
        'Køkur djúpreingerð',
        'Vindeyga reingerð (innan og útan fyri)',
        'Hurðarkarmar og lister',
        '4-5 tímar arbeiði'
      ],
      popular: true
    },
    {
      name: 'Premium',
      price: '1899',
      description: 'Komplett reingerð fyri stór heimini',
      features: [
        'Óbundið yvirlit',
        'Øll rúm, baðrúm og køkur',
        'Djúpreingerð av øllum støðum',
        'Vindeyga og jalusier',
        'Skápir innan fyri',
        'Ljósarmar og ventilationar',
        '6-8 tímar arbeiði'
      ],
      popular: false
    }
  ];

  return (
    <section id="prisir" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Veldu rættu <span className="text-blue-600">pakkan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transparent prising uttan fjaldar kostnaðir. Øll prisir innihalda moms og arbeiðslón.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-white rounded-2xl shadow-xl border-2 transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-blue-500 ring-4 ring-blue-100' 
                  : 'border-gray-200 hover:border-blue-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="w-4 h-4 mr-2 fill-current" />
                    Mest valdi
                  </div>
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>
                
                <div className="mb-8">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-2">kr</span>
                  <div className="text-sm text-gray-500 mt-1">per reingerð</div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white shadow-lg hover:scale-105'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  Bóka nú
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 bg-blue-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Trýggur við okkara arbeiði?
          </h3>
          <p className="text-gray-600">
            Vit geva 100% peningaaftur trygging. Eru tit ikki nøgd, so fáið tit øll peningin aftur.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingTable;