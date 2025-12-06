import React from 'react';
import { Calendar, Clock, Check } from 'lucide-react';

const Step4DayTime = ({ formData, updateFormData }) => {
  const timeSlots = [
    { id: '09:00', time: '09:00', label: 'Morgun (09:00-12:00)' },
    { id: '13:00', time: '13:00', label: 'Miðdagur (13:00-16:00)' },
    { id: '17:00', time: '17:00', label: 'Seinnapartur (17:00-20:00)' }
  ];

  const getNextWeekDates = () => {
    const dates = [];
    const today = new Date();
    const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    
    for (let i = 0; i < 14; i++) {
      const date = new Date(nextWeek.getTime() + i * 24 * 60 * 60 * 1000);
      const dayName = date.toLocaleDateString('fo', { weekday: 'long' });
      const dateStr = date.toLocaleDateString('fo', { day: 'numeric', month: 'long' });
      
      dates.push({
        date: date.toISOString().split('T')[0],
        dayName,
        dateStr,
        available: Math.random() > 0.3 // Mock availability
      });
    }
    
    return dates;
  };

  const availableDates = getNextWeekDates();

  const handleDateSelect = (date) => {
    updateFormData({
      dayTime: {
        ...formData.dayTime,
        date
      }
    });
  };

  const handleTimeSelect = (time) => {
    updateFormData({
      dayTime: {
        ...formData.dayTime,
        time
      }
    });
  };

  return (
    <div>
      <div className="text-center mb-8">
        <div className="bg-gradient-to-r from-blue-500 to-green-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <Calendar className="w-8 h-8 text-white" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Nær passar tær best?
        </h2>
        <p className="text-gray-600">
          Vel dag og tíð sum passar tær best
        </p>
      </div>

      {/* Date Selection */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Vel dag
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {availableDates.map((dateOption) => (
            <button
              key={dateOption.date}
              onClick={() => dateOption.available && handleDateSelect(dateOption.date)}
              disabled={!dateOption.available}
              className={`p-4 rounded-lg border-2 transition-all text-center ${
                !dateOption.available
                  ? 'border-gray-200 bg-gray-100 text-gray-400 cursor-not-allowed'
                  : formData.dayTime.date === dateOption.date
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-blue-300 bg-white text-gray-700'
              }`}
            >
              {formData.dayTime.date === dateOption.date && (
                <div className="flex justify-center mb-1">
                  <Check className="w-4 h-4 text-blue-600" />
                </div>
              )}
              <div className="text-sm font-medium">{dateOption.dayName}</div>
              <div className="text-xs mt-1">{dateOption.dateStr}</div>
              {!dateOption.available && (
                <div className="text-xs text-red-500 mt-1">Upptiki</div>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Time Selection */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Vel tíð
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {timeSlots.map((slot) => (
            <button
              key={slot.id}
              onClick={() => handleTimeSelect(slot.time)}
              className={`p-4 rounded-lg border-2 transition-all flex items-center justify-center ${
                formData.dayTime.time === slot.time
                  ? 'border-blue-500 bg-blue-50 text-blue-700'
                  : 'border-gray-200 hover:border-blue-300 bg-white text-gray-700'
              }`}
            >
              <Clock className="w-5 h-5 mr-3 text-gray-400" />
              <div>
                <div className="font-medium">{slot.label}</div>
              </div>
              {formData.dayTime.time === slot.time && (
                <Check className="w-5 h-5 ml-auto text-blue-600" />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8 bg-blue-50 rounded-lg p-4">
        <h3 className="font-medium text-gray-900 mb-2">Viðmerkjing</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Vit senda tær SMS váttanartaku 24 tímar áður</li>
          <li>• Tú kanst avlýsa ella endurskipa upp til 24 tímar áður</li>
          <li>• Okkara teymi kemur punktligt á avtaltu tíðini</li>
        </ul>
      </div>
    </div>
  );
};

export default Step4DayTime;