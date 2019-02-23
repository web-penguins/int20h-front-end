import React, { useState } from 'react';

const Login: React.FC<{ onSubmit: ({}) => void }> = ({ onSubmit }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const submit = () => onSubmit({ login, password });
  return (
    <div className="login">
      <div className="neural-bg" />
    </div>
  );
};

export default Login;
