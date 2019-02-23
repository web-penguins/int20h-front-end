import { UserAction } from '../actions/user';
import { UserActionType } from '../constants/user';

export interface UserState {
  authorized: boolean;
  name: string;
}

const initial = {
  authorized: false,
  name: '',
};

export const user = (
  state: UserState = initial,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionType.SIGNED_IN:
      return { ...state, authorized: true };
  }
  return state;
};
