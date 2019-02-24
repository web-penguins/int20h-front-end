import { combineReducers } from 'redux';
import { products, ProductsState } from './products';
import { user, UserState } from './user';

export interface AppState {
  user: UserState;
  products: ProductsState;
}

export default combineReducers<AppState>({
  user,
  products,
});
