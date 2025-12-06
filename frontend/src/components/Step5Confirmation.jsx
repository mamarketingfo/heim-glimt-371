import React, { useState } from 'react';
import { CheckCircle, User, Home, Calendar, Clock, CreditCard, AlertCircle } from 'lucide-react';

const Step5Confirmation = ({ formData }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getHomeSizeInfo = () => {
    const sizes = {
      small: { title: 'Lítið heima', price: 899 },
      medium: { title: 'Miðal heima', price: 1299 },
      large: { title: 'Stórt heima', price: 1899 }
    };
    return sizes[formData.homeSize] || { title: 'Óvalt', price: 0 };
  };

  const getFrequencyInfo = () => {
    const frequencies = {
      once: { title: 'Eina ferð', discount: 0 },
      weekly: { title: 'Hvørja viku', discount: 10 },
      biweekly: { title: 'Hvørja aðru viku', discount: 5 },
      monthly: { title: 'Hvønn mánað', discount: 0 }
    };
    return frequencies[formData.frequency] || { title: 'Óvalt', discount: 0 };
  };

  const formatDate = (dateStr) => {
    if (!dateStr) return 'Óvalt';
    const date = new Date(dateStr);
    return date.toLocaleDateString('fo', { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long' 
    });
  };

  const homeSizeInfo = getHomeSizeInfo();
  const frequencyInfo = getFrequencyInfo();
  const discount = (homeSizeInfo.price * frequencyInfo.discount) / 100;
  const finalPrice = homeSizeInfo.price - discount;

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // TODO: Connect to the backend API when ready
    // try {
    //   const response = await fetch('/api/booking', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(formData)
    //   });
    //   
    //   if (response.ok) {
    //     setIsSubmitted(true);
    //   }
    // } catch (error) {
    //   console.error('Error submitting booking:', error);
    // }
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="text-center">
        <div className="bg-green-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-white" />
        </div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Bóking váttað!
        </h2>
        
        <p className="text-lg text-gray-600 mb-6">
          Takk fyri at tú bókaði hjá okkum! Vit senda tær váttanartaku á teldupost innan fáar minuttur.
        </p>
        
        <div className="bg-green-50 rounded-lg p-6 mb-6">
          <h3 className="font-semibold text-gray-900 mb-2">Hvat hendir nú?</h3>
          <ul className="text-sm text-gray-600 space-y-2 text-left">
            <li>• Tú fært váttanartaku í teldupost</li>
            <li>• Vit senda SMS 24 tímar áður</li>
            <li>• Okkara teymi kemur á avtaltu tíðini</li>
            <li>• Tú kanst avlýsa ella endurskipa online</li>
          </ul>
        </div>
        
        <button
          onClick={() => window.location.href = '/'}
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors"
        >
          Aftur til heimasíðu
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="text-center mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Vátta títa bóking
        </h2>
        <p className="text-gray-600">
          Kanna allar upplýsingar áður enn tú váttartak
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Booking Summary */}
        <div className="space-y-6">
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <User className="w-5 h-5 text-blue-600 mr-2" />
              <h3 className="font-semibold text-gray-900">Persónligir upplýsingar</h3>
            </div>
            <div className="space-y-1 text-sm text-gray-600">
              <p>{formData.userInfo.name}</p>
              <p>{formData.userInfo.email}</p>
              <p>{formData.userInfo.phone}</p>
              <p>{formData.userInfo.address}</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <Home className="w-5 h-5 text-blue-600 mr-2" />
              <h3 className="font-semibold text-gray-900">Heima stødd & Hvussu ofta</h3>
            </div>
            <div className="space-y-1 text-sm text-gray-600">
              <p>{homeSizeInfo.title}</p>
              <p>{frequencyInfo.title}</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <Calendar className="w-5 h-5 text-blue-600 mr-2" />
              <h3 className="font-semibold text-gray-900">Dag & Tíð</h3>
            </div>
            <div className="space-y-1 text-sm text-gray-600">
              <p>{formatDate(formData.dayTime.date)}</p>
              <p>{formData.dayTime.time ? `Kl. ${formData.dayTime.time}` : 'Óvalt'}</p>
            </div>
          </div>
        </div>

        {/* Price Summary */}
        <div>
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <CreditCard className="w-5 h-5 text-blue-600 mr-2" />
              <h3 className="font-semibold text-gray-900">Pris yvirlit</h3>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Grundleggjandi reingerð</span>
                <span className="font-medium">{homeSizeInfo.price} kr</span>
              </div>
              
              {frequencyInfo.discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Frádráttur ({frequencyInfo.discount}%)</span>
                  <span>-{discount} kr</span>
                </div>
              )}
              
              <div className="border-t border-gray-200 pt-3">
                <div className="flex justify-between text-lg font-bold">
                  <span>Tilsamans</span>
                  <span className="text-blue-600">{finalPrice} kr</span>
                </div>
              </div>
            </div>
            
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-6">
              <div className="flex items-start">
                <AlertCircle className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" />
                <div className="text-sm">
                  <p className="font-medium text-yellow-800">Viðmerkjing</p>
                  <p className="text-yellow-700">
                    Betaling sker eftir fullført arbeiði. Vit taka ímóti kortaløn ella kontantum.
                  </p>
                </div>
              </div>
            </div>
            
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white py-4 rounded-lg font-semibold transition-colors disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sender bóking...' : 'Vátta bóking'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step5Confirmation;