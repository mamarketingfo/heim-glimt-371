import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Edit, CreditCard, Gift, Settings } from 'lucide-react';

const AccountDetails = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'Anna Petersen',
    email: 'anna.petersen@example.com',
    phone: '+298 12 34 56',
    address: 'Niels Finsens gøta 12, 100 Tórshavn'
  });

  const stats = [
    {
      label: 'Tilsamans reingerðir',
      value: '12',
      icon: CreditCard,
      color: 'text-blue-600 bg-blue-100'
    },
    {
      label: 'Spart tíð',
      value: '48t',
      icon: Gift,
      color: 'text-green-600 bg-green-100'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Account Info */}
      <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-gray-900">
            Konto upplýsingar
          </h2>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="flex items-center text-blue-600 hover:text-blue-700 text-sm font-medium"
          >
            <Edit className="w-4 h-4 mr-1" />
            {isEditing ? 'Goyma' : 'Broyt'}
          </button>
        </div>

        <div className="space-y-4">
          <div className="flex items-center">
            <User className="w-5 h-5 text-gray-400 mr-3" />
            {isEditing ? (
              <input
                type="text"
                value={userInfo.name}
                onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
              />
            ) : (
              <span className="text-gray-900">{userInfo.name}</span>
            )}
          </div>

          <div className="flex items-center">
            <Mail className="w-5 h-5 text-gray-400 mr-3" />
            {isEditing ? (
              <input
                type="email"
                value={userInfo.email}
                onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
              />
            ) : (
              <span className="text-gray-900">{userInfo.email}</span>
            )}
          </div>

          <div className="flex items-center">
            <Phone className="w-5 h-5 text-gray-400 mr-3" />
            {isEditing ? (
              <input
                type="tel"
                value={userInfo.phone}
                onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm"
              />
            ) : (
              <span className="text-gray-900">{userInfo.phone}</span>
            )}
          </div>

          <div className="flex items-start">
            <MapPin className="w-5 h-5 text-gray-400 mr-3 mt-0.5" />
            {isEditing ? (
              <textarea
                value={userInfo.address}
                onChange={(e) => setUserInfo({ ...userInfo, address: e.target.value })}
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm resize-none"
                rows={2}
              />
            ) : (
              <span className="text-gray-900">{userInfo.address}</span>
            )}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Mínar hagtøl
        </h3>
        
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 ${stat.color}`}>
                  <IconComponent className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-600">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Loyalty Program */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white">
        <div className="flex items-center mb-4">
          <Gift className="w-6 h-6 mr-2" />
          <h3 className="text-lg font-semibold">
            Loyalty áætlan
          </h3>
        </div>
        
        <p className="text-purple-100 mb-4 text-sm">
          Fá 10% frádráttur eftir 5 reingerðir!
        </p>
        
        <div className="bg-white/20 rounded-full h-2 mb-2">
          <div className="bg-white h-2 rounded-full" style={{ width: '40%' }}></div>
        </div>
        
        <div className="text-xs text-purple-100">
          2 av 5 reingerðir
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg border border-white/30 p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Skjót gerðir
        </h3>
        
        <div className="space-y-3">
          <button className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex items-center">
              <Settings className="w-5 h-5 text-gray-400 mr-3" />
              <span className="text-gray-700">Stillingar</span>
            </div>
          </button>
          
          <button className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex items-center">
              <CreditCard className="w-5 h-5 text-gray-400 mr-3" />
              <span className="text-gray-700">Betaling søga</span>
            </div>
          </button>
          
          <button className="w-full flex items-center justify-between p-3 text-left hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-gray-400 mr-3" />
              <span className="text-gray-700">Samband</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountDetails;