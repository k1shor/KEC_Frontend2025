import React from 'react'
import { Link } from 'react-router-dom'
import { IoCart, IoPersonAdd } from 'react-icons/io5';
import { IoIosLogIn } from 'react-icons/io';


const Header = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row bg-dark text-white align-items-center py-1">
                    <div className="col-md-3 fs-3 fw-bold text-center">
                        <Link className="navbar-brand text-warning" to="/">Store</Link>
                    </div>
                    <div className="col-md-6 d-flex">
                        <input type="search" class="form-control me-2" id="search" placeholder="Search" />
                        <button type="submit" class="btn btn-warning">Search</button>
                    </div>
                    <div className="col-md-3 d-flex justify-content-evenly py-1">
                        <Link to='/login' className='text-warning fs-3'><IoIosLogIn /></Link>
                        <Link to={'/register'} className='text-warning fs-3'><IoPersonAdd /></Link>
                        <Link to={'/cart'} className='text-warning fs-3'><IoCart /></Link>
                    </div>
                </div>
            </div>


            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blogs">Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>

                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header