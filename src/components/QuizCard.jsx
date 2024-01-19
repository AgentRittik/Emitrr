import React from 'react';
import { useNavigate } from 'react-router-dom';
import ScoreCard from './ScoreCard';
function QuizCard({ quizData, onSelectOption,correctAnswers,quizCompleted ,totalQuestions}) {
  const navigate = useNavigate();
  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-300 text-white border-solid border-4 border-green-400';
      case 'medium':
        return 'bg-yellow-300 text-gray-800 border-solid border-4 border-yellow-400';
      case 'hard':
        return 'bg-red-300 text-white border-solid border-4 border-red-400';
      default:
        return 'bg-gray-500 text-white'; // Default color for unknown difficulty
    }
  };
  const HandleHomebuttonClick = () => {
    navigate("/");
  }

  return (
    <div className="relative w-5/6 h-4/6">
       {quizCompleted && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <ScoreCard
            score={correctAnswers}
            totalQuestions={totalQuestions}
            onHomeButtonClick={() => HandleHomebuttonClick()}
          />
        </div>
      )}
      <div className="w-full h-full mx-auto mt-2 bg-gradient-to-b from-gray-200 to-white rounded-md backdrop-filter backdrop-blur-md shadow-md rounded-lg md:flex-row hover:bg-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-md overflow-hidden p-6">
        <div className="mb-12 p-4 flex justify-center">
          <h2 className="text-2xl font-bold">{quizData.question}</h2>
        </div>
        <div className="flex justify-around ">
          <div className={`p-2 text-center w-2/12 rounded-full ${getDifficultyColor(quizData.difficulty)}`}>
            {quizData.difficulty.toUpperCase()}
          </div>
          <div className="p-2 text-center w-2/12 rounded-full bg-gray-400 text-white border-solid border-4 border-gray-500">
            Correct: {correctAnswers || 0}
          </div>
        </div>
        <div className="flex items-center justify-center h-3/4">
          <div className="grid grid-cols-2 gap-4 w-5/6 h-4/6 ">
            {quizData.options.map((option, index) => (
              <button
                key={index}
                onClick={() => onSelectOption(option)}
                className="bg-blue-500 text-white p-3 rounded-md hover:bg-blue-700 transition"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      
      </div>
    </div>
    
  );
}

export default QuizCard;
