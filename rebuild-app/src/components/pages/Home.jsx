import React, { useEffect } from 'react';
import { Button } from './Button';
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
  const [playClick] = useSound(clickSound, { preload: true });
  const [playZombie] = useSound(zombieSound, { preload: true });
  const [playGhost] = useSound(ghostSound, { preload: true });
  const [playDoor] = useSound(doorSound, { preload: true });

  useEffect(() => {
    const timeout = setTimeout(() => {
      play();
    }, 100); // slight delay to ensure everything is ready

    return () => clearTimeout(timeout);
  }, [play]);

  return (
    <div className='home-container'>
      <div className="home-box">
        <div className="buttons">
          <Button text="Rebuild" className="button-rebuild" link="/" onClick={playZombie} />
          <Button text="Reuse" className="button-reuse" link="/" onClick={playDoor} />
          <Button text="Recycle" className="button-recycle" link="/" onClick={playGhost} />
        </div>
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
  );
}
