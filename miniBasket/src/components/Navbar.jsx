import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/"><h2 className='text-light'>Mini Basket</h2></NavLink>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav m-auto   fw-bold">

                            <li className="nav-item mx-3">

                                <NavLink className="nav-link" to="/">Home</NavLink>
                            </li>

                            <li className="nav-item mx-3">
                                <NavLink to='/product' className="nav-link">Products</NavLink>

                            </li>


                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
