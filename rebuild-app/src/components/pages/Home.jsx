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
    navigate('/answer', { state: { inputValue } });
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
