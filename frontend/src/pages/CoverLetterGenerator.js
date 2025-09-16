import React, { useState } from 'react';
import axios from 'axios';

const CoverLetterGenerator = () => {
    const [jobDescription, setJobDescription] = useState('');
    const [userDetails, setUserDetails] = useState('');
    const [coverLetter, setCoverLetter] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/generate_cover_letter/', {
                job_description: jobDescription,
                user_details: userDetails
            });
            setCoverLetter(response.data.cover_letter);
        } catch (error) {
            console.error('Error generating cover letter:', error);
        }
    };

    return (
        <div>
            <h1>Cover Letter Generator</h1>
            <form onSubmit={handleSubmit}>
                <textarea 
                    placeholder="Enter job description"
                    value={jobDescription}
                    onChange={(e) => setJobDescription(e.target.value)}
                    required
                />
                <textarea 
                    placeholder="Enter your details"
                    value={userDetails}
                    onChange={(e) => setUserDetails(e.target.value)}
                    required
                />
                <button type="submit">Generate</button>
            </form>
            {coverLetter && (
                <div>
                    <h2>Generated Cover Letter</h2>
                    <pre>{coverLetter}</pre>
                </div>
            )}
        </div>
    );
};

export default CoverLetterGenerator;