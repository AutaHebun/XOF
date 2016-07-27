import { Meteor } from 'meteor/meteor';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { ValidatedMethod } from 'meteor/mdg:validated-method';

import { Courses } from './courses';

export const createCourse = new ValidatedMethod({
	name: 'courses.createCourse',
	validate: new SimpleSchema({
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
		categoryId: {
			type: String,
		},
		mentorId: {
			type: String,
			optional: true,
			defaultValue: '',
		},
	}).validator(),
	run({ title, description, categoryId, mentorId }) {
		const course = {
			title,
			description,
			categoryId,
			mentorId: mentorId || '',
		};

		if (!this.userId) {
			throw new Meteor.Error('Access denied, you need to be admin to perform this action.');
		}

		Courses.insert(course);
	},
});

export const assignMentor = new ValidatedMethod({
	name: 'courses.assignMentor',
	validate: new SimpleSchema({
		courseId: {
			type: String,
		},
		mentorId: {
			type: String,
		},
	}).validator(),
	run({ courseId, mentorId }) {
		if (!this.userId) {
			throw new Meteor.Error('Access denied, you need to be admin to perform this action.');
		}

		const course = Courses.findOne({
			_id: courseId,
			isActive: true,
		});

		if (!course) {
			throw new Meteor.Error('Course not found');
		}

		Courses.update(courseId, {
			$set: {
				mentorId,
			},
		});
	},
});
