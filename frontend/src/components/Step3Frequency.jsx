import React from 'react';
import { Calendar, Check, Repeat } from 'lucide-react';

const Step3Frequency = ({ formData, updateFormData }) => {
  const frequencies = [
    {
      id: 'once',
      title: 'Eina ferð',
      description: 'Einasta ein reingerð',
      interval: 'Bara einaferð',
      discount: null,
      popular: false
    },
    {
      id: 'weekly',
      title: 'Hvørja viku',
      description: 'Fasta vikuliga reingerð',
      interval: 'Hvørja viku',
      discount: '10% frádráttur',
      popular: true
    },
    {
      id: 'biweekly',
      title: 'Hvørja aðru viku',
      description: 'Reingerð hvørja 14. dag',
      interval: 'Hvørja aðru viku',
      discount: '5% frádráttur',
      popular: false
    },
    {
      id: 'monthly',
      title: 'Hvønn mánað',
      description: 'Mánaðarlig reingerð',
      interval: 'Hvønn mánað',
      discount: null,
      popular: false
    }
  ];

  const handleFrequencySelect = (frequencyId) => {
    updateFormData({ frequency: frequencyId });
  };

  return (
    <div>
      <div className="text-center mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Repeat className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Hvussu ofta skalt tú hava reingerð?
        </h2>
        <p className="text-gray-600">
          Vel hvussu ofta tú vilt hava títt heima reingert
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {frequencies.map((frequency) => (
          <div
            key={frequency.id}
            onClick={() => handleFrequencySelect(frequency.id)}
            className={`relative cursor-pointer border-2 rounded-xl p-6 transition-all duration-300 hover:scale-105 ${
              formData.frequency === frequency.id
                ? 'border-blue-500 bg-blue-50 shadow-lg'
                : 'border-gray-200 hover:border-blue-300 bg-white'
            }`}
          >
            {frequency.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
                  Mest valdi
                </div>
              </div>
            )}
            
            {formData.frequency === frequency.id && (
              <div className="absolute top-4 right-4">
                <div className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
              </div>
            )}
            
            <div className="flex items-start">
              <div className="bg-gray-100 p-3 rounded-lg mr-4">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {frequency.title}
                </h3>
                <p className="text-gray-600 mb-3">
                  {frequency.description}
                </p>
                
                <div className="bg-gray-100 rounded-lg py-2 px-3 mb-3">
                  <span className="text-sm font-medium text-gray-700">
                    {frequency.interval}
                  </span>
                </div>
                
                {frequency.discount && (
                  <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-semibold inline-block">
                    {frequency.discount}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-yellow-50 rounded-lg p-4">
        <h3 className="font-medium text-gray-900 mb-2">Fasta reingerð fyrimunir</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Sama reingerðarteymi hvørja ferð</li>
          <li>• Frádráttur av regluligum viðskiftum</li>
          <li>• Fleksibel avlýsing</li>
          <li>• Forgang til bóking</li>
        </ul>
      </div>
    </div>
  );
};

export default Step3Frequency;