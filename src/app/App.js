import { useState, useEffect } from 'react';

import './App.scss';
import questions from '../assets/questions';
import Question from '../questions/Question';



function App() {
  const [quizComplete, setquizComplete] = useState(false);
  const [score, setScore] = useState(null);
  const [total, setTotal] = useState(0);
  
  useEffect(() => {
    if (score) {
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
      console.log('testing?')
  }

  const calculatePercentage= () => {
    setTotal(Math.round(score.correct.length/questions.length * 100));
    console.log('calc?')
    setquizComplete(true);
  }

  const showAnswers = (question) => {
    // console.log('question', question)
    if (!quizComplete && question.selectedAnswer) {
      console.log('IF 1')
      question.answers.forEach((answer) => {
        // console.log('answer', answer)
        if (answer === question.selectedAnswer) {
          console.log('IF 2?', answer, ":", question.selectedAnswer)
          return 'selected';
        } 
      })
    }

    if (!question.selectedAnswer) {
      return 'default';
    }
  }
  
  const resetQuiz = () => {
    setquizComplete(false);
    questions.forEach((question) => {
      // console.log('question', question)
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
        <Question questions={questions} completeQuiz={completeQuiz} quizComplete={quizComplete} showAnswers={showAnswers} />
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
