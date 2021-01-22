import React from 'react';
import RegisterForm from 'components/RegisterForm'
import Header from 'components/Header';
import Breadcrumb from 'components/Breadcrumb';

function Register() {
    return (
        <>
            <Breadcrumb current="1" total="7" />
            <Header title="Hola, ¡empecemos!" subtitle="Cuéntanos un poco más de ti" />
            <div className="register">
                <RegisterForm />
            </div>
        </>
    );
}

export default Register;