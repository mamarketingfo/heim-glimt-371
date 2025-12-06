import React from 'react';
import { User, Mail, Phone, MapPin } from 'lucide-react';

const Step1UserInfo = ({ formData, updateFormData }) => {
  const handleInputChange = (field, value) => {
    updateFormData({
      userInfo: {
        ...formData.userInfo,
        [field]: value
      }
    });
  };

  return (
    <div>
      <div className="text-center mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <User className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Persónligir upplýsingar
        </h2>
        <p className="text-gray-600">
          Fyll út tínar upplýsingar fyri at vit kunnu samband við teg
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Fullt navn *
          </label>
          <div className="relative">
            <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={formData.userInfo.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="T.d. Anna Petersen"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Teldupost *
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="email"
              value={formData.userInfo.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              placeholder="anna@example.com"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Telefonnummar *
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="tel"
              value={formData.userInfo.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="+298 12 34 56"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bústaður *
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={formData.userInfo.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              placeholder="Gøta 12, 100 Tórshavn"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
          </div>
        </div>
      </div>

      <div className="mt-8 bg-blue-50 rounded-lg p-4">
        <h3 className="font-medium text-gray-900 mb-2">Privatpolitikkur</h3>
        <p className="text-sm text-gray-600">
          Tínar upplýsingar verða brúktar bert til at samband við teg um bóking og reingerð. 
          Vit deila ikki tínar upplýsingar við triðju partar.
        </p>
      </div>
    </div>
  );
};

export default Step1UserInfo;