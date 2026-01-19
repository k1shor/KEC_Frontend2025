import React from 'react'
import { BiHome } from 'react-icons/bi'
import { GrBlog, GrDashboard, GrGrid } from 'react-icons/gr'
import { TbFriends } from 'react-icons/tb'
import { Link } from 'react-router-dom'

const AdminSidebar = () => {
  return (
    <aside className="bg-base-100 border-r min-h-screen w-full md:w-64 flex flex-col">
      {/* Header */}
      <div className="px-4 py-4 border-b flex items-center gap-2">
        <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10">
          <GrDashboard className="text-primary text-xl" />
        </div>
        <div>
          <h1 className="text-lg font-bold leading-tight">
            Admin Panel
          </h1>
          <p className="text-xs text-base-content/70">
            Manage your store
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto">
        {/* Horizontal on mobile, vertical on md+ */}
        <ul className="menu menu-horizontal md:menu-vertical w-full gap-1 px-2 md:px-4 py-2 md:py-4 text-base">
          <li className="w-full">
            <Link
              to="/admin/dashboard"
              className="flex items-center gap-3 rounded-lg"
            >
              <GrDashboard className="text-lg" />
              <span>Dashboard</span>
            </Link>
          </li>

          <li className="w-full">
            <Link
              to="/admin/category"
              className="flex items-center gap-3 rounded-lg"
            >
              <GrGrid className="text-lg" />
              <span>Categories</span>
            </Link>
          </li>

          <li className="w-full">
            <Link
              to="/admin/products"
              className="flex items-center gap-3 rounded-lg"
            >
              <GrBlog className="text-lg" />
              <span>Products</span>
            </Link>
          </li>

          <li className="w-full">
            <Link
              to="/admin/users"
              className="flex items-center gap-3 rounded-lg"
            >
              <TbFriends className="text-lg" />
              <span>Users</span>
            </Link>
          </li>

          <li className="w-full">
            <Link
              to="/admin/orders"
              className="flex items-center gap-3 rounded-lg"
            >
              <GrBlog className="text-lg" />
              <span>Orders</span>
            </Link>
          </li>

          {/* Go Home */}
          <li className="w-full md:hidden">
            {/* On mobile keep this in the menu */}
            <Link
              to="/"
              className="flex items-center gap-3 rounded-lg"
            >
              <BiHome className="text-lg" />
              <span>Go to Home</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Footer / actions */}
      <div className="p-3 md:p-4 border-t flex flex-col gap-2">
        {/* Desktop Home button fixed at bottom */}
        <Link
          to="/"
          className="hidden md:inline-flex btn btn-ghost justify-start gap-2"
        >
          <BiHome className="text-lg" />
          <span>Go to Home</span>
        </Link>

        <button className="btn btn-error btn-block">
          LOGOUT
        </button>
      </div>
    </aside>
  )
}

export default AdminSidebar
