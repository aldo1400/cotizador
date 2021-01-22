import React from 'react';
import 'styles/header.scss'

function Header({title,subtitle}){
    const [primer,segundo]=title.split(',');
    return (
        <div className="header--container">
            <p className="header--title">{primer},<span>{segundo}</span></p>
            <p className="header--subtitle">{subtitle}</p>
        </div>
    );
}

export default Header;
