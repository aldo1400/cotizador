import React, { useEffect, useState } from 'react';
import PlanList from 'components/PlanList'
import PlanDetail from 'components/PlanDetail'
import { useHistory } from 'react-router-dom'
import Button from 'components/Button'
import Breadcrumb from 'components/Breadcrumb';
import Header from 'components/Header';

const PLANS = [
    {
        id: 1,
        name: 'Básico',
        price: '160',
        type: 'mensual',
        features: [1, 4, 5]
    }, {
        id: 2,
        name: 'Avanzado',
        price: '200',
        type: 'mensual',
        features: [1, 4, 5]

    }, {
        id: 3,
        name: 'Premium',
        price: '250',
        type: 'mensual',
        features: [1, 4, 5]

    }, {
        id: 4,
        name: 'Full',
        price: '500',
        type: 'mensual',
        features: [1, 4, 5]
    }
];


function Plans() {
    const [plans, setPlans] = useState(PLANS);
    const [planId, setPlanId] = useState(1);

    const [plan, setPlan] = useState({
        id: '',
        name: '',
        price: '',
        type: '',
        features: []
    });

    const history = useHistory();


    useEffect(() => {
        const plan = plans.find(plan => plan.id === planId);
        setPlan(plan);
    }, [planId]);

    const setActive = (id) => {
        setPlanId(id);
    };

    const onClick = () => {
        history.push('/gracias');
    };

    return (
        <>
            <Breadcrumb current="2" total="7" />
            <Header title="Elige, tu protección" subtitle="Selecciona tu plan de salud ideal" />
            <div className="plans--container" >
                <PlanList plans={plans} setActive={setActive} planActiveId={planId} />
                <PlanDetail plan={plan} />
                <p className="subheading">Revisa nuestros<span>servicios y exclusiones </span> </p>
                <div className="plan--actions">
                    <Button label="Enviar cotización por correo" onClick={onClick} variant="secondary" />
                    <Button label="Continuar" onClick={onClick} />
                </div>
            </div>
        </>
    );
}

export default Plans;