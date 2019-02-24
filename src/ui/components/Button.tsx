import React from 'react';

const Button: React.FC<{
  text: string;
  onClick: () => void;
  variant?: string;
  className?: string;
}> = ({ text, onClick, variant, className }) => (
  <button
    type="button"
    className={`button button_${variant} ${className}`}
    onClick={onClick}
  >
    {text}
  </button>
);

Button.defaultProps = {
  variant: 'default',
};

export default Button;
