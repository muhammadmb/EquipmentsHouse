import React, { useRef, useState } from 'react';
import './Contactstyle.css';
import AboutUs from '../AboutUs/AboutUs';
import Header from '../Header/MainPage';
import OurProducts from '../OurProducts/OurProducts';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Referances from '../Helper/Referances';

const Content = () => {

    const [home, setHome] = useState(false);
    const [about, setAbout] = useState(false);
    const [ourProducts, setOurProducts] = useState(false);
    const [services, setServices] = useState(false);
    const [testimonials, setTestimonials] = useState(false);

    const homeRef = useRef();
    const aboutRef = useRef();
    const productRef = useRef();
    const serviceRef = useRef();
    const testimonialRef = useRef();

    return (
        <div>
            <div className="nav-bullets">

                <div
                    className={home ? "active bullet" : "bullet"}
                    onClick={() => Referances.executeScroll(homeRef)}
                    onMouseEnter={() => setHome(true)}
                    onMouseLeave={() => setHome(false)}
                >
                    <div
                        className="hover"
                        style={{ display: home ? 'unset' : 'none' }}
                    >
                        Home
                    </div>
                </div>

                <div
                    className={about ? "active bullet" : "bullet"}
                    onClick={() => Referances.executeScroll(aboutRef)}
                    onMouseEnter={() => setAbout(true)}
                    onMouseLeave={() => setAbout(false)}
                >
                    <div
                        className="hover"
                        style={{ display: about ? 'unset' : 'none' }}
                    >
                        About Us
                    </div>
                </div>

                <div
                    className={ourProducts ? "active bullet" : "bullet"}
                    onClick={() => Referances.executeScroll(productRef)}
                    onMouseEnter={() => setOurProducts(true)}
                    onMouseLeave={() => setOurProducts(false)}
                >
                    <div
                        className="hover"
                        style={{ display: ourProducts ? 'unset' : 'none' }}
                    >
                        Our Products
                    </div>
                </div>

                <div
                    className={services ? "active bullet" : "bullet"}
                    onClick={() => Referances.executeScroll(serviceRef)}
                    onMouseEnter={() => setServices(true)}
                    onMouseLeave={() => setServices(false)}
                >
                    <div
                        className="hover"
                        style={{ display: services ? 'unset' : 'none' }}
                    >
                        Services
                    </div>
                </div>

                <div
                    className={testimonials ? "active bullet" : "bullet"}
                    onClick={() => Referances.executeScroll(testimonialRef)}
                    onMouseEnter={() => setTestimonials(true)}
                    onMouseLeave={() => setTestimonials(false)}
                >
                    <div
                        className="hover"
                        style={{ display: testimonials ? 'unset' : 'none' }}
                    >
                        Testimonials
                    </div>
                </div>

            </div>


            <div ref={homeRef} >
                <Header
                    homeReferance={homeRef}
                    refs={[
                        homeRef,
                        aboutRef,
                        productRef,
                        serviceRef,
                        testimonialRef
                    ]}
                />
            </div>

            <div ref={aboutRef} >
                <AboutUs />
            </div>

            <div ref={productRef} >
                <OurProducts />
            </div>

            <div ref={serviceRef}>
                <Services />
            </div>

            <div ref={testimonialRef} >
                <Testimonials />
            </div>
        </div>
    );
}

export default Content;
