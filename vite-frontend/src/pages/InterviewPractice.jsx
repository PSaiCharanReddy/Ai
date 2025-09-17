import React, { useState, useRef } from 'react';
import axios from 'axios';

const InterviewPractice = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [feedback, setFeedback] = useState(null);
    const [isRecording, setIsRecording] = useState(false);
    const videoRef = useRef(null);

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

    const startRecording = () => {
        setIsRecording(true);
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
            .then((stream) => {
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            })
            .catch((error) => console.error('Error accessing webcam:', error));
    };

    const stopRecording = () => {
        setIsRecording(false);
        if (videoRef.current && videoRef.current.srcObject) {
            const tracks = videoRef.current.srcObject.getTracks();
            tracks.forEach((track) => track.stop());
            videoRef.current.srcObject = null;
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

            <div>
                <h2>AI Voice Simulation & Webcam Feedback</h2>
                <video ref={videoRef} autoPlay muted style={{ width: '100%', maxHeight: '300px' }}></video>
                <div>
                    {!isRecording ? (
                        <button onClick={startRecording}>Start Recording</button>
                    ) : (
                        <button onClick={stopRecording}>Stop Recording</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default InterviewPractice;