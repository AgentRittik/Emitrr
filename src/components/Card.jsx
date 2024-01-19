import React from 'react';
import { useNavigate } from 'react-router-dom';

function Card({ data }) {
  const totalQuestions = 20; // Assuming a total of 20 questions for demonstration
  const solvedQuestions = data.solvedQuestions || 0; // Replace with the actual number of solved questions
  const navigate = useNavigate();
  const progressPercentage = (solvedQuestions / totalQuestions) * 100;

  function startQuiz(name) {
    navigate("/startquiz", { state: { name: name } });
  }

  return (
    <div
      className="object-cover w-full h-56 max-width-full max-height-56 flex flex-col gap-12 items-center bg-gradient-to-b from-gray-200 to-white rounded-md backdrop-filter backdrop-blur-md shadow-md rounded-lg md:flex-row hover:bg-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-300 transform hover:scale-105"
      onClick={() => { startQuiz(data.name) }}
    >
      <img
        className="object-cover w-full h-48 md:h-full md:w-48 md:rounded-none md:rounded-s-lg"
        src={data.avatar}
        alt="Data Profile"
      />
      <div className="flex flex-col gap-12 justify-between p-4 leading-normal w-full">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800 text">
          {data.name}
        </h5>
        <div className="flex flex-col gap-2 items-start space-x-2 mb-3">
          <div className="w-full h-4 bg-gray-300 dark:bg-gray-700 rounded-full overflow-hidden">
            <div
              className="h-full dark:bg-green-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <span className="text-gray-700">
            {`${solvedQuestions}/${totalQuestions}`}
          </span>
        </div>
        {/* Additional content goes here */}
      </div>
    </div>
  );
}

export default Card;
