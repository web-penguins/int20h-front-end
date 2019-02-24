import React, { useState } from 'react';
import Button from '../Button';

const ThirdStep = ({ onSubmit }) => {
  const [value, setValue] = useState('photo');
  const submit = () => onSubmit([{ type: value }]);
  return (
    <div className="thirdstep">
      <form onSubmit={submit}>
        <div className="secondstep__title">Results:</div>
        <div className="step__row">
          <div className="step__desc">Type:</div>
          <select
            value={value}
            onChange={e => setValue(e.target.value)}
            className="step_select"
          >
            <option value="string">String</option>
            <option value="photo">Photo</option>
          </select>
        </div>
        <Button onClick={submit} text="Create!" className="step__btn" />
      </form>
    </div>
  );
};

export default ThirdStep;
