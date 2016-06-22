import React, { PropTypes } from 'react';

const LoginLayout = ({ content }) => (
	<div>
		<div className="ui app container">
			{content}
		</div>
	</div>
);

LoginLayout.propTypes = {
	content: PropTypes.element,
};

export default LoginLayout;
