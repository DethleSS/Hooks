import React from 'react'
import {useAlert} from './alert-context'

const MainComponent = () => {
    const {toggle} = useAlert()
    return (
        <div>
            <h1>Example useContext</h1>
            <button onClick={toggle} className="btn btn-success">Press</button>
        </div>
    )
}

export default MainComponent