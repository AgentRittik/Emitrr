import React from 'react';
// import Confetti from 'react-confetti';

function ScoreCard({ score, totalQuestions, onHomeButtonClick }) {
//   const confettiConfig = {
//     angle: 90,
//     spread: 360,
//     startVelocity: 40,
//     elementCount: 70,
//     dragFriction: 0.12,
//     duration: 3000,
//     stagger: 3,
//     width: '500px',
//     height: '500px',
//     colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
//   };

  return (
    // <div className="w-5/6 h-4/6 mx-auto mt-2 bg-gradient-to-b from-gray-200 to-white rounded-md backdrop-filter backdrop-blur-md shadow-md rounded-lg md:flex-row hover:bg-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-md overflow-hidden p-6 relative">
      
      <div className=" absolute inset-0 flex items-center justify-center z-10">
        <div className="bg-white  h-full p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold mb-6 text-center">Congratulations!</h2>
          <p className="text-lg mb-4 text-center">
            You've completed the quiz. Here's your score:
          </p>
          <div className="flex items-center justify-center text-5xl font-bold mb-6 text-blue-500">
            {score}/{totalQuestions}
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={onHomeButtonClick}
              className="bg-blue-500 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition"
            >
              Go to Home
            </button>
          </div>
        </div>
      </div>
    // </div>
  );
}

export default ScoreCard;
