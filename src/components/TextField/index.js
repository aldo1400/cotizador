import React from 'react';
import 'styles/textfield.scss'

function TextField(props) {
    const { onChange, value, label, type, name, id } = props;

    return (
        <div className="textfield">
            <input type={type} className="textfield--input" id={id} value={value} onChange={onChange} required name={name} />
            <label htmlFor="texfield" className="textfield--label" required>{label}</label>
        </div>
    );
}


export default TextField;