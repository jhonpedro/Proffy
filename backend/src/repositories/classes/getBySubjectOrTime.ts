import Database from '../../database/connection'
import formatUserClasses from '../../utils/helpers/formatUserClasses'

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

	const response = await query.select([
		'us.name',
		'us.last_name',
		'us.whatsapp',
		'classes.biography',
		'classes.subject',
		'classes.cost',
		'classes.id',
		'classes.user_id',
		'cs.week_day',
		'cs.start',
		'cs.end',
	])

	return formatUserClasses(response)
}
