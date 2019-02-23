import endpoint from '../../endpoint';
import User from '../../models/User';
import AbstractAuthService from './AbstractAuthService';

class AuthService implements AbstractAuthService {
  public signIn(login: string, password: string): Promise<User> {
    return fetch(endpoint + '/oauth/token', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        login,
        password,
      }),
    }).then(res => res.json());
  }

  public signUp(name: string, login: string, password: string): Promise<User> {
    return fetch(endpoint + '/oauth/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        login,
        password,
      }),
    }).then(res => res.json());
  }

  public signOut(token: string): Promise<void> {
    return fetch(endpoint + '/oauth/token', {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token,
      }),
    }).then(res => res.json());
  }
}

export default AuthService;
