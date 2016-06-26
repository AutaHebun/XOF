import { Meteor } from 'meteor/meteor';

Meteor.publish('userData', function userData() {
	return Meteor.users.find({
		_id: this.userId,
	}, {
		fields: {
			services: 0,
		},
	});
});

Meteor.publish('allUsers', function allUsers() {
	return Meteor.users.find({}, {
		fields: {
			services: 0,
		},
	});
});
