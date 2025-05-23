import { useState, useEffect } from 'react';
import Answer from './answers/Answer';
import './Question.scss';

function Question({questions, completeQuiz}) {

    // const [score, setScore] = useState(null)


    // const completeQuiz = () => {
    //     const scoreBreakdown = questions.reduce((acc, question) => {
    //         if (question.answer === question.selectedAnswer) {
    //             acc.correct.push(question);
    //             question.isCorrect = true;
    //         } else {
    //             acc.incorrect.push(question);
    //             question.isCorrect = false;
    //         }
    //         return acc;

    //     }, {correct: [], incorrect: []})
    //     setScore(scoreBreakdown);

    //     calculateScore()
    // }



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