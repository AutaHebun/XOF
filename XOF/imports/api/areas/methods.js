import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import { Areas } from './areas';

export const insertArea = new ValidatedMethod({
	name: 'areas.insert',
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
		const area = {
			name,
			description,
		};

		if (!this.userId) {
			throw new Meteor.Error('Access denied, you need to be admin to perform this action.');
		}

		Areas.insert(area);
	},
});

export const updateArea = new ValidatedMethod({
	name: 'areas.update',
	validate: new SimpleSchema({
		areaId: {
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
	run({ areaId, name, description }) {
		if (!this.userId) {
			throw new Meteor.Error('Access denied, you need to be admin to perform this action.');
		}
		const area = Areas.findOne({
			_id: areaId,
			isActive: true,
		});

		if (!area) {
			throw new Meteor.Error('Area could not be found.');
		}

		Areas.update(areaId, {
			$set: {
				name,
				description,
			},
		});
	},
});

export const removeArea = new ValidatedMethod({
	name: 'areas.remove',
	validate: new SimpleSchema({
		areaId: {
			type: String,
		},
	}).validator(),
	run({ areaId }) {
		if (!this.userId) {
			throw new Meteor.Error('Access denied, you need to be admin to perform this action.');
		}

		const area = Areas.findOne({
			_id: areaId,
			isActive: true,
		});

		if (!area) {
			throw new Meteor.Error('Area could not be found.');
		}

		Areas.update(areaId, {
			$set: {
				isActive: false,
			},
		});
	},
});


