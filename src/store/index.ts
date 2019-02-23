import { compose, createStore, Store } from 'redux';
import middleware from './middleware';
import rootReducer, { AppState } from './reducers';

const composeWithDevTools =
  typeof window !== 'undefined'
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : undefined;

const composeEnhancers =
  process.env.NODE_ENV === 'development' && composeWithDevTools
    ? composeWithDevTools({
        serialize: true,
      })
    : compose;

function configureStore(initialState?: AppState): Store<AppState> {
  return createStore(rootReducer, initialState, composeEnhancers(middleware));
}

const store = configureStore();

export default store;
