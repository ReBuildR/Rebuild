// Home.jsx
import React, { useState } from 'react';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleRebuildClick = () => {
    const appendedInputValue = inputValue
    ? `List names of techincal projects you can create from using the parts of ${inputValue}, make sure it is a list without numbers. Just put the name nothing before or after it. Only give 5 responses. Make sure its an unnumbered list` 
    : '';    
    navigate('/options', { state: { appendedInputValue } });
  };

  return (
    <div className="home-container">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="home-input"
        placeholder="What do you want to reanimate?"
      />
      <div className="home-box">
        <div className="buttons">
          <Button text="Rebuild" className="button" onClick={handleRebuildClick} />
          <Button text="Reuse" className="button" link="/" />
          <Button text="Recycle" className="button" link="/" />
        </div>
      </div>
    </div>
  );
};
