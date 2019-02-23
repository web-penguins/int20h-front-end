import User, { UserViewModel } from '../models/User';
import AbstractUserService from './AbstractUserService';

class MockUserService implements AbstractUserService {
  private user: User = {
    id: 1,
    name: 'Alex Willson',
    username: 'login',
    token: 'aaaaaa',
    totalAmountOfProducts: 1,
    registerDate: '23/02/2019 18:00:00',
  };

  public isAuthenticated(): boolean {
    return true;
  }

  public async authenticate(login: string, password: string): Promise<User> {
    this.user = {
      ...this.user,
      username: login,
    };

    return this.user;
  }

  public async getInfo(): Promise<UserViewModel> {
    return {
      id: this.user.id,
      name: this.user.name,
      totalAmountOfProducts: this.user.totalAmountOfProducts,
      registerDate: new Date(this.user.registerDate),
    };
  }
}

export default MockUserService;
