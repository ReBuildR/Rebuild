import React from 'react';
import { Chatbot } from './Chatbot';
import { useLocation } from 'react-router-dom';
import './Answer.css'

export const Answer = () => {
    console.log('page loaded');

  const { state: { appendedInputValue } = {} } = useLocation();
  return (
    <div className="answer-container">
    </div>
  );
};