import React, { useState, useEffect, useContext } from 'react';
import TextField from 'components/TextField';
import RadioBox from 'components/RadioBox';
import Button from 'components/Button';
import RelativeForm from 'components/RelativeForm';
import 'styles/profile.scss'
import logo from 'images/next.png'
import { useHistory } from 'react-router-dom'
import UserContext from 'UserContext'

function ProfileForm() {
    const [relatives, setRelatives] = useState([]);
    const [insured, setInsured] = useState('');
    const [form, setForm] = useState({
        number: '',
        name: ''
    });
    const [user, setUser] = useContext(UserContext);

    const history = useHistory();

    const onClick = (e) => {
        e.preventDefault();
        history.push('/planes');
    };

    const handleUpdate = (relatives) => {
        setRelatives(relatives);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setInsured(value);
    };

    useEffect(() => {
        setForm({
            number: user.address?.zipcode,
            name: user.name,
            lastname: user.name,
            surname: user.name,
            birthdate: new Date(1995, 11, 17)
        });
    }, []);

    return (
        <div className="profile--container">
            <p className="profile--title">Datos personales del titular</p>
            <form method="POST">
                <div className="profile--item">
                    <TextField label="Nro de documento" type="text" required value={form.number} name={form.number}></TextField>
                </div>
                <div className="profile--item">
                    <TextField label="Nombres" type="text" required value={form.name} name="name"></TextField>
                </div>

                <div className="profile--item">
                    <TextField label="Apellido Paterno" type="text" required value={form.lastname} name="lastname"></TextField>
                </div>

                <div className="profile--item">
                    <TextField label="Apellido Materno" type="text" required value={form.surname} name="surname"></TextField>
                </div>

                <div className="profile--item">
                    <TextField label="Fecha de Nacimiento" type="date" required></TextField>
                </div>
                <div className="profile--item">
                    <p className="label"> Género </p>
                    <RadioBox label="Masculino" name="gender" handleChange={handleChange} value="man"></RadioBox>
                    <RadioBox label="Femenino" name="gender" handleChange={handleChange} value="woman"></RadioBox>
                </div>
                <div className="profile--item">
                    <p className="label">¿A quién vamos a asegurar?</p>
                    <RadioBox label="Solo a mi" name="insured" handleChange={handleChange} value="me"></RadioBox>
                    <RadioBox label="A mi y a mi familia" name="insured" handleChange={handleChange} value="family"></RadioBox>
                </div>
                {insured === 'family' && (
                    <div className="profile--item">
                        <p className="profile--label">Datos de tus familiares</p>
                        <RelativeForm handleUpdate={handleUpdate} />
                    </div>
                )}

                <div className="profile--button">
                    <Button label="Continuar" image={logo} onClick={onClick} type="submit" />
                </div>
            </form>
        </div>

    );
}

export default ProfileForm;