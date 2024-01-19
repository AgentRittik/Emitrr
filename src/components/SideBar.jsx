// Sidebar.js

import React from 'react';

const SideBar = ({ onSelectSection }) => {
  return (
    <div className="bg-gradient-to-b from-blue-700 to-blue-500 h-full text-white p-4 rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Quizzify</h1>
      <button
        className="bg-blue-600 text-white p-3 mb-2 w-full rounded-md transition duration-300 hover:bg-blue-700 hover:border-solid hover:border-2 hover:border-white-600 "
        onClick={() => onSelectSection('profile')}
      >
        Profile
      </button>
      <button
        className="bg-blue-600 text-white p-3 mb-2 w-full rounded-md transition duration-300 hover:bg-blue-700 hover:border-solid hover:border-2 hover:border-white-600"
        onClick={() => onSelectSection('leaderboard')}
      >
        Leaderboard
      </button>
      <button
        className="bg-blue-600 text-white p-3 mb-2 w-full rounded-md transition duration-300 hover:bg-blue-700 hover:border-solid hover:border-2 hover:border-white-600"
        onClick={() => onSelectSection('performance')}
      >
        Performance
      </button>
      {/* Add more buttons for other sections */}
    </div>
  );
};

export default SideBar;
