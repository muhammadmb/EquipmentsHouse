import React, { useState } from 'react';
import './OurProductsStyle.css';
import Helper from '../Helper/Helper'
import P0 from '../../Images/Products/10.jpg';
import P1 from '../../Images/Products/11.jpg';
import P2 from '../../Images/Products/12.jpg';
import P3 from '../../Images/Products/13.jpg';
import P4 from '../../Images/Products/14.jpg';
import P5 from '../../Images/Products/15.jpg';
import P6 from '../../Images/Products/16.jpg';
import P7 from '../../Images/Products/17.jpg';
import P8 from '../../Images/Products/18.jpg';
import P9 from '../../Images/Products/19.jpg';

const OurProducts = (props) => {

    const pics = [
        {
            id: 1,
            src: P0,
            name: "Fork Lift"
        },
        {
            id: 2,
            src: P1,
            name: "Scooptram"
        },
        {
            id: 3,
            src: P2,
            name: "Fork Lift"
        },
        {
            id: 4,
            src: P3,
            name: "Towe Crane"
        },
        {
            id: 5,
            src: P4,
            name: "Excavator"
        },
        {
            id: 6,
            src: P5,
            name: "Roller"
        },
        {
            id: 7,
            src: P6,
            name: "Roller"
        },
        {
            id: 8,
            src: P7,
            name: "Bobcat"
        },
        {
            id: 9,
            src: P8,
            name: "Bobcat"
        },
        {
            id: 10,
            src: P9,
            name: "Bobcat"
        }];

    const [Preview, setPreview] = useState(false);
    const [activePic, setActivePic] = useState();

    const productPicture = pics.map(productPic =>
        <img
            key={productPic.id}
            src={productPic.src}
            alt="products pictures"
            onClick={
                () => {
                    setPreview(true); setActivePic(productPic)
                }
            }
        />)

    return (
        <div
            className="outProducts"
            ref={props.referance}
        >

            {
                Preview ?
                    <div className="previewPic" >

                        <div className="img-box-privew">
                            <span className="close" onClick={() => setPreview(false)}>X</span>
                            <h3 style={{ color: Helper.GetColorFromLocalStorage() }} >{activePic.name}</h3>
                            <img src={activePic.src} alt={activePic.name} title={activePic.name} />
                        </div>
                    </div>
                    :
                    null
            }

            <div className="container">
                <h2>Our Products</h2>
                <div className="img-box">
                    {productPicture}
                </div>
            </div>
        </div>
    );
}

export default OurProducts;