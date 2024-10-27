import React, { useState } from 'react';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';
import './Home.css';

export const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setErrorMessage(''); // Clear the error message when the user types
  };

  const handleRebuildClick = () => {
    if (!inputValue) {
      setErrorMessage('Input cannot be blank.');
      return;
    }

    const appendedInputValue = `List names of technical projects you can create from using the parts of ${inputValue}, make sure it is a list without numbers. Just put the name nothing before or after it. Only give 5 responses. Make sure its an unnumbered list`;
    navigate('/options', { state: { appendedInputValue, originalInputValue: inputValue } });
  };

  const handleReuseClick = () => {
    if (!inputValue) {
      setErrorMessage('Input cannot be blank.');
      return;
    }

    const type = 'reuse';
    const appendedInputValue = `List names of technical ways you can reuse ${inputValue} without taking it apart, make sure it is a list without numbers. Just put the name nothing before or after it. Only give 5 responses. Make sure its an unnumbered list`;
    navigate('/options', { state: { appendedInputValue, originalInputValue: inputValue, type } });
  };

  return (
    <div className="home-container">
       {errorMessage && <p className="error-message">{errorMessage}</p>}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="home-input"
        placeholder="What do you want to reanimate..."
      />
      <div className="home-box">
        <div className="buttons">
          <Button text="Rebuild" className="button" onClick={handleRebuildClick} />
          <Button text="Reuse" className="button" onClick={handleReuseClick} />
          <Button text="Recycle" className="button" link="/" />
        </div>
      </div>
    </div>
  );
};
