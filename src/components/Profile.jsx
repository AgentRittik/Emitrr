// ProfileCard.js

import React from 'react';

const ProfileCard = ({ user }) => {
  return (
    <div className="w-full h-full bg-gradient-to-b from-gray-200 to-white rounded-md backdrop-filter backdrop-blur-md shadow-md rounded-lg overflow-hidden p-6 ">
      <div className="flex flex-col items-center mb-12 mt-12">
        <img
          src={user.avatar} // Assuming 'avatar' is a URL or image source
          alt="Profile"
          className="w-24 h-24 rounded-full mb-4"
        />
        <h2 className="text-2xl font-bold mb-8">{user.name}</h2>
        <p className="text-gray-600 mb-8">{user.email}</p>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-12">
        <div className="bg-blue-100 p-4 rounded-md text-center border-solid border-4 border-blue-200">
          <p className="text-xl font-bold text-blue-700">Total Score</p>
          <p className="text-lg font-semibold">350</p>
        </div>
        <div className="bg-green-100 p-4 rounded-md text-center border-solid border-4 border-green-200">
          <p className="text-xl font-bold text-green-700">Attempts</p>
          <p className="text-lg font-semibold">25</p>
        </div>
        <div className="bg-purple-100 p-4 rounded-md text-center border-solid border-4 border-purple-200">
          <p className="text-xl font-bold text-purple-700">Ranking</p>
          <p className="text-lg font-semibold">#5</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
