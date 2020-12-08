import React, { useState } from 'react'


function computeInitialCounter() {
  console.log('Some calc...')
  return Math.trunc(Math.random() * 21)
}

const SetStatePage = () => {

  const [counter, setCounter] = useState(() => {
    return computeInitialCounter()
  })

  const [state, setState] = useState({
    title: 'Counter',
    date: Date.now()
  })

  function increment() {
    setCounter((prevState) => {
      return prevState + 1
    })
    //setCounter(prev => prev + 1)
  }

  function updateTitle(){
    setState(prev => {
      return {
        ...prev,
        title: 'New'
      }
    })
  }

  function decrement() {
    setCounter(counter - 1)
  }

  return (
    <div>
      <h1>
        Счетчик: {counter}
      </h1>
      <button className="btn btn-success m-2" onClick={increment}>Add</button>
      <button className="btn btn-danger m-2" onClick={decrement}> Drop</button>
      <button className="btn btn-default" onClick={updateTitle}> Rename Title</button>
      <pre>
        {JSON.stringify(state, null, 2)}
      </pre>
    </div>
  )
}

export default SetStatePage;
