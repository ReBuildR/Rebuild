import React, { useState } from 'react';

export const Submit = () => {
  const [formData, setFormData] = useState({
    author: '',
    description: '',
    difficulty: '',
    focus: '',
    materials: '',
    skills: '',
    tools: '',
    cost: '',
    steps: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Logs form data to console for now
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    width: '400px', // Increased width
    margin: '0 auto',
    padding: '20px',
    borderRadius: '15px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    backgroundColor: 'white' // Light background color for the box
  };

  const labelStyle = {
    display: 'flex',
    flexDirection: 'column',
    fontWeight: 'bold',
    marginBottom: '5px',
    fontFamily: 'GravestoneDemo-4BPgx'
  };

  const inputStyle = {
    padding: '10px',
    fontSize: '14px',
    border: '1px solid #ccc',
    borderRadius: '8px', // Rounded corners for inputs
    outline: 'none',
    transition: 'border-color 0.3s',
  };

  const inputFocusStyle = {
    borderColor: '#007BFF' // Change border color on focus
  };

  return (
    <div style={{ backgroundColor: '#9c3e16', minHeight: '100vh', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px', fontFamily: 'GravestoneDemo-4BPgx' }}>Submit Your Project Idea</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <label style={labelStyle}>
          Author:
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = '#007BFF')}
            onBlur={(e) => (e.target.style.borderColor = '#ccc')}
          />
        </label>
        
        <label style={labelStyle}>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = '#007BFF')}
            onBlur={(e) => (e.target.style.borderColor = '#ccc')}
          />
        </label>
        
        <label style={labelStyle}>
          Difficulty:
          <input
            type="text"
            name="difficulty"
            value={formData.difficulty}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = '#007BFF')}
            onBlur={(e) => (e.target.style.borderColor = '#ccc')}
          />
        </label>
        
        <label style={labelStyle}>
          Focus:
          <input
            type="text"
            name="focus"
            value={formData.focus}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = '#007BFF')}
            onBlur={(e) => (e.target.style.borderColor = '#ccc')}
          />
        </label>
        
        <label style={labelStyle}>
          Materials:
          <input
            type="text"
            name="materials"
            value={formData.materials}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = '#007BFF')}
            onBlur={(e) => (e.target.style.borderColor = '#ccc')}
          />
        </label>
        
        <label style={labelStyle}>
          Skills Required:
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = '#007BFF')}
            onBlur={(e) => (e.target.style.borderColor = '#ccc')}
          />
        </label>
        
        <label style={labelStyle}>
          Tools:
          <input
            type="text"
            name="tools"
            value={formData.tools}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = '#007BFF')}
            onBlur={(e) => (e.target.style.borderColor = '#ccc')}
          />
        </label>
        
        <label style={labelStyle}>
          Cost:
          <input
            type="number"
            name="cost"
            value={formData.cost}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = '#007BFF')}
            onBlur={(e) => (e.target.style.borderColor = '#ccc')}
          />
        </label>
        
        <label style={labelStyle}>
          Steps:
          <textarea
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = '#007BFF')}
            onBlur={(e) => (e.target.style.borderColor = '#ccc')}
          />
        </label>

        <button type="submit" style={{ padding: '10px', fontSize: '16px', fontWeight: 'bold', borderRadius: '8px', border: 'none', backgroundColor: '#005B41', color: 'white', cursor: 'pointer', transition: 'background-color 0.3s', fontFamily:'GravestoneDemo-4BPgx', hover: '9c3e16' }}>Submit Idea</button>
      </form>
    </div>
  );
};
