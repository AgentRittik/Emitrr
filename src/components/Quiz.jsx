import React,{useState}from 'react'
import ResponsiveAppBar from './ResponsiveAppBar'
import QuizCard from './QuizCard'
import backgroundImage from '../resources/blue.svg'
import {useLocation} from 'react-router-dom';
import Confetti from 'react-confetti';
  
const quizData = [
    {
      question: "Which of the following is not a valid C++ identifier?",
      options: ["_variable", "1variable", "variable123", "class"],
      difficulty: "medium",
      correctAnswer: "1variable",
    },
    {
      question: "What is the size of the 'int' data type in C++?",
      options: ["2 bytes", "4 bytes", "8 bytes", "Depends on the compiler"],
      difficulty: "easy",
      correctAnswer: "Depends on the compiler",
    },
    {
      question: "What is the purpose of 'cin.ignore()' in C++?",
      options: [
        "To ignore the next character in the input buffer",
        "To clear the input buffer",
        "To ignore the entire input buffer",
        "To ignore a specific number of characters in the input buffer",
      ],
      difficulty: "medium",
      correctAnswer: "To ignore a specific number of characters in the input buffer",
    },
    {
      question: "Which operator is used to allocate memory for an array in C++?",
      options: ["malloc", "calloc", "new", "alloc"],
      difficulty: "easy",
      correctAnswer: "new",
    },
    {
      question: "What is the purpose of the 'virtual' keyword in C++?",
      options: [
        "To declare a variable as virtual",
        "To define a virtual function",
        "To declare a class as virtual",
        "To declare a function as virtual",
      ],
      difficulty: "medium",
      correctAnswer: "To declare a function as virtual",
    },
    {
      question: "What is the result of 'sizeof(char)' in C++?",
      options: ["1", "2", "4", "Depends on the compiler"],
      difficulty: "easy",
      correctAnswer: "1",
    },
    {
      question: "What is the purpose of 'static' keyword in C++?",
      options: [
        "To declare a variable as constant",
        "To declare a variable as static",
        "To declare a function as static",
        "To declare a class as static",
      ],
      difficulty: "medium",
      correctAnswer: "To declare a variable as static",
    },
    {
      question: "What is the use of 'typeid' operator in C++?",
      options: [
        "To find the type of an expression",
        "To find the type of a variable",
        "To find the type of a class",
        "To find the type of an object",
      ],
      difficulty: "hard",
      correctAnswer: "To find the type of an expression",
    },
  ];
  
  
function Quiz() {
    const [currentIndex , setCurrentIndex] = React.useState(0);
    const[currentquestion , setCurrentQuestion] = React.useState(quizData[currentIndex]);
    const [correctAnswers , setCorrectAnswers] = React.useState(0);
    const [quizCompleted, setQuizCompleted] = useState(false);
    const location = useLocation();
    const confettiConfig = {
        angle: 90,
        spread: 360,
        startVelocity: 40,
        elementCount: 70,
        dragFriction: 0.12,
        duration: 3000,
        stagger: 3,
        width: '500px',
        height: '500px',
        colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
      };

    const handleSelectOption = (value)=>{
        if(value === currentquestion.correctAnswer){
            setCorrectAnswers(correctAnswers+1)
        }
        if(currentIndex === quizData.length-1){
            setQuizCompleted(true)
            setCurrentIndex(0)
            return;
        }
        if(currentIndex < quizData.length-1){
            setCurrentIndex(currentIndex+1)
            setCurrentQuestion(quizData[currentIndex])
        }
    }
  return (
    <div style={{ backgroundImage:`url(${backgroundImage})`}} className='backdrop-blur-lg'>
        {quizCompleted && (
            <Confetti active={true} config={confettiConfig} />
        )}
        
        <ResponsiveAppBar/>
        <div style={{marginTop: 10}} className='h-screen'>
            <div className="flex justify-center items-center h-full">
                <QuizCard
                    quizData={currentquestion}
                    onSelectOption={handleSelectOption}
                    correctAnswers={correctAnswers}
                    quizCompleted={quizCompleted}
                    totalQuestions={quizData.length}
                />
            </div>
        </div>
    </div>
    
  )
}

export default Quiz