import React from 'react';
import 'styles/feature.scss'

function Feature({ feature, plan }) {
    const isEnable = (featureId, plan) => {
        return plan.features.includes(featureId);
    };

    return (
        <div className="feature--item">
            <i className={`fas fa-heart ${isEnable(feature.id, plan) ? 'icon--active' : 'icon--disabled'}`} ></i>
            <p className={`${isEnable(feature.id, plan) ? 'feature--active' : 'feature--disabled'}`}>{feature.title}</p>
        </div>
    );
}

export default Feature;