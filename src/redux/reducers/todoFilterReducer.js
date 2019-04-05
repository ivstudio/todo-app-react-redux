import { SET_FILTER_TODOS } from "../constants/constants";
import initalState from "../store/initialState";

const todoFilterReducer = (state = initalState.todosFilter, action) => {
  switch (action.type) {
    case SET_FILTER_TODOS:
      return action.filter;
    default:
      return state;
  }
};

export default todoFilterReducer;
