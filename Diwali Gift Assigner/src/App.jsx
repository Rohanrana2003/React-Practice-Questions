import { useState } from 'react'


function App() {
  const giftArray = ['Sweets', 'Games', 'Surprise', 'Shoes'];
  const [persons, setPersons] = useState([])
  const [inputValue, setInputValue] = useState('');
  const [gift, setGift] = useState('No Gifts');


  const handleSubmit = () => {
    if(inputValue){
      setPersons([...persons, inputValue]);
    } 
    setInputValue('')
  }

  const handleRemove = (index) =>{
    const newArr = [...persons]
    newArr.splice(index, 1);
    setPersons(newArr)
  }

  const handleAssign = () =>{
    if(gift == 'No Gifts') setGift(giftArray[Math.floor(Math.random()*4)])
  
    else alert('Gifts are already assigned');
  }

  const handleShuffle = () =>{
    if(gift !== 'No Gifts') setGift(giftArray[Math.floor(Math.random()*4)])

    else if(gift === 'No Gifts') alert('First assigned the gifts');
  }


  return (
    <div className='w-screen h-screen flex flex-col items-center my-10'>
      <h1 className='text-3xl font-bold mb-4'>Diwali Gift Exchange</h1>

      <div className='flex gap-2'>
        <input className='border-black border rounded outline-none px-2 py-1' value={inputValue}
          type="text" placeholder='Enter person name' onChange={(e)=>setInputValue(e.target.value)} />

        <button onClick={handleSubmit}
          className='bg-slate-700 text-white rounded px-2 py-1'>Add Person</button>
      </div>

      <ul className='text-black'>
        {
          persons && persons.map((person, i) => (

            <div key={i} className='flex gap-2 items-center my-2'>
              <li>{person} - {gift}</li>

              <button onClick={()=>handleRemove(i)}
                className='border border-black rounded bg-slate-700 text-white px-1'>Remove</button>
            </div>

          ))
        }

      </ul>
      {persons.length>0 && <div className='flex gap-2'>

          <button onClick={handleAssign}
                className='border border-black rounded bg-slate-700 text-white px-1'>Assign Gifts</button>
          
          <button onClick={handleShuffle}
                className='border border-black rounded bg-slate-700 text-white px-1'>Shuffle Gifts</button>

          <button onClick={()=>setGift('No Gifts')}           
                className='border border-black rounded bg-slate-700 text-white px-1'>Reset</button>
                
        </div>}
    </div>
  )
}

export default App
