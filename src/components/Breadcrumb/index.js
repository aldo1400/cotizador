import React from 'react'
import 'styles/breadcrumb.scss'

function Breadcrumb({ current, total }) {
    return (
        <div className="breadcrumb--container">
            <p className="breadcrumb--title"><span>Paso {current}</span> de {total}</p>
        </div>
    );
}

export default Breadcrumb;