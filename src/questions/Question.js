import Answer from './answers/Answer';
import './Question.scss';

function Question({questions}) {


    const completeQuiz = () => {
        const correctAnswers = questions.filter((question) => {
            return question.answer === question.selectedAnswer;
        })

        const incorrectAnswers = questions.filter((question) => {
            return question.answer !== question.selectedAnswer;
        })
    }



    return (
        <div className='question'>
                {questions.map((q) => (
            <div key={q.question}>
                <p>{q.question}</p>
                <Answer question={q} />
                <div>******************************************************************************************</div>
            </div>
                ))}
                <button onClick={completeQuiz}>Finish Quiz</button>

        </div>
    )
}


export default Question;