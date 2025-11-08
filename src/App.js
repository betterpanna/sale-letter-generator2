import React, { useState } from 'react';
import SalesButton from './components/SalesButton';
import './App.css';

function App() {
  const [clickHistory, setClickHistory] = useState([]);
  
  const handleNewLetter = (letter) => {
    setClickHistory(prev => [letter, ...prev.slice(0, 4)]);
  };

  return (
    <div className="app">
      <div className="container">
        <header>
          <h1>✨ セールスレターマジック ✨</h1>
          <p className="subtitle">ボタンをクリックしてください。何か楽しいことが起こります。</p>
        </header>

        <main>
          <SalesButton onGenerate={handleNewLetter} />
          
          {clickHistory.length > 0 && (
            <div className="recent-letters">
              <h3>最近の作品:</h3>
              <ul>
                {clickHistory.map((letter, index) => (
                  <li key={index}>{letter}</li>
                ))}
              </ul>
            </div>
          )}
        </main>

        <footer>
          <p>実験的に作られた</p>
        </footer>
      </div>
    </div>
  );
}

export default App;