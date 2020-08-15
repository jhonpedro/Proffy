import { Request, Response } from 'express'
import Database from '../database/connection'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { emailValidator } from '../utils'

export default {
  async authenticate(req: Request, res: Response) {
    const { email, password } = req.body

    const isEmailValid = emailValidator(email)
    if (!isEmailValid) {
      return res.status(401)
    }

    const [userInDataBase] = await Database('user').select().where({ email })

    if (!userInDataBase) {
      return res.status(401)
    }

    const isPasswordCorrect = bcrypt.compareSync(password, userInDataBase.password)

    if (!isPasswordCorrect) {
      return res.status(401)
    }

    jwt.sign({ id: userInDataBase.id }, 'JWTSECRET', { expiresIn: '2h' }, (error, token) => {
      if (error) return res.status(500)

      return res.status(200).json({ token: token })
    })
  }
}