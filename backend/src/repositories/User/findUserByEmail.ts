import Database from '../../database/connection'

export default async function findUserByEmailRepository(
	email: string
): Promise<{
	id: number
	name: string
	last_name: string
	password: string
	whatsapp: string
	photo: string
}> {
	const user = await Database('users as u')
		.select([
			'u.name',
			'u.last_name',
			'u.password',
			'u.whatsapp',
			'u.photo',
			'u.id',
		])
		.where({ email })
		.first()

	return user
}
