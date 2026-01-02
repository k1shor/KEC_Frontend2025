import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { verifyEmail } from '../api/userAPI'

const EmailVerification = () => {
    let params = useParams()
    let token = params.token
    let [message, setMessage] = useState('')
    let [error, setError] = useState('')

    useEffect(() => {
        verifyEmail(token)
            .then((data) => {
                if (data.error) {
                    setError(data.error)
                }
                else {
                    setMessage(data.message)
                }
            })
    }, [])

    return (
        <div className='text-center p-80'>
            <span className='text-red-400 text-2xl'>{error}</span>
            <span className='text-green-400 text-2xl'>{message}</span>
        </div>
    )
}

export default EmailVerification