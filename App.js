import React, { useState } from 'react';

function App() {
    const [jsonInput, setJsonInput] = useState('');
    const [response, setResponse] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/bfhl', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: jsonInput
            });
            const data = await res.json();
            setResponse(data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="App">
            <h1>BFHL Challenge</h1>
            <form onSubmit={handleSubmit}>
                <textarea 
                    value={jsonInput}
                    onChange={(e) => setJsonInput(e.target.value)}
                    placeholder='Enter JSON'
                />
                <button type="submit">Submit</button>
            </form>

            {response && (
                <div>
                    <h2>Response</h2>
                    <pre>{JSON.stringify(response, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

export default App;
