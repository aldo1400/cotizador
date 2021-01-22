import React from 'react';
import 'styles/checkbox.scss'

function CheckBox(props) {
    const { label, value } = props;
    return (
        <label className="checkbox--container">{label}
            <input type="checkbox" className="checkbox--input" value={value} />
            <span className="checkbox--checkmark"></span>
        </label>
    );
};

export default CheckBox;