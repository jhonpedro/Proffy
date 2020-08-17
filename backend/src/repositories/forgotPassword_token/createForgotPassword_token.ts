import Database from "../../database/connection";
interface createForgotPassword_tokenRepositoryProps {
  token: string,
  user_id: number
}
export default async function createForgotPassword_tokenRepository({ user_id, token }: createForgotPassword_tokenRepositoryProps) {
  const [createdTokenId] = await Database('forgotPassword_token').insert({ user_id, token }).returning('user_id')

  return createdTokenId
}