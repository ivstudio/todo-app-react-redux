import React from 'react';
import { connect } from 'react-redux';

//action creator
import { addTodo } from '../../redux/actions/todoActions';

//material-ui components
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

//passing dispatch directly
const AddTodo = ({ dispatch }) => {
	let input;

	return (
		<form
			autoComplete="off"
			onSubmit={e => {
				e.preventDefault();
				if (!input.value.trim()) {
					return;
				}
				dispatch(addTodo(input.value));
				input.value = '';
				input.style.height = 'auto';
			}}>
			<TextField
				id="addTask"
				inputRef={node => (input = node)}
				placeholder="Empty task"
				fullWidth
				margin="normal"
				variant="outlined"
				autoFocus={true}
				multiline={true}
				spellCheck="false"
				InputLabelProps={{
					shrink: true
				}}
			/>

			<Button
				style={{ float: 'right', marginTop: '8px' }}
				variant="contained"
				size="medium"
				color="primary"
				type="submit">
				Add Task
			</Button>
		</form>
	);
};

export default connect()(AddTodo);
