import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

export const Button = ({ text, className, link, onClick }) => {
  return (
    <Link to={link} className={`button ${className}`} onClick={onClick}>
      {text}
    </Link>
  );
};