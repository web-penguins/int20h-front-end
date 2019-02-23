import React, { useState } from 'react';
import NeuralBackground from '../components/NeuralBackground';

const Login: React.FC<{ onSubmit: ({}) => void }> = ({ onSubmit }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const submit = () => onSubmit({ login, password });
  return (
    <div className="login">
      <NeuralBackground />
      <div className="login__wrapper">
        <form onSubmit={submit}>
          <div className="login__title">Sign in!</div>
          <div className="login__row">
            <span>Login: </span>
            <input
              type="text"
              className="login__input textinput"
              onChange={e => setLogin(e.target.value)}
              value={login}
            />
          </div>
          <div className="login__row">
            <span>Password: </span>
            <input
              type="password"
              className="login__input textinput"
              onChange={e => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <button
            type="button"
            className="button login__button"
            onClick={submit}
          >
            Submit!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
