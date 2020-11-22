import { Request, Response } from 'express'

import db from '../database/connection'
import { convertHourToMinutes } from '../utils/helpers/'
import { createClass, getBySubjectOrTime } from '../repositories/classes'

export default {
	async index(req: Request, res: Response) {
		const filters = req.query

		const subject = filters.subject as string
		const start = filters.start as string
		const end = filters.end as string
		try {
			const startInMinutes = start ? convertHourToMinutes(start) : undefined
			const endInMinutes = end ? convertHourToMinutes(end) : undefined

			const classes = await getBySubjectOrTime({
				subject,
				start: startInMinutes,
				end: endInMinutes,
			})

			return res.json(classes)
		} catch (error) {
			return res.status(500).json({ message: error.message })
		}
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
