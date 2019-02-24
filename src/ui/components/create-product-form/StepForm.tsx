import React, { useState } from 'react';
import Button from '../Button';
import FirstStep from './FirstStep';
import FourthStep from './FourthStep';
import SecondStep from './SecondStep';
import ThirdStep from './ThirdStep';

const StepForm: React.FC<{ complete: (data: any) => void }> = ({
  complete,
}) => {
  const [activeStepId, setActiveStepId] = useState(0);
  const [first, setFirst] = useState({});
  const [inputs, setSecond] = useState([]);
  const [outputs, setFourth] = useState([]);
  const steps = [
    {
      id: 0,
      formComponent: (
        <FirstStep
          onSubmit={obj => {
            setFirst(obj);
            next();
          }}
        />
      ),
    },
    {
      id: 1,
      formComponent: (
        <SecondStep
          onSubmit={(array: any) => {
            setSecond(array);
            next();
          }}
        />
      ),
    },
    {
      id: 2,
      formComponent: (
        <ThirdStep
          onSubmit={(array: any) => {
            setFourth(array);
            next();
          }}
        />
      ),
    },
    {
      id: 3,
      formComponent: (
        <FourthStep
          onSubmit={(files: any) => {
            const product = { ...first, inputs, outputs, files };
            complete(product);
          }}
        />
      ),
    },
  ];
  const next = () => {
    activeStepId < steps.length
      ? setActiveStepId(activeStepId + 1)
      : setActiveStepId(activeStepId);
  };
  return (
    <div className="step-form">
      <h1>Create product</h1>
      <div className="step-form-header">
        {steps.map((step, i) =>
          i <= activeStepId ? (
            <>
              <div className="step active">
                <p>{i + 1}</p>
              </div>
              {i + 1 !== steps.length && <div className="line active" />}
            </>
          ) : (
            <>
              <div className="step">
                <p>{i + 1}</p>
              </div>
              {i + 1 !== steps.length && <div className="line" />}
            </>
          )
        )}
      </div>
      <div className="step-form-body">{steps[activeStepId].formComponent}</div>
    </div>
  );
};

export default StepForm;
