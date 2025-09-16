import React, { useState } from 'react';
import axios from 'axios';

const InterviewPractice = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [feedback, setFeedback] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/interview_practice/', {
                question,
                answer
            });
            setFeedback(response.data.feedback);
        } catch (error) {
            console.error('Error during interview practice:', error);
        }
    };

    return (
        <div>
            <h1>Interview Practice</h1>
            <form onSubmit={handleSubmit}>
                <textarea 
                    placeholder="Enter interview question"
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    required
                />
                <textarea 
                    placeholder="Enter your answer"
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                    required
                />
                <button type="submit">Get Feedback</button>
            </form>
            {feedback && (
                <div>
                    <h2>Feedback</h2>
                    <p>{feedback}</p>
                </div>
            )}
        </div>
    );
};

export default InterviewPractice;