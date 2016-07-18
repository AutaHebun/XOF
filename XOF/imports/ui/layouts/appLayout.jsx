import React, { PropTypes } from 'react';
import NavbarContainer from '../containers/navbar/navbar-container';

const App = ({ content }) => (
	<div>
		<NavbarContainer />
		<div className="ui app container">
			{content}
		</div>
	</div>
);

App.propTypes = {
	content: PropTypes.element,
};

export default App;
