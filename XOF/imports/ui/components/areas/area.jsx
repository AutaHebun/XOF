import React, { PropTypes, Component } from 'react';
import { $ } from 'meteor/jquery';
import { removeArea } from '../../../api/areas/methods';

class Area extends Component {
	deleteArea(areaId) {
		removeArea.call({
			areaId,
		}, (err) => {
			if (err) {
				return console.log(err);
			}
		});
	}

	showDeleteAreaModal() {
		const self = this;

		$('.delete-area-confirmation')
		.modal({
			blurring: true,
		})
		.modal({
			onApprove() {
				const { area } = self.props;
				self.deleteArea(area._id);
			},
		})
		.modal('setting', 'transition', 'scale')
		.modal('show');
	}

	showEditAreaModal() {
		this.props.areaToEdit.set(this.props.area);
		$('.ui.basic.modal.edit-area')
		.modal({
			blurring: true,
		})
		.modal('setting', 'transition', 'horizontal flip')
		.modal('show');
	}

	render() {
		const { area } = this.props;
		const { name, description } = area;

		return (
			<tr>
				<td> {name} </td>
				<td> {description}</td>
				<td>
					<div className="two ui small buttons">
						<button className="ui positive labeled icon button" onClick={() => this.showEditAreaModal()}>
							<i className="edit icon"></i>Edit
						</button>
						<button className="ui negative labeled icon button" onClick={() => this.showDeleteAreaModal()}>
							<i className="erase icon"></i>Delete
						</button>
					</div>
				</td>
			</tr>
		);
	}
}

Area.propTypes = {
	area: PropTypes.object.isRequired,
	areaToEdi: PropTypes.object.isRequired,
};

export default Area;
