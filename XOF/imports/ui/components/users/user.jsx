import React, { PropTypes, Component } from 'react';
import moment from 'moment';
import { $ } from 'meteor/jquery';
import classNames from 'classnames';
import { EditUserModal } from './edit-user-modal.jsx';
import { removeUser } from '../../../api/users/methods';
import { render } from 'react-dom';

class User extends Component {
	deleteUser(userId) {
		removeUser.call({
			userId,
		}, (err) => {
			if (err) {
				return console.log(err);
			}
		});
	}

	showDeleteUserModal() {
		const self = this;

		$('.delete-user-confirmation')
		.modal({
			blurring: true,
		})
		.modal({
			onApprove() {
				const { user } = self.props;
				self.deleteUser(user._id);
			},
		})
		.modal('setting', 'transition', 'scale')
		.modal('show');
	}

	openEditUserModal(user) {
		render(<EditUserModal userToEdit={user} />, $('#usersContainer')[0]);
	}

	render() {
		const { user, currentUser, editUser } = this.props;
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
				<td> {moment(user.createdAt).format('dddd, MMMM Do YYYY')}</td>
				<td>
					<div className="two ui small buttons">
						<button className="ui positive labeled icon button" onClick={this.openEditUserModal.bind(null, user)}><i className="edit icon"></i>Edit</button>
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
};

export default User;
