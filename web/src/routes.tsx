import React from 'react'
import { Switch, BrowserRouter, Redirect, Route } from 'react-router-dom'

import SingIn from './pages/SingIn'
import SingUp from './pages/SingUp'
import TeacherList from './pages/TeacherList'
import TeacherForm from './pages/TeacherForm'
import ChangePassword from './pages/ChangePassword'
import ForgotPassword from './pages/ForgotPassword'
import Landing from './pages/Landing'

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/sing-in">
					<SingIn />
				</Route>
				<Route path="/sing-up">
					<SingUp />
				</Route>
				<Route path="/forgot-password">
					<ForgotPassword />
				</Route>
				<Route path="/change-password/:token">
					<ChangePassword />
				</Route>
				<Route path="/" exact>
					<Landing />
				</Route>
				<Route path="/study">
					<TeacherList />
				</Route>
				<Route path="/give-classes">
					<TeacherForm />
				</Route>
				<Route path="*">
					<Redirect to="/sing-in" />
				</Route>
			</Switch>
		</BrowserRouter>
	)
}

export default Routes
