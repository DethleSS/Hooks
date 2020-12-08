import React, { useState, useEffect, useRef } from 'react'

const UseRefPage = () => {


    const [value, setValue] = useState('initial')
    const renderCount = useRef(1)
    const inputRef = useRef(null)
    const prevValue = useRef('')

    useEffect(() => {
        renderCount.current++

    })

    useEffect(() => {
        prevValue.current = value
    }, [value])

    const focus = () => {
        inputRef.current.focus()
    }

    return (
        <div>
            <h1>Count render: {renderCount.current}</h1>
            <h2>Prev Value {prevValue.current}</h2>
            <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value} />
            <button className="btn btn-success m-2" onClick={focus}>Focus</button>
        </div>
    )
}

export default UseRefPage