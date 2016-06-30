import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import { FlowRouter } from 'meteor/kadira:flow-router';

class Login extends Component {
	login() {
		event.preventDefault();
		const email = this.refs.email.value;
		const password = this.refs.password.value;

		Meteor.loginWithPassword(email, password, (err) => {
			if (err) {
				return console.log('error', err);
			}
			FlowRouter.go('/home');
		});
	}

	redirectSignUp() {
		FlowRouter.go('/signup');
	}

	render() {
		return (
			<div className="ui middle aligned center aligned grid">
				<div className="column login">
					<h2 className="ui blue header">
						<div className="content">
							Training Manager
						</div>
					</h2>
					<div className="ui large form">
						<div className="ui stacked segment">
							<div className="field">
								<div className="ui left icon input">
									<i className="user icon"></i>
									<input type="text" name="register-email" ref="email" placeholder="Email"></input>
								</div>
							</div>
							<div className="field">
								<div className="ui left icon input">
									<i className="lock icon"></i>
									<input type="password" name="register-password" ref="password" placeholder="Password"></input>
								</div>
							</div>
							<div className="ui buttons">
								<button className="ui green submit button" onClick={() => this.login()}>Login</button>
								<div className="or"></div>
								<button className="ui blue button" onClick={() => this.redirectSignUp()}>Sign Up</button>
							</div>
						</div>
						<div className="ui error message"></div>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
