import Database from '../../database/connection'
import { findUserByEmailRepository } from '.'

interface createUserProps {
	name: string
	last_name: string
	email: string
	password: string
}

export default async function createUser({
	email,
	last_name,
	name,
	password,
}: createUserProps) {
	const [createdUser] = await Database('users')
		.insert({
			name,
			last_name,
			email,
			password,
		})
		.returning('*')

	return createdUser
}
