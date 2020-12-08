import React, { useState, useEffect } from 'react'

const EffectStatePage = () => {
    const [type, setType] = useState('users')
    const [data, setData] = useState([])
    const [pos, setPos] = useState({
        x: 0,
        y: 0
    })

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))
    }, [type])

    const mouseMoveHandler = event => {
        setPos({
            x: event.clientX,
            y: event.clientY
        })
    }

    useEffect(() => {
        console.log('ComponentDidMount')
        window.addEventListener('mousemove', mouseMoveHandler)

        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler)
        }
    }, [])

    return (
        <div>
            <h1>Source: {type}</h1>
            <button className="btn btn-success m-2" onClick={() => { setType('users') }}>Users</button>
            <button className="btn btn-success m-2" onClick={() => { setType('todos') }}>ToDos</button>
            <button className="btn btn-success m-2" onClick={() => { setType('posts') }}>Post</button>

            

            <pre>
                {JSON.stringify(pos, null, 2)}
            </pre>

            <pre>
                {JSON.stringify(data, null, 2)}
            </pre>

        </div>
    )
}

export default EffectStatePage