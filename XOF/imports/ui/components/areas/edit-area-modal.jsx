import React, { Component, PropTypes } from 'react';
import { updateArea } from '../../../api/area/methods';

class EditAreaModal extends Component {
	updateArea() {
		const name = this.refs.name.value.trim();
		const description = this.refs.description.value.trim();
		const area = this.props.area;

		updateArea.call({
			areaId: area.get()._id,
			name,
			description,
		}, (err) => {
			if (err) {
				return console.log('oops', err);
			}
			console.log('updated area');
		});
	}
	render() {
		return (
			<div className="ui basic modal edit-area">
				<div className="ui center aligned large header">Edit Area</div>
				<div className="content">
					<div className="ui large form">
						<div className="ui stacked segment">
							<div className="field">
								<div className="ui left icon input">
									<i className="tag icon"></i>
									<input type="text" name="area-name" ref="name" placeholder="Name"></input>
								</div>
							</div>
							<div className="field">
								<div className="ui left icon input">
									<i className="tag icon"></i>
									<input type="text" name="area-description" ref="description" placeholder="Description"></input>
								</div>
							</div>
							<div className="actions">
								<div className="two ui buttons">
									<button className="ui positive labeled icon button" onClick={() => this.updateArea()}>
										<i className="checkmark icon"></i>Edit Area</button>
									<button className="ui cancel red labeled icon button">
										<i className="remove icon"></i> Cancel</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

EditAreaModal.propTypes = {
	area: PropTypes.object.isRequired,
};

export default EditAreaModal;
