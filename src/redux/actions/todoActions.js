//import action types constants
import {
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  TOGGLE_DONE_TODO,
  SET_FILTER_TODOS
} from "../constants/constants";

//addTodo action creator
let nextTodoId = 0;
export const addTodo = content => {
  return {
    type: ADD_TODO,
    payload: {
      content,
      id: nextTodoId++
    }
  };
};

//updateTodo action creator
export const updateTodo = (id, content) => {
  return {
    type: UPDATE_TODO,
    payload: {
      id,
      content
    }
  };
};

//deleteTodo action creator
export const deleteTodo = id => {
  return {
    type: DELETE_TODO,
    payload: {
      id
    }
  };
};

//completedTodo action creator
export const toggleDoneTodo = id => {
  return {
    type: TOGGLE_DONE_TODO,
    payload: {
      id
    }
  };
};

//filterTodos
export const filterTodos = filter => {
  return {
    type: SET_FILTER_TODOS,
    filter
  };
};
