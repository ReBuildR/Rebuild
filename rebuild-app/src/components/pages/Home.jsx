import React from 'react'
import { Button } from './Button'
import './Home.css'
import { motion } from "framer-motion"

const NUM_BATS = 50; // Number of bats to show

const getRandomPosition = (viewportWidth, viewportHeight) => {
  const x = Math.random() < 0.5 ? -1300 : viewportWidth + 100; // Start either off left or right
  const y = Math.random() * viewportHeight; // Random y position within the viewport height
  return { x, y };
};

export const Home = () => {
  const viewportWidth = window.innerWidth; // Get viewport width
  const viewportHeight = window.innerHeight; // Get viewport height

  return (
    <div className='home-container'>
        <div className="home-box">
            <div className="buttons">
                <Button text= "Rebuild" className="button-rebuild" link="/"/>
                <Button text="Reuse" className="button-reuse" link="/"/>
                <Button text= "Recycle" className="button-recycle" link="/"/>
            </div>
        </div>
        <div className='bats'>
        {Array.from({ length: NUM_BATS }).map((_, index) => {
          const { x, y } = getRandomPosition(viewportWidth, viewportHeight);
          return (
            <motion.div
              key={index}
              animate={{ y: -1000, x: 1000, scale: 1 }}
              transition={{ type: 'tween', duration: 2, delay: Math.random() * 2 }} // Random delay for staggered start
              initial={{ y, x, scale: 0 }}
              className="bat"
            >
              <img src="src/assets/bat.png" alt="Bat" />
            </motion.div>
          );
        })}
      </div>
    </div>
  )
}

