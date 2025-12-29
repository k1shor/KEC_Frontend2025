import React from 'react'
import { useParams } from 'react-router-dom'


const Third = () => {

    let params = useParams()
    let name = params.name

    return (
        <div>
            <h1 className='underlineText'>Welcome, {name}</h1>
        </div>
    )
}

export default Third