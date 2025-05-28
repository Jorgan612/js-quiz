import { useState, useEffect } from 'react'
import './Answers.scss'

function Answer({question, quizComplete, selectedAnswer, setSelectedAnswer}) {

    const selectAnswer = (answer, question) => {
        setSelectedAnswer(answer);
        question.selectedAnswer = answer;
    }

    return (
        <div className='answers'>
            {question.answers.map((answer) => (
                <div className='default' key={answer}>
                    {!quizComplete && <div className={`${answer === selectedAnswer ? 'selected' : 'default'}`} onClick={() => {selectAnswer(answer, question)}}>
                        <p key={answer}>{answer}</p>
                    </div>}

                    {quizComplete && <div className={`${answer === selectedAnswer ? (question.answer === answer ? 'correct' : 'incorrect') : 'default'}`}>
                        <p key={answer}>{answer}</p>
                    </div>}
                </div>
            ))}
        </div>
    )
}

export default Answer;