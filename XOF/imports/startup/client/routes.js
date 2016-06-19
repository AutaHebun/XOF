import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';

import App from '../../ui/layouts/app.jsx';
import LoginContainer from '../../ui/containers/login/loginContainer';

FlowRouter.route('/', {
	name: 'default.route',
	action() {
		mount(App, {
			content: <LoginContainer />,
		});
	},
});
