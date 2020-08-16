import Database from '../../database/connection'
import { findUserByEmailRepository } from '..'

interface createUserProps {
  name: string,
  email: string,
  password: string
}

export default async function createUser({ email, name, password }: createUserProps) {

  const userInTable = await findUserByEmailRepository(email)
  if (userInTable) {
    return null
  }

  const [createdUser] = await Database('users').insert({
    name,
    email,
    password
  }).returning('*')

  return createUser
}