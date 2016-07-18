import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Categories } from '../../api/categories/categories';
<<<<<<< HEAD
=======
import { Courses } from '../../api/courses/courses';
>>>>>>> 95410d2... list courses

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
	name: 'Security',
	description: 'Cyber Security Category',
<<<<<<< HEAD
}, {
	name: 'React',
	description: 'React Development',
}, {
	name: 'Meteor',
	description: 'Meteor Development',
=======
	isActive: true,
}, {
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
>>>>>>> 95410d2... list courses
}]);

Meteor.startup(() => {
	const users = initUsers();
	const categories = initCategories();
<<<<<<< HEAD
=======
	const courses = initCourses();
>>>>>>> 95410d2... list courses

	if (Meteor.users.find().count() === 0) {
		users.forEach((user) => Accounts.createUser(user));
	}

	if (Categories.find().count() === 0) {
		categories.forEach((category) => Categories.insert(category));
	}
<<<<<<< HEAD
=======

	if (Courses.find().count() === 0) {
		courses.forEach((course) => Courses.insert(course));
	}
>>>>>>> 95410d2... list courses
});
