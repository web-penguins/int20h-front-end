import { Id } from './Id';

interface User {
  id: Id;
  name: string;
  username: string;
  token: string;
}

export interface UserViewModel {
  id: Id;
  name: string;
  totalAmountOfProducts: number;
  registerDate: Date;
}

export default User;
