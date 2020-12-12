import React from 'react'
import {useAlert} from './alert-context'

const AlertCompoment = () => {
    const alert = useAlert()

    if(!alert.visible) return null

        return (
            <div className="alert alert-danger" onClick={alert.hide}>
                {alert.text}
            </div>
        )
    

    
}

export default AlertCompoment