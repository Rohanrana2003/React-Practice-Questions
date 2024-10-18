

function App() {
  const [count, setCount] = useState(1)


  return (
    <div className="container w-[100vw] h-[100vh] ">

      <div className="content w-[50vw] h-[80vh] bg-orange-200 
                      absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">

            <div className="comment-section h-[70%] p-3">

              {
                count.map(()=>{
                  <div className="comment">
                    <img src="https://www.clipartmax.com/png/small/41-410339_add-person-comments-add-person-icon.png" alt="" />
                  </div>
                })
              }
              
            </div>

            <div className="textarea-section">
              <textarea id=""></textarea>
              <button className="">Submit</button>
            </div>
      </div>

    </div>
  )
}

export default App
