import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import SingIn from './pages/SingIn'
import SingUp from './pages/SingUp'
import TeacherList from './pages/TeacherList'
import TeacherForm from './pages/TeacherForm'

function Routes() {
	return (
		<BrowserRouter>
			<Route path="/" exact>
				<SingIn />
			</Route>
			<Route path="/sing-up" exact>
				<SingUp />
			</Route>
			<Route path="/study" exact>
				<TeacherList />
			</Route>
			<Route path="/give-classes" exact>
				<TeacherForm />
			</Route>
		</BrowserRouter>
	)
}

export default Routes
