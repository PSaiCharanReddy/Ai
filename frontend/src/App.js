import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ResumeAnalysis from './components/ResumeAnalysis';
import ExperienceMatching from './components/ExperienceMatching';
import CoverLetter from './components/CoverLetter';
import InterviewPractice from './components/InterviewPractice';
import Settings from './components/Settings';

function App() {
  return (
    <Router>
      <div>
        <h1>Job Application & Networking Bot</h1>
        <Routes>
          <Route path="/resume-analysis" element={<ResumeAnalysis />} />
          <Route path="/experience-matching" element={<ExperienceMatching />} />
          <Route path="/cover-letter" element={<CoverLetter />} />
          <Route path="/interview-practice" element={<InterviewPractice />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;