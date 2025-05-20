function Question({questions}) {
    return (
        <div className='question'>
            <ul>
                {questions.map((q) => (
                    <li key={q.question}>{q.question}</li>
                ))}
            </ul>
        </div>
    )
}


export default Question;