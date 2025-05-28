import { useState, useEffect } from 'react';

import './App.scss';
import questions from '../assets/questions';
import Question from '../questions/Question';



function App() {

  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [quizComplete, setquizComplete] = useState(false);
  const [score, setScore] = useState(null);
  const [total, setTotal] = useState(0);

  
  useEffect(() => {
    if (score) {
      console.log(score)
      calculatePercentage();
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

  const calculatePercentage= () => {
    setTotal(Math.round(score.correct.length/questions.length * 100));
    setquizComplete(true);
  }
  
  const resetQuiz = () => {
    setquizComplete(false);
    setScore(null);
    setTotal(0);
    setSelectedAnswer('');
    questions.forEach((question) => {
      question.isCorrect = false;
      question.selectedAnswer = '';
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        JS Quiz!
      </header>
      <div className='question-answers-container'>
        <Question questions={questions} completeQuiz={completeQuiz} quizComplete={quizComplete} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
      </div>
      <div className='lists'>

      </div>
      {quizComplete && 
      <div className='score'>
        <p>You got {score.correct.length} out of {questions.length} questions correct! Score: {total}%</p>
        <button onClick={resetQuiz}>Retry?</button>
      </div>}
    </div>
  );
}

export default App;

/*
NEW BUG!

Moved selectedAnswer to App to be able to clear selected answers when Retry? button is clicked. Now selected Answer only applies styling to most recent answer selected and does not maintain styling for previously selected answers.


*/
