import React from 'react'
import {useAlert} from './alert-context'

const MainComponent = () => {
    const {show} = useAlert()
    return (
        <div>
            <h1>Example useReducer</h1>
            <button onClick={() => {show('HelloMainJS')}} className="btn btn-success">Press</button>
        </div>
    )
}

export default MainComponent