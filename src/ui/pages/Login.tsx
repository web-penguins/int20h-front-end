import React, { useState } from 'react';
import NeuralBackground from '../components/NeuralBackground';

const Login: React.FC<{ onSubmit: ({}) => void }> = ({ onSubmit }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const submit = () => onSubmit({ login, password });
  return (
    <div className="login">
      <NeuralBackground />
      <div />
    </div>
  );
};

export default Login;
