import AbstractAuthService from "./AbstractAuthService";
import User from "../../models/User";

class MockAuthService implements AbstractAuthService {
  public signIn(login: string, password: string): Promise<User> {
    return Promise.resolve({
      id: 1,
      name: "Alex Willson",
      username: "alex-willson",
      token: "token"
    });
  }

  public signUp(name: string, login: string, password: string): Promise<User> {
    return Promise.resolve({
      id: Math.random(),
      name: name,
      username: login,
      token: "token"
    });
  }

  public signOut(token: string): Promise<void> {
    return Promise.resolve();
  }
}

export default MockAuthService;
