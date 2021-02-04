import { UserClasses } from '../../repositories/classes/getUserClassesById'

interface NewUserClass {
	id: number
	biography: string
	subject: string
	cost: string
	schedule: Schedule[]
}

interface Schedule {
	week_day: number
	start: number
	end: number
}

function checkIfUserClassesIdIsInArray(
	userClasses: NewUserClass[],
	id: number
) {
	let flag = false
	userClasses.forEach((userClass) => {
		if (userClass.id === id) {
			flag = true
		}
	})

	return flag
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
				if (userClass.id === secondUserClass.id) {
					newUserClass.schedule.push({
						week_day: secondUserClass.week_day,
						start: secondUserClass.start,
						end: secondUserClass.end,
					})
				}
			})

			userClassesFormated.push(newUserClass)
		}
	})
	return userClassesFormated
}
