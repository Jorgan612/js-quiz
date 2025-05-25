import { useState, useEffect } from 'react';
import Answer from './answers/Answer';
import './Question.scss';

function Question({questions, completeQuiz, quizComplete, showAnswers}) {


    return (
        <div className='question'>
                {questions.map((q) => (
            <div key={q.question}>
                <p>{q.question}</p>
                <Answer question={q} quizComplete={quizComplete} showAnswers={showAnswers} />
                <div>******************************************************************************************</div>
            </div>
                ))}
                <button onClick={completeQuiz}>Finish Quiz</button>

        </div>
    )
}


export default Question;