import React, { PropTypes, Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

class Navbar extends Component {
	constructor(props) {
		super(props);
		this.logout = this.logout.bind(this);
	}
	logout() {
		Meteor.logout();
		FlowRouter.go('/login');
	}
	render() {
		return (
			<div className="ui menu">
				<div className="ui container">
					<div className="header item">Welcome {this.props.currentUser.profile.name}</div>
					<a className="active item">My Courses</a>
					<a className="item">Link</a>
					<div className="right menu">
						{this.props.currentUser
							? <a className="item logout" onClick={this.logout}>Logout</a>
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
