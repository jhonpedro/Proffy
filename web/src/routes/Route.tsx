import React from 'react'
import { Route, Redirect, RouteProps } from 'react-router-dom'

import { useAuth } from '../hooks/auth'

interface RouteWrapper extends RouteProps {
	isPrivate?: boolean
}

const RouteWrapper: React.FC<RouteWrapper> = ({
	isPrivate,
	children,
	...rest
}) => {
	const { getUser } = useAuth()
	const user = getUser()

	// I could add all of properties here, but if think there is no need
	// because if i dont have onde of these three i probably wont have the other ones
	if ((!user || !user.name || !user.last_name || !user.email) && isPrivate) {
		return <Redirect to='/sing-in' />
	}

	return <Route {...rest}>{children}</Route>
}

export default RouteWrapper
