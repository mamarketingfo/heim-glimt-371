import React from 'react';
import { User, Calendar, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

const DashboardHeader = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              Heima Reingerð
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            <Link
              to="/boking"
              className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-colors"
            >
              <Plus className="w-4 h-4 mr-2" />
              Nýggj bóking
            </Link>
            
            <div className="flex items-center text-gray-700">
              <User className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">Anna Petersen</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-1">
                Mínar tænastur
              </h1>
              <p className="text-blue-100">
                Stýr tínum bókingum og konto upplýsingum
              </p>
            </div>
            
            <div className="hidden md:flex items-center bg-blue-500/50 rounded-lg px-4 py-3">
              <Calendar className="w-5 h-5 mr-3" />
              <div className="text-sm">
                <div className="font-medium">Næsta reingerð</div>
                <div className="text-blue-100">Mánadag 15. jan kl. 09:00</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;