import { useState } from 'react';

import './App.scss';
import questions from '../assets/questions';
import Question from '../questions/Question';



function App() {
  const [quizComplete, setquizComplete] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        JS Trivia!
      </header>
      <div className='question-answers-container'>
        <Question questions={questions} />
      </div>
      <div className='lists'>

      </div>
      {quizComplete && <button>Retry?</button>}
    </div>
  );
}

export default App;
