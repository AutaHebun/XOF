import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Categories } from '../../api/categories/categories';
import { Courses } from '../../api/courses/courses';
import { Areas } from '../../api/areas/areas';

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
}, {
	name: 'Advanced Programming',
	description: 'Programming for jedis',
	isActive: true,
}]);

const initAreas = () => ([{
	name: 'Development',
	description: 'Dudes and buddies',
	isActive: true,
}, {
	name: 'Quality Assurance',
	description: 'Al hail our Montenegro overlords',
	isActive: true,
}, {
	name: 'Business Analyst',
	description: 'Sort of like unicorns',
	isActive: true,
}]);

const initCourses = (categories, users) => ([{
	title: 'Meteor Development',
	description: 'Making web applications with Meteor',
	isActive: true,
	categoryId: categories[0]._id,
}, {
	title: 'Redux 101',
	description: 'Understanding Redux and its implementation with React',
	isActive: true,
	categoryId: categories[1]._id,
	mentorId: users[2]._id,
}, {
	title: 'Reactive programming',
	description: 'Advanced course using RXJS',
	isActive: true,
	categoryId: categories[2]._id,
}]);

Meteor.startup(() => {
	const users = initUsers();
	const categories = initCategories();
	const areas = initAreas();
	
	if (Meteor.users.find().count() === 0) {
		users.forEach((user) => Accounts.createUser(user));
	}

	if (Categories.find().count() === 0) {
		categories.forEach((category) => Categories.insert(category));
	}

	if (Courses.find().count() === 0) {
		const dbCategories = Categories.find().fetch();
		const dbUsers = Meteor.users.find().fetch();
		const courses = initCourses(dbCategories, dbUsers);
		courses.forEach((course) => Courses.insert(course));
	}

	if (Areas.find().count() === 0) {
		areas.forEach((area) => Areas.insert(area));
	}
});
