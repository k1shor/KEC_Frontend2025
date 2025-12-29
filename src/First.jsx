// js or jsx in create-react-app
// jsx in vite


// rafce - react arrow function export component
// rafc -
// rfc -
// rfce - 

// jsx - JavaScript Executable/ JS + XML
// every tag needs closing tag.


import React, { useEffect, useState } from 'react'

const First = () => {

    // let/const [variable, function] = useState(initial Data)
    // initial Data - 0 to 9, '' or "" , true or false, [], {}

    // data -> 100, increase by 10 and decrease by 10

    let [count, setCount] = useState(0)

    let [data, setData] = useState(100)

    const increase = () => {
        setCount(++count)
        console.log(count)
    }

    const decrease = () => {
        setCount(--count)
    }

    const reset = () => {
        setCount(0)
    }

    // useEffect - to show some side effects when any state changes
    /* syntax:
        useEffect(function, [dependency])
        useEffect(()=>{},[])
            
            function - side effect to be seen
            [dependency] - array of state variables that trigger the function
                [] - function is triggered at page load only
                [a,b,c] - function is triggered at page load and when any of a, b or c changes
                null - when dependency array is not provided, function will be triggered at page load and when any of state variable changes
    */

    useEffect(()=>{
        alert('Value updated.')
    },[count])

    return (
        <div className='flex h-[80vh] justify-center items-center text-3xl flex-col'>
            COUNT : {count}
            <div className='btn-group'>
                {
                    count < 10 &&
                    <button className='btn btn-info' onClick={increase} >INCREASE COUNT</button>
                }

                {
                    count > 0 &&
                    <>
                        <button className='btn btn-success' onClick={decrease} >DECREASE COUNT</button>
                        <button className='btn btn-danger' onClick={reset} >RESET COUNT</button>
                    </>
                }

            </div>

            DATA: {data}
            <div>
                <button className='btn btn-success' onClick={() => setData(data + 10)}>INCREASE</button>
                <button className='btn btn-danger' onClick={() => setData(data - 10)}>DECREASE</button>
            </div>
        </div>
    )
}

export default First

// useState -> if state changes, renders the component whose state is changed
// useEffect -> if state changes, triggers a side effect
    // to load data before loading a page, fetch data when filter state changes