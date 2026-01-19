import React from 'react'
import AdminSidebar from './AdminSidebar'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <div className='flex w-screen'>
        <div className="w-[300px]">
            <AdminSidebar/>
        </div>
        <div className='w-full'>
            <Outlet/>
        </div>
    </div>
  )
}

export default AdminLayout