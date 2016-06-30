import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

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

Meteor.startup(() => {
	const users = initUsers();

	if (Meteor.users.find().count() === 0) {
		users.forEach((user) => Accounts.createUser(user));
	}
});
