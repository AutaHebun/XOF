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
		categoryId: {
			type: String
		},
	}).validator(),
	run({ name, email, password, role, categoryId }) {
		if (!this.userId) {
			throw new Meteor.Error('Unauthorized Error');
		}
		Accounts.createUser({
			email,
			password,
			profile: {
				name,
				role,
				categoryId,
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
			type: String,
		},
		name: {
			type: String,
		},
		email: {
			type: String,
		},
		role: {
			type: String,
		},
		categoryId: {
			type: String,
		},
	}).validator(),
	run({ userId, name, email, role, categoryId }) {
		if (!this.userId) {
			throw new Meteor.Error('Unauthorized Error');
		}
		Accounts.users.update({
			_id: userId,
		}, {
			$set: {
				emails: [{ address: email }],
				'profile.name': name,
				'profile.role': role,
				'profile.categoryId': categoryId,
			},
		});
	},
});
