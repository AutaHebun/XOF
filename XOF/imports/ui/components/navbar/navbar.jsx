import React, { PropTypes, Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

class Navbar extends Component {
	logout() {
		Meteor.logout();
		FlowRouter.go('/login');
	}
	render() {
		const { currentUser } = this.props;
		const { profile } = currentUser;

		return (
			<div className="ui menu inverted custom-menu">
				<div className="ui container">
					<div className="header item">Welcome {profile.name}</div>
					<a className="active item">My Courses</a>
					<a className="item" href="/users">Users</a>
					<a className="item" href="/categories">Categories</a>
					<div className="right menu">
						{currentUser
							? <a className="item logout" onClick={() => this.logout()}>Logout</a>
							: <a className="item profile">Profile</a>}
					</div>
				</div>
			</div>
		);
	}
}

Navbar.propTypes = {
	currentUser: PropTypes.object,
};

export default Navbar;
