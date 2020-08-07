import { Request, Response } from 'express'

import db from '../database/connection'
import ConvertHourToMinute from '../utils/convertHourToMinute'

interface ScheduleItem {
  week_day: number,
  from: string,
  to: string
}

export default {
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