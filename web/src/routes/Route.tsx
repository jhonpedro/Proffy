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

	if (!user && isPrivate) {
		return <Redirect to='/sing-in' />
	}

	return <Route {...rest}>{children}</Route>
}

export default RouteWrapper
