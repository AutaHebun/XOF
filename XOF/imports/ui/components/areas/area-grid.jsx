import React, { Component, PropTypes } from 'react';
import { $ } from 'meteor/jquery';
import Area from './area.jsx';
import Paginator from '../helpers/paginator.jsx';
import AddAreaModal from './add-area-modal.jsx';
import EditAreaModal from './edit-area-modal.jsx';
import DeleteAreaConfirmation from './delete-area-confirmation.jsx';

class AreaGrid extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: 0,
		};
		this.renderAreaPage = this.renderAreaPage.bind(this);
	}

	openAddAreaModal() {
		$('.ui.basic.modal.add-area')
		.modal({
			detachable: false,
			transition: 'horizontal flip',
		})
		.modal('show');
	}

	renderAreas() {
		const startRange = this.state.currentPage * 10;
		const endRange = startRange + 10;
		const { areas, areaToEdit } = this.props;
		return areas.slice(startRange, endRange).map((area) => <Area key={area._id} area={area} areaToEdit={areaToEdit} />);
	}

	renderAreaPage(index) {
		this.setState({
			currentPage: index,
		});
	}

	render() {
		const { areas, areaToEdit } = this.props;
		return (areas.length > 0
			? <div id="areasContainer" className="ui center aligned raised segment">
				<h1 className="ui header"> Areas </h1>
				<AddAreaModal />
				<EditAreaModal area={areaToEdit} />
				<DeleteAreaConfirmation />
				<table className="ui table area-table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Description</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{this.renderAreas()}
					</tbody>
					<tfoot>
						<tr>
							<th colSpan="3">
								<button className="ui small labeled icon blue button" onClick={this.openAddAreaModal}>
						            <i className="tag icon"></i> Add Area
						        </button>
								<Paginator amountData={areas.length} renderFunction={this.renderAreaPage} elementsPerPage={10} />
							</th>
						</tr>
					</tfoot>
				</table>
			</div>
			: <h2 className="ui center aligned icon header">
				<i className="circular tags icon"></i>
				No Areas Found
			</h2>);
	}
}

AreaGrid.propTypes = {
	areas: PropTypes.array.isRequired,
	areaToEdit: PropTypes.object.isRequired,
};

export default AreaGrid;
