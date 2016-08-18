import React, { Component, PropTypes } from 'react';
import { $ } from 'meteor/jquery';
import { assignMentor } from '../../../api/courses/methods';

class AssignMentorModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			mentorId: '',
		};
	}
	componentDidMount() {
		$('.ui.dropdown').dropdown();
	}

	updateMentorId(event) {
		this.setState({
			mentorId: event.target.value,
		});
	}

	assignMentor() {
		const { course } = this.props;
		if (this.state.mentorId !== '') {
			assignMentor.call({
				courseId: course.get()._id,
				mentorId: this.state.mentorId,
			}, (err) => {
				if (err) {
					return console.log('Oops something went wrong', err);
				}
				console.log('mentor assigned');
			});
		}
	}

	mentorOptions() {
		const { mentors } = this.props;
		return mentors.map((mentor) => <option key={mentor._id} value={mentor._id}>{mentor.profile.name}</option>);
	}

	render() {
		return (
			<div className="ui basic modal assign-mentor">
				<div className="ui center aligned large header">Add Area</div>
				<div className="content">
					<div className="ui large form">
						<div className="ui stacked segment">
							<div className="field">
								<div className="ui input">
									<select className="ui fluid search selection dropdown" id="select-mentor" onChange={(event) => this.updateMentorId(event)} value={this.state.mentorId}>
										<option value="">Select a Mentor</option>
										{this.mentorOptions()}
									</select>
								</div>
							</div>
							<div className="actions">
								<div className="two ui buttons">
									<button className="ui positive labeled icon button" onClick={() => this.assignMentor()}>
										<i className="checkmark icon"></i>Assign Mentor</button>
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

AssignMentorModal.propTypes = {
	course: PropTypes.object.isRequired,
	mentors: PropTypes.array.isRequired,
};

export default AssignMentorModal;
