import React from 'react';
import Plan from "components/Plan";

function PlanList({ plans, setActive, planActiveId }) {
    return (
        <div className="plan--container">
            {plans.map(plan => <Plan key={plan.id} plan={plan} setActive={setActive} planActiveId={planActiveId} />)}
        </div>
    );
}

export default PlanList;