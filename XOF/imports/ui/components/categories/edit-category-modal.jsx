import React, { Component, PropTypes } from 'react';
import { updateCategory } from '../../../api/categories/methods';

class EditCategoryModal extends Component {
	updateCategory() {
		const name = this.refs.name.value.trim();
		const description = this.refs.description.value.trim();
		const category = this.props.category;

		updateCategory.call({
			categoryId: category.get()._id,
			name,
			description,
		}, (err) => {
			if (err) {
				return console.log('oops', err);
			}
			console.log('updated category');
		});
	}
	render() {
		return (
			<div className="ui basic modal edit-category">
				<div className="ui center aligned large header">Edit Category</div>
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
									<button className="ui positive labeled icon button" onClick={() => this.updateCategory()}>
										<i className="checkmark icon"></i>Edit Category</button>
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

EditCategoryModal.propTypes = {
	category: PropTypes.object.isRequired,
};

export default EditCategoryModal;
