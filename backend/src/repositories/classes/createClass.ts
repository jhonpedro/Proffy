import Database from '../../database/connection'
import { convertHourToMinutes } from '../../utils/helpers'

interface PropsCreateClass {
	user_id: string
	biography: string
	subject: string
	cost: string
	schedule: Array<ScheduleItem>
}
interface ScheduleItem {
	week_day: number
	start: string
	end: string
}
export default async function createClass({
	user_id,
	biography,
	subject,
	cost,
	schedule,
}: PropsCreateClass) {
	const trx = await Database.transaction()

	try {
		const insertedClassesId = await trx('classes')
			.insert({
				subject,
				cost,
				biography,
				user_id,
			})
			.returning('id')

		const class_id = insertedClassesId[0]

		const classSchedule = schedule.map((scheduleItem: ScheduleItem) => {
			return {
				class_id,
				week_day: scheduleItem.week_day,
				start: convertHourToMinutes(scheduleItem.start),
				end: convertHourToMinutes(scheduleItem.end),
			}
		})

		await trx('classes_schedule').insert(classSchedule)

		await trx.commit()

		return true
	} catch (error) {
		await trx.rollback()
		return false
	}
}
