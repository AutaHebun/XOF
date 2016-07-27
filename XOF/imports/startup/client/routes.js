import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { mount } from 'react-mounter';
import { Meteor } from 'meteor/meteor';

import AppLayout from '../../ui/layouts/appLayout.jsx';
import LoginLayout from '../../ui/layouts/loginLayout.jsx';
import Login from '../../ui/components/login/login.jsx';
import Signup from '../../ui/components/signup/signup.jsx';
import Home from '../../ui/components/home/home.jsx';
import UserGridContainer from '../../ui/containers/users/user-grid-container';
import CategoryGridContainer from '../../ui/containers/categories/category-grid-container';
import CourseGridContainer from '../../ui/containers/courses/course-grid-container';

FlowRouter.route('/', {
	name: 'default.route',
	triggersEnter: [(context, redirect) => {
		if (!Meteor.userId()) {
			redirect('/login');
		} else {
			redirect('/courses');
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

FlowRouter.route('/users', {
	triggersEnter: [(context, redirect) => {
		if (!Meteor.userId()) {
			redirect('/login');
		}
	}],
	name: 'users.usergrid',
	action() {
		mount(AppLayout, {
			content: <UserGridContainer />,
		});
	},
});

FlowRouter.route('/categories', {
	triggersEnter: [(context, redirect) => {
		if (!Meteor.userId()) {
			redirect('/login');
		}
	}],
	name: 'categories.categorygrid',
	action() {
		mount(AppLayout, {
			content: <CategoryGridContainer />,
		});
	},
});

FlowRouter.route('/courses', {
	triggersEnter: [(context, redirect) => {
		if (!Meteor.userId()) {
			redirect('/login');
		}
	}],
	name: 'courses.coursegrid',
	action() {
		mount(AppLayout, {
			content: <CourseGridContainer />,
		});
	},
});
