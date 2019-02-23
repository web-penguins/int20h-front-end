import User from '../../models/User';

interface AbstractAuthService {
  signIn(login: string, password: string): Promise<User>;

  signUp(name: string, login: string, password: string): Promise<User>;

  signOut(token: string): Promise<void>;
}

export default AbstractAuthService;
