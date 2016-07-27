import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import CourseGrid from '../../components/courses/course-grid.jsx';
import { Courses } from '../../../api/courses/courses';
import { Categories } from '../../../api/categories/categories';

const composer = (props, onData) => {
	const courseHandle = Meteor.subscribe('courses');
	if (courseHandle.ready()) {
		const courses = Courses.find().fetch();
		const categories = Categories.find().fetch();
		const users = Meteor.users.find().fetch();
		courses.map((course) => {
			const tempCourse = course;
			tempCourse.category = (categories.filter((category) => category._id === course.categoryId)[0].name);
			const mentor = users.filter((user) => user._id === course.mentorId)[0];
			tempCourse.mentor = mentor !== undefined ? mentor.profile.name : '';
			return tempCourse;
		});
		onData(null, {
			courses,
			currentUser: Meteor.user(),
		});
	}
};

export default composeWithTracker(composer)(CourseGrid);
