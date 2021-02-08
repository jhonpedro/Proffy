import Database from '../../database/connection'
import { formatUsersClasses } from '../../utils/helpers/formatClasses'

export interface UsersClasses
	extends Array<{
		user_id: number
		id: number
		name: string
		last_name: string
		whatsapp: string
		photo: string
		biography: string
		subject: string
		cost: string
		week_day: number
		start: number
		end: number
	}> {}

interface PropsGetBySubjectOrTime {
	subject?: string
	start?: number
	end?: number
}

export default async function getBySubjectOrTime({
	subject,
	start,
	end,
}: PropsGetBySubjectOrTime) {
	const query = Database('classes')
	query.innerJoin('users as us', 'classes.user_id', 'us.id')
	query.rightJoin('classes_schedule as cs', 'classes.id', 'cs.class_id')
	if (subject) {
		query.where('classes.subject', '=', subject)
	}
	if (start && end) {
		query.whereRaw('cs.start >= ??', [start])
		query.whereRaw('cs.end >= ??', [end])
	} else if (start) {
		query.whereRaw('cs.start >= ??', [start])
		query.whereRaw('cs.end <= 1499')
	} else if (end) {
		query.whereRaw('cs.start >= 0')
		query.whereRaw('cs.end <= ??', [end])
	} else {
		query.whereRaw('cs.start >= 0')
		query.whereRaw('cs.end <= 1499')
	}

	query.orderBy('classes.id', 'desc')

	const response: UsersClasses = await query.select([
		'us.name',
		'us.last_name',
		'us.whatsapp',
		'us.photo',
		'classes.biography',
		'classes.subject',
		'classes.cost',
		'classes.id',
		'classes.user_id',
		'cs.week_day',
		'cs.start',
		'cs.end',
	])

	return formatUsersClasses(response)
}
