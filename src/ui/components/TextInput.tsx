import React from 'react';

const TextInput: React.FC<{
  type: string;
  className: string;
  onChange: (e: any) => void;
  value: string;
}> = ({ type, className, onChange, value }) => (
  <input
    type={type}
    className={`${className} textinput`}
    onChange={onChange}
    value={value}
  />
);

export default TextInput;
