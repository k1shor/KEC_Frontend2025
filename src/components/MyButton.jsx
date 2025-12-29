import React, { useEffect, useState } from 'react'

const MyButton = ({ mycolor, text, myfunction }) => {


    return (
        <button
            onClick={myfunction}
            className={`${mycolor} rounded-2xl px-4 py-2`}
        >
            {text}
        </button>
    )
}

export default MyButton