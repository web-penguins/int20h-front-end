import User, { UserViewModel } from "../models/User";

interface AbstractUserService {
  isAuthenticated(): boolean;

  authenticate(login: string, password: string): Promise<User>;
  
  getInfo(): Promise<UserViewModel>;
}

export default AbstractUserService;
