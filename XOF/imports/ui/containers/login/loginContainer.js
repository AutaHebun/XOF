import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Login from '../../components/login/login.jsx';

const composer = (props, onData) => {
	const userHandle = Meteor.subscribe('userData');
	if (userHandle.ready()) {
		onData(null, {
			currentUser: Meteor.user(),
		});
	}
};

export default composeWithTracker(composer)(Login);
