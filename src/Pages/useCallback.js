import React, { useState, useCallback } from 'react'
import ItemsList from './ItemList'
const UseCallbackPage = () => {
    const [count, setCount] = useState(1)
    const [colored, setColored] = useState(false)

    const style = {
            color: colored ? 'red' : 'blue'
    }

    const generateItemsFromAPI = useCallback(() => {
        return new Array(count).fill('').map((_,index) => `element ${index + 1}`)
    },[count])

    return (
        <div>
            <h1 style={style}>Count element: {count}</h1>
            <button className="btn btn-success m-2" onClick={() => setCount(prev => prev + 1)}>Add</button>
            <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>ChangeColorHeader</button>

            <ItemsList getItems={generateItemsFromAPI}/>
        </div>
    )
}

export default UseCallbackPage