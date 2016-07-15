import React, { Component } from 'react';
import { insertCategory } from '../../../api/categories/methods';

class AddCategoryModal extends Component {
	addCategory() {
		const name = this.refs.name.value;
		const description = this.refs.description.value;

		insertCategory.call({
			name,
			description,
		}, (err) => {
			if (err) {
				return console.log('oops', err);
			}
			console.log('created category');
		});
	}
	render() {
		return (
			<div className="ui basic modal add-category">
				<div className="ui center aligned large header">Add Category</div>
				<div className="content">
					<div className="ui large form">
						<div className="ui stacked segment">
							<div className="field">
								<div className="ui left icon input">
									<i className="tag icon"></i>
									<input type="text" name="category-name" ref="name" placeholder="Name"></input>
								</div>
							</div>
							<div className="field">
								<div className="ui left icon input">
									<i className="tag icon"></i>
									<input type="text" name="category-description" ref="description" placeholder="Description"></input>
								</div>
							</div>
							<div className="actions">
								<div className="two ui buttons">
									<button className="ui positive labeled icon button" onClick={() => this.addCategory()}>
										<i className="checkmark icon"></i>Add Category</button>
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

export default AddCategoryModal;
