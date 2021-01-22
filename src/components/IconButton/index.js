import React from 'react';
import 'styles/iconbutton.scss'
function IconButton({ id, label, onClick, image, disabled = false,variant='primary', classes='' }) {
    return (
        <button id={id} onClick={onClick} className={`icon ${classes}`} disabled={disabled} >
            <img src={image} className="button--image" alt="icon"/>
        </button >
    );
}

export default IconButton;