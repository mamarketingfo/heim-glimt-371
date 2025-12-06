import React from 'react';
import DashboardHeader from '../components/DashboardHeader';
import ActiveBookings from '../components/ActiveBookings';
import AccountDetails from '../components/AccountDetails';

const MinarTaenastur = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <DashboardHeader />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ActiveBookings />
          </div>
          <div className="lg:col-span-1">
            <AccountDetails />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MinarTaenastur;