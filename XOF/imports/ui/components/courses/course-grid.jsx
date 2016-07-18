import React, { Component, PropTypes } from 'react';
import Course from './course.jsx';

class CourseGrid extends Component {
	constructor(props) {
		super(props);
		this.renderCourses = this.renderCourses.bind(this);
	}
	renderCourses() {
		const { courses } = this.props;
		return courses.map((course) => <Course key={course._id} course={course} />);
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
};

export default CourseGrid;
