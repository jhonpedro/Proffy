import React, { createContext, useContext, useState, useEffect } from 'react'
import axios from '../services/axios'

export interface User {
	id: number
	name: string
	email: string
	last_name: string
	photo: string
	whatsapp: string
}

interface AuthContextData {
	token: string
	singIn(email: string, password: string, remember: boolean): Promise<void>
	getUser(): User | undefined
	setUser(user: User): void
}

interface SessionPostProps {
	token: string
	user: User
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

const AuthProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState<User>(() => {
		const localResponse = localStorage.getItem('user')
		if (!localResponse) {
			return
		}

		const user = JSON.parse(localResponse)

		return user
	})

	const [token, setToken] = useState<string>(() => {
		const localResponse = localStorage.getItem('token') as string
		if (!localResponse) {
			return ''
		}
		axios.defaults.headers.Authorization = `Bearer ${localResponse}`
		return localResponse
	})
	const [remember, setRemeber] = useState(() => {
		const remember = localStorage.getItem('remember')

		if (!remember) {
			return false
		} else {
			return true
		}
	})

	async function singIn(email: string, password: string, remember: boolean) {
		try {
			const response = await axios.post<SessionPostProps>('/user/session', {
				email,
				password,
			})

			const { token, user } = response.data
			user.email = email

			axios.defaults.headers.Authorization = `Bearer ${token}`

			setToken(token)
			setUser(user)
			if (remember) {
				setRemeber(true)
				localStorage.setItem('user', JSON.stringify(user))
				localStorage.setItem('token', token)
				localStorage.setItem('remember', remember + '')
			}
		} catch (error) {
			return
		}
	}

	function getUser() {
		if (!remember) {
			if (!user) {
				return undefined
			}
			return user
		}

		const localResponse = localStorage.getItem('user') as string
		if (!localStorage) {
			return undefined
		}
		const userParsed = JSON.parse(localResponse)

		return userParsed
	}

	useEffect(() => {
		if (remember) {
			localStorage.setItem('user', JSON.stringify(user))
		}
	}, [user, remember])

	return (
		<AuthContext.Provider
			value={{
				singIn,
				getUser,
				setUser,
				token,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

function useAuth() {
	const context = useContext(AuthContext)

	if (!context) {
		throw new Error('useAuth must be used within a AuthProvider')
	}

	return context
}

export { useAuth }
export default AuthProvider
