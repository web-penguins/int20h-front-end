import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/user';
import NeuralBackground from '../components/NeuralBackground';

const Login: React.FC<{
  onSubmit: (login: string, password: string) => void;
}> = ({ onSubmit }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const submit = () => onSubmit(login, password);
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

export default connect(
  null,
  { onSubmit: signIn }
)(Login);
