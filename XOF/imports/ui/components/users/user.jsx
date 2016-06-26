import React, { PropTypes } from 'react';
import moment from 'moment';

const User = ({ user }) => (
	<tr>
		<td> {user.profile.name} </td>
		<td> {user.emails[0].address}</td>
		<td> {user.profile.role}</td>
		<td> {moment(user.createdAt).format('dddd, MMMM Do YYYY')}</td>
	</tr>
);

User.propTypes = {
	user: PropTypes.object.isRequired,
};

export default User;
