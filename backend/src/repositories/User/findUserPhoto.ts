import Database from '../../database/connection'

export default async function findUserPhoto(user_id: number) {
	const response = await Database('users')
		.select('photo')
		.where({ id: user_id })
		.first()

	return response
}
