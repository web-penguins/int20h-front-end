import React, { useState } from 'react';
import Button from '../Button';
import TextInput from '../TextInput';

const FirstStep: React.FC<{ onSubmit: ({}) => void }> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const submit = () => onSubmit({ name, description: desc });
  return (
    <div className="firststep">
      <form onSubmit={submit}>
        <div className="step__row">
          <div className="step__desc">Name:</div>
          <TextInput
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className="step__row">
          <div className="step__desc">Description:</div>
          <TextInput
            type="text"
            value={desc}
            onChange={e => setDesc(e.target.value)}
          />
        </div>
        <Button onClick={submit} className="step__btn" text="Create" />
      </form>
    </div>
  );
};

export default FirstStep;
