import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//constants
import {
  SHOW_ALL_TODOS,
  SHOW_COMPLETED_TODOS,
  SHOW_ACTIVE_TODOS
} from "../../redux/constants/constants";

//action creators
import {
  updateTodo,
  deleteTodo,
  toggleDoneTodo
} from "../../redux/actions/todoActions";

//material-ui components
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

//our components
import TodoItem from "./todoItem";
import TodoEmptyState from "./todoEmptyState";

class Todos extends Component {
  //render TodoItems
  renderTodos() {
    const renderTodoItem = this.props.tasks.map(todo => {
      return (
        <TodoItem
          key={todo.id}
          todoItem={todo}
          onItemDelete={id => this.props.deleteTodo(id)}
          onUpdateTodo={(id, content) => this.props.updateTodo(id, content)}
          onItemToggleComplete={id => this.props.toggleDoneTodo(id)}
        />
      );
    });

    return (
      <List>
        {this.props.tasks.length > 0 && <Divider />}
        {!this.props.tasks.length && (
          <TodoEmptyState activeFilter={this.props.todosFilter} />
        )}
        {renderTodoItem}
      </List>
    );
  }

  render() {
    return this.renderTodos();
  }
}

//filter tasks
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
    tasks: setFilterTodos(todos, todosFilter),
    todosFilter
  };
}

//export TodoComponent
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todos);
