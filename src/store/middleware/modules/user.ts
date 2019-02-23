import { MiddlewareAPI } from 'redux';
import MockUserService from '../../../services/user/MockUserService';
import { signedIn, SignInAction } from '../../actions/user';
import { UserActionType } from '../../constants/user';

const service = new MockUserService();

const auth = (action: SignInAction, store: MiddlewareAPI) => {
  const { login, password } = action.payload;
  service.authenticate(login, password).then(() => store.dispatch(signedIn()));
};

export const user = {
  [UserActionType.SIGN_IN]: auth,
};
