// src/Answer.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './Answer.css'

export const Answer = () => {
  const [steps, setSteps] = useState([]);
  const { state: { appendedItemValue, item } = {} } = useLocation();

  useEffect(() => {
    const fetchSteps = async () => {
      if (!appendedItemValue) return; // Ensure input exists

      try {
        const response = await axios.post('http://localhost:5001/api/chat', {
          message: appendedItemValue,
        });
        console.log(appendedItemValue);

        const content = response.data.content;
        const parsedSteps = content
          .split('\n')
          .filter(step => step.trim() !== ''); // Split response into steps and filter out empty steps

        setSteps(parsedSteps);
      } catch (error) {
        console.error('Error fetching steps from backend:', error);
      }
    };

    fetchSteps();
  }, [appendedItemValue]);

  return (
    <div className="answer-container">
      <div className = "answer-title">{`Guide to: ${item}`}</div>
      <div className = "answer-box">
      {steps.length > 0 ? (
        <ul className='answer-list'>
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      ) : (
        <p className = "loading">Loading...</p>
      )}
      </div>
    </div>
  );
};
