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
      calculatePercentage();
    }
  }, [score])


  const completeQuiz = () => {

    const scoreBreakdown = questions.reduce((acc, question) => {
        if (question.answer === question.selectedAnswer) {
            acc.correct.push(question);
            question.isCorrect = true;
        } else {
          if (question.selectedAnswer === '') {
            acc.unanswered.push(question);
          } else {
            acc.incorrect.push(question);
            question.isCorrect = false;
          }
        }
        return acc;

    }, {correct: [], incorrect: [], unanswered: []})

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
      <div className='add-question'>
        <input placeholder='Add a question'/>
        <button>Add</button>\
      </div>
      <div className='question-answers-container'>
        <Question questions={questions} completeQuiz={completeQuiz} quizComplete={quizComplete} setSelectedAnswer={setSelectedAnswer} score={score} />
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


// [ ] Should be able to add a question
// [ ] Should be able to add possible answers to that question (In an array)
// [ ] Should be able to declare which possible answer is the correct answer.
// [ ] BEHIND THE SCENES: Each new question is an object to match format of existing questions array
// [ ] New questions will be added to the end of the questions array
