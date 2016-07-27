import React, { Component, PropTypes } from 'react';
import Course from './course.jsx';

class CourseGrid extends Component {
	constructor(props) {
		super(props);
		this.renderCourses = this.renderCourses.bind(this);
	}
	renderCourses() {
		const { courses, currentUser } = this.props;
		return courses.map((course) => <Course key={course._id} course={course} currentUser={currentUser} />);
	}
	render() {
		return (
			<div className="ui three stackable cards">
				{this.renderCourses()}
			</div>
		);
	}
}

CourseGrid.propTypes = {
	courses: PropTypes.array.isRequired,
	currentUser: PropTypes.object.isRequired,
};

export default CourseGrid;
