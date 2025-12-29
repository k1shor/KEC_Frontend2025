import React, { useContext } from 'react'
import MyCarousel from '../components/MyCarousel'
import { MyThemeContext } from '../App'

const Homepage = () => {
    let theme = useContext(MyThemeContext)

    return (
        <div className={`flex p-2 md:xp-20! lg:px-32! flex-col lg:flex-row items-center ${ theme === 'LIGHT' ? 'bg-slate-100' : 'bg-slate-800 text-white'}`}>
            <div className='lg:w-1/2 order-2 lg:order-1 md:pl-10 p-10'>
                <h1>Our Fantastic Store</h1>
                <p className='text-2xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem doloremque ratione incidunt earum deserunt repellendus, dolorem ut quos natus accusantium et sed ad, suscipit consequatur itaque iusto quisquam. Aut, tenetur?
                </p>
                <button className='bg-blue-500 hover:bg-blue-300 active:bg-blue-600 px-4 py-2 text-xl text-white hover:text-blue-500 rounded-pill'> Contact Now </button>
            </div>
            <div className='lg:w-1/2 order-1 lg:order-2'>
            {/* Carousel */}
            <MyCarousel/>
            </div>

        </div>
    )
}

export default Homepage