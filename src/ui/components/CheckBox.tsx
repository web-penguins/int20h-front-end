import React from 'react';

const CheckBox: React.FC<{
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
}> = ({ checked, onChange, label }) => (
  <div className="checkbox__wrapper">
    <input
      type="checkbox"
      checked={checked}
      onChange={e => onChange(e.target.checked)}
    />
    <div className="checkbox__label"> {label}</div>
  </div>
);

export default CheckBox;
