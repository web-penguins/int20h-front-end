import React from 'react';

const TextInput: React.FC<{
  type: string;
  onChange: (e: any) => void;
  value: string;
  className?: string;
  placeholder?: string;
}> = ({ type, className, onChange, value, placeholder }) => (
  <input
    type={type}
    className={`${className} textinput`}
    onChange={onChange}
    value={value}
    placeholder={placeholder}
  />
);

export default TextInput;
