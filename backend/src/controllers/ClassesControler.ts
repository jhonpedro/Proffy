import { Request, Response } from 'express'

import { convertHourToMinutes } from '../utils/helpers/'
import {
	createClass,
	getBySubjectOrTime,
	getUserClassesById,
} from '../repositories/classes'

export default {
	async index(req: Request, res: Response) {
		const filters = req.query

		const subject = filters.subject as string
		const start = filters.start as string
		const week_day = filters.week_day as string

		try {
			const startInMinutes = start ? convertHourToMinutes(start) : undefined

			const classes = await getBySubjectOrTime({
				subject,
				week_day: Number(week_day),
				start: startInMinutes,
			})

			return res.json(classes)
		} catch (error) {
			return res.status(500).json({ message: error.message })
		}
	},

	async show(req: Request, res: Response) {
		const userId = req.user.id

		const userClasses = await getUserClassesById(Number(userId))

		return res.status(200).json(userClasses)
	},

	async create(req: Request, res: Response) {
		const { biography, subject, cost, schedule } = req.body

		if (!biography || !subject || !cost || !schedule) {
			return res.status(400).json({ error: 'Missing params' })
		}

		const user_id = req.user.id

		try {
			const wasClassSavedSuccesfully = await createClass({
				user_id,
				biography,
				subject,
				cost,
				schedule,
			})

			if (!wasClassSavedSuccesfully) {
				throw new Error('error in class creation')
			}

			return res.sendStatus(201)
		} catch (error) {
			return res.status(400).json({ error: error.message })
		}
	},
}
