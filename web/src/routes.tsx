import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import SingIn from './pages/SingIn'
import TeacherList from './pages/TeacherList'
import TeacherForm from './pages/TeacherForm'

function Routes() {
	return (
		<BrowserRouter>
			<Route path="/" exact>
				<SingIn />
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
