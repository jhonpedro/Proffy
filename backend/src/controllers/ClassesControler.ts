import { Request, Response } from 'express'

import db from '../database/connection'
import { convertHourToMinutes } from '../utils/helpers'

interface ScheduleItem {
  week_day: number,
  from: string,
  to: string
}

export default {
  async index(req: Request, res: Response) {
    const filters = req.query

    const week_day = filters.week_day as string
    const subject = filters.subject as string
    const time = filters.time as string

    if (!week_day || !subject || !time) {
      return res.status(400).json({ error: "Invalid params to search classes" })
    }

    const timeInMinutes = convertHourToMinutes(time)

    const classes = await db('classes')
      .whereExists(function () {
        this.select('class_schedule.*')
          .from('class_schedule')
          .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
          .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
          .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes])
      })
      .where('classes.subject', '=', subject)
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['users.*', 'classes.*'])

    return res.json(classes)
  },

  async create(req: Request, res: Response) {
    const {
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule
    } = req.body

    if (!name || !whatsapp || !bio || !subject || !cost || !schedule) {
      return res.status(400).json({ error: "Missing params" })
    }

    const trx = await db.transaction()

    try {
      const insertedUserIds = await trx('users').insert({
        name,
        avatar,
        whatsapp,
        bio
      })

      const user_id = insertedUserIds[0]

      const insertedClassesId = await trx('classes').insert({
        subject,
        cost,
        user_id
      })

      const class_id = insertedClassesId[0]

      const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: ConvertHourToMinute(scheduleItem.from),
          to: ConvertHourToMinute(scheduleItem.to)
        }
      })

      await trx('class_schedule').insert(classSchedule)

      await trx.commit()

      return res.sendStatus(201)

    } catch (error) {
      await trx.rollback()
      return res.status(400).json({ error: error.message, where: "In route of class creation" })

    }
  }
}