import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CoverLetterDrafts = () => {
  const [jobDescription, setJobDescription] = useState('');
  const [generatedDraft, setGeneratedDraft] = useState(null);
  const [previousDrafts, setPreviousDrafts] = useState([]);

  useEffect(() => {
    // Fetch previously generated drafts on component mount
    axios.get('/api/cover-letter-drafts')
      .then(response => setPreviousDrafts(response.data))
      .catch(error => console.error('Error fetching drafts:', error));
  }, []);

  const handleGenerateDraft = () => {
    if (!jobDescription.trim()) {
      alert('Please enter a job description.');
      return;
    }

    axios.post('/api/generate-cover-letter', { jobDescription })
      .then(response => {
        setGeneratedDraft(response.data);
        setPreviousDrafts(prev => [response.data, ...prev]);
      })
      .catch(error => console.error('Error generating draft:', error));
  };

  return (
    <div>
      <h1>Cover Letter Drafts</h1>

      <div>
        <h2>Generate a New Draft</h2>
        <textarea
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
          placeholder="Enter the job description here..."
          rows="5"
          cols="50"
        />
        <br />
        <button onClick={handleGenerateDraft}>Generate Draft</button>
      </div>

      {generatedDraft && (
        <div>
          <h2>Generated Draft</h2>
          <p>{generatedDraft}</p>
        </div>
      )}

      <div>
        <h2>Previous Drafts</h2>
        {previousDrafts.length > 0 ? (
          <ul>
            {previousDrafts.map((draft, index) => (
              <li key={index}>{draft}</li>
            ))}
          </ul>
        ) : (
          <p>No drafts available.</p>
        )}
      </div>
    </div>
  );
};

export default CoverLetterDrafts;