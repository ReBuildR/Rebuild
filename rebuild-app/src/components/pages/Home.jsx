import React from 'react'
import { Button } from './Button'
import './Home.css'
import Chat from '/src/components/Chatbot.jsx';

export const Home = () => {
  return (
    <div className='home-container'>
        <Chat />
        <div className="home-box">
            <div className="buttons">
                <Button text= "Rebuild" className="button-rebuild" link="/"/>
                <Button text="Reuse" className="button-reuse" link="/"/>
                <Button text= "Recycle" className="button-recycle" link="/"/>
            </div>
        </div>
    </div>
  )
}

