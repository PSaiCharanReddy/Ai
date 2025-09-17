import React, { useState } from 'react';
import axios from 'axios';

const ResumeUpload = () => {
    const [resume, setResume] = useState(null);
    const [jobDescription, setJobDescription] = useState('');
    const [analysisResult, setAnalysisResult] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('resume', resume);
        formData.append('job_description', jobDescription);

        try {
            const response = await axios.post('/analyze_resume/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            setAnalysisResult(response.data);
        } catch (error) {
            console.error('Error analyzing resume:', error);
        }
    };

    return (
        <div>
            <h1>Resume Upload</h1>
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
                <button type="submit">Analyze</button>
            </form>
            {analysisResult && (
                <div>
                    <h2>Analysis Result</h2>
                    <pre>{JSON.stringify(analysisResult, null, 2)}</pre>
                </div>
            )}
        </div>
    );
};

export default ResumeUpload;