import React from 'react';

const DeleteUserConfirmation = () => (
	<div className="ui basic small modal delete-user-confirmation">
		<i className="close icon"></i>
		<div className="header">
			Delete User Confirmation
		</div>
		<div className="content">
			<div className="description">
				<p>Are you sure you want to delete this user?</p>
			</div>
		</div>
		<div className="actions">
			<div className="two ui inverted buttons">
				<div className="ui approve green inverted button">
					<i className="checkmark icon"></i>
					Yes
				</div>
				<div className="ui cancel red inverted button">
					<i className="remove icon"></i>
					No
				</div>
			</div>
		</div>
	</div>
);

export default DeleteUserConfirmation;
