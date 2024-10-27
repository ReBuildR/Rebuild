// src/Chatbot.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Options.css'
import { useLocation } from 'react-router-dom';


export const Options = () => {
  const [items, setItems] = useState([]);
  const [gptMessage, setGptMessage] = useState('');
  const { state: { appendedInputValue } = {} } = useLocation();
  useEffect(() => {
    const fetchResponse = async () => {
      if (!appendedInputValue) return; // Ensure input exists

      try {
        const response = await axios.post('http://localhost:5001/api/chat', {
          message: appendedInputValue,
        });

        const content = response.data.content; 
        const parsedItems = content
        .split('\n')
        .filter(item => item.trim() !== '') // Split response into items and filter out empty items
        .map(item => item.slice(2).trim()); // Remove the first character and trim spaces

        setGptMessage(content);
        setItems(parsedItems);
      } catch (error) {
        console.error('Error fetching response from backend:', error);
      }
    };

    fetchResponse();
  }, [appendedInputValue]);

  return (
    <div className= "chatbot-container">
      <h2>ChatGPT Response:</h2>
      {gptMessage ? (
        <div>
          {items.map((item, index) => (
          <button key={index} className="chatbot-buttons">
            {item}
          </button>
          ))}
        </div>
      ) : (
        <p>No response available.</p>
      )}
    </div>
  );
};
