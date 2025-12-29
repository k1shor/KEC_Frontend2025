import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ReduxCounter = () => {
    let count = useSelector(store => store.counterStore.count)
    // {count:0}
    // let {name, phone} = useSelector(store => store.personStore)

    let name = useSelector(store => store.personStore.name)
    let phone = useSelector(store => store.personStore.phone)

    let [nameValue, setName] = useState("")
    let [phoneValue, setPhone] = useState("")

    const dispatch = useDispatch()

    const handleIncrease = () => {
        dispatch({ type: "INCREASE" })
    }
    const handleDecrease = () => {
        dispatch({ type: "DECREASE" })
    }
    const handleReset = () => {
        dispatch({ type: "RESET" })
    }


    return (
        <div className='h-[80vh] flex justify-center items-center text-3xl flex-col'>
            Count: {count}
            <div>
                <button className='btn btn-success' onClick={handleIncrease}>INCREASE</button>
                <button className='btn btn-danger' onClick={handleDecrease}>DECREASE</button>
                <button className='btn btn-warning' onClick={handleReset}>RESET</button>
            </div>
            <div>
                Name : {name}
                <br />
                Phone: {phone}
                <br /><hr />
                <label htmlFor="name">Name:</label>
                <input type="text" id='name' className='input' onChange={e => setName(e.target.value)} />
                <button className='btn btn-info'
                    onClick={() => dispatch({ type: "UPDATE_NAME", payload: nameValue })}
                >Update Name</button>
                <br />
                <label htmlFor="ph">Phone:</label>
                <input type="text" id='ph' className='input' onChange={e => setPhone(e.target.value)} />
                <button className='btn btn-info'
                    onClick={() => dispatch({ type: "UPDATE_PHONE", payload: phoneValue })}

                >Update Phone</button>
            </div>
        </div>
    )
}

export default ReduxCounter