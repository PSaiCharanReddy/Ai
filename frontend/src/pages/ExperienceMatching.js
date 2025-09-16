import React, { useState } from 'react';
import axios from 'axios';

const ExperienceMatching = () => {
    const [resume, setResume] = useState(null);
    const [jobDescription, setJobDescription] = useState('');
    const [matchingScore, setMatchingScore] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('resume', resume);
        formData.append('job_description', jobDescription);

        try {
            const response = await axios.post('/match_experience/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setMatchingScore(response.data.matching_score);
        } catch (error) {
            console.error('Error matching experience:', error);
        }
    };

    return (
        <div>
            <h1>Experience Matching</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="file" 
                    onChange={(e) => setResume(e.target.files[0])} 
                    required
                />
                <textarea 
                    placeholder="Enter job description"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    required
                />
                <button type="submit">Match</button>
            </form>
            {matchingScore && (
                <div>
                    <h2>Matching Score</h2>
                    <p>{matchingScore}</p>
                </div>
            )}
        </div>
    );
};

export default ExperienceMatching;