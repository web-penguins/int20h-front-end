import { MiddlewareAPI } from 'redux';
import MockUserService from '../../../services/user/MockUserService';
// import user from '../../../services/user/userSingleton';
import { getProducts } from '../../actions/products';
import { setUser, SignInAction } from '../../actions/user';
import { UserActionType } from '../../constants/user';

const user = new MockUserService();

const auth = (action: SignInAction, store: MiddlewareAPI) => {
  const { login, password } = action.payload;
  user.authenticate(login, password).then(userData => {
    store.dispatch(setUser(userData));
    store.dispatch(getProducts(''));
  });
};

export const userModule = {
  [UserActionType.SIGN_IN]: auth,
};
