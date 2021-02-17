import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'
import multer from 'multer'
import sharp from 'sharp'
import { resolve } from 'path'
import fs from 'fs'

import { emailValidator } from '../utils/helpers'
import {
	findUserByEmailRepository,
	createUserRepository,
	changeUserPasswordRepository,
	findUserPhoto,
	changeUserPhoto,
	updateUser,
} from '../repositories/User'
import {
	createForgotPassword_tokenRepository,
	removeForgotPassword_tokenRepository,
	searchForgotPassword_tokenRepository,
} from '../repositories/forgotPassword_token'
import { InvalidParamError } from '../utils/errors'
import uploadConfig from '../config/upload'

const secret = process.env.JWT_SECRET as string
const upload = multer(uploadConfig).single('photo')

export default {
	async store(req: Request, res: Response) {
		const { name, last_name, email, password } = req.body

		try {
			const isEmailValid = emailValidator(email)

			if (!isEmailValid || !name || !password || password.length < 6) {
				throw new InvalidParamError('Email, name or password')
			}

			const salt = bcrypt.genSaltSync()
			const encryptedPassword = bcrypt.hashSync(password, salt)

			const createdUser = await createUserRepository({
				name,
				last_name,
				email: email.toLowerCase(),
				password: encryptedPassword,
			})

			return res.status(200).json(createdUser)
		} catch (error) {
			console.log(error)
			return res.status(401)
		}
	},

	async update(req: Request, res: Response) {
		const name = req.body.name as string
		const last_name = req.body.last_name as string
		const whatsapp = req.body.whatsapp as string

		if (!name || !last_name || !whatsapp) {
			return res.status(400).json({ message: 'Missing params' })
		}

		try {
			await updateUser({ name, last_name, whatsapp, id: +req.user.id })
			return res.sendStatus(200)
		} catch (error) {
			console.log(error)
			return res.sendStatus(500)
		}
	},

	async show(req: Request, res: Response) {
		const { email } = req.params

		try {
			const {
				name,
				last_name,
				whatsapp,
				photo,
			} = await findUserByEmailRepository(email)
			const user = {
				name,
				last_name,
				whatsapp,
				photo,
			}

			return res.status(200).json(user)
		} catch (error) {
			console.log(error)
			return res.sendStatus(404)
		}
	},

	async updatePhoto(req: Request, res: Response) {
		return upload(req, res, async (error: any) => {
			if (error) {
				return res.status(403).json({
					message: 'Error in file upload',
				})
			}

			const id = +req.user.id

			try {
				await sharp(req.file.path)
					.resize(180, 180)
					.toFile(
						resolve(
							__dirname,
							'..',
							'..',
							'uploads',
							'resized',
							`${req.file.filename}`
						)
					)

				fs.unlinkSync(req.file.path)

				const { photo: userPhotoName } = await findUserPhoto(id)

				fs.unlink(
					resolve(
						__dirname,
						'..',
						'..',
						'uploads',
						'resized',
						`${userPhotoName}`
					),
					async (err) => {
						await changeUserPhoto(id, req.file.filename)

						const { photo: newPhotoName } = await findUserPhoto(id)

						const newPhotoPath = `http://${process.env.SERVER_IP}:${process.env.SERVER_PORT}/photo/${newPhotoName}`
						return res.status(200).json({ photo: newPhotoPath })
					}
				)
			} catch (error) {
				console.log(error)
				return res.sendStatus(400)
			}
		})
	},

	async forgotPasswordEmail(req: Request, res: Response) {
		const { email } = req.body

		try {
			const isEmailValid = emailValidator(email)

			if (!isEmailValid) {
				throw new InvalidParamError('Email')
			}

			const { id } = await findUserByEmailRepository(email)

			if (!id) {
				return res.status(401)
			}

			jwt.sign(
				{ id: id },
				secret,
				{ expiresIn: '1h' },
				async (error, token: any) => {
					if (error) return res.status(500)

					await createForgotPassword_tokenRepository({
						user_id: id,
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
			const {
				id,
				name,
				last_name,
				photo,
				whatsapp,
				password: passwordInDataBase,
			} = await findUserByEmailRepository(email)

			const user = { id, name, last_name, photo, whatsapp }

			user.photo = `http://${process.env.SERVER_IP}:${process.env.SERVER_PORT}/photo/${photo}`

			if (!id || !passwordInDataBase) {
				throw new InvalidParamError('No user found')
			}

			const isPasswordCorrect = bcrypt.compareSync(password, passwordInDataBase)

			if (!isPasswordCorrect) {
				throw new InvalidParamError('Password incorrect')
			}

			jwt.sign({ id }, secret, { expiresIn: '2h' }, (error, token) => {
				if (error) return res.sendStatus(500)

				return res.status(200).json({ token, user })
			})
		} catch (error) {
			return res.status(400).json({ message: 'user probably dont exist' })
		}
	},
}
