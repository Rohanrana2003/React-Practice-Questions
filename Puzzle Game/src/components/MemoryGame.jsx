import { useState } from "react";

const MemoryGame = () => {
    const [gridSize, setGridSize] = useState(4);
    const [cards, setCards] = useState([]);

    const [flipped, setFlipped] = useState([]);
    const [solved, setSolved] = useState(false);

    const [won, setWon] = useState(false);

  return (
    <div>
        {/* Input */}
        

        {/* Game Board */}


        {/* Result */}


        {/* Button */}

              
    </div>
  )
}

export default MemoryGame
