import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Categories } from '../../api/categories/categories';
import { Courses } from '../../api/courses/courses';

const initUsers = () => ([{
	email: 'test@test.com',
	password: 'password',
	profile: {
		name: 'viktor zavala',
		role: 'student',
	},
}, {
	email: 'test2@test.com',
	password: 'password',
	profile: {
		name: 'sharon montenegro',
		role: 'admin',
	},
}, {
	email: 'test3@test.com',
	password: 'password',
	profile: {
		name: 'osman hernandez',
		role: 'mentor',
	},
}]);

const initCategories = () => ([{
	name: 'React',
	description: 'React Development',
	isActive: true,
}, {
	name: 'Meteor',
	description: 'Meteor Development',
	isActive: true,
}]);

const initCourses = () => ([{
	title: 'Meteor Development',
	description: 'Making web applications with Meteor',
	isActive: true,
}, {
	title: 'Redux 101',
	description: 'Understanding Redux and its implementation with React',
	isActive: true,
}, {
	title: 'Reactive programming',
	description: 'Advanced course using RXJS',
	isActive: true,
}]);

Meteor.startup(() => {
	const users = initUsers();
	const categories = initCategories();
	const courses = initCourses();

	if (Meteor.users.find().count() === 0) {
		users.forEach((user) => Accounts.createUser(user));
	}

	if (Categories.find().count() === 0) {
		categories.forEach((category) => Categories.insert(category));
	}

	if (Courses.find().count() === 0) {
		courses.forEach((course) => Courses.insert(course));
	}
});
