import { useState, useEffect } from 'react';

import './App.scss';
import questions from '../assets/questions';
import Question from '../questions/Question';



function App() {
  const [quizComplete, setquizComplete] = useState(false);
  const [score, setScore] = useState(null)


  useEffect(() => {
    if (score) {
      calculateScore();
    }
  }, [score])


  const completeQuiz = () => {
      const scoreBreakdown = questions.reduce((acc, question) => {
          if (question.answer === question.selectedAnswer) {
              acc.correct.push(question);
              question.isCorrect = true;
          } else {
              acc.incorrect.push(question);
              question.isCorrect = false;
          }
          return acc;

      }, {correct: [], incorrect: []})
      setScore(scoreBreakdown);
  }

  const calculateScore = () => {
    
  }

  return (
    <div className="App">
      <header className="App-header">
        JS Quiz!
      </header>
      <div className='question-answers-container'>
        <Question questions={questions} completeQuiz={completeQuiz} />
      </div>
      <div className='lists'>

      </div>
      {!quizComplete && 
      <div className='score'>
        <p>You got {score.correct.length} out of {questions.length} questions correct! Score: {Math.round(score.correct.length/questions.length * 100)}%</p>
        <button>Retry?</button>
      </div>}
    </div>
  );
}

export default App;
