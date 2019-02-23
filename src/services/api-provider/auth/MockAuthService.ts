import AbstractAuthService from "./AbstractAuthService";
import User from "../../models/User";

class MockAuthService implements AbstractAuthService {
  public signIn(login: string, password: string): Promise<User> {
    return Promise.resolve({
      id: 1,
      name: "Alex Willson",
      username: "alex-willson",
      token: "token",
      totalAmountOfProducts: 1,
      registerDate: "23/02/2019 18:00:00"
    });
  }

  public signUp(name: string, login: string, password: string): Promise<User> {
    return Promise.resolve({
      id: Math.random(),
      name: name,
      username: login,
      token: "token",
      totalAmountOfProducts: 1,
      registerDate: new Date().toString()
    });
  }

  public signOut(token: string): Promise<void> {
    return Promise.resolve();
  }
}

export default MockAuthService;
