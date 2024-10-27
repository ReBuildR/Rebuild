import { React, useState } from 'react'
import { Button } from './Button'
import './Home.css'

export const Home = () => {

  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div className='home-container'>
        <input
          type="text" 
          value={inputValue} 
          onChange={handleInputChange} 
          className="home-input" 
          placeholder="What do you want to REANIMATE!"
        />
        <div className="home-box">
            <div className="buttons">
                <Button text= "Rebuild" className="button-rebuild" link="/answer"/>
                <Button text="Reuse" className="button-reuse" link="/"/>
                <Button text= "Recycle" className="button-recycle" link="/"/>
            </div>
        </div>
    </div>
  )
}

