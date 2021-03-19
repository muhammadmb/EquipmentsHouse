import React, { useRef, useState } from 'react';
import './Contactstyle.css';
import AboutUs from '../AboutUs/AboutUs';
import Header from '../Header/MainPage';
import OurProducts from '../OurProducts/OurProducts';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import Referances from '../Helper/Referances';
import Contact from '../ContactUs/Contact';

const Content = () => {

    const [home, setHome] = useState(false);
    const [about, setAbout] = useState(false);
    const [ourProducts, setOurProducts] = useState(false);
    const [services, setServices] = useState(false);
    const [testimonials, setTestimonials] = useState(false);
    const [contact, setContact] = useState(false);

    const homeRef = useRef();
    const aboutRef = useRef();
    const productRef = useRef();
    const serviceRef = useRef();
    const testimonialRef = useRef();
    const contactRef = useRef();

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

                <div
                    className={contact ? "active bullet" : "bullet"}
                    onClick={() => Referances.executeScroll(contactRef)}
                    onMouseEnter={() => setContact(true)}
                    onMouseLeave={() => setContact(false)}
                >
                    <div
                        className="hover"
                        style={{ display: contact ? 'unset' : 'none' }}
                    >
                        Contact
                    </div>
                </div>

            </div>


            <Header
                homeReferance={homeRef}
                refs={[
                    homeRef,
                    aboutRef,
                    productRef,
                    serviceRef,
                    testimonialRef,
                    contactRef
                ]}
            />

            <AboutUs referance={aboutRef} />

            <OurProducts referance={productRef} />

            <Services referance={serviceRef} />

            <Testimonials referance={testimonialRef} />

            <Contact referance={contactRef} />
        </div>
    );
}

export default Content;
