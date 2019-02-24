import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/user';
import Button from '../components/Button';
import NeuralBackground from '../components/NeuralBackground';
import TextInput from '../components/TextInput';

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
            <TextInput
              type="text"
              className="login__input"
              onChange={e => setLogin(e.target.value)}
              value={login}
            />
          </div>
          <div className="login__row">
            <span>Password: </span>
            <TextInput
              type="password"
              className="login__input"
              onChange={e => setPassword(e.target.value)}
              value={login}
            />
          </div>
          <Button text="Submit!" onClick={submit} className="login__button" />
        </form>
      </div>
    </div>
  );
};

export default connect(
  null,
  { onSubmit: signIn }
)(Login);
