import React, { useState, useEffect, useRef } from 'react'

const UseMemoPage = () => {
    const [number, setNumber] = useState(42)

    
    return (
        <div>
            <h1>Computed property: {number}</h1>
            <button className="btn btn-success m-2" onClick={(prev) => setNumber(prev => prev + 1)}>Add</button>
            <button className="btn btn-danger" onClick={(prev) => setNumber(prev => prev - 1)}>drop</button>
        </div>
    )
}

export default UseMemoPage