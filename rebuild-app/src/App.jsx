import { useState } from 'react'
import { Route, Routes, HashRouter } from 'react-router-dom'
import './App.css'
import './global.css'
import { Navbar } from './components/Navbar'
import { Home } from './components/pages/Home'
import { Ideas } from './components/pages/Ideas'
import { Submit } from './components/pages/Submit'
import { Answer } from './components/pages/Answer'

function App() {

  const [inputValue, setInputValue] = useState('');

  return (
    <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ideas" element={<Ideas />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/answer" element={<Answer inputValue={inputValue} />} />
        </Routes>
    </div>
  )
}

export default App
