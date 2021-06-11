import React from 'react'
import Cover from './Cover'
import Time from './Time'
import Quotes from './Quotes'

export default function App() {
    return (
        <div className='app'>
            <Quotes/>
            <Time/>
            <Cover/>
        </div>
    )
}
