import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const initialState = {};
const enhancers = [];
const sagaMiddleware = createSagaMiddleware();

const middleware = [
  sagaMiddleware,
];

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export default store;