import Database from '../../database/connection'

export default async function findUserByEmailRepository(email: string) {
	const user = await Database('users').select().where({ email }).first()

	return user
}
