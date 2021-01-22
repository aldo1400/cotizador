import React, { useState, useEffect } from 'react';
import TextField from 'components/TextField';
import Button from 'components/Button';
import IconButton from 'components/IconButton'
import Relative from 'components/Relative';
import AddIcon from 'images/ic_plus.png'

function RelativeForm({ handleUpdate }) {
    const [relatives, setRelatives] = useState([]);
    const [form, setForm] = useState({
        type: 'Conyuge',
        birthdate: '02/05/1997',
    });

    const generateId = () => {
        const now = new Date();
        return now.getTime();
    };

    const addRelative = () => {
        const relative = {
            id: generateId(),
            type: form.type,
            birthdate: form.birthdate
        };
        setRelatives([...relatives, relative]);
        resetForm();
    };

const resetForm=()=>{
    setForm({
        type: 'Conyuge',
        birthdate: '02/05/1997',
    });
};

    const removeRelative = (relativeId) => {
        const relativesFiltered = relatives.filter(relative => relative.id !== relativeId);
        setRelatives(relativesFiltered);
    };

    const onChange = (e) => {
        const { value, name } = e.target;
        setForm({ ...form, [name]: value });
    };

    useEffect(() => {
        handleUpdate(relatives);
    }, [relatives]);

    return (
        <div className="relative-container">
            <div className="relative--form">
                <TextField type="text" id="type" name="type" onChange={onChange} label="Vinculo" value={form.type} />
                <TextField type="text" id="birthdate" name="birthdate" onChange={onChange} label="F. nacimiento"  value={form.birthdate}/>
                <Button label="Agregar" onClick={addRelative} variant="secondary" classes="desktop"/>
                <IconButton image={AddIcon} onClick={addRelative} variant="secondary" classes="mobile"/>
            </div>
            <div className="relative--items">
            {relatives.map(relative => <Relative key={relative.id} relative={relative} removeRelative={removeRelative} />)}
            </div>
        </div>
    );
}

export default RelativeForm;