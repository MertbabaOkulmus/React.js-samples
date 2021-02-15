import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import rootReducer from './reducers';
const middlewares = [logger];

const store = createStore(
	rootReducer,
	process.env.NODE_ENV !== 'production' ? composeWithDevTools(applyMiddleware(...middlewares)) : applyMiddleware(...middlewares),
);

export default store;
