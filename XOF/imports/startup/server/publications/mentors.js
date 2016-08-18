import { Meteor } from 'meteor/meteor';

Meteor.publish('mentors', function categories() {
	return Meteor.users.find({
		'profile.role': 'mentor',
	});
});
