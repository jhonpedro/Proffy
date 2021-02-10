import React, { useState, FormEvent, useEffect } from 'react'
import api from '../../services/axios'
import { NewUsersClass } from '../../../../backend/src/utils/helpers/formatClasses'

import PageHeader from '../../components/PageHeader'

import TeacherItem, { Teacher } from '../../components/TeacherItem'
import Select from '../../components/Select'

import { PageTeacherList, Form, Main } from './styles'
import SimpleInput from '../../components/SimpleInput'

// import './styles.css'

function TeacherList() {
	const [proffys, setProffys] = useState<NewUsersClass[]>([])

	const [subject, setSubject] = useState('')
	const [week_day, setWeekDay] = useState('')
	const [time, setTime] = useState('')

	useEffect(() => {
		api.get('/classes').then((response) => {
			setProffys(response.data)
		})
	}, [])

	async function handleSubmit(event: FormEvent) {
		event.preventDefault()

		const response = await api.get(
			`/classes?subject=${subject}&start=${time}&week_day=${week_day}`
		)
		setProffys(response.data)
	}

	return (
		<PageTeacherList className='container'>
			<PageHeader
				middleTitleText='Estudar'
				description='Aqui você pode pesquisar por professores e visualizar seus horários de atendimento'
				title='Estes são os proffys disponíveis.'
			>
				<Form onSubmit={handleSubmit}>
					<Select
						name='subject'
						label='Matéria'
						value={subject}
						onChange={(event) => setSubject(event.target.value)}
						options={[
							{ value: 'Artes', label: 'Artes' },
							{ value: 'Biologia', label: 'Biologia' },
							{ value: 'Ciência', label: 'Ciência' },
							{ value: 'Educação física', label: 'Educação física' },
							{ value: 'Física', label: 'Física' },
							{ value: 'Geografia', label: 'Geografia' },
							{ value: 'História', label: 'História' },
							{ value: 'Português', label: 'Português' },
							{ value: 'Matemática', label: 'Matemática' },
							{ value: 'Química', label: 'Química' },
							{ value: 'Filosofia', label: 'Filosofia' },
							{ value: 'Inglês', label: 'Inglês' },
							{ value: 'Espanhol', label: 'Espanhol' },
						]}
					/>

					<Select
						name='week_day'
						label='Dia da semana'
						value={week_day}
						onChange={(event) => setWeekDay(event.target.value)}
						options={[
							{ value: 'null', label: 'Selecione' },
							{ value: '0', label: 'Domingo' },
							{ value: '1', label: 'Segunda-feira' },
							{ value: '2', label: 'Terça-feira' },
							{ value: '3', label: 'Quarta-feira' },
							{ value: '4', label: 'Quinta-feira' },
							{ value: '5', label: 'Sexta-feira' },
							{ value: '6', label: 'Sábado' },
						]}
					/>

					<SimpleInput
						type='time'
						name='time'
						label='Hora'
						value={time}
						onChange={(event) => setTime(event.target.value)}
					/>

					<button type='submit'>Buscar</button>
				</Form>
			</PageHeader>

			<Main>
				{proffys.map((teacher) => {
					return (
						<TeacherItem
							key={teacher.id}
							teacher={{
								id: teacher.id,
								name: teacher.name,
								whatsapp: teacher.whatsapp,
								avatar: teacher.photo,
								bio: teacher.biography,
								subject: teacher.subject,
								cost: Number(teacher.cost),
							}}
							schedule={teacher.schedule}
						/>
					)
				})}
			</Main>
		</PageTeacherList>
	)
}

export default TeacherList
