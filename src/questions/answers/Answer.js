import { useState, useEffect } from 'react'
import './Answers.scss'

function Answer({question, quizComplete, showAnswers}) {

    const [selectedAnswer, setSelectedAnswer] = useState('')

    const selectAnswer = (answer, question) => {
        setSelectedAnswer(answer)
        question.selectedAnswer = answer;
    }

    return (
        <div className='answers'>
            {question.answers.map((answer) => (
                <div className='answer'>
                    {!quizComplete && <div className={`test1 ${answer === selectedAnswer && !quizComplete ? 'selected' : 'default'}`} onClick={() => {selectAnswer(answer, question)}} key={answer}>
                        <p key={answer}>{answer}</p>
                    </div>}

                    {quizComplete && <div className={`test2 ${answer === selectAnswer ? 'correct' : 'incorrect'}`} onClick={() => {selectAnswer(answer, question)}} key={answer}>
                        <p key={answer}>{answer}</p>
                    </div>}
                </div>

            ))}
        </div>
    )
}

// NOTE: When quizComplete is no longer false 'default' is the style. Add like an else if to the terinary to account for completed quiz status.


export default Answer;

/*
Implement Finish Quiz button functinality. It should: 
[X] Verify selected answer is correct answer
[ ] Update styling to reflect correct vs incorrect answer -- COME BACK TO THIS POINT UPDATED CONDITIONAL RENDER LOGIC ABOVE AND NO STYLING IS WORKING ON SELECTION AFTER FINISH QUIZ BUTTON IS CLICKED! (Selected styling works before that)
[X] Provide percentage correct text at the bottom of the screen
[X] Show 'Retry?' button 
*/

/* 
Retry botton should:
[ ] Reset quiz by clearing selected answers
[ ] Reset styling of answers to default
[ ] Clear/hide percentage correct and 'Retry?' botton
 */