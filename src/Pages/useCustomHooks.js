import React, { useState, useEffect } from 'react'

function useLogger (value) {
    useEffect(() => {
        console.log(value)
    }, [value])
}

function useInput(initialValue) {
    const [value, setValue] = useState(initialValue)

    const onChange = event => {
        setValue(event.target.value)
    }

    const clear = () => setValue('')

    return {
        bind: { value, onChange },
        value,
        clear
    }
}

const UseCustomHooksPage = () => {
    const name = useInput('')
    const lastName = useInput('')

    useLogger(name.value)
    useLogger(lastName.value)

    return (
        <div className={'container pt-5'}>
            <h1>Name User:{name.value}</h1>
            <input type="text" {...name.bind} />
            <button className="btn btn-warning ml-3" onClick={name.clear}>Clear</button>
            <h1>Last Name User:{lastName.value}</h1>
            
            <input type="text" {...lastName.bind} />
            <button className="btn btn-warning ml-3" onClick={lastName.clear}>Clear</button>

        </div>
    )
}

export default UseCustomHooksPage