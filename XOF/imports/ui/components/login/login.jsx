import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

class Login extends Component {
	constructor(props) {
		super(props);
		this.login = this.login.bind(this);
	}

	login() {
		event.preventDefault();
		const email = this.refs.email.value;
		const password = this.refs.password.value;

		Meteor.loginWithPassword(email, password, (err) => {
			if (err) {
				return console.log('error', err);
			}
			console.log('successful login');
		});
	}

	render() {
		return (
			<div className="ui middle aligned center aligned grid">
				<div className="column login">
					<form className="ui large form">
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
									<input type="password" name="register-password" ref="password" placeholder="Passoword"></input>
								</div>
							</div>
							<div className="ui fluid large submit positive button" onClick={this.login}>Login</div>
						</div>
						<div className="ui error message"></div>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;
