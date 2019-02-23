import { UserActionType } from '../constants/user';

export interface SignInAction {
  type: UserActionType.SIGN_IN;
  payload: {
    login: string;
    password: string;
  };
}

export interface SignedInAction {
  type: UserActionType.SIGNED_IN;
}

export type UserAction = SignInAction | SignedInAction;

export const signIn = (login: string, password: string): SignInAction => ({
  type: UserActionType.SIGN_IN,
  payload: {
    login,
    password,
  },
});

export const signedIn = (): SignedInAction => ({
  type: UserActionType.SIGNED_IN,
});
