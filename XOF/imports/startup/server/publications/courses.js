import { Meteor } from 'meteor/meteor';
import { Courses } from '../../../api/courses/courses';
import { Categories } from '../../../api/categories/categories';

Meteor.publishComposite('courses', function courses() {
	return {
		find() {
			return Courses.find({
				isActive: true,
			});
		},
		children: [{
			find(course) {
				return Categories.find({
					_id: course.categoryId,
				});
			},
		}, {
			find(course) {
				return Meteor.users.find({
					_id: course.mentorId,
					'profile.role': 'mentor',
				});
			},
		}],
	};
});
