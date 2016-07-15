import { Meteor } from 'meteor/meteor';
import { Categories } from '../../../api/categories/categories';

Meteor.publish('categories', function categories() {
	return Categories.find({
		isActive: true,
	});
});
