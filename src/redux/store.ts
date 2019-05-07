import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducer';

const configureStore = (preloadedState?: any) => createStore(rootReducer, preloadedState, applyMiddleware());

export default configureStore;
