import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Accounts } from 'meteor/accounts-base';

class Signup extends Component {
	constructor(props) {
		super(props);
	}

	registerUser() {
		event.preventDefault();
		const name = this.refs.name.value;
		const email = this.refs.email.value;
		const password = this.refs.password.value;
		const confirmPassword = this.refs['confirm-password'].value;

		if (password !== confirmPassword) {
			return console.log('passowrds dont match');
		}

		Accounts.createUser({
			email,
			password,
			profile: {
				name,
			},
		}, (err) => {
			if (err) {
				return console.log('error', err);
			}
			FlowRouter.go('/home');
		});
	}

	render() {
		return (
			<div className="ui middle aligned center aligned grid">
				<div className="column register">
					<h2 className="ui blue header">
						<div className="content">
							Register
						</div>
					</h2>
					<div className="ui large form">
						<div className="ui stacked segment">
							<div className="field">
								<div className="ui left icon input">
									<i className="user icon"></i>
									<input type="text" name="register-email" ref="name" placeholder="name"></input>
								</div>
							</div>
							<div className="field">
								<div className="ui left icon input">
									<i className="user icon"></i>
									<input type="text" name="register-email" ref="email" placeholder="Email"></input>
								</div>
							</div>
							<div className="field">
								<div className="ui left icon input">
									<i className="lock icon"></i>
									<input type="password" name="password" ref="password" placeholder="Password"></input>
								</div>
							</div>
							<div className="field">
								<div className="ui left icon input">
									<i className="lock icon"></i>
									<input type="password" name="confirm-password" ref="confirm-password" placeholder="Confirm Password"></input>
								</div>
							</div>
							<button className="ui green submit button" onClick={() => this.registerUser()}>Register</button>
						</div>
						<div className="ui error message"></div>
					</div>
				</div>
			</div>
		);
	}
}

export default Signup;
