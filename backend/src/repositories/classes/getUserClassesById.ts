import Database from '../../database/connection'
import { formatUserClasses } from '../../utils/helpers/formatClasses'

export interface UserClasses
	extends Array<{
		user_id: number
		id: number
		biography: string
		subject: string
		cost: string
		week_day: number
		start: number
		end: number
	}> {}

export default async function getUserClassesById(id: number) {
	const userClasses: UserClasses = await Database('classes')
		.whereRaw('classes.user_id = ??', [id])
		.leftJoin('classes_schedule', 'classes.id', 'classes_schedule.class_id')
		.select([
			'classes.user_id',
			'classes.id',
			'classes.biography',
			'classes.subject',
			'classes.cost',
			'classes_schedule.week_day',
			'classes_schedule.start',
			'classes_schedule.end',
		])
		.orderBy('id', 'desc')

	const userClassesFormated = formatUserClasses(userClasses)

	return userClassesFormated
}
