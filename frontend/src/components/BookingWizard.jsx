import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import Step1UserInfo from './Step1UserInfo';
import Step2HomeSize from './Step2HomeSize';
import Step3Frequency from './Step3Frequency';
import Step4DayTime from './Step4DayTime';
import Step5Confirmation from './Step5Confirmation';

const BookingWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    userInfo: {
      name: '',
      email: '',
      phone: '',
      address: ''
    },
    homeSize: '',
    frequency: '',
    dayTime: {
      date: '',
      time: ''
    }
  });

  const steps = [
    { number: 1, title: 'Persónligir upplýsingar', component: Step1UserInfo },
    { number: 2, title: 'Heima stødd', component: Step2HomeSize },
    { number: 3, title: 'Hvussu ofta', component: Step3Frequency },
    { number: 4, title: 'Dag og tíð', component: Step4DayTime },
    { number: 5, title: 'Váttanartaka', component: Step5Confirmation }
  ];

  const updateFormData = (stepData) => {
    setFormData(prev => ({ ...prev, ...stepData }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const isStepComplete = (stepNumber) => {
    switch (stepNumber) {
      case 1:
        return formData.userInfo.name && formData.userInfo.email && formData.userInfo.phone && formData.userInfo.address;
      case 2:
        return formData.homeSize;
      case 3:
        return formData.frequency;
      case 4:
        return formData.dayTime.date && formData.dayTime.time;
      default:
        return false;
    }
  };

  const CurrentStepComponent = steps[currentStep - 1].component;

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Bóka <span className="text-blue-600">reingerð</span>
          </h1>
          <p className="text-lg text-gray-600">
            Fylg hesi 5 stigini fyri at bóka títa reingerð
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold ${
                      currentStep === step.number
                        ? 'bg-blue-600 text-white'
                        : currentStep > step.number || isStepComplete(step.number)
                        ? 'bg-green-500 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {currentStep > step.number || isStepComplete(step.number) ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      step.number
                    )}
                  </div>
                  <div className="ml-3 hidden sm:block">
                    <p className={`text-sm font-medium ${
                      currentStep === step.number ? 'text-blue-600' : 'text-gray-600'
                    }`}>
                      {step.title}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="flex-1 mx-4">
                    <div className={`h-1 rounded-full ${
                      currentStep > step.number ? 'bg-green-500' : 'bg-gray-200'
                    }`}></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-8">
          <CurrentStepComponent
            formData={formData}
            updateFormData={updateFormData}
            onNext={nextStep}
          />
        </div>

        {/* Navigation */}
        {currentStep < 5 && (
          <div className="flex justify-between mt-8">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className="flex items-center px-6 py-3 bg-gray-200 hover:bg-gray-300 disabled:bg-gray-100 disabled:text-gray-400 text-gray-700 rounded-full font-medium transition-colors disabled:cursor-not-allowed"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Aftur
            </button>
            
            <button
              onClick={nextStep}
              disabled={!isStepComplete(currentStep)}
              className="flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white rounded-full font-medium transition-colors disabled:cursor-not-allowed"
            >
              {currentStep === 4 ? 'Vátta' : 'Áfram'}
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BookingWizard;