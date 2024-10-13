import { useState, useRef } from 'react'
import './App.css'

function App() {

  const [inputValue, setInputValue] = useState(0);


  const handleBold = () =>{
    console.log(inputValue);
    setInputValue('hi')
  }
  const handleChagnge = (e) =>{
    setInputValue(e.target.value);
  }

  return (
    <div className='container'>

      <div className="grid">
        <input  onChange={handleChagnge} type='text' />
        <input  onChange={handleChagnge} type='text' />
        <input  onChange={handleChagnge} type='text' />
        <input  onChange={handleChagnge} type='text' />
        <input  onChange={handleChagnge} type='text' />
        <input  onChange={handleChagnge} type='text' />
        <input  onChange={handleChagnge} type='text' />
        <input  onChange={handleChagnge} type='text' />

      </div>

      <div className="editing-buttons">
        <button onClick={handleBold}>Bold</button>
        <button>Strike Through</button>
      </div>

    </div>

  )
}

export default App
