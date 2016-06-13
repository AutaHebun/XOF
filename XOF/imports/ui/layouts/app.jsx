import React, { PropTypes } from 'react';

const App = ({ content }) => (
	<div className="ui app container">
		{content}
	</div>
);

App.propTypes = {
	content: PropTypes.element,
};

export default App;
