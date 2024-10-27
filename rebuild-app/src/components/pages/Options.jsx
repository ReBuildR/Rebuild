// src/Options.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Options.css';
import { useLocation, useNavigate } from 'react-router-dom';

export const Options = () => {
  const [items, setItems] = useState([]);
  const { state: { appendedInputValue, originalInputValue, type } = {} } = useLocation();
  const navigate = useNavigate();

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
    const appendedItemValue = item
      ? `List detailed techincal steps needed to ${type} ${item} using the parts of ${originalInputValue}, make sure it is a list without numbers. Make sure it's an unnumbered list`
      : '';
    navigate('/answer', { state: { appendedItemValue } });
  };

  return (
    <div className="chatbot-container">
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
          <p>No response available.</p>
        )}
      </div>
    </div>
  );
};
