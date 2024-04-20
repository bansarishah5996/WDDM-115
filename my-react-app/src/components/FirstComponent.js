// FirstComponent.js
import React, { useState } from 'react';
import '../App.css';

const FirstComponent = ({ initialValue }) => {
  const [value, setValue] = useState(initialValue);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="first-component">
      <h2>First Component</h2>
      <p>Value from props: {value}</p>
      <input
        className='first-component-input'
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder="Enter a value"
      />
    </div>
  );
};

export default FirstComponent;