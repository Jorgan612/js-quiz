import Answer from './answers/Answer';
import './Question.scss';

function Question({questions, completeQuiz, quizComplete, setSelectedAnswer, score}) {

    return (
        <div className='question'>
            {questions.map((q) => (
                <div className={`${(q.selectedAnswer === '' && quizComplete) && 'unanswered'}`} key={q.question}>
                    <p>{q.question}</p>
                    <Answer question={q} quizComplete={quizComplete} setSelectedAnswer={setSelectedAnswer} />
                    <div>******************************************************************************************</div>
                </div>
            ))}

            {<button onClick={completeQuiz}>Finish Quiz</button>}

            {(score?.unanswered.length > 0) && <p className='error-text'>One or more questions are missing a selected answer. Please answer all questions, then click Finish Quiz to calculate your score.</p>}
        </div>
    )
}

export default Question;