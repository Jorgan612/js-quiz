import Answer from './answers/Answer';
import './Question.scss';

function Question({questions}) {
    return (
        <div className='question'>
                {questions.map((q) => (
            <div>
                <p key={q.question}>{q.question}</p>
                <Answer question={q} />
                <div>******************************************************************************************</div>
            </div>
                ))}
                <button>Finish Quiz</button>

        </div>
    )
}


export default Question;