import React, { Component } from 'react';
import { insertUser } from '../../../api/users/methods';
import Categories from '../../../api/categories/categories';

class AddUserModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			admin: false,
			student: true,
			mentor: false,
		};
	}
	setAdmin() {
		this.setState({
			admin: !this.state.admin,
			student: false,
			mentor: false,
		});
	}
	setStudent() {
		this.setState({
			admin: false,
			student: !this.state.student,
			mentor: false,
		});
	}
	setMentor() {
		this.setState({
			admin: false,
			student: false,
			mentor: !this.state.mentor,
		});
	}

	addUser() {
		const name = this.refs.name.value;
		const email = this.refs.email.value;
		const password = this.refs.password.value;
		const categoryId = this.refs.categoryId.value;
		let role = '';

		if (this.state.admin) {
			role = 'admin';
		} else if (this.state.mentor) {
			role = 'mentor';
		} else {
			role = 'student';
		}

		insertUser.call({
			name,
			email,
			password,
			role,
			categoryId
		}, (err) => {
			if (err) {
				return console.log('oops', err);
			}
			console.log('created user');
		});
	}

	getCategories(){
		return this.props.categories.map((category) => <option value={category._id}>{category.name}</option>)
	}
	render() {
		return (
			<div className="ui basic modal add-user">
				<div className="ui center aligned large header">Add User</div>
				<div className="content">
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
									<select class="ui search dropdown" ref="categoryId">
										{this.getCategories()}
									</select>
								</div>
							</div>
							
							<div className="inline fields">
								<div className="field">
									<div className="ui slider checkbox">
										<input type="radio" name="role" checked={this.state.admin} onChange={() => this.setAdmin()} />
										<label>Admin</label>
									</div>
								</div>
								<div className="field">
									<div className="ui slider checkbox">
										<input type="radio" name="role" checked={this.state.mentor} onChange={() => this.setMentor()} />
										<label>Mentor</label>
									</div>
								</div>
								<div className="field">
									<div className="ui slider checkbox">
										<input type="radio" name="role" checked={this.state.student} onChange={() => this.setStudent()} />
										<label>Student</label>
									</div>
								</div>
							</div>
							<div className="actions">
								<div className="two ui buttons">
									<button className="ui positive labeled icon button" onClick={() => this.addUser()}>
										<i className="checkmark icon"></i>Add User</button>
									<button className="ui cancel red labeled icon button">
										<i className="remove icon"></i> Cancel</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default AddUserModal;
