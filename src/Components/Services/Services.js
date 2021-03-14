import React from 'react';
import './ServicesStyle.css';

import S1 from '../../Images/Services/Export.png';
import S2 from '../../Images/Services/Import.jpg';
import S3 from '../../Images/Services/Maintanince.jpg';
import S4 from '../../Images/Services/Marketing.jpg';
import S5 from '../../Images/Services/Rental.jpg';

const Services = () => {

    const ServicesList = [
        {
            name: "Export",
            src: S1,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere sapien et commodo bibendum."
        }
        ,
        {
            name: "Import",
            src: S2,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere sapien et commodo bibendum."
        }
        ,
        {
            name: "Maintenance",
            src: S3,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere sapien et commodo bibendum."
        }
        ,
        {
            name: "Marketing",
            src: S4,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere sapien et commodo bibendum."
        }
        ,
        {
            name: "Rent",
            src: S5,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere sapien et commodo bibendum."
        }
    ]

    const ServicesDesplay = ServicesList.map(
        ser =>
            <div className="serv-box">
                <img src={ser.src} alt={ser.name} title={ser.name} />
                <h3 > {ser.name} </h3>
                <hr />
                <p>{ser.description}</p>
            </div>
    )

    return (
        <div className="container">

            <h2 className="services-header">Services</h2>
            {ServicesDesplay}

        </div>
    );

}

export default Services;