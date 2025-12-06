import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Edit, X, CheckCircle, AlertCircle } from 'lucide-react';

const BookingCard = ({ booking, onCancel }) => {
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [isCancelling, setIsCancelling] = useState(false);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('fo', {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    });
  };

  const getStatusInfo = (status) => {
    switch (status) {
      case 'confirmed':
        return {
          label: 'Váttað',
          color: 'text-green-700 bg-green-100',
          icon: CheckCircle
        };
      case 'pending':
        return {
          label: 'Bíðar',
          color: 'text-yellow-700 bg-yellow-100',
          icon: AlertCircle
        };
      default:
        return {
          label: 'Óvit',
          color: 'text-gray-700 bg-gray-100',
          icon: AlertCircle
        };
    }
  };

  const handleCancelBooking = async () => {
    setIsCancelling(true);
    
    // TODO: Connect to the backend API when ready
    // try {
    //   await fetch(`/api/bookings/${booking.id}`, {
    //     method: 'DELETE'
    //   });
    //   onCancel(booking.id);
    // } catch (error) {
    //   console.error('Error cancelling booking:', error);
    // }
    
    // Simulate API call
    setTimeout(() => {
      onCancel(booking.id);
      setIsCancelling(false);
      setShowCancelModal(false);
    }, 1000);
  };

  const statusInfo = getStatusInfo(booking.status);
  const StatusIcon = statusInfo.icon;

  return (
    <>
      <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            <div className="bg-blue-100 p-2 rounded-lg mr-3">
              <Calendar className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">
                {booking.type} reingerð
              </h3>
              <p className="text-sm text-gray-600">
                {booking.frequency}
              </p>
            </div>
          </div>
          
          <div className={`flex items-center px-3 py-1 rounded-full text-xs font-medium ${statusInfo.color}`}>
            <StatusIcon className="w-3 h-3 mr-1" />
            {statusInfo.label}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="w-4 h-4 mr-2" />
            <span className="text-sm">{formatDate(booking.date)}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Clock className="w-4 h-4 mr-2" />
            <span className="text-sm">Kl. {booking.time}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <span className="text-sm font-medium">{booking.price} kr</span>
          </div>
        </div>

        <div className="flex items-center text-gray-600 mb-4">
          <MapPin className="w-4 h-4 mr-2" />
          <span className="text-sm">{booking.address}</span>
        </div>

        <div className="flex justify-between items-center pt-4 border-t border-gray-100">
          <div className="text-xs text-gray-500">
            Bóking #{booking.id}
          </div>
          
          <div className="flex space-x-2">
            <button className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
              <Edit className="w-4 h-4 mr-1" />
              Broyt
            </button>
            
            <button
              onClick={() => setShowCancelModal(true)}
              className="flex items-center px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <X className="w-4 h-4 mr-1" />
              Avlýs
            </button>
          </div>
        </div>
      </div>

      {/* Cancel Modal */}
      {showCancelModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-md w-full p-6">
            <div className="text-center mb-6">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <X className="w-8 h-8 text-red-600" />
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Avlýs bóking?
              </h3>
              
              <p className="text-gray-600">
                Ert tú viss í at tú vilt avlýsa hesa bóking? Hendan gerðin kann ikki vendrast aftur.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="text-sm">
                <div className="font-medium text-gray-900">{booking.type} reingerð</div>
                <div className="text-gray-600">{formatDate(booking.date)} kl. {booking.time}</div>
              </div>
            </div>

            <div className="flex space-x-3">
              <button
                onClick={() => setShowCancelModal(false)}
                disabled={isCancelling}
                className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 font-medium transition-colors disabled:opacity-50"
              >
                Blív aftur
              </button>
              
              <button
                onClick={handleCancelBooking}
                disabled={isCancelling}
                className="flex-1 px-4 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors disabled:opacity-50"
              >
                {isCancelling ? 'Avlýsir...' : 'Avlýs bóking'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default BookingCard;