import React, { PropTypes } from 'react';
import classNames from 'classnames';

const Course = ({ course, currentUser }) => {
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
			{ currentUser.profile.role === 'admin' ? <div className={attachButtonClass}><i className="add icon"></i>Assign Mentor</div> :
			<div className={attachButtonClass}><i className="add icon"></i>Enroll</div> }
		</div>
	);
};

Course.propTypes = {
	course: PropTypes.object.isRequired,
	currentUser: PropTypes.object.isRequired,
};

export default Course;
