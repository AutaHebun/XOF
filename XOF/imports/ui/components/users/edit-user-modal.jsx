import React, { PropTypes, Component } from 'react';
import { updateUser } from '../../../api/users/methods';

class EditUserModal extends Component {
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

	getAreas() {
		return this.props.areas.map((area) => <option key={area._id} value={area._id}>{area.name}</option>);
	}

	editUser() {
		const name = this.refs['edit-name'].value;
		const email = this.refs['edit-email'].value;
		const areaId = this.refs.areaId.value;
		const user = this.props.user;
		let role = '';

		if (this.state.admin) {
			role = 'admin';
		} else if (this.state.mentor) {
			role = 'mentor';
		} else {
			role = 'student';
		}

		updateUser.call({
			userId: user.get()._id,
			name,
			email,
			role,
			areaId,
		}, (err) => {
			if (err) {
				return console.log('oops', err);
			}
			console.log('updated user');
		});
	}

	render() {
		return (
			<div className="ui basic modal edit-user">
				<div className="ui center aligned large header">Edit User</div>
				<div className="content">
					<div className="ui large form">
						<div className="ui stacked segment">
							<div className="field">
								<div className="ui left icon input">
									<i className="user icon"></i>
									<input type="text" name="edit-name" ref="edit-name" placeholder="name"></input>
								</div>
							</div>
							<div className="field">
								<div className="ui left icon input">
									<i className="user icon"></i>
									<input type="text" name="edit-email" ref="edit-email" placeholder="Email"></input>
								</div>
							</div>
							<div className="field">
								<div className="ui left icon input">
									<select className="ui search dropdown" ref="areaId">
										{this.getAreas()}
									</select>
								</div>
							</div>
							<div className="inline fields">
								<div className="field">
									<div className="ui slider checkbox">
										<input type="radio" name="edit-role" checked={this.state.admin} onChange={() => this.setAdmin()} />
										<label>Admin</label>
									</div>
								</div>
								<div className="field">
									<div className="ui slider checkbox">
										<input type="radio" name="edit-role" checked={this.state.mentor} onChange={() => this.setMentor()} />
										<label>Mentor</label>
									</div>
								</div>
								<div className="field">
									<div className="ui slider checkbox">
										<input type="radio" name="edit-role" checked={this.state.student} onChange={() => this.setStudent()} />
										<label>Student</label>
									</div>
								</div>
							</div>
							<div className="actions">
								<div className="two ui buttons">
									<button className="ui positive labeled icon button" onClick={() => this.editUser()}>
										<i className="checkmark icon"></i>Edit User</button>
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

EditUserModal.propTypes = {
	user: PropTypes.object.isRequired,
	areas: PropTypes.array.isRequired,
};

export default EditUserModal;
