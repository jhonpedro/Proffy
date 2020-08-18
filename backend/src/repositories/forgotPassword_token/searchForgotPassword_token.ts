import Database from "../../database/connection";
interface searchForgotPassword_tokenRepositoryProps {
  user_id: number
}
export default async function searchForgotPassword_tokenRepository({ user_id }: searchForgotPassword_tokenRepositoryProps) {
  const [tokenInDatabase] = await Database('forgotPassword_token').select().where({ user_id })

  return tokenInDatabase
} 