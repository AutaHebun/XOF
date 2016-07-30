import { Meteor } from 'meteor/meteor';
import { Areas } from '../../../api/areas/areas';

Meteor.publish('areas', function categories() {
	return Categories.find({
		isActive: true,
	});
});
