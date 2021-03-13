import React from 'react';
import './NavBarStyle.css'
import ReorderIcon from '@material-ui/icons/Reorder';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                <ReorderIcon fontSize="large" />
            </button>

            <div className="collapse navbar-collapse" id="navbarContent">

                <h1 className="brand">
                    Equipments House
                </h1>

                <ul className="links">
                    <li className="nav-item"><a href="#1" onClick={() => console.log('some')}>About</a></li>
                    <li className="nav-item"><a href="#1">Services</a></li>
                    <li className="nav-item"><a href="#1">Products</a></li>
                    <li className="nav-item"><a href="#1">Contact</a></li>
                </ul>

            </div>
        </nav>
    );
}

export default NavBar;