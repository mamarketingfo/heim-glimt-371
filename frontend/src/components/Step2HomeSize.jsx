import React from 'react';
import { Home, Check } from 'lucide-react';

const Step2HomeSize = ({ formData, updateFormData }) => {
  const homeSizes = [
    {
      id: 'small',
      title: 'Lítið heima',
      description: 'Íbúð ella lítið hús',
      size: 'Upp til 80m²',
      rooms: '1-2 rúm',
      price: '899 kr',
      popular: false
    },
    {
      id: 'medium',
      title: 'Miðal heima',
      description: 'Familju hús ella størri íbúð',
      size: '80-150m²',
      rooms: '3-4 rúm',
      price: '1.299 kr',
      popular: true
    },
    {
      id: 'large',
      title: 'Stórt heima',
      description: 'Stórt hús ella villa',
      size: 'Yvir 150m²',
      rooms: '5+ rúm',
      price: '1.899 kr',
      popular: false
    }
  ];

  const handleSizeSelect = (sizeId) => {
    updateFormData({ homeSize: sizeId });
  };

  return (
    <div>
      <div className="text-center mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Home className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Hvussu stórt er títt heima?
        </h2>
        <p className="text-gray-600">
          Vel støddina á títum heima fyri at vit kunnu geva tær rætta prisin
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {homeSizes.map((size) => (
          <div
            key={size.id}
            onClick={() => handleSizeSelect(size.id)}
            className={`relative cursor-pointer border-2 rounded-xl p-6 transition-all duration-300 hover:scale-105 ${
              formData.homeSize === size.id
                ? 'border-blue-500 bg-blue-50 shadow-lg'
                : 'border-gray-200 hover:border-blue-300 bg-white'
            }`}
          >
            {size.popular && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
                  Mest valdi
                </div>
              </div>
            )}
            
            {formData.homeSize === size.id && (
              <div className="absolute top-4 right-4">
                <div className="bg-blue-500 text-white w-6 h-6 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4" />
                </div>
              </div>
            )}
            
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {size.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {size.description}
              </p>
              
              <div className="space-y-2 mb-6">
                <div className="bg-gray-100 rounded-lg py-2 px-4">
                  <span className="text-sm font-medium text-gray-700">{size.size}</span>
                </div>
                <div className="bg-gray-100 rounded-lg py-2 px-4">
                  <span className="text-sm font-medium text-gray-700">{size.rooms}</span>
                </div>
              </div>
              
              <div className="text-2xl font-bold text-blue-600">
                {size.price}
              </div>
              <div className="text-sm text-gray-500">
                per reingerð
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-green-50 rounded-lg p-4">
        <h3 className="font-medium text-gray-900 mb-2">Hvat er innifatur?</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Allar rúm og baðrúm</li>
          <li>• Køkur djúpreingerð</li>
          <li>• Vindeyga reingerð</li>
          <li>• Støvsúging og mopping</li>
          <li>• Professional reingerðarvørur</li>
        </ul>
      </div>
    </div>
  );
};

export default Step2HomeSize;