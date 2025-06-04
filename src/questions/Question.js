import Answer from './answers/Answer';
import './Question.scss';

function Question({questions, completeQuiz, quizComplete, setSelectedAnswer}) {

    return (
        <div className='question'>
                {questions.map((q) => (
            <div key={q.question}>
                <p>{q.question}</p>
                <Answer question={q} quizComplete={quizComplete} setSelectedAnswer={setSelectedAnswer} />
                <div>******************************************************************************************</div>
            </div>
                ))}
                {<button onClick={completeQuiz}>Finish Quiz</button>}

        </div>
    )
}


export default Question;