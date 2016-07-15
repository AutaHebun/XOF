import { Meteor } from 'meteor/meteor';
import { ReactiveVar } from 'meteor/reactive-var';
import { composeWithTracker } from 'react-komposer';
import CategoryGrid from '../../components/categories/category-grid.jsx';
import { Categories } from '../../../api/categories/categories';

const composer = (props, onData) => {
	const categoryHandle = Meteor.subscribe('categories');
	if (categoryHandle.ready()) {
		const categories = Categories.find().fetch();
		const categoryToEdit = new ReactiveVar({});
		onData(null, {
			categories,
			categoryToEdit,
		});
	}
};

export default composeWithTracker(composer)(CategoryGrid);
