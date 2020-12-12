import React from 'react'
import MainComponent from './tools/main-component'
import AlertComponent from './tools/alert-component'
import {AlertProvider} from './tools/alert-context'

const UseContextPage = () => {


    return (
        <AlertProvider>
            <div className={'container pt-5'}>
                <AlertComponent />
                <MainComponent />
            </div>
        </AlertProvider>

    )
}

export default UseContextPage