import React from 'react';
import Feature from 'components/Feature';
import 'styles/detail.scss'
import Money from 'images/Money.png'

function PlanDetail({ plan }) {

    const features = [
        {
            id: 1,
            title: 'Lima (zona de cobertura'
        },
        {
            id: 2,
            title: '+30 clínicas (en red afiliada)'
        },
        {
            id: 3, title: 'Médico a domicilio'
        },
        {
            id: 4,
            title: 'Chequeos preventivos'
        },
        {
            id: 5,
            title: 'Reembolso nacional'
        },
        {
            id: 6,
            title: 'Reembolso internacional'
        }
    ];
    return (
        <div className="detail--container">
            <div className="detail--title">
                <p>Cuentas con estos beneficios:</p>
            </div>
            <div className="detail">
                <div className="detail--info">
                    <p className="detail--description">Cobertura máxima</p>
                    <p className="detail--price">S/ 1MM</p>
                    <p className="detail--name">{plan.name}</p>
                </div>
                <div className="detail--image">
                    <img src={Money} alt="money"/>
                </div>
            </div>
            <div className="detail--features">
                {features.map(feature => {
                    return (
                        <Feature key={feature.id} feature={feature} plan={plan} />
                    );
                })}
            </div>
        </div>
    );
}

export default PlanDetail;