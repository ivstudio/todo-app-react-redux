import React, { Fragment } from "react";

//material-ui components
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Checkbox from "@material-ui/core/Checkbox";
import Divider from "@material-ui/core/Divider";
import Tooltip from "@material-ui/core/Tooltip";
import InputBase from "@material-ui/core/InputBase";

//receive Redux state via props, we invoke actions via props
const TodoItem = ({
  todoItem,
  onItemDelete,
  onUpdateTodo,
  onItemToggleComplete
}) => {
  const handleTextChange = event => {
    onUpdateTodo(todoItem.id, event.target.value);
  };

  return (
    <Fragment>
      <ListItem>
        <Tooltip title="Completed" placement="right">
          <Checkbox
            checked={todoItem.completed}
            onChange={() => onItemToggleComplete(todoItem.id)}
          />
        </Tooltip>

        <ListItemText
          primary={
            <InputBase
              multiline={true}
              value={todoItem.content}
              onChange={event => handleTextChange(event)}
            />
          }
        />

        <ListItemSecondaryAction onClick={() => onItemDelete(todoItem.id)}>
          <Tooltip title="Delete" placement="right">
            <IconButton aria-label="delete todo">
              <DeleteOutline />
            </IconButton>
          </Tooltip>
        </ListItemSecondaryAction>
      </ListItem>

      <Divider />
    </Fragment>
  );
};

export default TodoItem;
