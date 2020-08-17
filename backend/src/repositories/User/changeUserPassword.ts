import Database from '../../database/connection'

export default async function changeUserPasswordRepository(id: number, password: string) {
  const [user] = await Database('users').update({ password }).where({ id }).returning('*')

  return user
}