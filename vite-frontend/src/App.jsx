import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ResumeAnalysis from './pages/ResumeAnalysis';
import InterviewPractice from './pages/InterviewPractice';
import CoverLetterDrafts from './pages/CoverLetterDrafts';
import CoverLetterGenerator from './pages/CoverLetterGenerator';
import ResumeUpload from './pages/ResumeUpload';
import ExperienceMatching from './pages/ExperienceMatching';
import Settings from './pages/Settings';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/resume-analysis" element={<ResumeAnalysis />} />
                <Route path="/interview-practice" element={<InterviewPractice />} />
                <Route path="/cover-letter-drafts" element={<CoverLetterDrafts />} />
                <Route path="/cover-letter-generator" element={<CoverLetterGenerator />} />
                <Route path="/resume-upload" element={<ResumeUpload />} />
                <Route path="/experience-matching" element={<ExperienceMatching />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </Router>
    );
};

export default App;