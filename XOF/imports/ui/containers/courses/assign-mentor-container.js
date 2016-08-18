import { Meteor } from 'meteor/meteor';
import { composeWithTracker } from 'react-komposer';
import AssignMentorModal from '../../components/courses/assign-mentor-modal.jsx';

const composer = (props, onData) => {
	const mentorHandle = Meteor.subscribe('mentors');
	if (mentorHandle.ready()) {
		const mentors = Meteor.users.find({}).fetch();
		onData(null, {
			mentors,
		});
	}
};

export default composeWithTracker(composer)(AssignMentorModal);
