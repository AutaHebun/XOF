import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';
import { Accounts } from 'meteor/accounts-base';

export const insertUser = new ValidatedMethod({
	name: 'users.insert',
	validate: new SimpleSchema({
		name: {
			type: String,
		},
		email: {
			type: String,
		},
		password: {
			type: String,
		},
		role: {
			type: String,
		},
	}).validator(),
	run({ name, email, password, role }) {
		if (!this.userId) {
			throw new Meteor.Error('You need to be logged in to make this operation');
		}
		Accounts.createUser({
			email,
			password,
			profile: {
				name,
				role,
			},
		});
	},
});
