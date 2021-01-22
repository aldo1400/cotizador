import React from 'react';

import Button from 'components/Button'
import IconButton from 'components/IconButton'
import DeleteIcon from 'images/ic_delete.png';
import 'styles/relative.scss'


function Relative({ relative,removeRelative }) {
    const { id,type, birthdate } = relative;
    return (
        <div className="relative--card">
            <p>{type}</p>
            <p>{birthdate}</p>
            <IconButton classes="mobile icon" variant="secondary" image={DeleteIcon} onClick={()=>removeRelative(id)}/>
            <Button id="delete" variant="secondary" classes="desktop" label="Eliminar" onClick={()=>removeRelative(id)} />
        </div>
    );
}

export default Relative;