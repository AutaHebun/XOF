import React, { PropTypes } from 'react';

const Course = ({ course }) => (
	<div className="ui raised card">
		<div className="content">
			<div className="header">
				{course.title}
			</div>
			<div className="meta">
				Category Here
			</div>
			<div className="description">
				{course.description}
			</div>
		</div>
		<div className="extra content">
			<span className="right floated">
				<i className="user icon"></i>
				150 Students enrolled
			</span>
			<div className="ui inverted green button">Enroll</div>
		</div>
	</div>
);

Course.propTypes = {
	course: PropTypes.object.isRequired,
};

export default Course;
