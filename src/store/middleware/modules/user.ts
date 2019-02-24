import { MiddlewareAPI } from 'redux';
import MockUserService from '../../../services/user/MockUserService';
import { setUser, SignInAction } from '../../actions/user';
import { UserActionType } from '../../constants/user';

const service = new MockUserService();

const auth = (action: SignInAction, store: MiddlewareAPI) => {
  const { login, password } = action.payload;
  service
    .authenticate(login, password)
    .then(userData => store.dispatch(setUser(userData)));
};

export const user = {
  [UserActionType.SIGN_IN]: auth,
};
