// Leaderboard.js

import React from 'react';
import LeaderboardList from './LeaderBoardList';

const Leaderboard = ({ topUsers }) => {
  return (
    <div className="w-full h-full mx-auto p-4 bg-gradient-to-b from-gray-200 to-white rounded-md">
      <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
      <div className="leaderboard-scroll w-full flex flex-col justify-start items-center" style={{ maxHeight: '500px', overflowY: 'auto' }}>
        {topUsers.map((user) => (
          <LeaderboardList key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
