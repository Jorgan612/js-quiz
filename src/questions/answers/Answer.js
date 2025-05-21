import './Answers.scss'

function Answer({question}) {
    return (
        <div className='answers'>
            {question.answers.map((answer) => (
                <div className="answer">
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