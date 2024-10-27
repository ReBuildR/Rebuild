// src/Answer.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './Answer.css'

export const Answer = () => {
  const [steps, setSteps] = useState([]);
  const { state: { appendedItemValue } = {} } = useLocation();

  useEffect(() => {
    const fetchSteps = async () => {
      if (!appendedItemValue) return; // Ensure input exists

      try {
        const response = await axios.post('http://localhost:5001/api/chat', {
          message: appendedItemValue,
        });

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
      <h2>Steps to Create:</h2>
      {steps.length > 0 ? (
        <ul>
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      ) : (
        <p>No steps available.</p>
      )}
    </div>
  );
};
