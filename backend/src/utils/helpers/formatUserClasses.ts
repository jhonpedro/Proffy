import { UserClasses } from '../../repositories/classes/getUserClassesById'
import convertMinuteToHours from './convertMinuteToHour'

export interface NewUserClass {
	id: number
	biography: string
	subject: string
	cost: string
	schedule: Schedule[]
}

interface Schedule {
	week_day: number
	start: string
	end: string
}

function checkIfUserClassesIdIsInArray(
	userClasses: NewUserClass[],
	id: number
) {
	return userClasses.some((userClass) => {
		return userClass.id === id
	})
}

export default function formatUserClasses(
	userClasses: UserClasses
): Array<NewUserClass> {
	const userClassesFormated: NewUserClass[] = []

	userClasses.forEach((userClass) => {
		if (!checkIfUserClassesIdIsInArray(userClassesFormated, userClass.id)) {
			const newUserClass = {
				id: userClass.id,
				subject: userClass.subject,
				biography: userClass.biography,
				cost: userClass.cost,
				schedule: ([] as unknown) as Array<Schedule>,
			}

			userClasses.forEach((secondUserClass) => {
				if (
					userClass.id === secondUserClass.id &&
					userClass.user_id === secondUserClass.user_id
				) {
					newUserClass.schedule.push({
						week_day: secondUserClass.week_day,
						start: convertMinuteToHours(secondUserClass.start),
						end: convertMinuteToHours(secondUserClass.end),
					})
				}
			})

			userClassesFormated.push(newUserClass)
		}
	})
	return userClassesFormated
}
