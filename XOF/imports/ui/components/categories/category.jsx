import React, { PropTypes, Component } from 'react';
import { $ } from 'meteor/jquery';
import { removeCategory } from '../../../api/categories/methods';

class Category extends Component {
	deleteCategory(categoryId) {
		removeCategory.call({
			categoryId,
		}, (err) => {
			if (err) {
				return console.log(err);
			}
		});
	}

	showDeleteCategoryModal() {
		const self = this;

		$('.delete-category-confirmation')
		.modal({
			blurring: true,
		})
		.modal({
			onApprove() {
				const { category } = self.props;
				self.deleteCategory(category._id);
			},
		})
		.modal('setting', 'transition', 'scale')
		.modal('show');
	}

	showEditCategoryModal() {
		this.props.categoryToEdit.set(this.props.category);
		$('.ui.basic.modal.edit-category')
		.modal({
			blurring: true,
		})
		.modal('setting', 'transition', 'horizontal flip')
		.modal('show');
	}

	render() {
		const { category } = this.props;
		const { name, description } = category;

		return (
			<tr>
				<td> {name} </td>
				<td> {description}</td>
				<td>
					<div className="two ui small buttons">
						<button className="ui positive labeled icon button" onClick={() => this.showEditCategoryModal()}>
							<i className="edit icon"></i>Edit
						</button>
						<button className="ui negative labeled icon button" onClick={() => this.showDeleteCategoryModal()}>
							<i className="erase icon"></i>Delete
						</button>
					</div>
				</td>
			</tr>
		);
	}
}

Category.propTypes = {
	category: PropTypes.object.isRequired,
	categoryToEdit: PropTypes.object.isRequired,
};

export default Category;
