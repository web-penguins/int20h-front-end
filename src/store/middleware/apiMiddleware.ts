import { AnyAction, Dispatch, MiddlewareAPI } from 'redux';
import { products } from './modules/products';
import { user } from './modules/user';

export interface FluxStandardAction extends AnyAction {
  payload: any;
}

type Handler = (action: FluxStandardAction, store: MiddlewareAPI) => void;

const handlers: Record<string, Handler> = {
  ...user,
  ...products,
};

export default (store: MiddlewareAPI) => (next: Dispatch) => (
  action: FluxStandardAction
) => {
  const handler = handlers[action.type];
  if (handler) {
    next(action);
    handler(action, store);
  } else {
    next(action);
  }
};
