import React from 'react'
import MainComponent from './tools-reducer/main-component'
import AlertComponent from './tools-reducer/alert-component'
import { AlertProvider } from './tools-reducer/alert-context'

const UseReducerPage = () => {

    return (
        <AlertProvider>
            <div className={'container pt-5'}>
                <AlertComponent />
                <MainComponent />
            </div>
        </AlertProvider>
    )
}

export default UseReducerPage