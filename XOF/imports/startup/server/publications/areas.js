import { Meteor } from 'meteor/meteor';
import { Areas } from '../../../api/areas/areas';

Meteor.publish('areas', function areas() {
	return Areas.find({
		isActive: true,
	});
});
