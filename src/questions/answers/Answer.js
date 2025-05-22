import { useState, useEffect } from 'react'
import './Answers.scss'

function Answer({question}) {

    const [selectedAnswer, setSelectedAnswer] = useState('')

    useEffect(() => {
        console.log("Updated selectedAnswer:", selectedAnswer);
    }, [selectedAnswer]);

    const selectAnswer = (answer) => {
        setSelectedAnswer(answer)
    }

    return (
        <div className='answers'>
            {question.answers.map((answer) => (
                <div className={`answer ${selectedAnswer === answer ? 'selected' : 'default'}`} onClick={() => {selectAnswer(answer)}} key={answer}>
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
[ ] Verify selected answer is correct answer
[ ] Update styling to reflect correct vs incorrect answer
[ ] Provide percentage correct text at the bottom of the screen
[ ] Show 'Retry?' button 
*/

/* 
Retry botton should:
[ ] Reset quiz by clearing selected answers
[ ] Reset styling of answers to default
[ ] Clear/hide percentage correct and 'Retry?' botton
 */