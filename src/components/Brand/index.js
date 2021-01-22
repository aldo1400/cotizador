import React from 'react';
import 'styles/brand.scss'
import logo from 'images/logo.png'

function Brand() {
    return (
        <div className="brand--container">
            <img src={logo} alt="brand--image" className="brand--image" alt="brand" />
        </div>
    );
}

export default Brand;