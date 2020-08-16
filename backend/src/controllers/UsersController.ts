import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { emailValidator } from '../utils'
import { findUserByEmailRepository, createUserRepository } from '../repositories'

const secret = process.env.JWT_SECRECT as string

export default {
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body

    const isEmailValid = emailValidator(email)

    if (!isEmailValid || !name || !password) {
      return res.status(401)
    }

    const createdUser = await createUserRepository({ email, name, password })

    return res.status(200).json(createdUser)
  },
  async authenticate(req: Request, res: Response) {
    const { email, password } = req.body

    const isEmailValid = emailValidator(email)
    if (!isEmailValid) {
      return res.status(401)
    }


    const [userInDataBase] = await findUserByEmailRepository(email)

    if (!userInDataBase) {
      return res.status(401)
    }

    const isPasswordCorrect = bcrypt.compareSync(password, userInDataBase.password)

    if (!isPasswordCorrect) {
      return res.status(401)
    }

    await jwt.sign({ id: userInDataBase.id }, secret, { expiresIn: '2h' }, (error, token) => {
      if (error) return res.status(500)

      return res.status(200).json({ token: token })
    })
  }
}