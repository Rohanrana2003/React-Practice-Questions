import { useState } from "react";

function App() {
  const [comments, setComments] = useState([])
  const [input, setInput] = useState('')

  const handleInput = (e) =>{
    setInput(e.target.value);
  }

  const handleSubmit = () =>{
    setComments(prev=>{
      return[...prev, {value:input,reply:{}}]
    });
  }

  const handleReply = (index) =>{
    comments.forEach((comments, i)=>{
     
    })

  }


  return (
    <div className="w-[100vw] h-[100vh] ">

      <div className="w-[50vw] h-[80vh] bg-orange-200 
                      absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] p-2">

            <div className="h-[70%] p-3 overflow-auto ">
              {
                comments && comments.map((comment, i)=>(
                  <div className="flex gap-2 my-2 items-center" key={i}>

                    <img className="w-12 h-12"
                      src="https://www.clipartmax.com/png/small/41-410339_add-person-comments-add-person-icon.png" alt="" />

                    <div className="flex flex-col">

                      <h3 className="font-bold">User</h3>
                      <p>{comment.value}</p>

                      <p onClick={()=>handleReply(i)}
                        className="text-gray-500 ml-2 cursor-pointer">reply</p>

                    </div>
                  </div>
                ))
              }
              
            </div>

            <div className="textarea-section mx-4">

              <textarea onChange={handleInput} value={input} className="w-[100%] h-[100px] p-3"></textarea>

              <button onClick={handleSubmit}
                className="px-2 py-1 outline-none text-white border-1
                 border-black cursor-pointer rounded-lg bg-slate-500">
                  Submit
              </button>
                
            </div>

      </div>

    </div>
  )
}

export default App
