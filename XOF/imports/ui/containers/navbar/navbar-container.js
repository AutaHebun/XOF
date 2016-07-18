import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import Navbar from '../../components/navbar/navbar.jsx';

const composer = (props, onData) => {
	const userHandle = Meteor.subscribe('userData');
	if (userHandle.ready()) {
		onData(null, {
			currentUser: Meteor.user(),
		});
	}
};

export default composeWithTracker(composer)(Navbar);
