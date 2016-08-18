import React, { Component, PropTypes } from 'react';
import Course from './course.jsx';
import AssignMentorContainer from '../../containers/courses/assign-mentor-container';

class CourseGrid extends Component {
	constructor(props) {
		super(props);
		this.renderCourses = this.renderCourses.bind(this);
	}
	renderCourses() {
		const { courses, currentUser, course } = this.props;
		return courses.map((mapCourse) => <Course key={mapCourse._id} course={mapCourse} currentUser={currentUser} chosenCourse={course} />);
	}
	render() {
		const { course } = this.props;
		return (
			<div className="ui three stackable cards">
				<AssignMentorContainer course={course} />
				{this.renderCourses()}
			</div>
		);
	}
}

CourseGrid.propTypes = {
	courses: PropTypes.array.isRequired,
	currentUser: PropTypes.object.isRequired,
	course: PropTypes.object.isRequired,
};

export default CourseGrid;
