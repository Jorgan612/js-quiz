import { useState, useEffect } from 'react'
import './Answers.scss'

function Answer({question, quizComplete}) {

    const [selectedAnswer, setSelectedAnswer] = useState('')

    useEffect(() => {

    }, [selectedAnswer]);

    const selectAnswer = (answer, question) => {
        setSelectedAnswer(answer)
        question.selectedAnswer = answer;
    }

    return (
        <div className='answers'>
            {question.answers.map((answer) => (
                <div className={`answer ${(selectedAnswer === answer && !quizComplete) ? 'selected' : 'default'}`} onClick={() => {selectAnswer(answer, question)}} key={answer}>
                    <p key={answer}>{answer}</p>
                </div>
            ))}
        </div>
    )
}


export default Answer;

// Figure out adding selected Answer to question object to get score when Finish Quiz button is clicked.

/*
Implement Finish Quiz button functinality. It should: 
[X] Verify selected answer is correct answer
[ ] Update styling to reflect correct vs incorrect answer -- COME BACK TO THIS POINT UPDATED CONDITIONAL RENDER LOGIC ABOVE AND NO STYLING IS WORKING ON SELECTION
[X] Provide percentage correct text at the bottom of the screen
[X] Show 'Retry?' button 
*/

/* 
Retry botton should:
[ ] Reset quiz by clearing selected answers
[ ] Reset styling of answers to default
[ ] Clear/hide percentage correct and 'Retry?' botton
 */