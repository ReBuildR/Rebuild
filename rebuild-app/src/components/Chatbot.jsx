// src/Chatbot.js

import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const API_URL = 'https://api.openai.com/v1/chat/completions';

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userMessage = { role: 'user', content: input };
    const newMessages = [...messages, userMessage];

    setMessages(newMessages);
    setInput('');

    try {
      const response = await axios.post(API_URL, {
        model: 'gpt-4o-mini',
        messages: newMessages,
      }, {
        headers: {
          'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      });

      const botMessage = response.data.choices[0].message;
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error fetching response:', error);
    }
  };

  return (
    <div style={{ width: '400px', margin: '0 auto', border: '1px solid #ccc', padding: '20px', borderRadius: '10px' }}>
      <h2>Chatbot</h2>
      <div style={{ height: '300px', overflowY: 'scroll', border: '1px solid #ddd', marginBottom: '10px', padding: '10px' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ margin: '5px 0' }}>
            <strong>{msg.role === 'user' ? 'You:' : 'Bot:'}</strong> {msg.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          style={{ width: '100%', padding: '10px' }}
        />
        <button type="submit" style={{ padding: '10px', marginTop: '10px', width: '100%' }}>Send</button>
      </form>
    </div>
  );
};

export default Chatbot;
