import Database from '../../database/connection'

export default async function changeUserPhoto(
	user_id: number,
	photoName: string
) {
	await Database('users')
		.column('photo')
		.where({ id: user_id })
		.update({ photo: photoName })

	return true
}
