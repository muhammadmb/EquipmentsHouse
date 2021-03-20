import React from 'react';
import './FooterStyle.css'

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">

                <div className="footer-section">
                    <h3 className="section-header">
                        Location
                    </h3>
                    <p>
                        225 PL Cairo, Egypt
                    </p>
                </div>

                <div className="footer-section">
                    <h3 className="section-header">
                        Around The Web
                    </h3>
                    <a href="https://fb.com" target="_blank" rel="noreferrer"><i className="fab fa-facebook"></i></a>
                    <a href="https://twitter.com" target="_blank" rel="noreferrer"><i className="fab fa-twitter"></i></a>
                    <a href="https://instagram.com" target="_blank" rel="noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="https://youtube.com" target="_blank" rel="noreferrer"><i className="fab fa-youtube"></i></a>
                    <a href="https://whatsapp.com" target="_blank" rel="noreferrer"><i className="fab fa-whatsapp"></i></a>
                </div>

                <div className="footer-section">
                    <h3 className="section-header">
                        About
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis perferendis suscipit obcaecati maiores sequi rem tenetur ex debitis est quod eos molestias, nisi alias aliquam officiis dolore totam itaque voluptatibus.
                    </p>
                </div>
                <div className="Clear"></div>

            </div>
            <p className="copy-right">
                Copyright Equipment House 2010 - {new Date().getFullYear()}
            </p>
        </div>
    )
}

export default Footer
