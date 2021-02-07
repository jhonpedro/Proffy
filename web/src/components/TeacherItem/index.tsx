import React, { useState } from 'react'
import api from '../../services/axios'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'
import scheduleArrow from '../../assets/images/icons/schedule-arrow.svg'

// import './styles.css'

import {
	TeacherItemContainer,
	Header,
	Paragraph,
	Footer,
	SchedulesContainer,
	ScheduleItem,
} from './styles'

export interface Teacher {
	id: number
	name: string
	avatar: string
	whatsapp: string
	bio: string
	subject: string
	cost: number
}

interface TeacherItemProps {
	teacher: Teacher
	schedule: Schedule[]
}

interface Schedule {
	week_day: number
	start: string
	end: string
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher, schedule }) => {
	const [scheduleDays] = useState<Array<Schedule>>(() => {
		const days = new Array<Schedule>(7)

		for (let i = 0; i < 7; i++) {
			days[i] = {} as Schedule
		}
		for (let i = 0; i < 7; i++) {
			if (schedule[i]) {
				if (schedule[i].week_day + '') {
					days[schedule[i].week_day] = schedule[i]
					continue
				}
			}
		}

		return days
	})

	function getDayOfWeekBasedOnNumberGiven(number: number): string {
		switch (number) {
			case 0:
				return 'Domingo'
			case 1:
				return 'Segunda'
			case 2:
				return 'Terça'
			case 3:
				return 'Quarta'
			case 4:
				return 'Quinta'
			case 5:
				return 'Sexta'
			case 6:
				return 'Sábado'
			default:
				return 'Dia inexistente'
		}
	}

	function createNewConnection() {
		api.post('/connections', {
			user_id: teacher.id,
		})
	}

	return (
		<TeacherItemContainer>
			<Header>
				<img src={teacher.avatar} alt={teacher.name} />
				<div>
					<strong>{teacher.name}</strong>
					<span>{teacher.subject}</span>
				</div>
			</Header>
			<Paragraph>{teacher.bio}</Paragraph>
			<SchedulesContainer>
				<div className='schedule-strong-box'></div>
				{scheduleDays.map((day, index) => {
					return (
						<ScheduleItem
							key={index}
							hasTime={day.start && day.end ? true : false}
						>
							<strong className='week_day'>
								{getDayOfWeekBasedOnNumberGiven(index)}
							</strong>
							<img src={scheduleArrow} alt='Dia/Horário' />
							<strong className='time'>
								{day.start && day.end
									? `${day.start ? day.start + 'h' : ''} - ${
											day.end ? day.end + 'h' : ''
									  }`
									: 'Sem horário'}
							</strong>
						</ScheduleItem>
					)
				})}
			</SchedulesContainer>
			<Footer>
				<p>
					Preço/Hora
					<strong>R$ {teacher.cost}</strong>
				</p>
				<a
					target='_blank'
					rel='noopener noreferrer'
					href={`https://api.whatsapp.com/send?phone=55${teacher.whatsapp}&text=Ol%C3%A1%20Professor%2C%20estou%20interessado%20em%20estudar%20com%20voc%C3%AA!`}
					onClick={createNewConnection}
				>
					<img src={whatsappIcon} alt='WhatsApp' />
					Entrar em contato
				</a>
			</Footer>
		</TeacherItemContainer>
	)
}

export default TeacherItem
