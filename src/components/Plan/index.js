import React from 'react';
import 'styles/plan.scss'
import Check from 'images/gl_correct.png'

function Plan({ plan, setActive, planActiveId }) {
    const { id, name, price, type } = plan;

    const isActive = () => {
        return planActiveId == id;
    };


    return (
        <div className={`plan--card ${isActive() ? 'plan--active' : ''}`} onClick={() => setActive(id)}>
            {isActive() && <img src={Check} className="plan--check" alt="check" />}
            <p className="plan--name">{name}</p>
            <p className="plan--price"><span className="plan--currency">S/</span>{price}</p>
            <p className="plan--type">{type}</p>
        </div>
    );
}

export default Plan;