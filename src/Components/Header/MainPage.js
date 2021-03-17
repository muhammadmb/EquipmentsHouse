import React, { useEffect, useState } from 'react';
import './MainPageStyle.css';
import bg1 from '../../Images/1.jpg';
import bg3 from '../../Images/3.jpg';
import bg4 from '../../Images/4.jpg';
import bg6 from '../../Images/6.jpg';
import Settings from '../Settings/Settings';
import NavBar from '../NavBar/NavBar';

const MainPage = (props) => {

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
                        <NavBar refs={props.refs} />
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