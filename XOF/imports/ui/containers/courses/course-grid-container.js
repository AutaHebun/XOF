import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import CourseGrid from '../../components/courses/course-grid.jsx';
import { Courses } from '../../../api/courses/courses';

const composer = (props, onData) => {
	const courseHandle = Meteor.subscribe('courses');
	if (courseHandle.ready()) {
		const courses = Courses.find().fetch();
		onData(null, {
			courses,
		});
	}
};

export default composeWithTracker(composer)(CourseGrid);
