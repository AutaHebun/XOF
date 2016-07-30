import React, { Component } from 'react';
import { insertArea } from '../../../api/areas/methods';

class AddAreaModal extends Component {
	addArea() {
		const name = this.refs.name.value;
		const description = this.refs.description.value;

		insertArea.call({
			name,
			description,
		}, (err) => {
			if (err) {
				return console.log('oops', err);
			}
			console.log('created area');
		});
	}
	render() {
		return (
			<div className="ui basic modal add-area">
				<div className="ui center aligned large header">Add Area</div>
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
									<button className="ui positive labeled icon button" onClick={() => this.addArea()}>
										<i className="checkmark icon"></i>Add Area</button>
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

export default AddAreaModal;
