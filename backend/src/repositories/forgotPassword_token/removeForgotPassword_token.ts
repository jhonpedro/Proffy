import Database from '../../database/connection'
interface removeForgotPassword_tokenRepositoryProps {
	user_id: number
}
export default async function removeForgotPassword_tokenRepository({
	user_id,
}: removeForgotPassword_tokenRepositoryProps) {
	await Database('forgotPassword_token').delete().where({ user_id })

	return true
}
