import { useState, useEffect } from "react";




function App() {
  const [data, setData] = useState(null);
  const [inputValue, setInputValue] = useState('');
  

  const fetchData = async(keyword) =>{
    const response = await fetch(`https://api.datamuse.com/words?rel_syn=${keyword}`)
    const data = await response.json();
    setData(data);
  }

  const handleListItem = (keyword) =>{
    fetchData(keyword);
    setInputValue(keyword);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 text-white flex items-center flex-col overflow-x-auto">

      <div className=" flex gap-2 m-10">

        <input onChange={(e)=>setInputValue(e.target.value)} value={inputValue} 
              className="outline-none px-2 py-1 border-1 border-black text-black" type="text" />

        <button onClick={()=>fetchData(inputValue)}
              className="px-2 py-1 outline-none border-none bg-gray-400 text-white rounded-lg">Search</button>
      </div>

      <ul>
      {
        data && data.map((keyword, i) =>(
          <li onClick={()=>handleListItem(keyword.word)}
          key={i}>
            {keyword.word}
          </li>
        ))
      }
      </ul>

    </div>
  )
}

export default App
