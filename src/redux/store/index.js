import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from './initialState';
import { composeWithDevTools } from 'redux-devtools-extension';

export default () => {
	return createStore(rootReducer, initialState, composeWithDevTools());
};
