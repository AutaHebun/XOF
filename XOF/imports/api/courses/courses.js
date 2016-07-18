import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Courses = new Mongo.Collection('courses');

Courses.deny({
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
	title: {
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

Courses.attachSchema(schema);
