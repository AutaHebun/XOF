import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Categories = new Mongo.Collection('Categories');

Categories.deny({
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
	},
	isActive: {
		type: Boolean,
		defaultValue: true,
		optional: true,
	},
});

Categories.attachSchema(schema);
