import { useState, useEffect } from 'react';
import Answer from './answers/Answer';
import './Question.scss';

function Question({questions, completeQuiz, quizComplete, selectedAnswer, setSelectedAnswer}) {

    return (
        <div className='question'>
                {questions.map((q) => (
            <div key={q.question}>
                <p>{q.question}</p>
                <Answer question={q} quizComplete={quizComplete} selectedAnswer={selectedAnswer} setSelectedAnswer={setSelectedAnswer} />
                <div>******************************************************************************************</div>
            </div>
                ))}
                {<button onClick={completeQuiz}>Finish Quiz</button>}

        </div>
    )
}


export default Question;

// [ ] Disable Finish Quiz button until all questions have a selected answer