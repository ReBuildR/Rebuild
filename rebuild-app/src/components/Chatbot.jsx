// src/Chatbot.js
import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input) return;

    // Add user message to chat
    setMessages((prev) => [...prev, { sender: 'user', text: input }]);

    try {
      const response = await axios.post('http://localhost:5000/api/chat', {
        message: input,
      });

      const gptMessage = response.data.content;
      setMessages((prev) => [...prev, { sender: 'gpt', text: gptMessage }]);
    } catch (error) {
      console.error('Error fetching response from backend:', error);
    }

    setInput(''); // Clear the input
  };

  return (
    <div>
      <div style={{ maxHeight: '400px', overflowY: 'auto', border: '1px solid #ccc', marginBottom: '20px' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
            <strong>{msg.sender === 'user' ? 'You' : 'ChatGPT'}:</strong> {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Type your message here..."
          style={{ width: '80%', padding: '10px' }}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
