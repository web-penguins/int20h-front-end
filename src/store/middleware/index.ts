import { applyMiddleware } from 'redux';

import api from './apiMiddleware';

export default applyMiddleware(api);
