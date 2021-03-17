import React from 'react';
import './NavBarStyle.css'
import ReorderIcon from '@material-ui/icons/Reorder';
import Referances from '../Helper/Referances';

const NavBar = (props) => {

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
                    <li className="nav-item" onClick={() => Referances.executeScroll(props.refs[1])}>About</li>
                    <li className="nav-item" onClick={() => Referances.executeScroll(props.refs[2])}>Products</li>
                    <li className="nav-item" onClick={() => Referances.executeScroll(props.refs[3])}>Services</li>
                    <li className="nav-item" onClick={() => Referances.executeScroll(props.refs[4])}>Testimonials</li>
                </ul>

            </div>
        </nav>
    );
}

export default NavBar;