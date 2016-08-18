import React, { PropTypes, Component } from 'react';
import moment from 'moment';
import { $ } from 'meteor/jquery';
import classNames from 'classnames';
import { removeUser } from '../../../api/users/methods';

class User extends Component {
	getAreaName(areaId) {
		const foundArea = this.props.areas.find((area) => area._id === areaId);
		return foundArea ? foundArea.name : 'Not assigned';
	}

	showEditUserModal() {
		this.props.userToEdit.set(this.props.user);
		$('.ui.basic.modal.edit-user')
		.modal({
			detachable: false,
			transition: 'horizontal flip',
		})
		.modal('show');
	}

	showDeleteUserModal() {
		const self = this;

		$('.delete-user-confirmation')
		.modal({
			detachable: false,
			transition: 'horizontal flip',
			onApprove() {
				const { user } = self.props;
				self.deleteUser(user._id);
			},
		})
		.modal('show');
	}

	deleteUser(userId) {
		removeUser.call({
			userId,
		}, (err) => {
			if (err) {
				return console.log(err);
			}
		});
	}

	render() {
		const { user, currentUser } = this.props;
		const { profile, emails } = user;
		const activeClass = classNames({ 'active': user._id === currentUser._id });
		const disableButton = classNames('ui negative labeled icon button', {
			'disabled': user._id === currentUser._id,
		});
		return (
			<tr className={activeClass}>
				<td> {profile.name} </td>
				<td> {emails[0].address}</td>
				<td> {profile.role}</td>
				<td> {this.getAreaName(profile.areaId)}</td>
				<td> {moment(user.createdAt).format('dddd, MMMM Do YYYY')}</td>
				<td>
					<div className="two ui small buttons">
						<button className="ui positive labeled icon button" onClick={() => this.showEditUserModal()}>
							<i className="edit icon"></i>Edit</button>
						<button className={disableButton} onClick={() => this.showDeleteUserModal()}>
							<i className="erase icon"></i>Delete
						</button>
					</div>
				</td>
			</tr>
		);
	}
}

User.propTypes = {
	user: PropTypes.object.isRequired,
	currentUser: PropTypes.object.isRequired,
	userToEdit: PropTypes.object.isRequired,
	areas: PropTypes.array.isRequired,
};

export default User;
