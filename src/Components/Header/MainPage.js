import React, { useEffect, useState } from 'react';
import './MainPageStyle.css';
import ReorderIcon from '@material-ui/icons/Reorder';
import bg1 from '../../Images/1.jpg';
import bg3 from '../../Images/3.jpg';
import bg4 from '../../Images/4.jpg';
import bg6 from '../../Images/6.jpg';
import Settings from '../Settings/Settings';

const MainPage = () => {

    const [value, setValue] = useState(0);
    const [color, setColor] = useState(localStorage.getItem("color"));
    const [randomBackground, setRandomBackground] = useState(true);
    const backgrounds = [bg1, bg3, bg4, bg6];
    let background = backgrounds[value];

    useEffect(() => {

        if (randomBackground) {
            const interval = setInterval(() => {
                setValue(Math.floor(Math.random() * backgrounds.length));
            }, 5000);
            return () => clearInterval(interval);
        }
    });

    return (
        <div className="main-page" style={{ backgroundImage: `url(${background})` }}>

            <div className="overlay">
                <div className="header-area">

                    <Settings
                        OnColorChange={(value) => setColor(value)}
                        backgroundOptionsChange={(value) => setRandomBackground(!value)}
                    />
                    <div className="container">
                        <nav className="navbar navbar-expand-lg">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                                <ReorderIcon fontSize="large" />
                            </button>

                            <div className="collapse navbar-collapse" id="navbarContent">

                                <h1 className="brand">
                                    Equipments House
                            </h1>

                                <ul className="links">
                                    <li className="nav-item"><a href="#1">About</a></li>
                                    <li className="nav-item"><a href="#1">Services</a></li>
                                    <li className="nav-item"><a href="#1">Products</a></li>
                                    <li className="nav-item"><a href="#1">Contact</a></li>
                                </ul>

                            </div>
                        </nav>
                    </div>
                </div>

                <div className="introduction-text">
                    <h1>Find your <span style={{ color }}>Equipments</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum ipsum sit amet urna interdum pellentesque.</p>
                </div>

            </div>
        </div>
    );
}

export default MainPage;