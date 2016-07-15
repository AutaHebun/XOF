import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import { Categories } from './categories';

export const insertCategory = new ValidatedMethod({
	name: 'categories.insert',
	validate: new SimpleSchema({
		name: {
			type: String,
		},
		description: {
			type: String,
			optional: true,
			defaultValue: '',
		},
	}).validator(),
	run({ name, description }) {
		const category = {
			name,
			description,
		};

		if (!this.userId) {
			throw new Meteor.Error('Access denied, you need to be admin to perform this action.');
		}

		Categories.insert(category);
	},
});

export const updateCategory = new ValidatedMethod({
	name: 'categories.update',
	validate: new SimpleSchema({
		categoryId: {
			type: String,
		},
		name: {
			type: String,
		},
		description: {
			type: String,
			optional: true,
			defaultValue: '',
		},
	}).validator(),
	run({ categoryId, name, description }) {
		if (!this.userId) {
			throw new Meteor.Error('Access denied, you need to be admin to perform this action.');
		}
		const category = Categories.findOne({
			_id: categoryId,
			isActive: true,
		});

		if (!category) {
			throw new Meteor.Error('Category could not be found.');
		}

		Categories.update(categoryId, {
			$set: {
				name,
				description,
			},
		});
	},
});

export const removeCategory = new ValidatedMethod({
	name: 'categories.remove',
	validate: new SimpleSchema({
		categoryId: {
			type: String,
		},
	}).validator(),
	run({ categoryId }) {
		if (!this.userId) {
			throw new Meteor.Error('Access denied, you need to be admin to perform this action.');
		}

		const category = Categories.findOne({
			_id: categoryId,
			isActive: true,
		});

		if (!category) {
			throw new Meteor.Error('Category could not be found.');
		}

		Categories.update(categoryId, {
			$set: {
				isActive: false,
			},
		});
	},
});
