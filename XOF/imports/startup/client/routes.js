import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import { Meteor } from 'meteor/meteor';

import AppLayout from '../../ui/layouts/appLayout.jsx';
import LoginLayout from '../../ui/layouts/loginLayout.jsx';
import Login from '../../ui/components/login/login.jsx';
import Signup from '../../ui/components/signup/signup.jsx';
import Home from '../../ui/components/home/home.jsx';

FlowRouter.route('/', {
	name: 'default.route',
	triggersEnter: [(context, redirect) => {
		if (!Meteor.userId()) {
			redirect('/login');
		}
	}],
});

FlowRouter.route('/login', {
	action() {
		mount(LoginLayout, {
			content: <Login />,
		});
	},
});

FlowRouter.route('/signup', {
	action() {
		mount(LoginLayout, {
			content: <Signup />,
		});
	},
});

FlowRouter.route('/home', {
	triggersEnter: [(context, redirect) => {
		if (!Meteor.userId()) {
			redirect('/login');
		}
	}],
	name: 'home.route',
	action() {
		mount(AppLayout, {
			content: <Home />,
		});
	},
});
