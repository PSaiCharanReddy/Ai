import React, { useState } from 'react';

const Settings = () => {
    const [apiKey, setApiKey] = useState('');

    const handleSave = () => {
        // Save the API key to local storage or send it to the backend
        localStorage.setItem('geminiApiKey', apiKey);
        alert('API Key saved successfully!');
    };

    return (
        <div>
            <h1>Settings</h1>
            <input 
                type="text" 
                placeholder="Enter Gemini API Key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
            />
            <button onClick={handleSave}>Save</button>
        </div>
    );
};

export default Settings;