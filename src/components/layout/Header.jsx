import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoCart, IoLogOut, IoPersonAdd, IoPersonCircle } from "react-icons/io5";
import { IoIosLogIn } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { isLoggedIn } from "../../api/userAPI";
import { useSelector } from "react-redux";

const Header = () => {
  const auth = isLoggedIn();
  const navigate = useNavigate();

  const cart_items = useSelector(store => store.cart.cart_items)
  const length = cart_items.length

  const handleLogout = () => {
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <>
      {/* TOP NAV */}
      <div className="navbar bg-base-200 shadow-sm">
        {/* Brand */}
        <div className="navbar-start">
          <Link to="/" className="btn btn-ghost normal-case text-2xl font-bold text-primary">
            Store
          </Link>
        </div>

        {/* Search Bar (hidden on small screens) */}
        <div className="navbar-center hidden md:flex w-[45%]">
          <div className="join w-full">
            <input
              type="search"
              placeholder="Search products..."
              className="input input-bordered join-item w-full"
            />
            <button className="btn btn-primary join-item">Search</button>
          </div>
        </div>

        {/* Right Menu */}
        <div className="navbar-end gap-3">

          {/* Authenticated */}
          {auth ? (
            auth.role === 1 ? (
              <>
                <Link className="btn btn-ghost text-xl" to="/admin/dashboard">
                  <MdDashboard />
                </Link>

                <button onClick={handleLogout} className="btn btn-error btn-square text-xl">
                  <IoLogOut />
                </button>
              </>
            ) : (
              <>
                <Link className="btn btn-ghost text-2xl" to="/profile">
                  <IoPersonCircle />
                </Link>

                <Link className="btn btn-ghost btn-square relative text-2xl" to="/cart">
                  <IoCart />
                  {/* <sup className="text-sm">({length})</sup> */}
                  {/* example count badge */}
                  {
                    length > 0 &&
                    <span className="badge badge-sm badge-warning absolute -top-1 -right-3">{length}</span>
                  }
                </Link>

                <button onClick={handleLogout} className="btn btn-error btn-square text-xl">
                  <IoLogOut />
                </button>
              </>
            )
          ) : (
            // Guest
            <>
              <Link className="btn btn-ghost text-xl" to="/login">
                <IoIosLogIn />
              </Link>

              <Link className="btn btn-primary" to="/register">
                <IoPersonAdd className="text-lg" />
                Register
              </Link>
            </>
          )}
        </div>
      </div>

      {/* SECONDARY NAV */}
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          {/* MOBILE DROPDOWN */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h12M4 18h8" />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li><Link to="/">Home</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Desktop Nav */}
          <ul className="menu menu-horizontal px-1 hidden lg:flex">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Mobile search bar */}
        <div className="navbar-end w-full lg:hidden px-4 pb-2">
          <input
            type="search"
            placeholder="Search..."
            className="input input-bordered w-full"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
