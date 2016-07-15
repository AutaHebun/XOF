import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Categories } from '../../api/categories/categories';

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
}, {
	name: 'React',
	description: 'React Development',
}, {
	name: 'Meteor',
	description: 'Meteor Development',
}]);

Meteor.startup(() => {
	const users = initUsers();
	const categories = initCategories();

	if (Meteor.users.find().count() === 0) {
		users.forEach((user) => Accounts.createUser(user));
	}

	if (Categories.find().count() === 0) {
		categories.forEach((category) => Categories.insert(category));
	}
});
