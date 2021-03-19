import React from 'react';
import './ContactStyle.css';
import background from '../../Images/world-map.png'

const Contact = (props) => {
    return (
        <div
            className="contact-us"
            ref={props.referance}
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="overlay">
                <div className="container">
                    <h2>Contact Us</h2>

                    <form action="">
                        <div className="leftSection">
                            <input type="text" placeholder="Name" name="userName" />
                            <input type="phone" placeholder="Phone" name="Phone" />
                            <input type="Email" placeholder="Email" name="Email" />
                            <input type="text" placeholder="Subject" name="Subject" />
                        </div>

                        <div className="rightSection">
                            <textarea name="message" placeholder="Your Message"></textarea>
                            <input type="submit" value="Send" />
                        </div>
                    </form>
                    <div className="Clear"></div>
                </div>
            </div>

        </div>
    )
}

export default Contact;