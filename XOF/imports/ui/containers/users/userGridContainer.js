import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import UserGrid from '../../components/users/user-grid.jsx';

const composer = (props, onData) => {
	const userHandle = Meteor.subscribe('allUsers');
	if (userHandle.ready()) {
		const users = Meteor.users.find({}).fetch();
		onData(null, {
			users,
		});
	}
};

export default composeWithTracker(composer)(UserGrid);
