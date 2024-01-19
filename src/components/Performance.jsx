// PerformanceGraph.js

import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, ReferenceArea } from 'recharts';

const Performance = ({ performanceData }) => {
  const baseline = Math.min(...performanceData.map((entry) => entry.score));

  // Determine the color of the shaded area based on the trend
  const shadingColor = performanceData[0].score <= performanceData[performanceData.length - 1].score
    ? '#82ca9d'  // Green for upward trend
    : '#ff6347'; // Red for downward trend

  return (
    <div className="w-full h-full bg-opacity-30 bg-white backdrop-filter backdrop-blur-md shadow-md rounded-lg overflow-hidden p-6 border-solid border-4 border-white-600">
    <ResponsiveContainer width="100%" height="90%">
      <LineChart data={performanceData} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
        <XAxis dataKey="attempt" stroke="#8884d8" />
        <YAxis stroke="#8884d8" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Line type="monotone" dataKey="score" stroke="#82ca9d" strokeWidth={2} dot={{ r: 6 }} />
        <ReferenceArea y1={baseline} fill={shadingColor} fillOpacity={0.3} />
      </LineChart>
    </ResponsiveContainer>
    </div>

    
  );
};

export default Performance;
