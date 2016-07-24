import React, { PropTypes, Component } from 'react';
import { $ } from 'meteor/jquery';
import User from './user.jsx';
import Paginator from '../helpers/paginator.jsx';
import AddUserModal from './add-user-modal.jsx';
import EditUserModal from './edit-user-modal.jsx';
import DeleteUserConfirmation from './delete-user-confirmation.jsx';

class UserGrid extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: 0,
		};
		this.renderUserPage = this.renderUserPage.bind(this);
	}

	openAddUserModal() {
		$('.ui.basic.modal.add-user')
		.modal({
			blurring: true,
		})
		.modal('setting', 'transition', 'horizontal flip')
		.modal('show');
	}

	renderUsers() {
		const startRange = this.state.currentPage * 10;
		const endRange = startRange + 10;
		const { users, currentUser, userToEdit } = this.props;
		return users.slice(startRange, endRange).map((user) => <User key={user._id} user={user} userToEdit={userToEdit} currentUser={currentUser} categories={this.props.categories} />);
	}

	renderUserPage(index) {
		this.setState({
			currentPage: index,
		});
	}

	render() {
		const { users, userToEdit } = this.props;
		return (users.length > 0
			? <div id="usersContainer" className="ui center aligned raised segment">
				<h1 className="ui header">Users </h1>
				<AddUserModal categories={this.props.categories}/>
				<EditUserModal user={userToEdit} categories={this.props.categories}/>
				<DeleteUserConfirmation />
				<table className="ui table user-table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Role</th>
							<th>Category</th>
							<th>Created</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{this.renderUsers()}
					</tbody>
					<tfoot>
						<tr>
							<th colSpan="5">
								<button className="ui small labeled icon blue button" onClick={this.openAddUserModal}>
						            <i className="user icon"></i> Add User
						        </button>
								<Paginator amountData={users.length} renderFunction={this.renderUserPage} elementsPerPage={10} />
							</th>
						</tr>
					</tfoot>
				</table>
			</div>
			: <h2 className="ui center aligned icon header">
				<i className="circular users icon"></i>
				No Users Found
			</h2>);
	}
}

UserGrid.propTypes = {
	users: PropTypes.array.isRequired,
	currentUser: PropTypes.object.isRequired,
	userToEdit: PropTypes.object.isRequired,
};

export default UserGrid;
