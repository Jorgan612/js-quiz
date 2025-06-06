import Answer from './answers/Answer';
import './Question.scss';

function Question({questions, completeQuiz, quizComplete, setSelectedAnswer, score}) {

    return (
        <div className='question'>
                {questions.map((q) => (
            <div className={`${(q.selectedAnswer === null && quizComplete) && 'unanswered'}`} key={q.question}>
                <p>{q.question}</p>
                <Answer question={q} quizComplete={quizComplete} setSelectedAnswer={setSelectedAnswer} />
                <div>******************************************************************************************</div>
            </div>
                ))}
                {<button onClick={completeQuiz}>Finish Quiz</button>}

                {score?.unanswered.length > 0 && <p className='error-text'> Oh no! One or more questions are missing a selected answer. Please go back and answer all questions then click Finish Quiz.</p>}
        </div>
    )
}


export default Question;