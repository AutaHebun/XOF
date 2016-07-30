import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import { ReactiveVar } from 'meteor/reactive-var';
import UserGrid from '../../components/users/user-grid.jsx';
import { Areas } from '../../../api/areas/areas';

const composer = (props, onData) => {
	const userHandle = Meteor.subscribe('allUsers');
	const areaHandle = Meteor.subscribe('areas');
	if (userHandle.ready() && areaHandle.ready()) {
		const users = Meteor.users.find({}).fetch();
		const areas = Areas.find({}).fetch();
		const userToEdit = new ReactiveVar({});
		onData(null, {
			currentUser: Meteor.user(),
			users,
			areas,
			userToEdit,
		});
	}
};

export default composeWithTracker(composer)(UserGrid);
