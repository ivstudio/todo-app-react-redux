import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//constants
import {
  SHOW_ALL_TODOS,
  SHOW_COMPLETED_TODOS,
  SHOW_ACTIVE_TODOS
} from "../../redux/constants/constants";

//actions
import { filterTodos } from "../../redux/actions/todoActions";

//material-ui components
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const FilterTodos = props => {
  //material-ui menu
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  //material-ui event handler
  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  //material-ui close menu
  function handleClose() {
    setAnchorEl(null);
  }

  //dispatch filter action and close menu
  function handleStateChange(state) {
    props.filterTodos(state);
    handleClose();
  }

  return (
    <div>
      <Button
        aria-owns={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        size="small"
        onClick={handleClick}
      >
        {props.todosFilter.split("_").join(" ")}
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleStateChange(SHOW_ALL_TODOS)}>
          All
        </MenuItem>
        <MenuItem onClick={() => handleStateChange(SHOW_ACTIVE_TODOS)}>
          Active
        </MenuItem>
        <MenuItem onClick={() => handleStateChange(SHOW_COMPLETED_TODOS)}>
          Completed
        </MenuItem>
      </Menu>
    </div>
  );
};

//return action creators
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      filterTodos
    },
    dispatch
  );
}

//return data our component needs
function mapStateToProps({ todosFilter }) {
  return {
    todosFilter
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterTodos);
