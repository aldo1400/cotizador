import React from 'react';
import 'styles/congratulation.scss';
import Button from 'components/Button';

function Congratulation() {
    return (
            <div className="congratulation--container">
                <p className="title">!Gracias por <span>confiar en nosotros!</span></p>
                <p className="congratulation--message">Queremos conocer mejor la salud de los asegurados. Un asesor se pondrá en contacto contigo en las siguientes 48 horas.</p>
                <div className="congratulation--button">
                    <Button label="Ir a salud" />
                </div>
            </div>
    );
}

export default Congratulation;