import AuthService from '../api-provider/auth/AuthService';
import User, { UserViewModel } from '../models/User';
import AbstractUserService from './AbstractUserService';

class UserService implements AbstractUserService {
  // default val, cuz' can't declare private property without initialization
  private user: User = {
    id: 1,
    name: 'Alex Willson',
    username: 'login',
    token: 'aaaaaa',
    totalAmountOfProducts: 1,
    registerDate: '23/02/2019 18:00:00',
  };
  private authenticated = false;

  public isAuthenticated(): boolean {
    return this.authenticated;
  }

  public async authenticate(login: string, password: string): Promise<User> {
    const authService = new AuthService();

    this.user = await authService.signIn(login, password);

    return this.user;
  }

  public async getInfo(): Promise<UserViewModel> {
    return {
      id: this.user.id,
      name: this.user.name,
      totalAmountOfProducts: this.user.totalAmountOfProducts,
      registerDate: new Date(this.user.registerDate),
      token: this.user.token,
    };
  }
}

export default UserService;
