import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
const enhancer = __DEV__
  ? compose(
      console.tron.createEnhancer(),
      applyMiddleware(sagaMiddleware)
    )
  : applyMiddleware(sagaMiddleware);

const store = createStore(rootReducer, enhancer);

export default store;
