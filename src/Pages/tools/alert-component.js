import React from 'react'
import {useAlert} from './alert-context'

const AlertCompoment = () => {
    const alert = useAlert()

    if(!alert.visible) return null

        return (
            <div className="alert alert-danger" onClick={alert.toggle}>

                Important massage
            </div>
        )
    

    
}

export default AlertCompoment