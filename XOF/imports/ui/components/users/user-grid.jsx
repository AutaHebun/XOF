import React, { PropTypes, Component } from 'react';
import { $ } from 'meteor/jquery';
import User from './user.jsx';
import Paginator from '../helpers/paginator.jsx';
import AddUserModal from './add-user-modal.jsx';

class UserGrid extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentPage: 0,
		};
		this.renderUserPage = this.renderUserPage.bind(this);
	}

	componentWillReceiveProps() {
		this.renderUsers();
	}

	openAddUserModal() {
		$('.add-user').modal('show');
	}

	renderUsers() {
		const startRange = this.state.currentPage * 10;
		const endRange = startRange + 10;
		return this.props.users.slice(startRange, endRange).map((user) => <User key={user._id} user={user} />);
	}

	renderUserPage(index) {
		this.setState({
			currentPage: index,
		});
	}

	render() {
		return (this.props.users.length > 0
			? <div>
				<AddUserModal />
				<table className="ui table user-table">
					<thead>
						<tr>
							<th>Name {this.props.users.length}</th>
							<th>Email</th>
							<th>Role</th>
							<th>Created</th>
						</tr>
					</thead>
					<tbody>
						{this.renderUsers()}
					</tbody>
					<tfoot>
						<tr>
							<th colSpan="4">
								<div className="ui small labeled icon green button" onClick={this.openAddUserModal}>
						            <i className="user icon"></i> Add User
						        </div>
								<Paginator amountData={this.props.users.length} renderFunction={this.renderUserPage} elementsPerPage={10} />
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
};

export default UserGrid;
