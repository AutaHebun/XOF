import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';

const initUsers = () => ([{
	email: 'test@test.com',
	password: 'password',
	profile: {
		name: 'test',
		role: 'student',
	},
}]);

Meteor.startup(() => {
	const users = initUsers();

	if (Meteor.users.find().count() === 0) {
		users.forEach((user) => Accounts.createUser(user));
	}
});
