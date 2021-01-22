import React, { useState, useEffect } from 'react';
import TextField from 'components/TextField';
import RadioBox from 'components/RadioBox';
import Button from 'components/Button';

import RelativeForm from 'components/RelativeForm';
import { useHistory } from 'react-router-dom'

import 'styles/register.scss'

function RegisterForm() {
    const [relatives, setRelatives] = useState([]);
    const [disabled, setDisabled] = useState(true);
    const [insured, setInsured] = useState('');

    const history = useHistory();

    useEffect(() => {
        if (relatives.length > 0 || insured === 'me') {
            return setDisabled(false);
        }
        return setDisabled(true);

    }, [relatives, insured]);

    const handleUpdate = (relatives) => {
        setRelatives(relatives);
    };


    const handleChange = (e) => {
        const { name, value } = e.target;

        setInsured(value);
    };

    const handleClick = () => {
        history.push('/gracias');
    };
    return (
        <div className="register--container">
            <div className="register--item">
                <p className="register--label">Ingresa tu nombre</p>
                <TextField id="name" name="name" label="Nombre" />
            </div>

            <div className="register--item">
                <p className="register--label">¿A quién vamos a asegurar?</p>
                <RadioBox label="Solo a mi" name="insured" handleChange={handleChange} value="me"></RadioBox>
                <RadioBox label="A mi y a mi familia" name="insured" handleChange={handleChange} value="family"></RadioBox>
            </div>
            {insured === 'family' && (
                <div className="register--item">
                    <p className="register--label">Datos de tus familiares</p>
                    <RelativeForm handleUpdate={handleUpdate} />
                </div>
            )}

            <div className="register--button">
                <Button label="continuar" disabled={disabled} onClick={handleClick} />
            </div>
        </div>
    );
}


export default RegisterForm;