import React from 'react';
import './TestimonialsStyle.css'

const Testimonials = (props) => {
    return (
        <div
            className="ts"
            ref={props.referance}
        >
            <div className="container">
                <h2>Testimonials</h2>
                <div className="ts-container">

                    <div className="ts-box">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris erat nisl, rhoncus eu sapien nec, convallis fermentum nunc.</p>
                        <img src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="" />
                        <h4>MD Duran</h4>
                        <p className="ts-title">X-Change CEO</p>
                    </div>

                    <div className="ts-box">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris erat nisl, rhoncus eu sapien nec, convallis fermentum nunc.</p>
                        <img src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8MnwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                        <h4>Soliman</h4>
                        <p className="ts-title">Souq CEO</p>
                    </div>

                    <div className="ts-box">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris erat nisl, rhoncus eu sapien nec, convallis fermentum nunc.</p>
                        <img src="https://images.unsplash.com/photo-1600896903045-3d373014baa3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=802&q=80" alt="" />
                        <h4>Khaled</h4>
                        <p className="ts-title">A-Machen Marketing Manager</p>
                    </div>

                </div>
                <div className="Clear"></div>
            </div>
        </div>
    )
}

export default Testimonials
