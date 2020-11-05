import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'

import { emailValidator } from '../utils/helpers'
import {
	findUserByEmailRepository,
	createUserRepository,
	changeUserPasswordRepository,
} from '../repositories/User'
import {
	createForgotPassword_tokenRepository,
	removeForgotPassword_tokenRepository,
	searchForgotPassword_tokenRepository,
} from '../repositories/forgotPassword_token'
import { InvalidParamError } from '../utils/errors'

const secret = process.env.JWT_SECRET as string

export default {
	async store(req: Request, res: Response) {
		const { name, last_name, email, password } = req.body

		try {
			const isEmailValid = emailValidator(email)

			if (!isEmailValid || !name || !password) {
				throw new InvalidParamError('Email, name or password')
			}

			const salt = bcrypt.genSaltSync()
			const encryptedPassword = bcrypt.hashSync(password, salt)

			const createdUser = await createUserRepository({
				name,
				last_name,
				email,
				password: encryptedPassword,
			})

			return res.status(200).json(createdUser)
		} catch (error) {
			console.log(error)
			return res.status(401)
		}
	},

	async forgotPasswordEmail(req: Request, res: Response) {
		const { email } = req.body

		try {
			const isEmailValid = emailValidator(email)

			if (!isEmailValid) {
				throw new InvalidParamError('Email')
			}

			const userInDataBase = await findUserByEmailRepository(email)

			if (!userInDataBase) {
				return res.status(401)
			}

			jwt.sign(
				{ id: userInDataBase.id },
				secret,
				{ expiresIn: '1h' },
				async (error, token: any) => {
					if (error) return res.status(500)

					await createForgotPassword_tokenRepository({
						user_id: userInDataBase.id,
						token,
					})

					const transp = nodemailer.createTransport({
						host: 'smtp.gmail.com',
						port: 587,
						secure: false,
						auth: {
							user: process.env.EMAIL_USER,
							pass: process.env.EMAIL_PASSWORD,
						},
					})

					transp
						.sendMail({
							from: `Proffy app <${process.env.EMAIL_USER}>`,
							to: email,
							subject: 'Redefinição de senha Profyy',
							text: `
            Aqui está o link para a redefinição da sua senha Proffy: \n 

            http://localhost:3000/change-password/${token}
          `,
						})
						.then((data) => {
							return res.sendStatus(200)
						})
				}
			)
		} catch (error) {
			console.log(error)
			return res.status(401)
		}
	},

	async forgotPasswordChange(req: Request, res: Response) {
		const { token, newPassword } = req.body

		try {
			const tokenPayload: any = jwt.verify(token, secret)
			const salt = bcrypt.genSaltSync()
			const encryptedPassword = bcrypt.hashSync(newPassword, salt)

			const tokenInDatabase = await searchForgotPassword_tokenRepository({
				user_id: tokenPayload.id,
			})

			if (!tokenInDatabase) {
				throw new Error('No token found in database')
			}

			const updatedUser = await changeUserPasswordRepository({
				id: tokenPayload.id,
				password: encryptedPassword,
			})
			await removeForgotPassword_tokenRepository({ user_id: tokenPayload.id })

			return res.sendStatus(200)
		} catch (error) {
			console.log(error)
			return res.status(401).json({ error: 'token verification failed' })
		}
	},

	async session(req: Request, res: Response) {
		const { email, password } = req.body

		try {
			const isEmailValid = await emailValidator(email)
			if (!isEmailValid) {
				throw new InvalidParamError('Email')
			}
			const userInDataBase = await findUserByEmailRepository(email)

			if (!userInDataBase) {
				throw new InvalidParamError('No user found')
			}

			const isPasswordCorrect = bcrypt.compareSync(
				password,
				userInDataBase.password
			)

			if (!isPasswordCorrect) {
				throw new InvalidParamError('Password incorrect')
			}

			jwt.sign(
				{ id: userInDataBase.id },
				secret,
				{ expiresIn: '2h' },
				(error, token) => {
					if (error) return res.status(500)

					return res.status(200).json({ token: token })
				}
			)
		} catch (error) {
			console.log(error)
			return res.status(401)
		}
	},
}
