import { createStore, applyMiddleware } from 'redux';
import rootReducer from './root-reducer';

export interface RootState {}

const configureStore = (preloadedState: RootState) => createStore(rootReducer, preloadedState, applyMiddleware());

export default configureStore;
