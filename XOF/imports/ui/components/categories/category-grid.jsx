import React, { Component, PropTypes } from 'react';
import { $ } from 'meteor/jquery';
import Category from './category.jsx';
import Paginator from '../helpers/paginator.jsx';
import AddCategoryModal from './add-category-modal.jsx';
import EditCategoryModal from './edit-category-modal.jsx';
import DeleteCategoryConfirmation from './delete-category-confirmation.jsx';

class CategoryGrid extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: 0,
		};
		this.renderCategoryPage = this.renderCategoryPage.bind(this);
	}

	openAddCategoryModal() {
		$('.ui.basic.modal.add-category')
		.modal({
			detachable: false,
			transition: 'horizontal flip',
		})
		.modal('show');
	}

	renderCategories() {
		const startRange = this.state.currentPage * 10;
		const endRange = startRange + 10;
		const { categories, categoryToEdit } = this.props;
		return categories.slice(startRange, endRange).map((category) => <Category key={category._id} category={category} categoryToEdit={categoryToEdit} />);
	}

	renderCategoryPage(index) {
		this.setState({
			currentPage: index,
		});
	}

	render() {
		const { categories, categoryToEdit } = this.props;
		return (categories.length > 0
			? <div id="categoriesContainer" className="ui center aligned raised segment">
				<h1 className="ui header"> Categories </h1>
				<AddCategoryModal />
				<EditCategoryModal category={categoryToEdit} />
				<DeleteCategoryConfirmation />
				<table className="ui table category-table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Description</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{this.renderCategories()}
					</tbody>
					<tfoot>
						<tr>
							<th colSpan="3">
								<button className="ui small labeled icon blue button" onClick={this.openAddCategoryModal}>
						            <i className="tag icon"></i> Add Category
						        </button>
								<Paginator amountData={categories.length} renderFunction={this.renderCategoryPage} elementsPerPage={10} />
							</th>
						</tr>
					</tfoot>
				</table>
			</div>
			: <h2 className="ui center aligned icon header">
				<i className="circular tags icon"></i>
				No Categories Found
			</h2>);
	}
}

CategoryGrid.propTypes = {
	categories: PropTypes.array.isRequired,
	categoryToEdit: PropTypes.object.isRequired,
};

export default CategoryGrid;
