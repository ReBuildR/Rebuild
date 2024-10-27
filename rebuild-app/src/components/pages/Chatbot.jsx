import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Chatbot = ({ input }) => {
  const [gptMessage, setGptMessage] = useState('');

  useEffect(() => {
    const fetchResponse = async () => {
      if (!input) return;

      try {
        const response = await axios.post('http://localhost:5001/api/chat', { message: input });
        setGptMessage(response.data.content);
        console.log('Response from API:', response.data.content);
      } catch (error) {
        console.error('Error fetching response from backend:', error);
      }
    };

    fetchResponse();
  }, [input]);

  return (
    <div>
      {gptMessage ? (
          <p>
          {gptMessage}
          </p>
      ) : (
        <p>No response available.</p>
      )}
    </div>
  );
};
