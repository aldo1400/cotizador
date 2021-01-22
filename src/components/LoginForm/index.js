import React, { useState, useContext } from 'react';
import 'styles/login.scss'
import CheckBox from 'components/CheckBox'
import TextField from 'components/TextField'
import { useHistory } from 'react-router-dom'
import { getUser } from 'services/user';
import { randomIntFromInterval } from 'helpers';
import UserContext from 'UserContext'

function LoginForm() {
    const [valid, setValid] = useState(true);
    const [form, setForm] = useState({
        number: '',
        birthdate: '',
        phone: ''
    });

    const [user, setUser] = useContext(UserContext);

    const history = useHistory();

    const handleChange = (e) => {
        const { name, value } = e.target;

        setForm({ ...form, [name]: value });
    };

    const login = async () => {
        try {
            const user = await getUser();
            if (randomIntFromInterval(0, 1)) {
                setUser(user);
                return history.push('/perfil');
            }
            return history.push('/registrarse');

        } catch (error) {
            console.log('Error:', error.message)
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        login(form);
    };

    return (
        <div className="login--form">
            <p className="login--title">Obtén tu <span>seguro ahora</span></p>
            <p className="login--subtitle">Ingresa los datos para comenzar</p>
            <form method="POST" onSubmit={handleSubmit}>
                <div className="login--item">
                    <TextField id="number" label="Nro de documento" type="text" name="number" required value={form.number} onChange={handleChange}></TextField>
                </div>
                <div className="login--item">
                    <TextField id="birthdate" label="" type="date" name="birthdate" required value={form.birthdate} onChange={handleChange}></TextField>
                </div>
                <div className="login--item">
                    <TextField id="phone" label="Celular" type="text" name="phone" required value={form.phone} onChange={handleChange}></TextField>
                </div>
                <div className="login--item">
                    <CheckBox label="Acepto la Política de Protección de Datos Personales y los Términos y Condiciones." />
                </div>
                <div className="login--item">
                    <CheckBox label="Acepto la Política de Envío de Comunicaciones Comerciales." />
                </div>
                <input type="submit" className="login--submit" value="Comencemos" disabled={!valid} />
            </form>
        </div>
    );
}

export default LoginForm;