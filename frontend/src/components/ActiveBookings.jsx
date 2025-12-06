import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import BookingCard from './BookingCard';

const ActiveBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Connect to the backend API when ready
    // const fetchBookings = async () => {
    //   try {
    //     const response = await fetch('/api/dashboard');
    //     const data = await response.json();
    //     setBookings(data.bookings);
    //   } catch (error) {
    //     console.error('Error fetching bookings:', error);
    //   } finally {
    //     setLoading(false);
    //   }
    // };
    // fetchBookings();

    // Using mock data for now
    const mockBookings = [
      {
        id: 1,
        date: '2024-01-15',
        time: '09:00',
        type: 'Standard',
        status: 'confirmed',
        address: 'Niels Finsens gøta 12, Tórshavn',
        price: 1299,
        frequency: 'Hvørja viku'
      },
      {
        id: 2,
        date: '2024-01-22',
        time: '13:00',
        type: 'Grundleggjandi',
        status: 'confirmed',
        address: 'Niels Finsens gøta 12, Tórshavn',
        price: 899,
        frequency: 'Hvørja viku'
      },
      {
        id: 3,
        date: '2024-01-29',
        time: '09:00',
        type: 'Standard',
        status: 'pending',
        address: 'Niels Finsens gøta 12, Tórshavn',
        price: 1299,
        frequency: 'Hvørja viku'
      }
    ];
    
    setTimeout(() => {
      setBookings(mockBookings);
      setLoading(false);
    }, 1000);
  }, []);

  const handleCancelBooking = (bookingId) => {
    setBookings(bookings.filter(booking => booking.id !== bookingId));
  };

  if (loading) {
    return (
      <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-48 mb-4"></div>
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">
          Mínar bókingar
        </h2>
        <div className="text-sm text-gray-600">
          {bookings.length} aktiv{bookings.length === 1 ? '' : 'ar'} bóking{bookings.length === 1 ? '' : 'ar'}
        </div>
      </div>

      {bookings.length === 0 ? (
        <div className="text-center py-12">
          <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Ongar bókingar
          </h3>
          <p className="text-gray-600 mb-6">
            Tú hevur ongar komandi bókingar. Bóka nýggja reingerð í dag!
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium transition-colors">
            Bóka nú
          </button>
        </div>
      ) : (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <BookingCard
              key={booking.id}
              booking={booking}
              onCancel={handleCancelBooking}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ActiveBookings;