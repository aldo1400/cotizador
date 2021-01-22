import React from 'react';
import 'styles/radiobox.scss';

function RadioBox({label,name,handleChange,value}){
    return (
        <label className="radiobox--container">
            <p className="radiobox--label">{label}</p>
            <input value={value} type="radio" name={name} className="radiobox--input" onChange={handleChange}/>
            <span className="radiobox--checkmark"></span>
        </label>
        
    );
}

export default RadioBox;