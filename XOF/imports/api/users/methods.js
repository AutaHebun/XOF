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
			throw new Meteor.Error('Unauthorized Error');
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

export const removeUser = new ValidatedMethod({
	name: 'users.delete',
	validate: new SimpleSchema({
		userId: {
			type: String,
		},
	}).validator(),
	run({ userId }) {
		if (!this.userId) {
			throw new Meteor.Error('Unauthorized Error');
		}
		if (this.userId === userId) {
			throw new Meteor.Error('Unable to delete current user, session is active');
		}

		Meteor.users.remove(userId);
	},
});

export const updateUser = new ValidatedMethod({
	name: 'users.update',
	validate: new SimpleSchema({
		userId: {
			type: String
		},
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
	run({ userId, name, email, password, role }) {
		Accounts.users.update({_id: userId}, {name, email, password, role});
	},
});
