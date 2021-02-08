import { UserClasses } from '../../repositories/classes/getUserClassesById'
import { UsersClasses } from '../../repositories/classes/getBySubjectOrTime'
import convertMinuteToHours from './convertMinuteToHour'

export interface NewUserClass {
	id: number
	biography: string
	subject: string
	cost: string
	schedule: Schedule[]
}

export interface NewUsersClass {
	id: number
	name: string
	last_name: string
	whatsapp: string
	photo: string
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

//This function formats from one especific user
export function formatUserClasses(
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
				if (userClass.id === secondUserClass.id) {
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

//This function formats from different users
export function formatUsersClasses(
	userClasses: UsersClasses
): Array<NewUsersClass> {
	const userClassesFormated: NewUsersClass[] = []

	userClasses.forEach((userClass) => {
		if (!checkIfUserClassesIdIsInArray(userClassesFormated, userClass.id)) {
			const newUserClass = {
				id: userClass.id,
				name: userClass.name,
				last_name: userClass.last_name,
				whatsapp: userClass.whatsapp,
				photo: `http://${process.env.SERVER_IP}:${process.env.SERVER_PORT}/photo/${userClass.photo}`,
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
