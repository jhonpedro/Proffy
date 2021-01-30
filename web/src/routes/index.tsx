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
import MyClasses from '../pages/MyClasses'

import Route from './Route'

function Routes() {
	return (
		<Switch>
			<Route path='/sing-in' children={<SingIn />} />
			<Route path='/sing-up' children={<SingUp />} />
			<Route path='/forgot-password' children={<ForgotPassword />} />
			<Route path='/change-password/:token' children={<ChangePassword />} />
			<Route isPrivate path='/' exact children={<Landing />} />
			<Route isPrivate path='/user' children={<User />} />
			<Route isPrivate path='/my-classes' children={<MyClasses />} />
			<Route isPrivate path='/study' children={<TeacherList />} />
			<Route isPrivate path='/create-class' children={<TeacherForm />} />
			<Route path='*'>
				<Redirect to='/sing-in' />
			</Route>
		</Switch>
	)
}

export default Routes
