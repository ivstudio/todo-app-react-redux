// constant types
import {
	ADD_TODO,
	UPDATE_TODO,
	DELETE_TODO,
	TOGGLE_DONE_TODO,
} from '../constants/constants';

// initial state
import initalState from '../store/initialState';

// todoReducer
export default function(state = initalState.todos, action) {
	// deconstructing action object
	const { payload } = action;

	// checking action type
	switch (action.type) {
		// add_todo reducer
		case ADD_TODO:
			return [
				...state,
				{
					id: payload.id,
					completed: false,
					content: payload.content,
				},
			];

		// update_todo reducer
		case UPDATE_TODO:
			return state.map((todo) => {
				return todo.id === action.payload.id
					? { ...todo, content: payload.content }
					: todo;
			});

		// delete_todo reducer
		case DELETE_TODO:
			return state.filter((todo) => todo.id !== payload.id);

		// toggle_todo reducer
		case TOGGLE_DONE_TODO:
			return state.map((todo) => {
				return todo.id === payload.id
					? { ...todo, completed: !todo.completed }
					: todo;
			});

		// default state
		default:
			return state;
	}
}
