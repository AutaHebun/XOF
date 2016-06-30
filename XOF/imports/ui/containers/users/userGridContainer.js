import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import { ReactiveVar } from 'meteor/reactive-var';
import UserGrid from '../../components/users/user-grid.jsx';

const composer = (props, onData) => {
	const userHandle = Meteor.subscribe('allUsers');
	if (userHandle.ready()) {
		console.log('fuck');
		const users = Meteor.users.find({}).fetch();
		const userToEdit = new ReactiveVar({});
		onData(null, {
			currentUser: Meteor.user(),
			users,
			userToEdit,
		});
	}
};

export default composeWithTracker(composer)(UserGrid);
