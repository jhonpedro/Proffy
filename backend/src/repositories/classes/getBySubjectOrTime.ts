import Database from '../../database/connection'

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
	const response = Database('classes')
	response.innerJoin('users as us', 'classes.user_id', 'us.id')
	response.rightJoin('classes_schedule as cs', 'classes.id', 'cs.class_id')
	if (subject) {
		response.where('classes.subject', '=', subject)
	}
	if (start && end) {
		response.whereRaw('cs.start >= ??', [start])
		response.whereRaw('cs.end >= ??', [end])
	} else if (start) {
		response.whereRaw('cs.start >= ??', [start])
		response.whereRaw('cs.end <= 1499')
	} else if (end) {
		response.whereRaw('cs.start >= 0')
		response.whereRaw('cs.end <= ??', [end])
	} else {
		response.whereRaw('cs.start >= 0')
		response.whereRaw('cs.end <= 1499')
	}
	console.log(start, end)
	return await response.select([
		'us.name',
		'us.last_name',
		'us.whatsapp',
		'classes.biography',
		'classes.subject',
		'classes.cost',
		'cs.week_day',
		'cs.start',
		'cs.end',
	])
}
