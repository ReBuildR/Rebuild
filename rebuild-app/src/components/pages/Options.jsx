// src/Options.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Options.css';
import { useLocation, useNavigate } from 'react-router-dom';
import useSound from 'use-sound';
import ghostSound from '/src/assets/ghost.wav';

export const Options = () => {
  const [items, setItems] = useState([]);
  const { state: { appendedInputValue, originalInputValue, type } = {} } = useLocation();
  const navigate = useNavigate();
  const [playGhost] = useSound(ghostSound, { preload: true });

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

        setItems(parsedItems);
      } catch (error) {
        console.error('Error fetching response from backend:', error);
      }
    };

    fetchResponse();
  }, [appendedInputValue]);

  const handleClick = (item) => {
    playGhost();
    const appendedItemValue = item
      ? `In technical format give the steps needed to ${type} ${item} using the parts of ${originalInputValue}. Talk about the tools and items needed, give as much detail as possible, to where the user can do it just based on these steps. Make it very wordy and descriptive, list every step possible. make sure it is a numbered list. do not list the items out as a seperate step`
      : '';
    navigate('/answer', { state: { appendedItemValue, item } });
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-title">{`Ways to ${type || 'process'} ${originalInputValue || 'item'}`}</div>
      <div className="chatbot-box">
        {items.length > 0 ? (
          <div>
            {items.map((item, index) => (
              <button key={index} className="chatbot-buttons" onClick={() => handleClick(item)}>
                {item}
              </button>
            ))}
          </div>
        ) : (
          <p className = "loading">Loading...</p>
        )}
      </div>
    </div>
  );
};
