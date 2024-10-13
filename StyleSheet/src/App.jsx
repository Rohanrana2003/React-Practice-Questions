import Cell from './components/cell'


const App = () => {
    
    const cells = [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16]
    ]


    function createRows(item) {
        if (Array.isArray(item)) {
            return (
                <div>
                    { item.map(i => <Cell key={i}/>)  }
                </div>
            )
        }
    }

    return (
        <div>
            {
                cells.map((items, i) => (
                    <div key={i}>
                        {createRows(items)}
                    </div>
                ))
            }
        </div>
    )
}

export default App
