import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Areas = new Mongo.Collection('Areas');

Areas.deny({
	insert() {
		return true;
	},
	update() {
		return true;
	},
	remove() {
		return true;
	},
});

const schema = new SimpleSchema({
	name: {
		type: String,
	},
	description: {
		type: String,
		optional: true,
		defaultValue: '',
	},
	isActive: {
		type: Boolean,
		defaultValue: true,
		optional: true,
	},
});

Areas.attachSchema(schema);
