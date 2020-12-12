import React, { useState, useMemo, useEffect } from 'react'

function comlexCompute(num) {
    let i = 0;
    while (i < 1000000000) i++
    return num * 2
}

const UseMemoPage = () => {
    const [number, setNumber] = useState(42)
    const [colored, setColored] = useState(false)

    const style = useMemo(() => ({
            color: colored ? 'red' : 'blue'
    }), [colored])

    const computed = useMemo(() => {
        return comlexCompute(number)
    }, [number])

    useEffect(() => {
        console.log('styleChange')
    }, [style])

    return (
        <div>
            <h1 style={style}>Computed property: {computed}</h1>
            <button className="btn btn-success m-2" onClick={() => setNumber(prev => prev + 1)}>Add</button>
            <button className="btn btn-danger m-2" onClick={() => setNumber(prev => prev - 1)}>drop</button>
            <button className="btn btn-warning" onClick={() => setColored(prev => !prev)}>ChangeColorHeader</button>
        </div>
    )
}

export default UseMemoPage