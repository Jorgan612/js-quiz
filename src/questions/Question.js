import { useState, useEffect } from 'react';
import Answer from './answers/Answer';
import './Question.scss';

function Question({questions, completeQuiz, quizComplete}) {

    const [allSelected, setAllSelected] = useState(false);

    const submit = () => {
        completeQuiz();
    }

    return (
        <div className='question'>
                {questions.map((q) => (
            <div key={q.question}>
                <p>{q.question}</p>
                <Answer question={q} quizComplete={quizComplete} />
                <div>******************************************************************************************</div>
            </div>
                ))}
                {<button onClick={completeQuiz}>Finish Quiz</button>}

        </div>
    )
}


export default Question;

// [ ] Disable Finish Quiz button until all questions have a selected answer