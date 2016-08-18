import React, { Component, PropTypes } from 'react';
import { $ } from 'meteor/jquery';
import classNames from 'classnames';

class Course extends Component {
	openAssignMentorModal() {
		this.props.chosenCourse.set(this.props.course);
		$('.ui.basic.modal.assign-mentor')
		.modal({
			autofocus: false,
			detachable: false,
			transition: 'horizontal flip',
		})
		.modal('show');
	}
	render() {
		const { currentUser, course } = this.props;

		const attachButtonClass = classNames('ui blue bottom attached button', {
			'assign-mentor': currentUser.profile.role === 'admin',
			'enroll': currentUser.profile.role !== 'admin',
		});
		return (
				<div className="ui raised card">
					<div className="content">
						<div className="header">
							{course.title}
						</div>
					</div>
					<div className="content course-card-content">
						<h4 className="sub-header">
							{course.category}
						</h4>
						<div className="meta">
							{course.mentor !== '' ? `${course.mentor} (mentor)` : 'No mentor assigned'}
						</div>
						<div className="description">
							{course.description}
						</div>
					</div>
					{ currentUser.profile.role === 'admin' ? <div className={attachButtonClass} onClick={() => this.openAssignMentorModal()}>
					<i className="add icon"></i>Assign Mentor</div> :
					<div className={attachButtonClass}><i className="add icon"></i>Enroll</div> }
				</div>
		);
	}
}

Course.propTypes = {
	course: PropTypes.object.isRequired,
	currentUser: PropTypes.object.isRequired,
	chosenCourse: PropTypes.object.isRequired,
};

export default Course;
