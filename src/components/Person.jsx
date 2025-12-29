import React, { useContext } from 'react'
import MyButton from './MyButton'
import { MyContext } from './MyContext'

// const Person = ({name = "name not available", address, phone}) => {
const Person = (props) => {
    let name = props.name || "Name not available"
    let address = props.address || 'n/a'
    let phone = props.phone || 'n/a'

    // destructuring object
    // const { name, address, phone } = props

    const info = useContext(MyContext)

    return (
        <div className='p-5 m-5 border shadow-2xl rounded w-1/2'>
            <h1 className='text-2xl'>{info}, {name}</h1>
            <h1 className='text-xl'>{address}</h1>
            <h1 className='text-xl'>{phone}</h1>
            <button className='myButton'>CLICK ME</button>

            <MyButton text='Add' mycolor={'bg-green-400 hover:bg-green-300 active:bg-green-600'} myfunction={()=>alert('add')}/>
            <MyButton text='Subtract' mycolor='bg-red-400 hover:bg-red-300 active:bg-red-600' myfunction={()=>alert('Minus')}/>
            <MyButton text='Product' mycolor='bg-orange-400 hover:bg-orange-300 active:bg-orange-600' myfunction={()=>alert('Product')}/>
            <MyButton text='Division' mycolor='bg-blue-400 hover:bg-blue-300 active:bg-blue-600' myfunction={()=>alert('Division')}/>
        </div>
    )
}

export default Person