import { Meteor } from 'meteor/meteor';
import { Courses } from '../../../api/courses/courses';

Meteor.publish('courses', function courses() {
	return Courses.find({
		isActive: true,
	});
});
