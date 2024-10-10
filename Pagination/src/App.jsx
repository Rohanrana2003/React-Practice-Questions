import { useEffect, useState, useRef } from 'react'
import './App.css'

function App() {
  const [postData, setpostData] = useState('')
  const [initial, setInitial] = useState(0)
  const [rows, setRows] = useState(5);
  
  const pageNo = useRef();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res)=>res.json())
    .then((res)=>setpostData(res))
  }, [])

  const handlePrev = () => {
    if (initial <= 0)  return;
    setInitial(initial - rows);
  }

  const handleNext = () => {
    if (initial >= 95) return;
    setInitial(initial + rows);
  }

  const handleRows = (e) => {
    setRows(Number(e.target.value))
  }

  const handleJump = () =>{
    if(0 >= pageNo.current.value || pageNo.current.value > Math.ceil(postData.length/rows)) return;

    setInitial((pageNo.current.value * rows) - rows);
  }

  return (
    <>
      <div className="select-row">
        <select name="rows" id="rows" onChange={handleRows}>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
        </select>
      </div>

      <div className="page-jump">
        <input type="number" placeholder='Go to PageNo.' ref={pageNo}/>
        <button onClick={handleJump}>Jump</button>
      </div>

      <div className="page-buttons">
        <button onClick={() => handlePrev()}>Prev</button>
        <button onClick={() => handleNext()}>Next</button>
      </div>


      {
        postData && postData.slice(initial, initial + rows).map(item => (
          <article key={item.id}>
            <h1>{item.id}. {item.title}</h1>
            <p>{item.body}</p>
          </article>
        ))
      }

     
    </>
  )
}

export default App
