import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//constants
import {
	SHOW_ALL_TODOS,
	SHOW_COMPLETED_TODOS,
	SHOW_ACTIVE_TODOS
} from '../../redux/constants/constants';

//action creators
import {
	updateTodo,
	deleteTodo,
	toggleDoneTodo
} from '../../redux/actions/todoActions';

//material-ui components
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

//our components
import TodoItem from './TodoItem';
import TodoEmptyState from './TodoEmptyState';

class Todos extends Component {
	//render TodoItems
	renderTodos() {
		const {
			todos,
			deleteTodo,
			updateTodo,
			toggleDoneTodo,
			todosFilter
		} = this.props;
		const renderTodoItem = todos.map(todo => {
			return (
				<TodoItem
					key={todo.id}
					todoItem={todo}
					onItemDelete={id => deleteTodo(id)}
					onUpdateTodo={(id, content) => updateTodo(id, content)}
					onItemToggleComplete={id => toggleDoneTodo(id)}
				/>
			);
		});

		return (
			<List>
				{todos.length > 0 && <Divider />}
				{!todos.length && <TodoEmptyState activeFilter={todosFilter} />}
				{renderTodoItem}
			</List>
		);
	}

	render() {
		return this.renderTodos();
	}
}

//filter todos
const setFilterTodos = (todos, filter) => {
	switch (filter) {
		case SHOW_ALL_TODOS:
			return todos;
		case SHOW_COMPLETED_TODOS:
			return todos.filter(t => t.completed);
		case SHOW_ACTIVE_TODOS:
			return todos.filter(t => !t.completed);
		default:
			return todos;
	}
};

//return action creators
function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			deleteTodo,
			updateTodo,
			toggleDoneTodo
		},
		dispatch
	);
}

//return data our component needs
function mapStateToProps({ todos, todosFilter }) {
	return {
		todos: setFilterTodos(todos, todosFilter),
		todosFilter
	};
}

//export TodoComponent
export default connect(mapStateToProps, mapDispatchToProps)(Todos);
