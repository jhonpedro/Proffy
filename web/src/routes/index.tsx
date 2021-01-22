import React from 'react'
import { Switch, Redirect } from 'react-router-dom'

import SingIn from '../pages/SingIn'
import SingUp from '../pages/SingUp'
import TeacherList from '../pages/TeacherList'
import TeacherForm from '../pages/TeacherForm'
import ChangePassword from '../pages/ChangePassword'
import ForgotPassword from '../pages/ForgotPassword'
import Landing from '../pages/Landing'
import User from '../pages/User'

import Route from './Route'

function Routes() {
	return (
		<Switch>
			<Route path='/sing-in'>
				<SingIn />
			</Route>
			<Route path='/sing-up'>
				<SingUp />
			</Route>
			<Route path='/forgot-password'>
				<ForgotPassword />
			</Route>
			<Route path='/change-password/:token'>
				<ChangePassword />
			</Route>
			<Route isPrivate path='/' exact>
				<Landing />
			</Route>
			<Route isPrivate path='/user'>
				<User />
			</Route>
			<Route isPrivate path='/study'>
				<TeacherList />
			</Route>
			<Route isPrivate path='/give-classes'>
				<TeacherForm />
			</Route>
			<Route path='*'>
				<Redirect to='/sing-in' />
			</Route>
		</Switch>
	)
}

export default Routes
