import React from 'react';
import './ServicesStyle.css';

import S1 from '../../Images/Services/Export.png';
import S2 from '../../Images/Services/Import.jpg';
import S3 from '../../Images/Services/Maintanince.jpg';
import S4 from '../../Images/Services/Marketing.jpg';
import S5 from '../../Images/Services/Rental.jpg';

const Services = (props) => {

    const ServicesList = [
        {
            id: 1,
            name: "Export",
            src: S1,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere sapien et commodo bibendum."
        }
        ,
        {
            id: 2,
            name: "Import",
            src: S2,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere sapien et commodo bibendum."
        }
        ,
        {
            id: 3,
            name: "Maintenance",
            src: S3,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere sapien et commodo bibendum."
        }
        ,
        {
            id: 4,
            name: "Marketing",
            src: S4,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere sapien et commodo bibendum."
        }
        ,
        {
            id: 5,
            name: "Rent",
            src: S5,
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere sapien et commodo bibendum."
        }
    ]

    const ServicesDesplay = ServicesList.map(
        ser =>
            <div className="serv-box" key={ser.id}>
                <img src={ser.src} alt={ser.name} title={ser.name} />
                <h3 > {ser.name} </h3>
                <hr />
                <p>{ser.description}</p>
            </div>
    )

    return (
        <div
            className="container"
            ref={props.referance}
        >

            <h2 className="services-header">Services</h2>
            {ServicesDesplay}

            <div className="Clear"></div>
        </div>
    );

}

export default Services;