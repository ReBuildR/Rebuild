import React, { useState } from 'react';
import { Button } from './Button';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import { motion } from 'framer-motion';
import useSound from 'use-sound';
import batsSound from '/src/assets/bats.wav';
import clickSound from '/src/assets/click.wav';
import zombieSound from '/src/assets/zombie.wav';
import ghostSound from '/src/assets/ghost.wav';
import doorSound from '/src/assets/door.wav';


const NUM_BATS = 50;

const getRandomPosition = (viewportWidth, viewportHeight) => {
  const x = Math.random() < 0.5 ? -1300 : viewportWidth + 100;
  const y = Math.random() * viewportHeight;
  return { x, y };
};

export const Home = () => {

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const [play] = useSound(batsSound, { preload: true });

  useEffect(() => {
    const timeout = setTimeout(() => {
      play();
    }, 100); // slight delay to ensure everything is ready

    return () => clearTimeout(timeout);
  }, [play]);


  const [inputValue, setInputValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setErrorMessage(''); // Clear the error message when the user types
  };

  const handleRebuildClick = () => {
    useSound(zombieSound, { preload: true });
    if (!inputValue) {
      setErrorMessage('Input cannot be blank.');
      return;
    }

    const appendedInputValue = `List names of technical projects you can create from using the parts of ${inputValue}, make sure it is a list without numbers. Just put the name nothing before or after it. Only give 5 responses. Make sure its an unnumbered list`;
    navigate('/options', { state: { appendedInputValue, originalInputValue: inputValue } });
  };

  const handleReuseClick = () => {
    useSound(ghostSound, { preload: true });
    if (!inputValue) {
      setErrorMessage('Input cannot be blank.');
      return;
    }

    const type = 'reuse';
    const appendedInputValue = `List names of technical ways you can reuse ${inputValue} without taking it apart, make sure it is a list without numbers. Just put the name nothing before or after it. Only give 5 responses. Make sure its an unnumbered list`;
    navigate('/options', { state: { appendedInputValue, originalInputValue: inputValue, type } });
  };

  const handleRecycleClick = () => {
    useSound(doorSound, { preload: true });
  }

  return (
    <div className="home-container">
       {errorMessage && <p className="error-message">{errorMessage}</p>}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        className="home-input"
        placeholder="What do you want to reanimate..."
      />
      <div className="home-box">
        <div className="buttons">
          <Button text="Rebuild" className="button" onClick={handleRebuildClick} />
          <Button text="Reuse" className="button" onClick={handleReuseClick} />
          <Button text="Recycle" className="button" link="/" />
        </div>
        <div className='bats'>
        {Array.from({ length: NUM_BATS }).map((_, index) => {
          const { x, y } = getRandomPosition(viewportWidth, viewportHeight);
          return (
            <motion.div
              key={index}
              animate={{ y: -1000, x: 1000, scale: 1 }}
              transition={{ type: 'tween', duration: 2, delay: Math.random() * 2 }}
              initial={{ y, x, scale: 0 }}
              className="bat"
            >
              <img src="src/assets/bat.png" alt="Bat" />
            </motion.div>
          );
        })}
      </div>
      </div>
    </div>
  );
};