import './Answers.scss'

function Answer({question, quizComplete, setSelectedAnswer}) {

    const selectAnswer = (answer, question) => {
        setSelectedAnswer(answer);
        question.selectedAnswer = answer;
    }

    return (
        <div className='answers'>
            {question.answers.map((answer) => (
                <div key={answer}>
                    {!quizComplete && <div className={`${answer === question.selectedAnswer ? 'selected' : 'default'}`} onClick={() => {selectAnswer(answer, question)}}>
                        <p>{answer}</p>
                    </div>}

                    {quizComplete && <div className={`${answer === question.selectedAnswer ? (question.answer === answer ? 'correct' : 'incorrect') : 'default'}`} onClick={question.selectedAnswer === '' ? () => {selectAnswer(answer, question)} : undefined}>
                        <p key={answer}>{answer}</p>
                    </div>}
                </div>
            ))}
        </div>
    )
}

export default Answer;