import React, { Fragment } from 'react';
import {
	SHOW_ALL_TODOS,
	SHOW_COMPLETED_TODOS,
	SHOW_ACTIVE_TODOS
} from '../../redux/constants/constants';

const styles = {
	container: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
		height: '150px',
		color: '#313777',
		fontFamily: 'Montserrat, sans-serif'
	},
	title: {
		fontSize: '24px',
		fontWeight: 'bold',
		margin: '15px 0 5px'
	},
	subtitle: {
		fontSize: '16px',
		margin: '5px 0'
	}
};

//receive redux activeFilter and show correct message
const TodoEmptyState = ({ activeFilter }) => {
	const renderMessage = () => {
		switch (activeFilter) {
			case SHOW_COMPLETED_TODOS:
				return (
					<Fragment>
						<h2 style={styles.title}>Been busy?</h2>
						<p style={styles.subtitle}>
							You haven't completed any tasks recently.
						</p>
					</Fragment>
				);
			case SHOW_ACTIVE_TODOS:
				return (
					<Fragment>
						<h2 style={styles.title}>Cheers!</h2>
						<p style={styles.subtitle}>
							Looks like you're caught up with your tasks.
						</p>
					</Fragment>
				);
			default:
				return (
					<Fragment>
						<h2 style={styles.title}>All clear</h2>
						<p style={styles.subtitle}>
							Looks like everything's done.
						</p>
					</Fragment>
				);
		}
	};

	return <span style={styles.container}>{renderMessage()}</span>;
};

export default TodoEmptyState;
