import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'

import { emailValidator } from '../utils'
import { findUserByEmailRepository, createUserRepository, changeUserPasswordRepository } from '../repositories'

const secret = process.env.JWT_SECRET as string

export default {
  async create(req: Request, res: Response) {
    const { name, last_name, email, password } = req.body

    const isEmailValid = emailValidator(email)

    if (!isEmailValid || !name || !password) {
      return res.status(401)
    }

    const salt = bcrypt.genSaltSync()
    const encryptedPassword = bcrypt.hashSync(password, salt)

    const createdUser = await createUserRepository({ name, last_name, email, password: encryptedPassword })

    return res.status(200).json(createdUser)
  },

  async forgotPasswordEmail(req: Request, res: Response) {
    const { email } = req.body

    const isEmailValid = emailValidator(email)

    if (!isEmailValid) {
      return res.status(401)
    }

    const userInDataBase = await findUserByEmailRepository(email)

    if (!userInDataBase) {
      return res.status(401)
    }

    jwt.sign({ id: userInDataBase.id }, secret, { expiresIn: '1h' }, (error, token) => {
      if (error) return res.status(500)

      const transp = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD
        }
      })

      transp.sendMail({
        from: 'Proffy app <proffyapp@gmail.com>',
        to: email,
        subject: 'Redefinição de senha Profyy',
        text: `
          Aqui está o link para a redefinição da sua senha Proffy: \n 

          http://localhost:3000/change-password/${token}
        `
      }).then(data => {
        console.log(data)
        return res.sendStatus(200)
      })

    })
  },

  async forgotPasswordChange(req: Request, res: Response) {
    const { token, newPassword } = req.body

    try {
      const tokenPayload: any = jwt.verify(token, secret)
      const updatedUser = await changeUserPasswordRepository(tokenPayload.id, newPassword)

      return res.status(200).json(updatedUser)
    } catch (error) {
      console.log(error)
      return res.status(401).json({ error: "token verification failed" })
    }
  },

  async authenticate(req: Request, res: Response) {
    const { email, password } = req.body

    const isEmailValid = await emailValidator(email)
    if (!isEmailValid) {
      return res.status(401)
    }
    const userInDataBase = await findUserByEmailRepository(email)

    if (!userInDataBase) {
      return res.status(401)
    }

    const isPasswordCorrect = bcrypt.compareSync(password, userInDataBase.password)

    if (!isPasswordCorrect) {
      return res.status(401)
    }

    jwt.sign({ id: userInDataBase.id }, secret, { expiresIn: '2h' }, (error, token) => {
      if (error) return res.status(500)

      return res.status(200).json({ token: token })
    })
  }
}