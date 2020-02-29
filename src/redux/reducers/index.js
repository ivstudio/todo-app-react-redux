import { combineReducers } from 'redux';
import todosReducer from './todoReducer';
import todosFilterReducer from './todoFilterReducer';

//key names will used on our components
const rootReducer = combineReducers({
	todos: todosReducer,
	todosFilter: todosFilterReducer
});

export default rootReducer;
