import React, { useState } from 'react';
import '../App.css';

const ThirdComponent = ({ initialValue }) => {
  const [showFirstComponent, setShowFirstComponent] = useState(true);
  const [inputTextFirst, setInputTextFirst] = useState('Hello, This is the initial value for first component using state');
  const [inputTextSecond, setInputTextSecond] = useState(initialValue.secondComponentText);

  const handleInputChangeFirst = (e) => {
    setInputTextFirst(e.target.value);
  };

  const handleInputChangeSecond = (e) => {
    setInputTextSecond(e.target.value);
  };

  const toggleComponent = () => {
    setShowFirstComponent(!showFirstComponent);
  };

  return (
    <div className="third-component">
      <h2>Third Component</h2>
      <button onClick={toggleComponent}>
        Toggle Component: {showFirstComponent ? 'First' : 'Second'}
      </button>

      {showFirstComponent ? (
        <div className="component-one">
          <input
            type="text"
            placeholder="Enter text"
            value={inputTextFirst}
            onChange={handleInputChangeFirst}
          />
          <label>{inputTextFirst}</label>
        </div>
      ) : (
        <div className="component-two">
          <input
            type="text"
            placeholder="Enter text"
            value={inputTextSecond}
            onChange={handleInputChangeSecond}
          />
          <label>{inputTextSecond}</label>
        </div>
      )}
    </div>
  );
};

export default ThirdComponent;