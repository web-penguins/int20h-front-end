import User from '../../services/models/User';
import { UserActionType } from '../constants/user';

export interface SignInAction {
  type: UserActionType.SIGN_IN;
  payload: {
    login: string;
    password: string;
  };
}

export interface SetUserAction {
  type: UserActionType.SET_USER;
  payload: {
    user: User;
  };
}

export type UserAction = SignInAction | SetUserAction;

export const signIn = (login: string, password: string): SignInAction => ({
  type: UserActionType.SIGN_IN,
  payload: {
    login,
    password,
  },
});

export const setUser = (user: User): SetUserAction => ({
  type: UserActionType.SET_USER,
  payload: { user },
});
