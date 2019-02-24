import React, { useState } from 'react';

const steps = [
  {
    id: 0,
    formComponent: 'ComponentName',
  },
  {
    id: 1,
    formComponent: 'ComponentName',
  },
  {
    id: 2,
    formComponent: 'ComponentName',
  },
];

const StepForm: React.FC = () => {
  const [activeStepId, setActiveStepId] = useState(0);

  return (
    <div className="step-form">
      <h1>Create product</h1>
      <div className="step-form-header">
        {/* <div className="step active">
          <p>1</p>
        </div>
        <div className="line active" />
        <div className="step active">
          <p>2</p>
        </div>
        <div className="line" />
        <div className="step">
          <p>3</p>
        </div> */}
        {steps.map((step, i) =>
          i <= activeStepId ? (
            <>
              <div className="step active">
                <p>{i}</p>
              </div>
              {i + 1 !== steps.length && <div className="line active" />}
            </>
          ) : (
            <>
              <div className="step">
                <p>{i}</p>
              </div>
              {i + 1 !== steps.length && <div className="line" />}
            </>
          )
        )}
      </div>
      <button
        onClick={
          activeStepId < steps.length
            ? () => {
                setActiveStepId(activeStepId + 1);
              }
            : () => {
                setActiveStepId(activeStepId);
              }
        }
      >
        next
      </button>
    </div>
  );
};

export default StepForm;
