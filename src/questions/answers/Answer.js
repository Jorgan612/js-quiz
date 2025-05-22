import { useState } from 'react'
import './Answers.scss'

function Answer({question}) {

    const [selectedAnswer, setSelectedAnswer] = useState('')

    const selectAnswer = (answer) => {
        setSelectedAnswer(answer)
        // running into error in which selectedAnswer doesn't get update on the second selection (until third selection). TROUBLESHOOT WHEN STATE GET'S UPDATE!
        console.log('selectedAnswer', selectedAnswer)
    }

    return (
        <div className='answers'>
            {question.answers.map((answer) => (
                <div className="answer" onClick={() => {selectAnswer(answer)}} key={answer}>
                    <p key={answer}>{answer}</p>
                </div>
            ))}
        </div>
    )
}


export default Answer;

// CONSIDER REMOVING READIO BOTTOM AND JUST DOING SOME CONDITIONAL LOGIC TO HIGHLIGHT SELECTED ANSWER INSTEAD. USER CAN GO BACK AND CHANGE THEIR ANSWER BEFORE SUBMITTING 

// 'FINISH QUIZ' BUTTON AT THE BOTTOM CALCULATES % CORRECT AND SHOWS RETRY BOTTON

// FIGURE OUT VISUAL DIVIDE BETWEEN QUESTIONS