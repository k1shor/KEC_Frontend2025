import React from 'react'
import { isLoggedIn } from '../api/userAPI'
import { Navigate, Outlet } from 'react-router-dom'

const LoggedIn = () => {
  return (
    !isLoggedIn() ? <Outlet/> : <Navigate to={'/'}/>
)
}

export default LoggedIn