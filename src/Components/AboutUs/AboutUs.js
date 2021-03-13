import React from 'react';
import './AboutUsStyle.css';
import about from '../../Images/about-us.jpg';

const AboutUs = () => {

    return (
        <div className="container">
            <div className="about-us">
                <div className="about-content">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum ipsum sit amet urna interdum pellentesque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum ipsum sit amet urna interdum pellentesque.</p>
                </div>
                <div className="img-div">
                    <img src={about} alt="about" />
                </div>
                <div className="Clear"></div>
            </div>
        </div>
    );
}

export default AboutUs;