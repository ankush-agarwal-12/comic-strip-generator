import React, { useState } from 'react';
import './App.css';
import ComicPanel from './ComicPanel';

function App() {
  const [inputs, setInputs] = useState(Array(10).fill(''));
  const [images, setImages] = useState(Array(10).fill(null));

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  return (
    <div className="App">
      <h1>Comic Strip Generator</h1>
      <div className="comic-form">
        {inputs.map((input, index) => (
          <div key={index} className="panel-input">
            <textarea
              placeholder={`Panel ${index + 1}`}
              value={input}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
            <ComicPanel text={input} index={index} images={images} setImages={setImages} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
