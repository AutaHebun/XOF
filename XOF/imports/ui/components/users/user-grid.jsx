import React, { PropTypes, Component } from 'react';
import User from './user.jsx';

class UserGrid extends Component {
	renderUsers() {
		return this.props.users.map((user) => (
			<User key={user._id} user={user} />
		));
	}
	render() {
		return (this.props.users.length > 0
			? <table className="ui table user-table">
					<thead>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Role</th>
							<th>Creado</th>
						</tr>
					</thead>
					<tbody>
						{this.renderUsers()}
					</tbody>
					<tfoot>
						<tr>
							<th colSpan="4">
								<div className="ui right floated pagination menu">
									<a className="icon item">
										<i className="left chevron icon"></i>
									</a>
									<a className="item">1</a>
									<a className="item">2</a>
									<a className="item">3</a>
									<a className="item">4</a>
									<a className="icon item">
										<i className="right chevron icon"></i>
									</a>
								</div>
							</th>
						</tr>
					</tfoot>
				</table>
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
