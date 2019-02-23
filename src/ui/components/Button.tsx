import React from 'react';

const Button: React.FC<{ text: string; onClick: () => void }> = ({
  text,
  onClick,
}) => (
  <button type="button" className="button login__button" onClick={onClick}>
    {text}
  </button>
);

export default Button;
