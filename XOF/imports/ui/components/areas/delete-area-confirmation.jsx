import React from 'react';

const DeleteAreaConfirmation = () => (
	<div className="ui basic small modal delete-area-confirmation">
		<i className="close icon"></i>
		<div className="header">
			Delete Area Confirmation
		</div>
		<div className="content">
			<div className="description">
				<p>Are you sure you want to delete this area?</p>
			</div>
		</div>
		<div className="actions">
			<div className="two ui inverted buttons">
				<button className="ui approve green inverted button">
					<i className="checkmark icon"></i>
					Yes
				</button>
				<button className="ui cancel red inverted button">
					<i className="remove icon"></i>
					No
				</button>
			</div>
		</div>
	</div>
);

export default DeleteAreaConfirmation;
