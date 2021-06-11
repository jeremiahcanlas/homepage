import React from 'react'
import Cover from './Cover'
import Time from './Time'
import Quotes from './Quotes'
import Weather from './Weather'

export default function App() {
    return (
        <div className='app'>
            <Weather/>
            <Quotes/>
            <Time/>
            <Cover/>
        </div>
    )
}
