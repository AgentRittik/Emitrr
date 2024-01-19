// App.js

import React, { useState } from 'react';
import Sidebar from './SideBar';
import ProfileSection from './Profile';
import ResponsiveAppBar from './ResponsiveAppBar';
import Performance from './Performance';
import LeaderBoard from './LeaderBoard'
// import LeaderboardSection from './LeaderboardSection'; // Import your other sections as needed

const App = () => {
  const [selectedSection, setSelectedSection] = useState('profile');

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };
  const dummyUser = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    avatar : 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  };
  const dummyTopUsers = [
    { id: 1, name: 'John Doe', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', score: 1200, rank: 1 },
    { id: 2, name: 'Jane Smith', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', score: 1100, rank: 2 },
    { id: 3, name: 'Bob Johnson', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', score: 1000, rank: 3 },
    { id: 4, name: 'Alice Brown', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', score: 950, rank: 4 },
    { id: 5, name: 'Charlie Davis', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', score: 920, rank: 5 },
    { id: 6, name: 'Eva Miller', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', score: 890, rank: 6 },
    { id: 7, name: 'Frank Wilson', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', score: 860, rank: 7 },
    { id: 8, name: 'Grace Turner', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', score: 830, rank: 8 },
    { id: 9, name: 'Henry White', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', score: 800, rank: 9 },
    { id: 10, name: 'Ivy Harris', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', score: 780, rank: 10 },
  ];


  const dummyPerformanceData = [
    { attempt: 1, score: 50 },
    { attempt: 2, score: 65 },
    { attempt: 3, score: 80 },
    { attempt: 4, score: 25 },
    { attempt: 5, score: 90 },
  ];

  return (
    <div>
        <ResponsiveAppBar/>
        <div className="flex h-screen">
            {/* Sidebar */}
            <div className="w-1/4 p-4">
                <Sidebar onSelectSection={handleSectionChange} />
            </div>

            {/* Main content */}
            <div className="w-3/4 p-8">
                {selectedSection === 'profile' && <ProfileSection user={dummyUser}/>}
                {selectedSection === 'performance' && <Performance performanceData={dummyPerformanceData}/>}
                {selectedSection === 'leaderboard' && <LeaderBoard topUsers={dummyTopUsers}/>}
                {/* Add more sections as needed */}
            </div>
        </div>
    </div>
    
  );
};

export default App;
