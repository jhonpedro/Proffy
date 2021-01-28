import React, { useState } from 'react'
import api from '../../services/axios'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

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
}

interface Schedule {
	week_day: number
	start: number
	end: number
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
	const scheduleTest = [
		{
			week_day: 0,
			start: 8,
			end: 12,
		},
	]
	const [scheduleDays, setSchedulesDays] = useState<Array<Schedule>>(() => {
		const days = new Array()

		for (let i = 0; i < 7; i++) {
			if (scheduleTest[i]) {
				if (scheduleTest[i].week_day == i) {
					days.push(scheduleTest[i])
					continue
				}
			}
			days.push([{}])
		}

		return days
	})

	function getDayOfWeekBasedOnNumberGiven(number: number): string {
		switch (number) {
			case 0:
				return 'Segunda-feira'
			case 1:
				return 'Terça-feira'
			case 2:
				return 'Quarta-feira'
			case 3:
				return 'Quinta-feira'
			case 4:
				return 'Sexta-feira'
			case 5:
				return 'Sábado'
			case 6:
				return 'Domingo'
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
							hasTime={day.start & day.end ? true : false}
						>
							<strong className='week_day'>
								{getDayOfWeekBasedOnNumberGiven(index)}
							</strong>
							<strong className='time'>
								{day.start & day.end
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
					href={`https://api.whatsapp.com/send?phone=${teacher.whatsapp}`}
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
