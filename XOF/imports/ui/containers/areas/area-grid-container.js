import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { composeWithTracker } from 'react-komposer';
import AreaGrid from '../../components/areas/area-grid.jsx';
import { Areas } from '../../../api/areas/areas';

const composer = (props, onData) => {
	const areaHandle = Meteor.subscribe('areas');
	if (areaHandle.ready()) {
		const areas = Areas.find().fetch();
		const areaToEdit = new ReactiveVar({});
		onData(null, {
			areas,
			areaToEdit,
		});
	}
};

export default composeWithTracker(composer)(AreaGrid);
