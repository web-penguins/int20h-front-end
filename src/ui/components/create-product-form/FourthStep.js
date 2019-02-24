import React, { useState, useRef } from 'react';
import Button from '../Button';

const FourthStep = ({ onSubmit }) => {
  const [json, setJsonFile] = useState(null);
  const [data, setDataFile] = useState(null);
  const jsonInput = useRef(null);
  const dataInput = useRef(null);
  return (
    <div className="fourthstep">
      <div className="step__row">
        <div className="step__desc fourthstep__col">Config file:</div>
        <input
          type="file"
          className="step__file"
          ref={jsonInput}
          onChange={e => setJsonFile(e.target.files[0])}
        />
        <Button
          onClick={() => jsonInput.current.click()}
          className="step__filepicker"
          text="Choose"
        />
        <div className="step__filedesc">{json ? json.name : ''}</div>
      </div>
      <div className="step__row">
        <div className="step__desc fourthstep__col">Data file:</div>
        <input
          type="file"
          className="step__file"
          ref={dataInput}
          onChange={e => setDataFile(e.target.files[0])}
        />
        <Button
          onClick={() => dataInput.current.click()}
          className="step__filepicker"
          text="Choose"
        />
        <div className="step__filedesc">{data ? data.name : ''}</div>
      </div>
      <Button onClick={() => onSubmit()} text="Create" className="step__btn" />
    </div>
  );
};

export default FourthStep;
