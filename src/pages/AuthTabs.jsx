import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

function AuthTabs() {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="w-full max-w-md mx-auto mt-10 p-4 bg-white rounded-lg shadow-lg">
      <div className="flex justify-around">
        <button
          onClick={() => handleTabChange('login')}
          className={`text-lg font-semibold ${
            activeTab === 'login' ? 'text-black border-b-4 border-gold' : 'text-gray-500'
          }`}
        >
          Login
        </button>
        <button
          onClick={() => handleTabChange('register')}
          className={`text-lg font-semibold ${
            activeTab === 'register' ? 'text-black border-b-4 border-gold' : 'text-gray-500'
          }`}
        >
          Sign-up
        </button>
      </div>

      <div className="mt-6">
        {activeTab === 'login' ? <Login /> : <Register />}
      </div>
    </div>
  );
}

export default AuthTabs;
