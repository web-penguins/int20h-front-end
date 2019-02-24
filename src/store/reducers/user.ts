import User from '../../services/models/User';
import { UserAction } from '../actions/user';
import { UserActionType } from '../constants/user';

export interface UserState {
  authorized: boolean;
  user: User | null;
}

const initial = {
  authorized: false,
  user: null,
};

export const user = (
  state: UserState = initial!,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionType.SET_USER:
      return { user: action.payload.user, authorized: true };
  }
  return state;
};
