import Database from '../../database/connection'

interface UpdateUserProps {
	name: string
	last_name: string
	whatsapp: string
	id: number
}

export default async function updateUser({
	name,
	last_name,
	whatsapp,
	id,
}: UpdateUserProps) {
	await Database('users').update({ name, last_name, whatsapp }).where({ id })

	return true
}
