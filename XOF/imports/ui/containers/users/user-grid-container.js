import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import { ReactiveVar } from 'meteor/reactive-var';
import UserGrid from '../../components/users/user-grid.jsx';
import {Categories} from '../../../api/categories/categories';

const composer = (props, onData) => {
	const userHandle = Meteor.subscribe('allUsers');
	const categoriesHandle = Meteor.subscribe('categories');
	if (userHandle.ready() && categoriesHandle.ready()) {
		const users = Meteor.users.find({}).fetch();
		const categories = Categories.find({}).fetch();
		const userToEdit = new ReactiveVar({});
		onData(null, {
			currentUser: Meteor.user(),
			users,
			categories,
			userToEdit,
		});
	}
};

export default composeWithTracker(composer)(UserGrid);
