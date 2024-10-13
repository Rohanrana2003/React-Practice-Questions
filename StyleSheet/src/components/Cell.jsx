
const Cell = () => {

  const handleClick = (e) =>{
    e.target.classList.toggle('focus');
  }

  const handleDoubleClick = (e) =>{
    e.target.classList.toggle('double');
  }


  return (
    <input onDoubleClick={handleDoubleClick} onClick={handleClick}  className="cell" />
  )
}

export default Cell
