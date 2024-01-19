// LeaderboardList.js

import React from 'react';

const LeaderBoardList = ({ user }) => {
  return (
    <div className="flex items-center p-4 bg-white rounded-lg mb-2 w-5/6">
      <div className="rounded-full overflow-hidden mr-4">
        <img src={user.avatar} alt="Profile" className="w-12 h-12 object-cover" />
      </div>
      <div className="flex-grow">
        <p className="text-lg font-semibold">{user.name}</p>
        <p className="text-gray-500">{user.score} points</p>
      </div>
      <div className="text-gray-700 font-semibold text-xl">{user.rank}</div>
    </div>
  );
};

export default LeaderBoardList;
