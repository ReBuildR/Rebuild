import React from 'react'
import { Button } from './Button'
import './Home.css'

export const Home = () => {
  return (
    <div className='home-container'>
        <div className="home-box">
            <div className="buttons">
                <Button text= "Rebuild" className="button-rebuild" link="/resume"/>
                <Button text="Reuse" className="button-reuse" link="/projects"/>
                <Button text= "Recycle" className="button-recycle" link="/resume"/>
            </div>
        </div>
    </div>
  )
}

