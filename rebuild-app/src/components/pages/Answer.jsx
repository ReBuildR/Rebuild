import React from 'react';
import { Chatbot } from './Chatbot';
import { useLocation } from 'react-router-dom';

export const Answer = () => {
    console.log('page loaded');

  const { state: { inputValue } = {} } = useLocation();
  return (
    <div className="answer-container">
      <Chatbot input={inputValue} /> {/* Pass the input as a prop */}
    </div>
  );
};