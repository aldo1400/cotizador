import React from 'react';
import 'styles/button.scss'

function Button({ id, label, onClick, image, disabled = false,variant='primary', classes='',type='button' }) {
    return (
        <button id={id} onClick={onClick} className={`button button--${variant} ${disabled ? 'button--disabled' : ''} ${classes}`} disabled={disabled} type={type} >
            { label} {image && <img src={image} className="button--image"  alt="button"/>}
        </button >
    );
}

export default Button;