import Database from '../../database/connection'

interface changeUserPasswordRepositoryProps {
  id: number,
  password: string
}

export default async function changeUserPasswordRepository({ id, password }: changeUserPasswordRepositoryProps) {
  const [user] = await Database('users').update({ password }).where({ id }).returning('*')

  return user
}